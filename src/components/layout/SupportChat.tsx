import { useEffect, useRef, useState } from 'react';
import { Bot, Clock3, MessageCircle, Send, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import {
  ChatButton,
  ChatButtonLabel,
  ChatHeader,
  ChatHeaderIdentity,
  ChatHeaderStatus,
  ChatInput,
  ChatMessages,
  ChatPanel,
  ChatShell,
  ChatStatusDot,
  ChatSubmitButton,
  ChatSubtitle,
  ChatTitle,
  CloseButton,
  MessageBubble,
  MessageRow,
  MessageTime,
  QuickContactLink,
  QuickContactRow,
  QuickContactText,
  QuickContactTitle,
  SupportBadge,
  SupportForm,
  SupportFormHint,
} from './SupportChatStyles';

type MessageRole = 'assistant' | 'user';

type ChatMessage = {
  id: string;
  role: MessageRole;
  text: string;
  createdAt: string;
};

type ChatResponse = {
  reply?: unknown;
  message?: unknown;
  output?: unknown;
  text?: unknown;
  content?: unknown;
  data?: unknown;
};

const getResponseObject = (payload: ChatResponse | ChatResponse[]) =>
  Array.isArray(payload) ? payload[0] ?? {} : payload;

const SUPPORT_CHAT_ENDPOINT =
  import.meta.env.VITE_SUPPORT_CHAT_ENDPOINT?.trim() ||
  'https://otomasyon.novaliscleaning.com/webhook/support-chat';

const createId = () => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
};

const nowLabel = () =>
  new Intl.DateTimeFormat('tr-TR', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date());

const readResponseText = (payload: ChatResponse | ChatResponse[]) => {
  const response = getResponseObject(payload);
  const candidate =
    response.reply ??
    response.message ??
    response.output ??
    response.text ??
    response.data ??
    response.content;

  if (typeof candidate === 'string' && candidate.trim()) {
    return candidate.trim();
  }

  if (candidate && typeof candidate === 'object') {
    if ('text' in candidate && typeof candidate.text === 'string') {
      return candidate.text.trim();
    }

    if (
      'parts' in candidate &&
      Array.isArray(candidate.parts) &&
      typeof candidate.parts[0]?.text === 'string'
    ) {
      return candidate.parts[0].text.trim();
    }
  }

  return '';
};

