import { useState } from 'react';
import type { MouseEvent } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Maximize2,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { cleaningServices } from '../services/cleaningServices';

import {
  CtaPrimaryButton,
  CtaSecondaryButton,
  ExpandedCard,
  FeatureItem,
  FeatureList,
  HeroActions,
  HeroPrimaryButton,
  HeroSecondaryButton,
  HeroTrustPanel,
  ModalActions,
  ModalCloseButton,
  ModalContent,
  ModalDescription,
  ModalImage,
  ModalImageContainer,
  ModalOverlay,
  ModalTitle,
  PageContainer,
  SectionContainer,
  SectionDescription,
  SectionHeader,
  SectionLabel,
  SectionTitle,
  ServiceBody,
  ServiceCard,
  ServiceDescription,
  ServiceFooter,
  ServiceImage,
  ServiceImageContainer,
  ServiceLink,
  ServicesGrid,
  ServicesHero,
  ServicesSection,
  ServiceTitle,
  TrustContent,
  TrustDescription,
  TrustIcon,
  TrustItem,
  TrustPanelHeader,
  TrustPanelLabel,
  TrustPanelTitle,
  TrustTitle,
} from './ServicesPageStyles';

const WHATSAPP_URL = 'https://wa.me/905000000000';

const defaultServiceFeatureKeys = [
  'servicesPage.modal.features.professionalTeam',
  'servicesPage.modal.features.equipment',
  'servicesPage.modal.features.hygiene',
  'servicesPage.modal.features.plannedService',
];

