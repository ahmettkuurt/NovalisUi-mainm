export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  cityDistrict: string;
  preferredDate: string;
  message: string;
  kvkkApproved: boolean;
}

export interface ContactRequestResponse {
  success: boolean;
  requestId?: string;
  message: string;
}

const REQUEST_DELAY = 1000;

export const createContactRequest = async (
  formData: ContactFormData,
): Promise<ContactRequestResponse> => {
  const requestPayload = {
    ...formData,
    fullName: formData.fullName.trim(),
    phone: formData.phone.replace(/\s/g, ''),
    email: formData.email.trim().toLowerCase(),
    cityDistrict: formData.cityDistrict.trim(),
    message: formData.message.trim(),
    source: 'WEBSITE',
    createdAt: new Date().toISOString(),
  };

  console.log('Otomasyon sistemine gönderilecek talep:', requestPayload);

  await new Promise<void>((resolve) => {
    window.setTimeout(resolve, REQUEST_DELAY);
  });

  return {
    success: true,
    requestId: crypto.randomUUID(),
    message:
      'Talebiniz başarıyla alındı. Ekibimiz en kısa sürede sizinle iletişime geçecektir.',
  };
};