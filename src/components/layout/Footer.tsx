import {
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa';

import novalisLogo from '../../assets/logo/novalisFooter.jpeg';
import { navigationItems } from '../../services/navigation';

import {
  ContactLink,
  ContactList,
  FooterBottom,
  FooterBottomActions,
  FooterContainer,
  FooterContent,
  FooterDivider,
  FooterLogo,
  FooterLogoLink,
  FooterMain,
  FooterNavigation,
  FooterNavigationLink,
  FooterNavigationList,
  LegalLinks,
  SocialLink,
  SocialLinks,
  WhatsAppButton,
} from './FooterStyles';

function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <FooterContainer>
        <FooterContent>
          <FooterMain>
            <FooterLogoLink href="/">
              <FooterLogo
                src={novalisLogo}
                alt={t('footer.logoAlt')}
              />
            </FooterLogoLink>

            <FooterNavigation
              aria-label={t('footer.navigationAriaLabel')}
            >
              <FooterNavigationList>
                {navigationItems.map((item) => (
                  <li key={item.path}>
                    <FooterNavigationLink href={item.path}>
                      {t(item.labelKey)}
                    </FooterNavigationLink>
                  </li>
                ))}
              </FooterNavigationList>
            </FooterNavigation>

            <ContactList>
              <ContactLink href="tel:+9">
                <Phone
                  size={15}
                  aria-hidden="true"
                />

                0536 031 00 81
              </ContactLink>

              <ContactLink href="mailto:info@novalistemizlik.com">
                <Mail
                  size={15}
                  aria-hidden="true"
                />

                info@novalistemizlik.com
              </ContactLink>

              <ContactLink as="span">
                <MapPin
                  size={15}
                  aria-hidden="true"
                />

                {t('footer.location')}
              </ContactLink>
            </ContactList>
          </FooterMain>

          <FooterDivider />

          <FooterBottom>
            <span>
              © {new Date().getFullYear()}{' '}
              {t('footer.copyright')}
            </span>

            <FooterBottomActions>
              <SocialLinks>
                <SocialLink
                  href="https://www.instagram.com/novaliscleaning/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram
                    size={15}
                    aria-hidden="true"
                  />
                </SocialLink>

                <SocialLink
                  href="https://www.tiktok.com/@novaliscleaning?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                >
                  <FaTiktok
                    size={14}
                    aria-hidden="true"
                  />
                </SocialLink>

                <SocialLink
                  href="https://www.facebook.com/profile.php?id=61592327112402"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF
                    size={13}
                    aria-hidden="true"
                  />
                </SocialLink>
              </SocialLinks>

              <LegalLinks>
                <span>
                  {t('footer.legal.kvkk')}
                </span>

                <span>
                  {t('footer.legal.privacy')}
                </span>
              </LegalLinks>
            </FooterBottomActions>
          </FooterBottom>
        </FooterContent>
      </FooterContainer>

      <WhatsAppButton
        href="https://wa.me/905360310081?text=Merhaba%2C%20temizlik%20hizmeti%20ile%20ilgileniyorum.%20Daha%20fazla%20bilgi%20almak%20istiyorum."
        target="_blank"
        rel="noreferrer"
        aria-label={t('footer.whatsappAriaLabel')}
      >
        <FaWhatsapp
          size={24}
          aria-hidden="true"
        />
      </WhatsAppButton>
    </>
  );
}

export default Footer;