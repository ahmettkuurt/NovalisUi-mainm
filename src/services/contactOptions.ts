import type {
  ContactServiceType,
  ServiceDetailQuestion,
} from '../types/contact';

const homeCleaningQuestions: ServiceDetailQuestion[] = [
  {
    id: 'home-room-count',
    field: 'roomCount',
    title: 'Eviniz kaç odalı?',
    description:
      'Size en yakın seçeneği seçin. Bu bilgi temizlik planını oluşturmamıza yardımcı olur.',
    options: [
      { value: '1+0', label: '1+0' },
      { value: '1+1', label: '1+1' },
      { value: '2+1', label: '2+1' },
      { value: '3+1', label: '3+1' },
      { value: '4+1', label: '4+1' },
      {
        value: '5+1_PLUS',
        label: '5+1 ve üzeri',
      },
    ],
  },
  {
    id: 'home-bathroom-count',
    field: 'bathroomCount',
    title: 'Evinizde kaç banyo var?',
    description:
      'Temizlik süresini ve ekip planlamasını doğru yapabilmemiz için banyo sayısını seçin.',
    options: [
      { value: '1', label: '1 Banyo' },
      { value: '2', label: '2 Banyo' },
      { value: '3', label: '3 Banyo' },
      {
        value: '4_PLUS',
        label: '4 ve üzeri',
      },
    ],
  },
  {
    id: 'home-extras',
    field: 'homeExtras',
    title: 'Ek olarak temizlenmesini istediğiniz alanlar var mı?',
    description:
      'İsterseniz birden fazla alan seçebilirsiniz. Bu adım zorunlu değildir.',
    multiple: true,
    optional: true,
    options: [
      {
        value: 'WINDOWS',
        label: 'Camlar',
      },
      {
        value: 'BALCONY',
        label: 'Balkon',
      },
      {
        value: 'OVEN',
        label: 'Fırın',
      },
      {
        value: 'FRIDGE',
        label: 'Buzdolabı',
      },
      {
        value: 'CABINETS',
        label: 'Dolap İçleri',
      },
    ],
  },
];

const officeCleaningQuestions: ServiceDetailQuestion[] = [
  {
    id: 'office-area-size',
    field: 'areaSize',
    title: 'Çalışma alanınızın büyüklüğü nedir?',
    description:
      'Yaklaşık metrekare bilgisi teklif planlamamız için yeterlidir.',
    options: [
      {
        value: '0_100',
        label: '0 - 100 m²',
      },
      {
        value: '100_250',
        label: '100 - 250 m²',
      },
      {
        value: '250_500',
        label: '250 - 500 m²',
      },
      {
        value: '500_1000',
        label: '500 - 1000 m²',
      },
      {
        value: '1000_PLUS',
        label: '1000 m² ve üzeri',
      },
    ],
  },
  {
    id: 'office-employee-count',
    field: 'employeeCount',
    title: 'Alanı yaklaşık kaç kişi kullanıyor?',
    description:
      'Kullanım yoğunluğu temizlik planının oluşturulmasına yardımcı olur.',
    options: [
      {
        value: '1_10',
        label: '1 - 10 kişi',
      },
      {
        value: '11_25',
        label: '11 - 25 kişi',
      },
      {
        value: '26_50',
        label: '26 - 50 kişi',
      },
      {
        value: '51_100',
        label: '51 - 100 kişi',
      },
      {
        value: '100_PLUS',
        label: '100 kişi ve üzeri',
      },
    ],
  },
  {
    id: 'office-frequency',
    field: 'frequency',
    title: 'Ne sıklıkla temizlik hizmeti almak istiyorsunuz?',
    description:
      'Çalışma düzeninize en uygun hizmet sıklığını seçin.',
    options: [
      {
        value: 'ONCE',
        label: 'Tek Seferlik',
      },
      {
        value: 'WEEKLY',
        label: 'Haftada 1',
      },
      {
        value: 'TWO_THREE_WEEKLY',
        label: 'Haftada 2 - 3',
      },
      {
        value: 'DAILY',
        label: 'Her Gün',
      },
      {
        value: 'CUSTOM',
        label: 'Özel Planlama',
      },
    ],
  },
];

