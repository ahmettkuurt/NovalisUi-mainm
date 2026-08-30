import { useId, useState } from 'react';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  LoaderCircle,
  Send,
  ShieldCheck,
} from 'lucide-react';
import { useForm, useWatch } from 'react-hook-form';

import { createContactRequest } from '../../services/contactServices';
import type { ContactFormData, ContactServiceType } from '../../types/contact';

import {
  BackButton,
  Checkbox,
  CheckboxContainer,
  CheckboxLabel,
  ErrorMessage,
  FieldGroup,
  FieldHint,
  FieldLabel,
  Form,
  FormActions,
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
  NextButton,
  RequiredMark,
  Select,
  StatusMessage,
  StepContainer,
  StepItem,
  StepLabel,
  StepNumber,
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
  { value: 'Ev_Temizligi', label: 'Ev temizliği' },
  { value: 'Ofis_Temizligi', label: 'Ofis temizliği' },
  { value: 'Insaat_Sonrasi_Temizlik', label: 'İnşaat sonrası temizlik' },
  { value: 'Apartman_Ortak_Alan_Temizligi', label: 'Apartman ortak alan temizliği' },
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
  unitCount: '',
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

// Adımları ve doğrulayacak alanları tanımlıyoruz
const STEPS: Array<{
  id: number;
  title: string;
  fields: Array<keyof ContactFormData>;
}> = [
  { id: 1, title: 'İletişim', fields: ['fullName', 'phone', 'email'] },
  { id: 2, title: 'Hizmet', fields: ['serviceType', 'materialsOption', 'areaSqm', 'unitCount'] },
  { id: 3, title: 'Konum', fields: ['province', 'district', 'addressLine', 'requestedDate', 'preferredTime'] },
  { id: 4, title: 'Onay', fields: ['message', 'serviceConsent', 'marketingConsent'] },
];

function ContactForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [status, setStatus] = useState<FormStatus | null>(null);
  const [submissionId, setSubmissionId] = useState(() => crypto.randomUUID());
  
  const serviceConsentId = useId();
  const marketingConsentId = useId();

  const {
    register,
    control,
    trigger,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    defaultValues,
    mode: 'onChange',
  });

  const selectedServiceType = useWatch({
    control,
    name: 'serviceType',
  });
  const isHomeCleaning = selectedServiceType === 'Ev_Temizligi';
  const isOfficeCleaning = selectedServiceType === 'Ofis_Temizligi';
  const isConstructionCleaning = selectedServiceType === 'Insaat_Sonrasi_Temizlik';
  const isApartmentCleaning = selectedServiceType === 'Apartman_Ortak_Alan_Temizligi';
  const isMeteredCleaning = isHomeCleaning || isOfficeCleaning || isConstructionCleaning;

  const handleNext = async () => {
    // Sadece mevcut adımın alanlarını doğrula
    const stepFields = STEPS[currentStep - 1].fields;
    const isStepValid = await trigger(stepFields);

    if (isStepValid) {
      setCurrentStep((prev) => Math.min(prev + 1, STEPS.length));
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: ContactFormData) => {
    setStatus(null);

    const response = await createContactRequest(data, submissionId);

    if (!response.success) {
      setStatus({
        type: 'error',
        message: response.message || 'Talebiniz gönderilemedi. Lütfen bilgilerinizi kontrol edip tekrar deneyin.',
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
    setCurrentStep(1); // Form başarıyla gönderilince başa dön
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
        
        {/* Adım Göstergesi (Progress) */}
        <StepContainer>
          {STEPS.map((step) => (
            <StepItem key={step.id}>
              <StepNumber $active={currentStep === step.id} $completed={currentStep > step.id}>
                {currentStep > step.id ? <CheckCircle2 size={16} /> : step.id}
              </StepNumber>
              <StepLabel $active={currentStep === step.id}>{step.title}</StepLabel>
            </StepItem>
          ))}
        </StepContainer>

        {/* 1. ADIM: İLETİŞİM */}
        {currentStep === 1 && (
          <FormSection>
            <FormSectionHeader>
              <FormSectionTitle>İletişim bilgileriniz</FormSectionTitle>
              <FormSectionDescription>
                Size ulaşabilmemiz için iletişim bilgilerinizi girin.
              </FormSectionDescription>
            </FormSectionHeader>

            <FormGrid>
              <FieldGroup>
                <FieldLabel htmlFor="full-name">
                  Ad soyad / şirket adı <RequiredMark>*</RequiredMark>
                </FieldLabel>
                <Input
                  id="full-name"
                  type="text"
                  placeholder="Adınız, soyadınız veya şirket adınız"
                  $hasError={Boolean(errors.fullName)}
                  {...register('fullName', {
                    required: 'Ad soyad veya şirket adı zorunludur.',
                    minLength: { value: 2, message: 'En az iki karakter girin.' },
                  })}
                />
                {errors.fullName?.message && <ErrorMessage>{errors.fullName.message}</ErrorMessage>}
              </FieldGroup>

              <FieldGroup>
                <FieldLabel htmlFor="phone">Telefon <RequiredMark>*</RequiredMark></FieldLabel>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="0555 111 22 33"
                  $hasError={Boolean(errors.phone)}
                  {...register('phone', {
                    required: 'Telefon numarası zorunludur.',
                    minLength: { value: 10, message: 'Geçerli bir telefon girin.' },
                  })}
                />
                {errors.phone?.message && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
              </FieldGroup>

              <FieldGroup>
                <FieldLabel htmlFor="email">E-posta <RequiredMark>*</RequiredMark></FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="ornek@firma.com"
                  $hasError={Boolean(errors.email)}
                  {...register('email', {
                    required: 'E-mail adresi zorunludur.',
                    pattern: { value: /\S+@\S+\.\S+/, message: 'Geçerli bir e-mail girin.' }
                  })}
                />
                {errors.email?.message && <ErrorMessage>{errors.email.message}</ErrorMessage>}
              </FieldGroup>
            </FormGrid>
          </FormSection>
        )}

        {/* 2. ADIM: HİZMET DETAYLARI */}
        {currentStep === 2 && (
          <FormSection>
            <FormSectionHeader>
              <FormSectionTitle>Hizmet detayları</FormSectionTitle>
              <FormSectionDescription>
                Teklifinizi doğru hazırlayabilmemiz için hizmet türünü seçin.
              </FormSectionDescription>
            </FormSectionHeader>

            <FormGrid>
              <FieldGroup>
                <FieldLabel htmlFor="service-type">
                  Hizmet <RequiredMark>*</RequiredMark>
                </FieldLabel>
                <Select
                  id="service-type"
                  $hasError={Boolean(errors.serviceType)}
                  {...register('serviceType', { required: 'Lütfen hizmeti seçin.' })}
                >
                  <option value="">Seçiniz</option>
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </Select>
                {errors.serviceType?.message && <ErrorMessage>{errors.serviceType.message}</ErrorMessage>}
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
                    required:'Temizlik malzemesi seçeneğini belirleyin.',
                  })}
                >
                  <option value="">Seçiniz</option>
                  <option value="materials_excluded">Malzeme fiyata dahil değil</option>
                  <option value="materials_included">Malzeme fiyata dahil</option>
                </Select>
                {errors.materialsOption?.message && <ErrorMessage>{errors.materialsOption.message}</ErrorMessage>}
              </FieldGroup>

              {!isApartmentCleaning && (
                <FieldGroup>
                  <FieldLabel htmlFor="area-sqm">
                    Metrekare <RequiredMark>*</RequiredMark>
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
                      required: isMeteredCleaning ? 'Metrekare bilgisini girin.' : false,
                      validate: (value) => !value.trim() || Number(value) > 0 || 'Metrekare 0’dan büyük olmalıdır.',
                    })}
                  />
                  {errors.areaSqm?.message && <ErrorMessage>{errors.areaSqm.message}</ErrorMessage>}
                  <FieldHint>Ev, Ofis ve İnşaat Sonrası hizmetlerinde 0–500 m² fiyat tablosu uygulanır.</FieldHint>
                </FieldGroup>
              )}

              {isApartmentCleaning && (
                <FieldGroup>
                  <FieldLabel htmlFor="unit-count">
                    Daire sayısı <RequiredMark>*</RequiredMark>
                  </FieldLabel>
                  <Input
                    id="unit-count"
                    type="number"
                    min="1"
                    step="1"
                    inputMode="numeric"
                    placeholder="Örnek: 10"
                    $hasError={Boolean(errors.unitCount)}
                    {...register('unitCount', {
                      required: 'Daire sayısını girin.',
                      validate: (value) => Number(value) >= 1 || 'Daire sayısı en az 1 olmalıdır.',
                    })}
                  />
                  {errors.unitCount?.message && <ErrorMessage>{errors.unitCount.message}</ErrorMessage>}
                  <FieldHint>Daire başına malzemesiz 600 TL, malzemeli 800 TL uygulanır.</FieldHint>
                </FieldGroup>
              )}
            </FormGrid>
          </FormSection>
        )}

        {/* 3. ADIM: KONUM VE PLANLAMA */}
        {currentStep === 3 && (
          <FormSection>
            <FormSectionHeader>
              <FormSectionTitle>Konum ve planlama</FormSectionTitle>
              <FormSectionDescription>
                Hizmetin uygulanacağı bölgeyi ve zamanı paylaşın.
              </FormSectionDescription>
            </FormSectionHeader>

            <FormGrid>
              <FieldGroup>
                <FieldLabel htmlFor="province">İl <RequiredMark>*</RequiredMark></FieldLabel>
                <Input
                  id="province"
                  type="text"
                  placeholder="Örnek: Düzce"
                  $hasError={Boolean(errors.province)}
                  {...register('province', { required: 'İl bilgisi zorunludur.' })}
                />
                {errors.province?.message && <ErrorMessage>{errors.province.message}</ErrorMessage>}
              </FieldGroup>

              <FieldGroup>
                <FieldLabel htmlFor="district">İlçe <RequiredMark>*</RequiredMark></FieldLabel>
                <Input
                  id="district"
                  type="text"
                  placeholder="Örnek: Merkez"
                  $hasError={Boolean(errors.district)}
                  {...register('district', { required: 'İlçe bilgisi zorunludur.' })}
                />
                {errors.district?.message && <ErrorMessage>{errors.district.message}</ErrorMessage>}
              </FieldGroup>

              <FieldGroup style={{ gridColumn: '1 / -1' }}>
                <FieldLabel htmlFor="address-line">Açık adres <RequiredMark>*</RequiredMark></FieldLabel>
                <Textarea
                  id="address-line"
                  rows={2}
                  placeholder="Mahalle, sokak, bina ve kapı numarası"
                  $hasError={Boolean(errors.addressLine)}
                  {...register('addressLine', { required: 'Açık adres zorunludur.' })}
                />
                {errors.addressLine?.message && <ErrorMessage>{errors.addressLine.message}</ErrorMessage>}
              </FieldGroup>

              {/* Eklenen Tarih ve Saat Alanları */}
              <FieldGroup>
                <FieldLabel htmlFor="requested-date">
                  Tercih edilen tarih <RequiredMark>*</RequiredMark>
                </FieldLabel>
                <Input
                  id="requested-date"
                  type="date"
                  min={today}
                  $hasError={Boolean(errors.requestedDate)}
                  {...register('requestedDate', { required: 'Lütfen bir tarih seçin.' })}
                />
                {errors.requestedDate?.message && <ErrorMessage>{errors.requestedDate.message}</ErrorMessage>}
              </FieldGroup>

              <FieldGroup>
                <FieldLabel htmlFor="preferred-time">
                  Tercih edilen saat <RequiredMark>*</RequiredMark>
                </FieldLabel>
                <Input
                  id="preferred-time"
                  type="time"
                  $hasError={Boolean(errors.preferredTime)}
                  {...register('preferredTime', { required: 'Lütfen bir saat seçin.' })}
                />
                {errors.preferredTime?.message && <ErrorMessage>{errors.preferredTime.message}</ErrorMessage>}
              </FieldGroup>

            </FormGrid>
          </FormSection>
        )}

        {/* 4. ADIM: NOT VE ONAY */}
        {currentStep === 4 && (
          <>
            <FormSection>
              <FormSectionHeader>
                <FormSectionTitle>Talep notunuz & Onay</FormSectionTitle>
                <FormSectionDescription>
                  İhtiyacınızı kısaca anlatın ve izinleri onaylayın.
                </FormSectionDescription>
              </FormSectionHeader>

              <FieldGroup>
                <FieldLabel htmlFor="message">Notunuz <RequiredMark>*</RequiredMark></FieldLabel>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Beklentilerinizi veya ek bilgileri yazın."
                  $hasError={Boolean(errors.message)}
                  {...register('message', { required: 'Lütfen talebinizi açıklayın.' })}
                />
                {errors.message?.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
              </FieldGroup>
            </FormSection>

            <FormSection>
              <CheckboxContainer $hasError={Boolean(errors.serviceConsent)}>
                <Checkbox
                  id={serviceConsentId}
                  type="checkbox"
                  {...register('serviceConsent', { required: 'İletişim izni gereklidir.' })}
                />
                <CheckboxLabel htmlFor={serviceConsentId}>
                  Hizmet talebim hakkında benimle iletişim kurulmasını kabul ediyorum. <RequiredMark>*</RequiredMark>
                </CheckboxLabel>
              </CheckboxContainer>
              {errors.serviceConsent?.message && <ErrorMessage>{errors.serviceConsent.message}</ErrorMessage>}

              <CheckboxContainer>
                <Checkbox id={marketingConsentId} type="checkbox" {...register('marketingConsent')} />
                <CheckboxLabel htmlFor={marketingConsentId}>
                  Kampanya ve duyuru mesajları almak istiyorum.
                </CheckboxLabel>
              </CheckboxContainer>
            </FormSection>
          </>
        )}

        {status && (
          <StatusMessage $status={status.type} role="status">
            {status.type === 'success' ? <CheckCircle2 size={19} /> : <Send size={19} />}
            <span>{status.message}</span>
          </StatusMessage>
        )}

        {/* YÖNLENDİRME BUTONLARI */}
        <FormActions>
          {currentStep > 1 && (
            <BackButton type="button" onClick={handlePrev}>
              <ChevronLeft size={18} /> Geri
            </BackButton>
          )}
          
          {currentStep < STEPS.length ? (
            <NextButton type="button" onClick={handleNext}>
              İleri <ChevronRight size={18} />
            </NextButton>
          ) : (
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? <LoaderCircle size={19} className="animate-spin" /> : <Send size={19} />}
              {isSubmitting ? 'Gönderiliyor...' : 'Talebi Gönder'}
            </SubmitButton>
          )}
        </FormActions>

        {currentStep === STEPS.length && (
          <FormTrustList style={{ marginTop: '16px' }}>
            <FormTrustItem><ShieldCheck size={14} /> Bilgileriniz korunur</FormTrustItem>
            <FormTrustItem><Clock3 size={14} /> Hızlı geri dönüş</FormTrustItem>
          </FormTrustList>
        )}
      </Form>
    </FormCard>
  );
}

export default ContactForm;