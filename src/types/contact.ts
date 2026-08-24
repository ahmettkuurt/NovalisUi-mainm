export type ContactServiceType =
  | 'ev_temizligi'
  | 'ofis_temizligi'
  | 'insaat_sonrasi'
  | 'apartman_ortak_alan';

export type ContactFrequency =
  | ''
  | 'tek_seferlik'
  | 'haftalik'
  | 'iki_haftada_bir'
  | 'aylik';

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceType: ContactServiceType | '';
  province: string;
  district: string;
  addressLine: string;
  areaSqm: string;
  roomCount: string;
  floorCount: string;
  requestedDate: string;
  preferredTime: string;
  frequency: ContactFrequency;
  extras: string[];
  message: string;
  serviceConsent: boolean;
  marketingConsent: boolean;
}

export interface ContactRequestResponse {
  success: boolean;
  requestId?: string;
  message: string;
}
