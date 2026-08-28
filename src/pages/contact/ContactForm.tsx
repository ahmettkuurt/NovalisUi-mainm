import { useId, useState } from 'react';
import {
  CheckCircle2,
  Clock3,
  LoaderCircle,
  Send,
  ShieldCheck,
} from 'lucide-react';
import {
  useForm,
  useWatch,
} from 'react-hook-form';

import { createContactRequest } from '../../services/contactServices';
import type {
  ContactFormData,
  ContactServiceType,
} from '../../types/contact';

import {
  Checkbox,
  CheckboxContainer,
  CheckboxLabel,
  ErrorMessage,
  FieldGroup,
  FieldHint,
  FieldLabel,
  Form,
  FormCard,
  FormDescription,
  FormGrid,
  FormHeader,
  FormSection,
  FormSectionDescription,
  FormSectionHeader,
  FormSectionTitle,
  FormTitle,
  FormTrustItem,
  FormTrustList,
  Input,
  OptionalMark,
  RequiredMark,
  Select,
  ServiceOptionButton,
  ServiceOptions,
  StatusMessage,
  SubmitButton,
  Textarea,
} from '../ContactPageStyles';

type FormStatus = {
  type: 'success' | 'error';
  message: string;
};

const serviceOptions: Array<{
  value: ContactServiceType;
  label: string;
}> = [
  { value: 'ev_temizligi', label: 'Ev temizliği' },
  { value: 'ofis_temizligi', label: 'Ofis temizliği' },
  {
    value: 'insaat_sonrasi',
    label: 'İnşaat sonrası temizlik',
  },
  {
    value: 'apartman_ortak_alan',
    label: 'Apartman ortak alan temizliği',
  },
];

const extraOptions = [
  { value: 'cam', label: 'Cam temizliği' },
  { value: 'koltuk', label: 'Koltuk temizliği' },
  { value: 'mutfak', label: 'Mutfak detayları' },
  { value: 'banyo', label: 'Banyo detayları' },
  { value: 'dolap', label: 'Dolap içleri' },
];

const defaultValues: ContactFormData = {
  fullName: '',
  phone: '',
  email: '',
  serviceType: '',
  materialsOption: '',
  province: 'Düzce',
  district: '',
  addressLine: '',
  areaSqm: '',
  roomCount: '',
  floorCount: '',
  requestedDate: '',
  preferredTime: '',
  frequency: '',
  extras: [],
  message: '',
  serviceConsent: false,
  marketingConsent: false,
};

const today = new Date().toISOString().slice(0, 10);

