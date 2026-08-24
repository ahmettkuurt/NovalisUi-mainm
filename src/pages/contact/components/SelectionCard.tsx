import { Check } from 'lucide-react';

import {
  SelectionButton,
  SelectionCheck,
  SelectionContent,
  SelectionDescription,
  SelectionTitle,
} from '../ContactWizardStyles';

interface SelectionCardProps {
  title: string;
  description?: string;
  selected: boolean;
  compact?: boolean;
  onSelect: () => void;
}

function SelectionCard({
  title,
  description,
  selected,
  compact = false,
  onSelect,
}: SelectionCardProps) {
  return (
    <SelectionButton
      type="button"
      $selected={selected}
      $compact={compact}
      aria-pressed={selected}
      onClick={onSelect}
    >
      <SelectionContent>
        <SelectionTitle>
          {title}
        </SelectionTitle>

        {description && (
          <SelectionDescription>
            {description}
          </SelectionDescription>
        )}
      </SelectionContent>

      {selected && (
        <SelectionCheck aria-hidden="true">
          <Check size={15} />
        </SelectionCheck>
      )}
    </SelectionButton>
  );
}

export default SelectionCard;