import {
  BadgeCheck,
  Sparkles,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

import aboutCleaningImage from '../assets/images/dirty.png';

import {
  aboutHeroContent,
  aboutProcess,
  companyValues,
  imageHighlights,
  imageTrustContent,
  missionVision,
  storyContent,
  valuesContent,
} from '../services/aboutContent';

import {
  AboutContainer,
  AboutContent,
  AboutDescription,
  AboutEyebrow,
  AboutHero,
  AboutImage,
  AboutImageBadge,
  AboutImageBadgeItem,
  AboutImageContainer,
  AboutImageFrame,
  AboutImageInfo,
  AboutImageInfoIcon,
  AboutImageInfoText,
  AboutSection,
  AboutTextContent,
  AboutTitle,
  AboutValueCard,
  AboutValueIcon,
  AboutValues,
  AboutValueText,
  AboutValueTitle,
  MissionCard,
  MissionCards,
  MissionDescription,
  MissionIcon,
  MissionTitle,
  StatisticItem,
  StatisticsContainer,
  StoryContent,
  StoryDescription,
  StoryEyebrow,
  StorySection,
  StoryTitle,
} from './AboutPageStyles';

function AboutPage() {
  const { t } = useTranslation();

  return (
    <AboutSection>
      <AboutContainer>
        <AboutHero>
          <AboutTextContent>
            <AboutEyebrow>
              <Sparkles
                size={14}
                strokeWidth={2}
                aria-hidden="true"
              />

              {t(aboutHeroContent.eyebrowKey)}
            </AboutEyebrow>

            <AboutTitle>
              {t(aboutHeroContent.titleKey)}

              <span>
                {' '}
                {t(aboutHeroContent.highlightedTitleKey)}
              </span>
            </AboutTitle>

            <AboutDescription>
              {t(aboutHeroContent.descriptionKey)}
            </AboutDescription>

            <StatisticsContainer>
              {aboutProcess.map((step) => (
                <StatisticItem key={step.id}>
                  <strong>{step.number}</strong>

                  <span>
                    {t(step.titleKey)}
                  </span>
                </StatisticItem>
              ))}
            </StatisticsContainer>
          </AboutTextContent>

          <AboutImageContainer>
            <AboutImageFrame>
              <AboutImage
                src={aboutCleaningImage}
                alt={t('about.imageAlt')}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />

              <AboutImageBadge>
                {imageHighlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <AboutImageBadgeItem key={item.id}>
                      <Icon
                        size={16}
                        strokeWidth={2}
                        aria-hidden="true"
                      />

                      {t(item.titleKey)}
                    </AboutImageBadgeItem>
                  );
                })}
              </AboutImageBadge>
            </AboutImageFrame>

            <AboutImageInfo>
              <AboutImageInfoIcon>
                <BadgeCheck
                  size={24}
                  strokeWidth={1.9}
                  aria-hidden="true"
                />
              </AboutImageInfoIcon>

              <AboutImageInfoText>
                <strong>
                  {t(imageTrustContent.titleKey)}
                </strong>

                <span>
                  {t(imageTrustContent.descriptionKey)}
                </span>
              </AboutImageInfoText>
            </AboutImageInfo>
          </AboutImageContainer>
        </AboutHero>

        <MissionCards>
          {missionVision.map((item) => {
            const Icon = item.icon;

            return (
              <MissionCard key={item.id}>
                <MissionIcon>
                  <Icon
                    size={24}
                    strokeWidth={1.9}
                    aria-hidden="true"
                  />
                </MissionIcon>

                <MissionTitle>
                  {t(item.titleKey)}
                </MissionTitle>

                <MissionDescription>
                  {t(item.descriptionKey)}
                </MissionDescription>
              </MissionCard>
            );
          })}
        </MissionCards>

        <StorySection>
          <StoryContent>
            <StoryEyebrow>
              <Sparkles
                size={14}
                strokeWidth={2}
                aria-hidden="true"
              />

              {t(storyContent.eyebrowKey)}
            </StoryEyebrow>

            <StoryTitle>
              {t(storyContent.titleKey)}
            </StoryTitle>

            <StoryDescription>
              {t(storyContent.descriptionKey)}
            </StoryDescription>
          </StoryContent>
        </StorySection>

        <AboutContent>
          <AboutEyebrow>
            <Sparkles
              size={14}
              strokeWidth={2}
              aria-hidden="true"
            />

            {t(valuesContent.eyebrowKey)}
          </AboutEyebrow>

          <AboutTitle as="h2">
            {t(valuesContent.titleKey)}

            <span>
              {' '}
              {t(valuesContent.highlightedTitleKey)}
            </span>
          </AboutTitle>

          <AboutDescription>
            {t(valuesContent.descriptionKey)}
          </AboutDescription>

          <AboutValues>
            {companyValues.map((value) => {
              const Icon = value.icon;

              return (
                <AboutValueCard key={value.id}>
                  <AboutValueIcon>
                    <Icon
                      size={23}
                      strokeWidth={1.9}
                      aria-hidden="true"
                    />
                  </AboutValueIcon>

                  <AboutValueTitle>
                    {t(value.titleKey)}
                  </AboutValueTitle>

                  <AboutValueText>
                    {t(value.descriptionKey)}
                  </AboutValueText>
                </AboutValueCard>
              );
            })}
          </AboutValues>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
}

export default AboutPage;