function SupportChat() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sessionId] = useState(createId);
  const [welcomeCreatedAt] = useState(nowLabel);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  }, [messages, isSending]);

  const appendMessage = (role: MessageRole, text: string) => {
    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: createId(),
        role,
        text,
        createdAt: nowLabel(),
      },
    ]);
  };

  const submitMessage = async () => {
    const message = inputValue.trim();

    if (!message || isSending) {
      return;
    }

    appendMessage('user', message);
    setInputValue('');
    setIsSending(true);

    try {
      if (!SUPPORT_CHAT_ENDPOINT) {
        await new Promise((resolve) => window.setTimeout(resolve, 450));
        appendMessage('assistant', t('supportChat.connectionPending'));
        return;
      }

      const response = await fetch(SUPPORT_CHAT_ENDPOINT, {
        method: 'POST',
        headers: {
          // text/plain is a CORS-safelisted content type; the n8n gateway parses the JSON string.
          'Content-Type': 'text/plain;charset=UTF-8',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId,
          message,
          source: 'website',
          language: i18n.language.startsWith('tr') ? 'tr' : 'en',
        }),
      });

      const responseText = await response.text();
      let payload: ChatResponse | ChatResponse[] = {};

      try {
        payload = JSON.parse(responseText) as ChatResponse | ChatResponse[];
      } catch {
        payload = { reply: responseText };
      }

      const reply = readResponseText(payload);

      if (!response.ok || !reply) {
        throw new Error('support_chat_request_failed');
      }

      appendMessage('assistant', reply);
    } catch {
      appendMessage('assistant', t('supportChat.error'));
    } finally {
      setIsSending(false);
    }
  };

  const handleInputKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      void submitMessage();
    }
  };

  const visibleMessages: ChatMessage[] = [
    {
      id: 'welcome',
      role: 'assistant',
      text: t('supportChat.welcome'),
      createdAt: welcomeCreatedAt,
    },
    ...messages,
  ];

  return (
    <ChatShell>
      <ChatPanel
        id="support-chat-panel"
        $isOpen={isOpen}
        aria-hidden={!isOpen}
      >
        <ChatHeader>
          <ChatHeaderIdentity>
            <SupportBadge aria-hidden="true">
              <Bot size={18} strokeWidth={1.9} />
            </SupportBadge>
            <div>
              <ChatTitle>{t('supportChat.title')}</ChatTitle>
              <ChatHeaderStatus>
                <ChatStatusDot aria-hidden="true" />
                {t('supportChat.status')}
              </ChatHeaderStatus>
            </div>
          </ChatHeaderIdentity>
          <CloseButton
            type="button"
            aria-label={t('supportChat.close')}
            onClick={() => setIsOpen(false)}
            tabIndex={isOpen ? 0 : -1}
          >
            <X size={18} strokeWidth={2} />
          </CloseButton>
        </ChatHeader>

        <ChatSubtitle>{t('supportChat.subtitle')}</ChatSubtitle>

        <ChatMessages role="log" aria-live="polite">
          {visibleMessages.map((message) => (
            <MessageRow key={message.id} $role={message.role}>
              <MessageBubble $role={message.role}>
                {message.text}
                <MessageTime $role={message.role}>
                  {message.createdAt}
                </MessageTime>
              </MessageBubble>
            </MessageRow>
          ))}
          {isSending && (
            <MessageRow $role="assistant">
              <MessageBubble $role="assistant">
                <span aria-label={t('supportChat.loading')}>
                  <span className="typing-dot">•</span>{' '}
                  <span className="typing-dot">•</span>{' '}
                  <span className="typing-dot">•</span>
                </span>
              </MessageBubble>
            </MessageRow>
          )}
          <div ref={messagesEndRef} />
        </ChatMessages>

        <QuickContactRow>
          <Clock3 size={15} strokeWidth={1.8} aria-hidden="true" />
          <QuickContactText>
            <QuickContactTitle>{t('supportChat.quickTitle')}</QuickContactTitle>
            <span>{t('supportChat.quickText')}</span>
          </QuickContactText>
          <QuickContactLink href="tel:+905360310081" aria-label={t('supportChat.callUs')}>
            {t('supportChat.callUs')}
          </QuickContactLink>
        </QuickContactRow>

        <SupportForm
          onSubmit={(event) => {
            event.preventDefault();
            void submitMessage();
          }}
        >
          <ChatInput
            ref={inputRef}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder={t('supportChat.placeholder')}
            aria-label={t('supportChat.inputLabel')}
            rows={1}
            maxLength={1000}
            disabled={isSending}
            tabIndex={isOpen ? 0 : -1}
          />
          <ChatSubmitButton
            type="submit"
            aria-label={t('supportChat.send')}
            disabled={!inputValue.trim() || isSending}
            tabIndex={isOpen ? 0 : -1}
          >
            <Send size={17} strokeWidth={2} />
          </ChatSubmitButton>
        </SupportForm>
        <SupportFormHint>{t('supportChat.hint')}</SupportFormHint>
      </ChatPanel>

      <ChatButton
        type="button"
        $isOpen={isOpen}
        aria-expanded={isOpen}
        aria-controls="support-chat-panel"
        aria-label={isOpen ? t('supportChat.close') : t('supportChat.open')}
        onClick={() => setIsOpen((currentValue) => !currentValue)}
      >
        {isOpen ? <X size={20} strokeWidth={2} /> : <MessageCircle size={22} strokeWidth={1.9} />}
        <ChatButtonLabel>{t('supportChat.button')}</ChatButtonLabel>
      </ChatButton>
    </ChatShell>
  );
}

export default SupportChat;
