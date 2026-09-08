export type LegalDocumentType = 'kvkk' | 'privacy';

interface LegalDocument {
  title: string;
  intro: string;
  sections: Array<{ title: string; text: string }>;
}

interface LegalContent {
  close: string;
  contact: string;
  documents: Record<LegalDocumentType, LegalDocument>;
}

// Editable DRAFTS based on the website's visible data flows, not approved policies.
// Before publishing, confirm the controller's legal identity/address, the legal
// basis for each purpose, processors/transfers (including abroad), retention,
// actual security controls and valid application channels with the business.
// Reference: https://www.kvkk.gov.tr/Icerik/2033/Aydinlatma-Yukumlulugu-
export const legalContent: Record<'tr' | 'en', LegalContent> = {
  tr: {
    close: 'Bilgilendirme penceresini kapat',
    contact: 'Kişisel verilerinizle ilgili bilgi almak için:',
    documents: {
      kvkk: {
        title: 'KVKK Aydınlatma Metni',
        intro: 'Bu metin, Novalis Cleaning web sitesi üzerinden ilettiğiniz hizmet, teklif ve destek taleplerinde kişisel verilerin kullanımına ilişkin bilgi sunar.',
        sections: [
          {
            title: '1. İletişim ve kapsam',
            text: 'Novalis Cleaning, Düzce bölgesinde temizlik hizmetleri sunmaktadır. Web sitesi üzerinden paylaştığınız bilgiler ve kişisel verilerinize ilişkin sorularınız için aşağıdaki iletişim adresinden bize ulaşabilirsiniz.',
          },
          {
            title: '2. Paylaştığınız bilgiler',
            text: 'Teklif formunda ad soyad veya şirket adı, telefon, e-posta, il, ilçe, adres, hizmet türü, alan ve daire bilgileri, tercih edilen tarih ve saat, talep notları ve iletişim tercihleriniz alınır. Destek sohbetinde yazdığınız mesaj, görüşmeyi ilişkilendiren oturum kimliği ve dil tercihi iletilir.',
          },
          {
            title: '3. Kullanım amaçları ve toplama yöntemi',
            text: 'Bilgiler, web formu ve destek sohbeti aracılığıyla elektronik ortamda toplanır. Talepleri değerlendirmek, ihtiyaçlarınıza uygun teklif hazırlamak, randevu ve hizmet planlamasını yapmak ve sorularınızı yanıtlamak amacıyla kullanılır. Kampanya ve duyurular için belirttiğiniz tercih, hizmetinizle ilgili iletişim tercihinden ayrı olarak alınır.',
          },
          {
            title: '4. İşlemenin hukuki dayanağı',
            text: 'Talep ve hizmet süreçlerinde kişisel verilerin işlenmesi, somut işleme amacı bakımından 6698 sayılı Kanun’da öngörülen şartlardan uygun olanına dayanmalıdır. Sözleşmenin kurulması veya ifası için gerekli işlemler bu kapsamda değerlendirilir. Açık rıza gereken işlemlerde rıza ayrıca alınır; bu bilgilendirme metnini görüntülemek tek başına açık rıza oluşturmaz.',
          },
          {
            title: '5. Hizmet altyapısı ve aktarım',
            text: 'Form ve sohbet üzerinden gönderdiğiniz bilgiler, talebin işlenmesi için sitenin hizmet altyapısına iletilir. WhatsApp veya sosyal medya bağlantılarını seçtiğinizde ilgili platformun hizmetine geçersiniz. Bu platformlardaki veri işleme faaliyetleri hakkında kendi gizlilik metinlerini inceleyebilirsiniz.',
          },
          {
            title: '6. Kişisel verilerinize ilişkin haklarınız',
            text: 'Kanun’un 11. maddesi kapsamında verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi isteme, amacını ve amaca uygun kullanımını öğrenme, yurt içi veya yurt dışındaki alıcıları bilme; eksik veya yanlış bilgilerin düzeltilmesini ve kanuni şartlar oluştuğunda silinmesini ya da yok edilmesini talep etme haklarınız vardır. Düzeltme veya silme işlemlerinin alıcılara bildirilmesini isteyebilir, yalnızca otomatik analiz sonucu aleyhinize çıkan sonuca itiraz edebilir ve kanuna aykırı işleme nedeniyle zarara uğramanız halinde giderilmesini talep edebilirsiniz.',
          },
        ],
      },
      privacy: {
        title: 'Gizlilik Politikası',
        intro: 'Bu metin, Novalis Cleaning web sitesindeki iletişim araçlarını kullanırken paylaştığınız bilgiler ve gizlilik tercihleriniz hakkında açıklama sunar.',
        sections: [
          {
            title: '1. Form ve destek sohbeti',
            text: 'Teklif formuna yazdığınız iletişim ve hizmet bilgileri, talebinizin değerlendirilmesi için gönderilir. Destek sohbetindeki mesajlar yanıt oluşturulması için hizmet altyapısına iletilir. Mesajlarınıza şifre, ödeme kartı bilgisi veya hizmet talebiyle ilgisi olmayan hassas bilgiler eklemeyin.',
          },
          {
            title: '2. İletişim tercihleriniz',
            text: 'Hizmet talebiniz hakkında iletişime geçilmesi ile kampanya ve duyuru tercihi formda ayrı alanlardır. İletişim tercihlerinizin güncellenmesi hakkında aşağıdaki e-posta adresinden bize ulaşabilirsiniz.',
          },
          {
            title: '3. Tarayıcı ve oturum bilgileri',
            text: 'Destek sohbeti, mesajları aynı görüşmeyle ilişkilendirmek için bir oturum kimliği oluşturur. Dil seçimi, form alanları ve açık sohbet gibi arayüz durumları sayfanın çalışması sırasında tarayıcı belleğinde tutulur. Tarayıcınızın gizlilik ayarlarını kendiniz yönetebilirsiniz.',
          },
          {
            title: '4. Harici bağlantılar',
            text: 'WhatsApp, Instagram, TikTok ve Facebook bağlantıları sizi başka platformlara yönlendirir. Bu hizmetleri kullandığınızda ilgili platformun kullanım koşulları ve gizlilik politikası geçerlidir. Harici bir bağlantıyı açmadan önce ilgili koşulları incelemenizi öneririz.',
          },
          {
            title: '5. Bilgileriniz ve güncellemeler',
            text: 'Paylaştığınız bilgilerin doğruluğu, talebinizin sağlıklı şekilde değerlendirilmesine yardımcı olur. Bilgilerinize ilişkin düzeltme ve diğer kişisel veri talepleriniz için bizimle iletişime geçebilirsiniz. Web sitesinin hizmetleri değiştikçe bu metin de güncellenebilir.',
          },
        ],
      },
    },
  },
  en: {
    close: 'Close information dialog',
    contact: 'For information about your personal data:',
    documents: {
      kvkk: {
        title: 'Personal Data Notice (KVKK)',
        intro: 'This notice explains the use of personal data in service, quotation and support requests submitted through the Novalis Cleaning website.',
        sections: [
          { title: '1. Contact and scope', text: 'Novalis Cleaning provides cleaning services in Düzce. You can contact us at the address below with questions about information you share on this website and your personal data.' },
          { title: '2. Information you provide', text: 'The quotation form collects your name or company name, phone number, email, location, address, service type, property details, preferred date and time, request notes and contact preferences. Support chat sends your message, a session identifier linking the conversation and your language preference.' },
          { title: '3. Purposes and collection methods', text: 'Information is collected electronically through the web form and support chat to assess requests, prepare quotations, plan appointments and services, and answer questions. Your campaign preference is collected separately from contact about your service request.' },
          { title: '4. Legal basis', text: 'Each processing purpose must have an applicable basis under Turkish Law No. 6698. Processing necessary to establish or perform a contract is assessed in that context. Where explicit consent is required, it is obtained separately; viewing this notice does not itself constitute consent.' },
          { title: '5. Service infrastructure and transfers', text: 'Information sent through forms and chat is transmitted to the website’s service infrastructure to process your request. WhatsApp and social media links take you to external services. Please review their privacy notices for information about processing on those platforms.' },
          { title: '6. Your personal data rights', text: 'Under Article 11, you may learn whether your data is processed, request information about processing and its purpose, and learn about recipients in Türkiye or abroad. You may request correction of incomplete or inaccurate data and deletion or destruction when the legal conditions apply, as well as notification of those actions to recipients. You may object to adverse results arising solely from automated analysis and seek compensation for damage caused by unlawful processing.' },
        ],
      },
      privacy: {
        title: 'Privacy Policy',
        intro: 'This notice explains information you share and privacy preferences when using the communication tools on the Novalis Cleaning website.',
        sections: [
          { title: '1. Forms and support chat', text: 'Contact and service information in the quotation form is sent for assessment of your request. Chat messages are transmitted to the service infrastructure to generate a response. Do not include passwords, payment card details or sensitive information unrelated to your request.' },
          { title: '2. Contact preferences', text: 'Contact about your service request and campaigns are separate preferences on the form. You can contact us at the email address below to ask about updating your preferences.' },
          { title: '3. Browser and session information', text: 'Support chat generates a session identifier to associate messages with the same conversation. Interface state such as language, form fields and open chat is held in browser memory while the page runs. You can manage your browser’s privacy settings yourself.' },
          { title: '4. External links', text: 'WhatsApp, Instagram, TikTok and Facebook links take you to other platforms. Their terms and privacy policies apply when you use their services. We recommend reviewing them before opening an external link.' },
          { title: '5. Your information and updates', text: 'Accurate information helps us assess your request. You can contact us about corrections and other personal data requests. This notice may be updated as the website’s services change.' },
        ],
      },
    },
  },
};
