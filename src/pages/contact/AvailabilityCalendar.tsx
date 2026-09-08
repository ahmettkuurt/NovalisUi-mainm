import { useState } from 'react';
import type { Ref } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  CalendarCard,
  CalendarDay,
  CalendarFooter,
  CalendarGrid,
  CalendarHeader,
  CalendarNavButton,
  CalendarWeekday,
} from '../ContactPageStyles';

interface AvailabilityCalendarProps {
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  inputRef: Ref<HTMLDivElement>;
  availableDates: string[];
  minDate: string;
  maxDate: string;
  isLoading: boolean;
  disabled: boolean;
  hasError: boolean;
  labelledBy: string;
  describedBy: string;
}

// Yerel tarih oluştur; UTC dönüşümü nedeniyle gün kaymasını önle.
const parseDate = (value: string) => {
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day, 12);
};
const dateKey = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
const monthStart = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1, 12);
const monthLabel = new Intl.DateTimeFormat('tr-TR', { month: 'long', year: 'numeric' });
const fullLabel = new Intl.DateTimeFormat('tr-TR', {
  weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
});
const weekdays = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];

export default function AvailabilityCalendar({
  value, onChange, onBlur, inputRef, availableDates, minDate, maxDate,
  isLoading, disabled, hasError, labelledBy, describedBy,
}: AvailabilityCalendarProps) {
  const [visibleMonth, setVisibleMonth] = useState(() => monthStart(parseDate(value || minDate)));
  const firstMonth = monthStart(parseDate(minDate));
  const lastMonth = monthStart(parseDate(maxDate));
  const month = new Date(Math.min(lastMonth.getTime(), Math.max(firstMonth.getTime(), visibleMonth.getTime())));
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const offset = (month.getDay() + 6) % 7;
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const cellCount = Math.ceil((offset + daysInMonth) / 7) * 7;
  const available = new Set(availableDates);
  const blocked = disabled || isLoading;

  return (
    <CalendarCard
      ref={inputRef}
      tabIndex={-1}
      role="group"
      aria-labelledby={labelledBy}
      aria-describedby={describedBy}
      aria-busy={isLoading}
      aria-invalid={hasError}
      $hasError={hasError}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) onBlur();
      }}
    >
      <CalendarHeader>
        <CalendarNavButton
          type="button"
          aria-label="Önceki ay"
          disabled={month.getTime() <= firstMonth.getTime()}
          onClick={() => setVisibleMonth(new Date(year, monthIndex - 1, 1, 12))}
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </CalendarNavButton>
        <span aria-live="polite" aria-atomic="true">{monthLabel.format(month)}</span>
        <CalendarNavButton
          type="button"
          aria-label="Sonraki ay"
          disabled={month.getTime() >= lastMonth.getTime()}
          onClick={() => setVisibleMonth(new Date(year, monthIndex + 1, 1, 12))}
        >
          <ChevronRight size={18} aria-hidden="true" />
        </CalendarNavButton>
      </CalendarHeader>
      <CalendarGrid>
        {weekdays.map((day) => <CalendarWeekday key={day} aria-hidden="true">{day}</CalendarWeekday>)}
        {Array.from({ length: cellCount }, (_, index) => {
          const day = index - offset + 1;
          if (day < 1 || day > daysInMonth) return <span key={index} aria-hidden="true" />;
          const date = new Date(year, monthIndex, day, 12);
          const key = dateKey(date);
          const selectable = !blocked && key >= minDate && key <= maxDate && available.has(key);
          const selected = selectable && value === key;
          const state = isLoading ? 'yükleniyor' : selectable ? 'müsait' : 'seçilemez';
          return (
            <CalendarDay
              key={index}
              type="button"
              disabled={!selectable}
              $selected={selected}
              aria-pressed={selected}
              aria-label={`${fullLabel.format(date)}, ${state}`}
              onClick={() => { if (selectable) onChange(key); }}
            >
              {day}
            </CalendarDay>
          );
        })}
      </CalendarGrid>
      <CalendarFooter>
        <span>Renkli günler müsaittir. Soluk ve üzeri çizili günler seçilemez.</span>
        <strong aria-live="polite" aria-atomic="true">
          {value && !blocked && available.has(value) && value >= minDate && value <= maxDate
            ? `Seçilen tarih: ${fullLabel.format(parseDate(value))}`
            : 'Takvimden müsait bir gün seçin.'}
        </strong>
      </CalendarFooter>
    </CalendarCard>
  );
}