function ServicesPage() {
  const { t } = useTranslation();

  const [activeService, setActiveService] = useState<
    (typeof cleaningServices)[number] | null
  >(null);

  const closeModal = () => {
    setActiveService(null);
  };

  const openServiceModal = (
    service: (typeof cleaningServices)[number],
  ) => {
    setActiveService(service);
  };

  const preventModalClose = (
    event: MouseEvent<HTMLDivElement>,
  ) => {
    event.stopPropagation();
  };

  return (
    <PageContainer>
      <ServicesSection>
        <SectionContainer>
          <ServicesHero>
            <SectionHeader>
              <SectionLabel>
                <Sparkles
                  size={14}
                  strokeWidth={2}
                  aria-hidden="true"
                />

                {t('servicesPage.hero.label')}
              </SectionLabel>

              <SectionTitle as="h1">
                {t('servicesPage.hero.title')}

                <span>
                  {' '}
                  {t('servicesPage.hero.highlight')}
                </span>
              </SectionTitle>

              <SectionDescription>
                {t('servicesPage.hero.description')}
              </SectionDescription>

              <HeroActions>
                <HeroPrimaryButton
                  as={Link}
                  to="/iletisim"
                >
                  {t('servicesPage.actions.getQuote')}

                  <ArrowRight
                    size={17}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </HeroPrimaryButton>

                <HeroSecondaryButton
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle
                    size={17}
                    strokeWidth={1.9}
                    aria-hidden="true"
                  />

                  {t('servicesPage.actions.whatsapp')}
                </HeroSecondaryButton>
              </HeroActions>
            </SectionHeader>

            <HeroTrustPanel>
              <TrustPanelHeader>
                <TrustPanelLabel>
                  {t('servicesPage.trust.label')}
                </TrustPanelLabel>

                <TrustPanelTitle as="h2">
                  {t('servicesPage.trust.title')}
                </TrustPanelTitle>
              </TrustPanelHeader>

              <TrustItem>
                <TrustIcon>
                  <UsersRound
                    size={19}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </TrustIcon>

                <TrustContent>
                  <TrustTitle as="h3">
                    {t(
                      'servicesPage.trust.items.expert.title',
                    )}
                  </TrustTitle>

                  <TrustDescription>
                    {t(
                      'servicesPage.trust.items.expert.description',
                    )}
                  </TrustDescription>
                </TrustContent>
              </TrustItem>

              <TrustItem>
                <TrustIcon>
                  <ShieldCheck
                    size={19}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </TrustIcon>

                <TrustContent>
                  <TrustTitle as="h3">
                    {t(
                      'servicesPage.trust.items.reliable.title',
                    )}
                  </TrustTitle>

                  <TrustDescription>
                    {t(
                      'servicesPage.trust.items.reliable.description',
                    )}
                  </TrustDescription>
                </TrustContent>
              </TrustItem>

              <TrustItem>
                <TrustIcon>
                  <Clock3
                    size={19}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </TrustIcon>

                <TrustContent>
                  <TrustTitle as="h3">
                    {t(
                      'servicesPage.trust.items.planned.title',
                    )}
                  </TrustTitle>

                  <TrustDescription>
                    {t(
                      'servicesPage.trust.items.planned.description',
                    )}
                  </TrustDescription>
                </TrustContent>
              </TrustItem>
            </HeroTrustPanel>
          </ServicesHero>

          <ServicesGrid>
            {cleaningServices.map((service) => {
              const handleServiceClick = () => {
                openServiceModal(service);
              };

              const serviceTitle = t(
                service.titleKey,
              );

              return (
                <ServiceCard
                  key={service.id}
                  type="button"
                  aria-label={t(
                    'servicesPage.serviceAriaLabel',
                    {
                      service: serviceTitle,
                    },
                  )}
                  onClick={handleServiceClick}
                >
                  <ServiceImageContainer>
                    <ServiceImage
                      src={service.image}
                      alt={serviceTitle}
                      loading="lazy"
                      decoding="async"
                    />
                  </ServiceImageContainer>

                  <ServiceBody>
                    <ServiceTitle as="h2">
                      {serviceTitle}
                    </ServiceTitle>

                    <ServiceDescription>
                      {t(service.descriptionKey)}
                    </ServiceDescription>

                    <ServiceFooter>
                      <ServiceLink>
                        {t(
                          'servicesPage.viewService',
                        )}

                        <Maximize2
                          size={14}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </ServiceLink>

                      <CheckCircle2
                        size={18}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </ServiceFooter>
                  </ServiceBody>
                </ServiceCard>
              );
            })}
          </ServicesGrid>
        </SectionContainer>
      </ServicesSection>

      {activeService && (
        <ModalOverlay
          role="presentation"
          onClick={closeModal}
        >
          <ExpandedCard
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            aria-describedby="service-modal-description"
            onClick={preventModalClose}
          >
            <ModalCloseButton
              type="button"
              aria-label={t(
                'servicesPage.modal.closeAriaLabel',
              )}
              onClick={closeModal}
            >
              <X
                size={20}
                aria-hidden="true"
              />
            </ModalCloseButton>

            <ModalImageContainer>
              <ModalImage
                src={activeService.image}
                alt={t(activeService.titleKey)}
                decoding="async"
              />
            </ModalImageContainer>

            <ModalContent>
              <ModalTitle
                as="h2"
                id="service-modal-title"
              >
                {t(activeService.titleKey)}
              </ModalTitle>

              <ModalDescription id="service-modal-description">
                {activeService.detailedDescriptionKey
                  ? t(
                      activeService.detailedDescriptionKey,
                    )
                  : t(activeService.descriptionKey)}
              </ModalDescription>

              <FeatureList>
                {(
                  activeService.featureKeys ??
                  defaultServiceFeatureKeys
                ).map((featureKey) => (
                  <FeatureItem key={featureKey}>
                    <CheckCircle2
                      size={17}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />

                    {t(featureKey)}
                  </FeatureItem>
                ))}
              </FeatureList>

              <ModalActions>
                <CtaPrimaryButton
                  as={Link}
                  to="/iletisim"
                  onClick={closeModal}
                >
                  {t('servicesPage.actions.getQuote')}
                </CtaPrimaryButton>

                <CtaSecondaryButton
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle
                    size={17}
                    aria-hidden="true"
                  />

                  WhatsApp
                </CtaSecondaryButton>
              </ModalActions>
            </ModalContent>
          </ExpandedCard>
        </ModalOverlay>
      )}
    </PageContainer>
  );
}

export default ServicesPage;