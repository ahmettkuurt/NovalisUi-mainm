import {
  ArrowRight,
  BadgeCheck,
  Sparkles,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { cleaningServices } from '../services/cleaningServices';

import {
  AllServicesLink,
  ServiceCard,
  ServiceContent,
  ServiceDescription,
  ServiceImage,
  ServiceImageContainer,
  ServiceImageOverlay,
  ServicesContainer,
  ServicesDescription,
  ServicesGrid,
  ServicesHeader,
  ServicesHeading,
  ServicesInfoBadge,
  ServicesInfoCard,
  ServicesInfoText,
  ServicesInfoTop,
  ServicesLabel,
  ServicesSection,
  ServicesStat,
  ServicesStats,
  ServicesTitle,
  ServiceTitle,
} from '../pages/CleaningServicesStyles';

function CleaningServices() {
  const { t } = useTranslation();

  return (
    <ServicesSection
      as="section"
      aria-labelledby="cleaning-services-title"
    >
      <ServicesContainer>
        <ServicesHeader>
          <ServicesHeading>
            <ServicesLabel>
              <Sparkles
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />

              {t('cleaningServices.label')}
            </ServicesLabel>

            <ServicesTitle
              as="h2"
              id="cleaning-services-title"
            >
              {t('cleaningServices.title.first')}
              <br />

              {t('cleaningServices.title.second')}
              <br />

              <span>
                {t('cleaningServices.title.highlight')}
              </span>
            </ServicesTitle>

            <ServicesDescription as="p">
              {t('cleaningServices.description')}
            </ServicesDescription>
          </ServicesHeading>

          <ServicesInfoCard>
            <ServicesInfoTop>
              <ServicesInfoBadge>
                <BadgeCheck
                  size={14}
                  strokeWidth={2}
                  aria-hidden="true"
                />

                {t('cleaningServices.assurance.badge')}
              </ServicesInfoBadge>

              <ServicesInfoText>
                <strong>
                  {t('cleaningServices.assurance.title')}
                </strong>

                <span>
                  {t('cleaningServices.assurance.description')}
                </span>
              </ServicesInfoText>
            </ServicesInfoTop>

            <ServicesStats>
              <ServicesStat>
                <strong>10+</strong>

                <span>
                  {t('cleaningServices.stats.experience')}
                </span>
              </ServicesStat>

              <ServicesStat>
                <strong>5000+</strong>

                <span>
                  {t(
                    'cleaningServices.stats.completedServices',
                  )}
                </span>
              </ServicesStat>

              <ServicesStat>
                <strong>%98</strong>

                <span>
                  {t('cleaningServices.stats.satisfaction')}
                </span>
              </ServicesStat>
            </ServicesStats>

            <AllServicesLink
              as={Link}
              to="/hizmetler"
              aria-label={t(
                'cleaningServices.discoverServices',
              )}
            >
              {t('cleaningServices.discoverServices')}

              <ArrowRight
                size={17}
                strokeWidth={2}
                aria-hidden="true"
              />
            </AllServicesLink>
          </ServicesInfoCard>
        </ServicesHeader>

        <ServicesGrid>
          {cleaningServices.map((service) => (
            <ServiceCard
              as="article"
              key={service.id}
            >
              <ServiceImageContainer>
                <ServiceImage
                  src={service.image}
                  alt={t(service.titleKey)}
                  loading="lazy"
                  decoding="async"
                />

                <ServiceImageOverlay
                  aria-hidden="true"
                />
              </ServiceImageContainer>

              <ServiceContent>
                <ServiceTitle as="h3">
                  {t(service.titleKey)}
                </ServiceTitle>

                <ServiceDescription as="p">
                  {t(service.descriptionKey)}
                </ServiceDescription>
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesContainer>
    </ServicesSection>
  );
}

export default CleaningServices;