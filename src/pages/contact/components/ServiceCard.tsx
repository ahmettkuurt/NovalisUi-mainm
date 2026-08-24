import {
  ArrowUpRight,
  Check,
} from 'lucide-react';

import {
  ServiceBadge,
  ServiceCardButton,
  ServiceContent,
  ServiceDescription,
  ServiceFooter,
  ServiceImage,
  ServiceImageOverlay,
  ServiceImageWrapper,
  ServiceSelectedBadge,
  ServiceTitle,
} from '../ContactWizardStyles';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  selected: boolean;
  onSelect: () => void;
}

function ServiceCard({
  image,
  title,
  description,
  selected,
  onSelect,
}: ServiceCardProps) {
  return (
    <ServiceCardButton
      type="button"
      $selected={selected}
      aria-pressed={selected}
      onClick={onSelect}
    >
      <ServiceImageWrapper>
        <ServiceImage
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
        />

        <ServiceImageOverlay />

        <ServiceBadge>
          Novalis
        </ServiceBadge>

        {selected && (
          <ServiceSelectedBadge aria-hidden="true">
            <Check
              size={17}
              strokeWidth={2.4}
            />
          </ServiceSelectedBadge>
        )}
      </ServiceImageWrapper>

      <ServiceContent>
        <ServiceTitle>
          {title}
        </ServiceTitle>

        <ServiceDescription>
          {description}
        </ServiceDescription>

        <ServiceFooter>
          <span>Hizmeti seç</span>

          <ArrowUpRight
            size={16}
            aria-hidden="true"
          />
        </ServiceFooter>
      </ServiceContent>
    </ServiceCardButton>
  );
}

export default ServiceCard;