const postConstructionQuestions: ServiceDetailQuestion[] = [
  {
    id: 'construction-property-type',
    field: 'propertyType',
    title: 'Temizlik yapılacak alan türü nedir?',
    description:
      'Alan türünü seçerek hizmet planının doğru oluşturulmasına yardımcı olabilirsiniz.',
    options: [
      {
        value: 'HOME',
        label: 'Ev',
      },
      {
        value: 'OFFICE',
        label: 'Ofis / İş Yeri',
      },
      {
        value: 'STORE',
        label: 'Mağaza',
      },
      {
        value: 'OTHER',
        label: 'Diğer',
      },
    ],
  },
  {
    id: 'construction-area-size',
    field: 'areaSize',
    title: 'Alan yaklaşık kaç metrekare?',
    description:
      'Kesin ölçü bilmiyorsanız size en yakın aralığı seçebilirsiniz.',
    options: [
      {
        value: '0_100',
        label: '0 - 100 m²',
      },
      {
        value: '100_250',
        label: '100 - 250 m²',
      },
      {
        value: '250_500',
        label: '250 - 500 m²',
      },
      {
        value: '500_PLUS',
        label: '500 m² ve üzeri',
      },
    ],
  },
  {
    id: 'construction-dirt-level',
    field: 'dirtLevel',
    title: 'İnşaat kalıntılarının yoğunluğu nasıl?',
    description:
      'Alanınızın mevcut durumuna en yakın seçeneği belirleyin.',
    options: [
      {
        value: 'LIGHT',
        label: 'Hafif',
      },
      {
        value: 'MEDIUM',
        label: 'Orta',
      },
      {
        value: 'HEAVY',
        label: 'Yoğun',
      },
    ],
  },
];

const periodicCleaningQuestions: ServiceDetailQuestion[] = [
  {
    id: 'periodic-property-type',
    field: 'propertyType',
    title: 'Düzenli temizlik yapılacak alan nedir?',
    description:
      'Periyodik hizmet planını alan türüne göre oluşturuyoruz.',
    options: [
      {
        value: 'HOME',
        label: 'Ev',
      },
      {
        value: 'OFFICE',
        label: 'Ofis / İş Yeri',
      },
      {
        value: 'STORE',
        label: 'Mağaza',
      },
      {
        value: 'OTHER',
        label: 'Diğer',
      },
    ],
  },
  {
    id: 'periodic-area-size',
    field: 'areaSize',
    title: 'Alan yaklaşık kaç metrekare?',
    description:
      'Yaklaşık bir değer seçmeniz yeterlidir.',
    options: [
      {
        value: '0_100',
        label: '0 - 100 m²',
      },
      {
        value: '100_250',
        label: '100 - 250 m²',
      },
      {
        value: '250_500',
        label: '250 - 500 m²',
      },
      {
        value: '500_PLUS',
        label: '500 m² ve üzeri',
      },
    ],
  },
  {
    id: 'periodic-frequency',
    field: 'frequency',
    title: 'Ne sıklıkla hizmet almak istiyorsunuz?',
    description:
      'Size uygun çalışma programını birlikte oluşturabiliriz.',
    options: [
      {
        value: 'WEEKLY',
        label: 'Haftada 1',
      },
      {
        value: 'TWO_THREE_WEEKLY',
        label: 'Haftada 2 - 3',
      },
      {
        value: 'DAILY',
        label: 'Her Gün',
      },
      {
        value: 'CUSTOM',
        label: 'Özel Program',
      },
    ],
  },
];

const deepCleaningQuestions: ServiceDetailQuestion[] = [
  {
    id: 'deep-property-type',
    field: 'propertyType',
    title: 'Derinlemesine temizlik yapılacak alan nedir?',
    description:
      'Alan türüne göre temizlik kapsamını özelleştireceğiz.',
    options: [
      {
        value: 'HOME',
        label: 'Ev',
      },
      {
        value: 'OFFICE',
        label: 'Ofis / İş Yeri',
      },
      {
        value: 'STORE',
        label: 'Mağaza',
      },
      {
        value: 'OTHER',
        label: 'Diğer',
      },
    ],
  },
  {
    id: 'deep-area-size',
    field: 'areaSize',
    title: 'Alan yaklaşık kaç metrekare?',
    description:
      'Size en yakın metrekare aralığını seçebilirsiniz.',
    options: [
      {
        value: '0_100',
        label: '0 - 100 m²',
      },
      {
        value: '100_250',
        label: '100 - 250 m²',
      },
      {
        value: '250_500',
        label: '250 - 500 m²',
      },
      {
        value: '500_PLUS',
        label: '500 m² ve üzeri',
      },
    ],
  },
  {
    id: 'deep-focus-areas',
    field: 'focusAreas',
    title: 'Özellikle hangi alanlara yoğunlaşmamızı istersiniz?',
    description:
      'Birden fazla seçenek belirleyebilirsiniz.',
    multiple: true,
    optional: true,
    options: [
      {
        value: 'KITCHEN',
        label: 'Mutfak',
      },
      {
        value: 'BATHROOMS',
        label: 'Banyolar',
      },
      {
        value: 'WINDOWS',
        label: 'Camlar',
      },
      {
        value: 'CABINETS',
        label: 'Dolap İçleri',
      },
      {
        value: 'FLOORS',
        label: 'Zeminler',
      },
      {
        value: 'BALCONY',
        label: 'Balkon',
      },
    ],
  },
];

export const serviceDetailQuestions: Record<
  ContactServiceType,
  ServiceDetailQuestion[]
> = {
  HOME_CLEANING: homeCleaningQuestions,
  OFFICE_CLEANING: officeCleaningQuestions,
  POST_CONSTRUCTION_CLEANING:
    postConstructionQuestions,
  PERIODIC_CLEANING: periodicCleaningQuestions,
  DEEP_CLEANING: deepCleaningQuestions,
};