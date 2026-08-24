import {
  ArrowRight,
  Clock3,
  MessageCircle,
  Phone,
  Sparkles,
} from 'lucide-react';

import ContactWizard from './contact/ContactWizard';

import {
  ContactAction,
  ContactActionContent,
  ContactActionIcon,
  ContactActionText,
  ContactActionTitle,
  ContactDetails,
  ContactGrid,
  ContactPageContainer,
  ContactPanel,
  ContactPanelDescription,
  ContactPanelHeader,
  ContactPanelTitle,
  ContactProcess,
  ContactProcessItem,
  ContactProcessNumber,
  InfoDescription,
  InfoTitle,
  PageDescription,
  PageHeader,
  PageLabel,
  PageTitle,
  ResponseBadge,
  ResponseBadgeContent,
  ResponseBadgeText,
  ResponseBadgeTitle,
} from './ContactPageStyles';

const PHONE_NUMBER = '0500 000 00 00';
const PHONE_LINK = 'tel:+905000000000';
const WHATSAPP_LINK = 'https://wa.me/905000000000';

function ContactPage() {
  return (
    <ContactPageContainer>
      <PageHeader>
        <PageLabel>
          <Sparkles
            size={14}
            strokeWidth={2}
            aria-hidden="true"
          />

          İletişim ve Teklif
        </PageLabel>

        <PageTitle>
          Temizlik ihtiyacınızı
          <span> birlikte planlayalım.</span>
        </PageTitle>

        <PageDescription>
          İhtiyacınızı birkaç kısa adımda paylaşın.
          Ekibimiz size uygun hizmet planı ve teklif
          için en kısa sürede sizinle iletişime geçsin.
        </PageDescription>
      </PageHeader>

      <ContactGrid>
        <ContactDetails>
          <ContactPanel>
            <ContactPanelHeader>
              <PageLabel>
                <MessageCircle
                  size={14}
                  aria-hidden="true"
                />

                Hızlı İletişim
              </PageLabel>

              <ContactPanelTitle>
                Size en uygun kanaldan hemen ulaşın.
              </ContactPanelTitle>

              <ContactPanelDescription>
                Sorularınız, hizmet detayları ve fiyat
                bilgisi için ekibimizle doğrudan
                iletişime geçebilirsiniz.
              </ContactPanelDescription>
            </ContactPanelHeader>

            <ContactAction
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              $variant="primary"
            >
              <ContactActionIcon>
                <MessageCircle
                  size={22}
                  aria-hidden="true"
                />
              </ContactActionIcon>

              <ContactActionContent>
                <ContactActionTitle>
                  WhatsApp’tan yazın
                </ContactActionTitle>

                <ContactActionText>
                  Hızlı bilgi ve ön değerlendirme alın
                </ContactActionText>
              </ContactActionContent>

              <ArrowRight
                size={19}
                aria-hidden="true"
              />
            </ContactAction>

            <ContactAction
              href={PHONE_LINK}
              $variant="secondary"
            >
              <ContactActionIcon>
                <Phone
                  size={22}
                  aria-hidden="true"
                />
              </ContactActionIcon>

              <ContactActionContent>
                <ContactActionTitle>
                  {PHONE_NUMBER}
                </ContactActionTitle>

                <ContactActionText>
                  Ekibimizle doğrudan görüşün
                </ContactActionText>
              </ContactActionContent>

              <ArrowRight
                size={19}
                aria-hidden="true"
              />
            </ContactAction>

            <ResponseBadge>
              <Clock3
                size={22}
                aria-hidden="true"
              />

              <ResponseBadgeContent>
                <ResponseBadgeTitle>
                  Hızlı geri dönüş
                </ResponseBadgeTitle>

                <ResponseBadgeText>
                  Talepler çalışma saatleri içinde
                  öncelikli olarak değerlendirilir.
                </ResponseBadgeText>
              </ResponseBadgeContent>
            </ResponseBadge>

            <ContactProcess>
              <ContactProcessItem>
                <ContactProcessNumber>
                  1
                </ContactProcessNumber>

                <div>
                  <InfoTitle>
                    Talebinizi paylaşın
                  </InfoTitle>

                  <InfoDescription>
                    İhtiyacınızı birkaç kısa adımda
                    bizimle paylaşın.
                  </InfoDescription>
                </div>
              </ContactProcessItem>

              <ContactProcessItem>
                <ContactProcessNumber>
                  2
                </ContactProcessNumber>

                <div>
                  <InfoTitle>
                    Ön değerlendirme yapalım
                  </InfoTitle>

                  <InfoDescription>
                    Hizmet kapsamını ve uygun planı
                    belirleyelim.
                  </InfoDescription>
                </div>
              </ContactProcessItem>

              <ContactProcessItem>
                <ContactProcessNumber>
                  3
                </ContactProcessNumber>

                <div>
                  <InfoTitle>
                    Teklifinizi hazırlayalım
                  </InfoTitle>

                  <InfoDescription>
                    Size özel hizmet planını ve
                    fiyatlandırmayı sunalım.
                  </InfoDescription>
                </div>
              </ContactProcessItem>
            </ContactProcess>
          </ContactPanel>
        </ContactDetails>

        <ContactWizard />
      </ContactGrid>
    </ContactPageContainer>
  );
}

export default ContactPage;