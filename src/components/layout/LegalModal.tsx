import { useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { legalContent } from '../../services/legalContent';
import type { LegalDocumentType } from '../../services/legalContent';
import { LegalBody, LegalCloseButton, LegalContact, LegalDialog, LegalHeader } from './LegalModalStyles';

interface LegalModalProps {
  documentType: LegalDocumentType;
  onClose: () => void;
}

export default function LegalModal({ documentType, onClose }: LegalModalProps) {
  const { i18n } = useTranslation();
  const language = i18n.language.startsWith('tr') ? 'tr' : 'en';
  const content = legalContent[language];
  const document = content.documents[documentType];
  const titleId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const pointerStartedOutside = useRef(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previouslyFocused = window.document.activeElement;
    const previousOverflow = window.document.body.style.overflow;
    dialog.showModal();
    window.document.body.style.overflow = 'hidden';
    closeRef.current?.focus({ preventScroll: true });

    return () => {
      dialog.close();
      window.document.body.style.overflow = previousOverflow;
      if (previouslyFocused instanceof HTMLElement && previouslyFocused.isConnected) {
        previouslyFocused.focus({ preventScroll: true });
      }
    };
  }, []);

  const isOutside = (x: number, y: number) => {
    const bounds = dialogRef.current?.getBoundingClientRect();
    return Boolean(bounds && (x < bounds.left || x > bounds.right || y < bounds.top || y > bounds.bottom));
  };

  return createPortal(
    <LegalDialog
      ref={dialogRef}
      lang={language}
      aria-labelledby={titleId}
      aria-modal="true"
      onKeyDown={(event) => {
        if (event.key !== 'Tab') return;
        const focusable = Array.from(event.currentTarget.querySelectorAll<HTMLElement>(
          'button:not(:disabled), a[href], [tabindex="0"]',
        ));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = window.document.activeElement;
        if (event.shiftKey && active === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && active === last) {
          event.preventDefault();
          first?.focus();
        }
      }}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onPointerDown={(event) => { pointerStartedOutside.current = isOutside(event.clientX, event.clientY); }}
      onClick={(event) => {
        if (pointerStartedOutside.current && isOutside(event.clientX, event.clientY)) onClose();
        pointerStartedOutside.current = false;
      }}
    >
      <LegalHeader>
        <div>
          <span>Novalis Cleaning</span>
          <h2 id={titleId}>{document.title}</h2>
        </div>
        <LegalCloseButton ref={closeRef} type="button" aria-label={content.close} onClick={onClose}>
          <X size={20} aria-hidden="true" />
        </LegalCloseButton>
      </LegalHeader>
      <LegalBody tabIndex={0} role="region" aria-labelledby={titleId}>
        <p>{document.intro}</p>
        {document.sections.map((section) => (
          <section key={section.title}>
            <h3>{section.title}</h3>
            <p>{section.text}</p>
          </section>
        ))}
        <LegalContact>
          {content.contact}{' '}
          <a href="mailto:info@novaliscleaning.com">info@novaliscleaning.com</a>
        </LegalContact>
      </LegalBody>
    </LegalDialog>,
    window.document.body,
  );
}
