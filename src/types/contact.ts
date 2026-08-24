export type ContactServiceType =
  | 'HOME_CLEANING'
  | 'OFFICE_CLEANING'
  | 'POST_CONSTRUCTION_CLEANING'
  | 'PERIODIC_CLEANING'
  | 'DEEP_CLEANING';

export type WizardStep =
  | 'service'
  | 'serviceDetails'
  | 'location'
  | 'date'
  | 'contact'
  | 'description'
  | 'summary';

export type ServiceDetailField =
  | 'roomCount'
  | 'bathroomCount'
  | 'homeExtras'
  | 'areaSize'
  | 'employeeCount'
  | 'frequency'
  | 'propertyType'
  | 'dirtLevel'
  | 'focusAreas';

export type ServiceDetailValue =
  | string
  | string[];

export type ServiceDetails = Partial<
  Record<ServiceDetailField, ServiceDetailValue>
>;

export interface ContactOption {
  value: string;
  label: string;
}

export interface ServiceDetailQuestion {
  id: string;
  field: ServiceDetailField;
  title: string;
  description: string;
  multiple?: boolean;
  optional?: boolean;
  options: ContactOption[];
}

export interface ContactFormData {
  serviceType: ContactServiceType | '';
  serviceDetails: ServiceDetails;

  cityDistrict: string;
  preferredDate: string;

  fullName: string;
  phone: string;
  email: string;

  message: string;
  kvkkApproved: boolean;
}

export interface ContactRequestResponse {
  success: boolean;
  requestId?: string;
  message: string;
}