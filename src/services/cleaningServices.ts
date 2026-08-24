import dirtyImage from '../assets/images/dirty.png';
import homeCleaningImage from '../assets/images/HomeCleaning.png';
import officeCleaningImage from '../assets/images/OficeCleaning.png';
import sofaCleaningImage from '../assets/images/SofaCleaning.png';
import windowCleaningImage from '../assets/images/windowCleaning.png';

import type { ContactServiceType } from '../types/contact';

export interface CleaningService {
  id: number;
  serviceType: ContactServiceType;
  titleKey: string;
  descriptionKey: string;
  image: string;
  path: string;
  detailedDescriptionKey?: string;
  featureKeys?: string[];
}

export const cleaningServices: CleaningService[] = [
  {
    id: 1,
    serviceType: 'HOME_CLEANING',
    titleKey: 'services.items.home.title',
    descriptionKey: 'services.items.home.description',
    image: homeCleaningImage,
    path: '/hizmetler/ev-temizligi',
  },
  {
    id: 2,
    serviceType: 'OFFICE_CLEANING',
    titleKey: 'services.items.office.title',
    descriptionKey: 'services.items.office.description',
    image: officeCleaningImage,
    path: '/hizmetler/ofis-temizligi',
  },
  {
    id: 3,
    serviceType: 'POST_CONSTRUCTION_CLEANING',
    titleKey: 'services.items.postConstruction.title',
    descriptionKey:
      'services.items.postConstruction.description',
    image: dirtyImage,
    path: '/hizmetler/insaat-sonrasi-temizlik',
  },
  {
    id: 4,
    serviceType: 'PERIODIC_CLEANING',
    titleKey: 'services.items.periodic.title',
    descriptionKey:
      'services.items.periodic.description',
    image: sofaCleaningImage,
    path: '/hizmetler/periyodik-temizlik',
  },
  {
    id: 5,
    serviceType: 'DEEP_CLEANING',
    titleKey: 'services.items.deep.title',
    descriptionKey: 'services.items.deep.description',
    image: windowCleaningImage,
    path: '/hizmetler/derinlemesine-temizlik',
  },
];