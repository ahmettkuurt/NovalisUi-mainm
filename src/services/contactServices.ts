import type {
  ContactFormData,
  ContactRequestResponse,
} from '../types/contact';

const DEFAULT_WEB_FORM_ENDPOINT =
  'https://otomasyon.novaliscleaning.com/webhook-test/web-form-intake-postgres';

const WEB_FORM_ENDPOINT =
  import.meta.env.VITE_WEB_FORM_ENDPOINT?.trim() ||
  DEFAULT_WEB_FORM_ENDPOINT;

const normalizePhone = (value: string) => {
  const digits = value.replace(/\D/g, '');

  if (digits.startsWith('90') && digits.length === 12) {
    return `+${digits}`;
  }

  if (digits.startsWith('0') && digits.length === 11) {
    return `+90${digits.slice(1)}`;
  }

  if (digits.length === 10) {
    return `+90${digits}`;
  }

  return value.trim();
};

const nullableNumber = (value: string) => {
  if (!value.trim()) {
    return null;
  }

  const parsedValue = Number(value);
  return Number.isFinite(parsedValue) ? parsedValue : null;
};

const buildPayload = (
  formData: ContactFormData,
  submissionId: string,
) => ({
  submission_id: submissionId,
  full_name: formData.fullName.trim(),
  phone: formData.phone.trim() ? normalizePhone(formData.phone) : null,
  email: formData.email.trim().toLowerCase() || null,
  service_code: formData.serviceType || null,
  materials_option: formData.materialsOption || null,
  materials_included:
    formData.materialsOption === 'materials_included'
      ? true
      : formData.materialsOption === 'materials_excluded'
        ? false
        : null,
  province: formData.province.trim(),
  district: formData.district.trim(),
  address_line: formData.addressLine.trim() || null,
  area_sqm: nullableNumber(formData.areaSqm),
  unit_count: nullableNumber(formData.unitCount),
  service_days: nullableNumber(formData.unitCount),
  duration_days: nullableNumber(formData.unitCount),
  room_count: nullableNumber(formData.roomCount),
  floor_count: nullableNumber(formData.floorCount),
  requested_date: formData.requestedDate || null,
  preferred_time: formData.preferredTime || null,
  frequency: formData.frequency || null,
  extras: formData.extras,
  message: formData.message.trim(),
  service_consent: formData.serviceConsent,
  marketing_consent: formData.marketingConsent,
});

const readResponse = async (response: Response) => {
  const text = await response.text();

  if (!text) {
    return {} as Record<string, unknown>;
  }

  try {
    return JSON.parse(text) as Record<string, unknown>;
  } catch {
    return { message: text };
  }
};

export const createContactRequest = async (
  formData: ContactFormData,
  submissionId: string,
): Promise<ContactRequestResponse> => {
  const payload = buildPayload(formData, submissionId);

  try {
    const response = await fetch(WEB_FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const result = await readResponse(response);

    if (!response.ok) {
      return {
        success: false,
        message:
          typeof result.message === 'string'
            ? result.message
            : 'Talebiniz gönderilemedi. Lütfen biraz sonra tekrar deneyin.',
      };
    }

    return {
      success: true,
      requestId:
        typeof result.lead_id === 'string'
          ? result.lead_id
          : undefined,
      message:
        typeof result.message === 'string'
          ? result.message
          : 'Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.',
    };
  } catch {
    return {
      success: false,
      message:
        'Bağlantı kurulamadı. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.',
    };
  }
};
