import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Menu,
  Phone,
  X,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import {
  Link,
  NavLink,
} from 'react-router-dom';

import novalisLogo from '../../assets/logo/novalis.jpeg';
import { navigationItems } from '../../services/navigation';

import {
  HeaderActions,
  HeaderContainer,
  HeaderContent,
  LanguageButton,
  LogoImage,
  LogoLink,
  LogoWrapper,
  MobileActions,
  MobileMenu,
  MobileMenuButton,
  MobileMenuInner,
  MobileMenuOverlay,
  MobileNavigationLink,
  MobileNavigationList,
  MobilePhoneLink,
  MobileQuoteLink,
  Navigation,
  NavigationLink,
  NavigationList,
  PhoneLink,
  QuoteLink,
} from './HeaderStyles';

const PHONE_NUMBER = '0850 123 45 67';
const PHONE_LINK = 'tel:+908501234567';

const DESKTOP_BREAKPOINT = 1024;
const SCROLL_THRESHOLD = 20;

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);
  const [isScrolled, setIsScrolled] =
    useState(false);

  const { t, i18n } = useTranslation();

  const currentLanguage =
    i18n.language.startsWith('tr')
      ? 'tr'
      : 'en';

  const handleLanguageChange = () => {
    const nextLanguage =
      currentLanguage === 'tr'
        ? 'en'
        : 'tr';

    i18n.changeLanguage(nextLanguage);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(
      (currentValue) => !currentValue,
    );
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow;

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(
        window.scrollY > SCROLL_THRESHOLD,
      );
    };

    const handleResize = () => {
      if (
        window.innerWidth >
        DESKTOP_BREAKPOINT
      ) {
        closeMobileMenu();
      }
    };

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === 'Escape') {
        closeMobileMenu();
      }
    };

    handleScroll();

    window.addEventListener(
      'scroll',
      handleScroll,
      {
        passive: true,
      },
    );

    window.addEventListener(
      'resize',
      handleResize,
    );

    window.addEventListener(
      'keydown',
      handleKeyDown,
    );

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll,
      );

      window.removeEventListener(
        'resize',
        handleResize,
      );

      window.removeEventListener(
        'keydown',
        handleKeyDown,
      );
    };
  }, []);

  return (
    <>
      <HeaderContainer
        $isScrolled={isScrolled}
      >
        <HeaderContent
          $isScrolled={isScrolled}
        >
          <LogoLink
            as={Link}
            to="/"
            aria-label={t(
              'header.homeAriaLabel',
            )}
            onClick={closeMobileMenu}
          >
            <LogoWrapper
              $isScrolled={isScrolled}
            >
              <LogoImage
                src={novalisLogo}
                alt={t('header.logoAlt')}
              />
            </LogoWrapper>
          </LogoLink>

          <Navigation
            aria-label={t(
              'header.navigationAriaLabel',
            )}
          >
            <NavigationList>
              {navigationItems.map(
                (item) => (
                  <li key={item.path}>
                    <NavigationLink
                      as={NavLink}
                      to={item.path}
                      onClick={closeMobileMenu}
                    >
                      {({ isActive }) => (
                        <>
                          <span>
                            {t(item.labelKey)}
                          </span>

                          {isActive && (
                            <motion.span
                              layoutId="header-active-indicator"
                              transition={{
                                type: 'spring',
                                stiffness: 420,
                                damping: 34,
                              }}
                              className="active-indicator"
                            />
                          )}
                        </>
                      )}
                    </NavigationLink>
                  </li>
                ),
              )}
            </NavigationList>
          </Navigation>

          <HeaderActions>
            <PhoneLink href={PHONE_LINK}>
              <Phone
                size={17}
                strokeWidth={2}
                aria-hidden="true"
              />

              {PHONE_NUMBER}
            </PhoneLink>

            <QuoteLink
              as={Link}
              to="/iletisim"
              onClick={closeMobileMenu}
            >
              <span>
                {t('header.getQuote')}
              </span>

              <ArrowRight
                size={17}
                strokeWidth={2}
                aria-hidden="true"
              />
            </QuoteLink>

            <LanguageButton
              type="button"
              aria-label={t(
                'header.languageAriaLabel',
              )}
              onClick={
                handleLanguageChange
              }
            >
              <span
                className={
                  currentLanguage === 'tr'
                    ? 'active'
                    : ''
                }
              >
                TR
              </span>

              <span
                className="divider"
                aria-hidden="true"
              >
                |
              </span>

              <span
                className={
                  currentLanguage === 'en'
                    ? 'active'
                    : ''
                }
              >
                EN
              </span>
            </LanguageButton>
          </HeaderActions>

          <MobileMenuButton
            type="button"
            aria-label={
              isMobileMenuOpen
                ? t('header.closeMenu')
                : t('header.openMenu')
            }
            aria-expanded={
              isMobileMenuOpen
            }
            aria-controls="mobile-navigation"
            $isOpen={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X
                size={23}
                strokeWidth={2}
                aria-hidden="true"
              />
            ) : (
              <Menu
                size={23}
                strokeWidth={2}
                aria-hidden="true"
              />
            )}
          </MobileMenuButton>
        </HeaderContent>

        <MobileMenu
          id="mobile-navigation"
          $isOpen={isMobileMenuOpen}
          aria-hidden={
            !isMobileMenuOpen
          }
        >
          <MobileMenuInner>
            <MobileNavigationList>
              {navigationItems.map(
                (item) => (
                  <li key={item.path}>
                    <MobileNavigationLink
                      as={NavLink}
                      to={item.path}
                      onClick={
                        closeMobileMenu
                      }
                    >
                      {t(item.labelKey)}
                    </MobileNavigationLink>
                  </li>
                ),
              )}
            </MobileNavigationList>

            <MobileActions>
              <MobilePhoneLink
                href={PHONE_LINK}
              >
                <Phone
                  size={17}
                  strokeWidth={1.9}
                  aria-hidden="true"
                />

                {PHONE_NUMBER}
              </MobilePhoneLink>

              <MobileQuoteLink
                as={Link}
                to="/iletisim"
                onClick={
                  closeMobileMenu
                }
              >
                <span>
                  {t('header.getQuote')}
                </span>

                <ArrowRight
                  size={17}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </MobileQuoteLink>

              <LanguageButton
                type="button"
                aria-label={t(
                  'header.languageAriaLabel',
                )}
                onClick={
                  handleLanguageChange
                }
              >
                <span
                  className={
                    currentLanguage === 'tr'
                      ? 'active'
                      : ''
                  }
                >
                  TR
                </span>

                <span
                  className="divider"
                  aria-hidden="true"
                >
                  |
                </span>

                <span
                  className={
                    currentLanguage === 'en'
                      ? 'active'
                      : ''
                  }
                >
                  EN
                </span>
              </LanguageButton>
            </MobileActions>
          </MobileMenuInner>
        </MobileMenu>
      </HeaderContainer>

      <MobileMenuOverlay
        $isOpen={isMobileMenuOpen}
        aria-hidden="true"
        onClick={closeMobileMenu}
      />
    </>
  );
}

export default Header;