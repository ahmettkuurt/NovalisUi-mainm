export type ContactServiceType =
  | 'Ev_Temizligi'
  | 'Ofis_Temizligi'
  | 'Insaat_Sonrasi_Temizlik'
  | 'Apartman_Ortak_Alan_Temizligi';

export type ContactMaterialsOption =
  | ''
  | 'materials_excluded'
  | 'materials_included';

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
  materialsOption: ContactMaterialsOption;
  province: string;
  district: string;
  addressLine: string;
  areaSqm: string;
  serviceDays: string;
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