function ContactForm() {
  const [status, setStatus] = useState<FormStatus | null>(null);
  const [submissionId, setSubmissionId] = useState(
    () => crypto.randomUUID(),
  );
  const serviceConsentId = useId();
  const marketingConsentId = useId();

  const {
    register,
    control,
    setValue,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    defaultValues,
    mode: 'onChange',
  });

  const selectedExtras = useWatch({
    control,
    name: 'extras',
  });
  const phoneValue = useWatch({
    control,
    name: 'phone',
  });
  const emailValue = useWatch({
    control,
    name: 'email',
  });

  const toggleExtra = (value: string) => {
    const nextExtras = selectedExtras.includes(value)
      ? selectedExtras.filter((extra) => extra !== value)
      : [...selectedExtras, value];

    setValue('extras', nextExtras, {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const onSubmit = async (data: ContactFormData) => {
    setStatus(null);

    const response = await createContactRequest(
      data,
      submissionId,
    );

    if (!response.success) {
      setStatus({
        type: 'error',
        message:
          response.message ||
          'Talebiniz gönderilemedi. Lütfen bilgilerinizi kontrol edip tekrar deneyin.',
      });
      return;
    }

    setStatus({
      type: 'success',
      message: response.requestId
        ? `${response.message} Talep numaranız: ${response.requestId}.`
        : response.message,
    });
    reset(defaultValues);
    setSubmissionId(crypto.randomUUID());
  };

  return (
    <FormCard>
      <FormHeader>
        <FormTitle>Teklif talep formu</FormTitle>
        <FormDescription>
          Hizmet ihtiyacınızı ve size ulaşabileceğimiz bilgileri paylaşın.
          Ekibimiz, verdiğiniz bilgiler doğrultusunda en uygun planı hazırlasın.
        </FormDescription>
      </FormHeader>

      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormSection>
          <FormSectionHeader>
            <FormSectionTitle>İletişim bilgileriniz</FormSectionTitle>
            <FormSectionDescription>
              Size ulaşabilmemiz için telefon veya e-posta bilgilerinizden en az
              birini bırakın.
            </FormSectionDescription>
          </FormSectionHeader>

          <FormGrid>
            <FieldGroup>
              <FieldLabel htmlFor="full-name">
                Ad soyad / şirket adı
                <RequiredMark>*</RequiredMark>
              </FieldLabel>
              <Input
                id="full-name"
                type="text"
                autoComplete="name"
                placeholder="Adınız, soyadınız veya şirket adınız"
                $hasError={Boolean(errors.fullName)}
                {...register('fullName', {
                  required: 'Ad soyad veya şirket adı zorunludur.',
                  minLength: {
                    value: 2,
                    message: 'Lütfen en az iki karakter girin.',
                  },
                })}
              />
              {errors.fullName?.message && (
                <ErrorMessage role="alert">
                  {errors.fullName.message}
                </ErrorMessage>
              )}
            </FieldGroup>

            <FieldGroup>
              <FieldLabel htmlFor="phone">Telefon</FieldLabel>
              <Input
                id="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="0555 111 22 33"
                $hasError={Boolean(errors.phone)}
                {...register('phone', {
                  validate: (value) => {
                    if (!value.trim() && !emailValue.trim()) {
                      return 'Telefon veya e-posta alanlarından en az birini doldurun.';
                    }

                    if (
                      value.trim() &&
                      value.replace(/\D/g, '').length < 10
                    ) {
                      return 'Lütfen geçerli bir telefon numarası girin.';
                    }

                    return true;
                  },
                })}
              />
              {errors.phone?.message && (
                <ErrorMessage role="alert">
                  {errors.phone.message}
                </ErrorMessage>
              )}
              {!phoneValue && !emailValue && (
                <FieldHint>En az bir iletişim bilgisi zorunludur.</FieldHint>
              )}
            </FieldGroup>

            <FieldGroup>
              <FieldLabel htmlFor="email">E-posta</FieldLabel>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="ornek@firma.com"
                $hasError={Boolean(errors.email)}
                {...register('email', {
                  validate: (value) => {
                    if (!value.trim() && !phoneValue.trim()) {
                      return 'Telefon veya e-posta alanlarından en az birini doldurun.';
                    }

                    if (
                      value.trim() &&
                      !/^\S+@\S+\.\S+$/.test(value.trim())
                    ) {
                      return 'Lütfen geçerli bir e-posta adresi girin.';
                    }

                    return true;
                  },
                })}
              />
              {errors.email?.message && (
                <ErrorMessage role="alert">
                  {errors.email.message}
                </ErrorMessage>
              )}
            </FieldGroup>
          </FormGrid>
        </FormSection>

        <FormSection>
          <FormSectionHeader>
            <FormSectionTitle>Hizmet detayları</FormSectionTitle>
            <FormSectionDescription>
              Teklifinizi doğru hazırlayabilmemiz için hizmet türünü ve alan
              bilgilerini seçin.
            </FormSectionDescription>
          </FormSectionHeader>

          <FormGrid>
            <FieldGroup>
              <FieldLabel htmlFor="service-type">
                Hizmet
                <RequiredMark>*</RequiredMark>
              </FieldLabel>
              <Select
                id="service-type"
                $hasError={Boolean(errors.serviceType)}
                {...register('serviceType', {
                  required: 'Lütfen almak istediğiniz hizmeti seçin.',
                })}
              >
                <option value="">Seçiniz</option>
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
              {errors.serviceType?.message && (
                <ErrorMessage role="alert">
                  {errors.serviceType.message}
                </ErrorMessage>
              )}
            </FieldGroup>

            <FieldGroup>
              <FieldLabel htmlFor="materials-option">
                Temizlik malzemesi
                <RequiredMark>*</RequiredMark>
              </FieldLabel>
              <Select
                id="materials-option"
                $hasError={Boolean(errors.materialsOption)}
                {...register('materialsOption', {
                  required: 'Lütfen temizlik malzemesi seçeneğini belirleyin.',
                })}
              >
                <option value="">Seçiniz</option>
                <option value="materials_excluded">
                  Malzeme fiyata dahil değil
                </option>
                <option value="materials_included">
                  Malzeme fiyata dahil
                </option>
              </Select>
              {errors.materialsOption?.message && (
                <ErrorMessage role="alert">
                  {errors.materialsOption.message}
                </ErrorMessage>
              )}
              <FieldHint>
                Fiyat, yalnızca metrekare ve bu tercihe göre hesaplanır; hizmet türü fiyatı değiştirmez.
              </FieldHint>
            </FieldGroup>

            <FieldGroup>
              <FieldLabel htmlFor="frequency">
                Hizmet sıklığı
                <OptionalMark>İsteğe bağlı</OptionalMark>
              </FieldLabel>
              <Select id="frequency" {...register('frequency')}>
                <option value="">Belirtmek istemiyorum</option>
                <option value="tek_seferlik">Tek seferlik</option>
                <option value="haftalik">Haftalık</option>
                <option value="iki_haftada_bir">İki haftada bir</option>
                <option value="aylik">Aylık</option>
              </Select>
            </FieldGroup>

            <FieldGroup>
              <FieldLabel htmlFor="area-sqm">
                Metrekare
                <RequiredMark>*</RequiredMark>
              </FieldLabel>
              <Input
                id="area-sqm"
                type="number"
                min="0"
                step="0.1"
                inputMode="decimal"
                placeholder="Örnek: 120"
                $hasError={Boolean(errors.areaSqm)}
                {...register('areaSqm', {
                  required: 'Lütfen metrekare bilgisini girin.',
                  validate: (value) => Number(value) > 0 || 'Metrekare 0’dan büyük olmalıdır.',
                })}
              />
              {errors.areaSqm?.message && (
                <ErrorMessage role="alert">{errors.areaSqm.message}</ErrorMessage>
              )}
              <FieldHint>0–500 m² arasındaki fiyat tablosu uygulanır.</FieldHint>
            </FieldGroup>

            <FieldGroup>
              <FieldLabel htmlFor="room-count">
                Oda sayısı
                <OptionalMark>İsteğe bağlı</OptionalMark>
              </FieldLabel>
              <Input
                id="room-count"
                type="number"
                min="0"
                step="1"
                inputMode="numeric"
                placeholder="Örnek: 3"
                {...register('roomCount')}
              />
            </FieldGroup>

            <FieldGroup>
              <FieldLabel htmlFor="floor-count">
                Kat sayısı
                <OptionalMark>İsteğe bağlı</OptionalMark>
              </FieldLabel>
              <Input
                id="floor-count"
                type="number"
                min="0"
                step="1"
                inputMode="numeric"
                placeholder="Örnek: 2"
                {...register('floorCount')}
              />
            </FieldGroup>

            <FieldGroup style={{ gridColumn: '1 / -1' }}>
              <FieldLabel>
                Ek hizmetler
                <OptionalMark>Birden fazla seçebilirsiniz</OptionalMark>
              </FieldLabel>
              <ServiceOptions role="group" aria-label="Ek hizmetler">
                {extraOptions.map((option) => {
                  const isSelected = selectedExtras.includes(option.value);

                  return (
                    <ServiceOptionButton
                      key={option.value}
                      type="button"
                      $isSelected={isSelected}
                      aria-pressed={isSelected}
                      onClick={() => toggleExtra(option.value)}
                    >
                      <CheckCircle2 size={17} aria-hidden="true" />
                      {option.label}
                    </ServiceOptionButton>
                  );
                })}
              </ServiceOptions>
              <FieldHint>
                Cam, koltuk, mutfak, banyo veya dolap içleri gibi ek ihtiyaçlarınızı
                belirtebilirsiniz.
              </FieldHint>
            </FieldGroup>
          </FormGrid>
        </FormSection>

        <FormSection>
          <FormSectionHeader>
            <FormSectionTitle>Konum ve planlama</FormSectionTitle>
            <FormSectionDescription>
              Hizmetin uygulanacağı bölgeyi ve sizin için uygun zamanı paylaşın.
            </FormSectionDescription>
          </FormSectionHeader>

          <FormGrid>
            <FieldGroup>
              <FieldLabel htmlFor="province">
                İl
                <RequiredMark>*</RequiredMark>
              </FieldLabel>
              <Input
                id="province"
                type="text"
                autoComplete="address-level1"
                placeholder="Örnek: Düzce"
                $hasError={Boolean(errors.province)}
                {...register('province', {
                  required: 'Lütfen il bilgisini girin.',
                  minLength: {
                    value: 2,
                    message: 'Lütfen geçerli bir il adı girin.',
                  },
                })}
              />
              {errors.province?.message && (
                <ErrorMessage role="alert">
                  {errors.province.message}
                </ErrorMessage>
              )}
            </FieldGroup>

            <FieldGroup>
              <FieldLabel htmlFor="district">
                İlçe
                <RequiredMark>*</RequiredMark>
              </FieldLabel>
              <Input
                id="district"
                type="text"
                autoComplete="address-level2"
                placeholder="Örnek: Merkez"
                $hasError={Boolean(errors.district)}
                {...register('district', {
                  required: 'Lütfen ilçe bilgisini girin.',
                  minLength: {
                    value: 2,
                    message: 'Lütfen geçerli bir ilçe adı girin.',
                  },
                })}
              />
              {errors.district?.message && (
                <ErrorMessage role="alert">
                  {errors.district.message}
                </ErrorMessage>
              )}
            </FieldGroup>

            <FieldGroup style={{ gridColumn: '1 / -1' }}>
              <FieldLabel htmlFor="address-line">
                Açık adres
                <OptionalMark>Randevu öncesi gerekli</OptionalMark>
              </FieldLabel>
              <Textarea
                id="address-line"
                rows={3}
                autoComplete="street-address"
                placeholder="Mahalle, sokak, bina ve kapı numarası"
                {...register('addressLine')}
              />
              <FieldHint>
                İlk teklif değerlendirmesi için boş bırakabilirsiniz.
              </FieldHint>
            </FieldGroup>

            <FieldGroup>
              <FieldLabel htmlFor="requested-date">
                Tercih edilen tarih
                <OptionalMark>İsteğe bağlı</OptionalMark>
              </FieldLabel>
              <Input
                id="requested-date"
                type="date"
                min={today}
                {...register('requestedDate')}
              />
            </FieldGroup>

            <FieldGroup>
              <FieldLabel htmlFor="preferred-time">
                Tercih edilen saat
                <OptionalMark>İsteğe bağlı</OptionalMark>
              </FieldLabel>
              <Input
                id="preferred-time"
                type="time"
                {...register('preferredTime')}
              />
            </FieldGroup>
          </FormGrid>
        </FormSection>

        <FormSection>
          <FormSectionHeader>
            <FormSectionTitle>Talep notunuz</FormSectionTitle>
            <FormSectionDescription>
              İhtiyacınızı kısaca anlatmanız, ekibimizin daha hazırlıklı dönmesini
              sağlar.
            </FormSectionDescription>
          </FormSectionHeader>

          <FieldGroup>
            <FieldLabel htmlFor="message">
              Notunuz
              <RequiredMark>*</RequiredMark>
            </FieldLabel>
            <Textarea
              id="message"
              rows={5}
              placeholder="Temizlik ihtiyacınızı, özel beklentilerinizi veya eklemek istediğiniz bilgileri yazın."
              $hasError={Boolean(errors.message)}
              {...register('message', {
                required: 'Lütfen talebinizi kısaca açıklayın.',
                minLength: {
                  value: 10,
                  message: 'Lütfen en az 10 karakterlik bir açıklama yazın.',
                },
              })}
            />
            {errors.message?.message && (
              <ErrorMessage role="alert">
                {errors.message.message}
              </ErrorMessage>
            )}
          </FieldGroup>
        </FormSection>

        <FormSection>
          <FormSectionHeader>
            <FormSectionTitle>İletişim izinleri</FormSectionTitle>
            <FormSectionDescription>
              Bilgileriniz yalnızca talebinizi değerlendirmek ve size dönüş yapmak
              için kullanılır.
            </FormSectionDescription>
          </FormSectionHeader>

          <CheckboxContainer $hasError={Boolean(errors.serviceConsent)}>
            <Checkbox
              id={serviceConsentId}
              type="checkbox"
              {...register('serviceConsent', {
                required: 'Talebiniz için iletişim izni gereklidir.',
              })}
            />
            <CheckboxLabel htmlFor={serviceConsentId}>
              Hizmet talebim hakkında benimle telefon veya e-posta yoluyla
              iletişim kurulmasını kabul ediyorum.
              <RequiredMark>*</RequiredMark>
            </CheckboxLabel>
          </CheckboxContainer>
          {errors.serviceConsent?.message && (
            <ErrorMessage role="alert">
              {errors.serviceConsent.message}
            </ErrorMessage>
          )}

          <CheckboxContainer>
            <Checkbox
              id={marketingConsentId}
              type="checkbox"
              {...register('marketingConsent')}
            />
            <CheckboxLabel htmlFor={marketingConsentId}>
              Kampanya ve duyuru mesajları almak istiyorum.
            </CheckboxLabel>
          </CheckboxContainer>
        </FormSection>

        {status && (
          <StatusMessage
            $status={status.type}
            role="status"
            aria-live="polite"
          >
            {status.type === 'success' ? (
              <CheckCircle2 size={19} aria-hidden="true" />
            ) : (
              <Send size={19} aria-hidden="true" />
            )}
            <span>{status.message}</span>
          </StatusMessage>
        )}

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <LoaderCircle size={19} aria-hidden="true" />
          ) : (
            <Send size={19} aria-hidden="true" />
          )}
          {isSubmitting ? 'Gönderiliyor...' : 'Talep gönder'}
        </SubmitButton>

        <FormTrustList>
          <FormTrustItem>
            <ShieldCheck size={14} aria-hidden="true" />
            Bilgileriniz korunur
          </FormTrustItem>
          <FormTrustItem>
            <Clock3 size={14} aria-hidden="true" />
            Hızlı geri dönüş
          </FormTrustItem>
        </FormTrustList>
      </Form>
    </FormCard>
  );
}

export default ContactForm;
