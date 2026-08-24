export type PageTransitionType =
  | 'home'
  | 'services'
  | 'about'
  | 'contact';

interface NavigationItem {
  labelKey: string;
  path: string;
  transitionType: PageTransitionType;
}

export const navigationItems: NavigationItem[] = [
  {
    labelKey: 'header.navigation.home',
    path: '/',
    transitionType: 'home',
  },
  {
    labelKey: 'header.navigation.services',
    path: '/hizmetler',
    transitionType: 'services',
  },
  {
    labelKey: 'header.navigation.about',
    path: '/hakkimizda',
    transitionType: 'about',
  },
  {
    labelKey: 'header.navigation.contact',
    path: '/iletisim',
    transitionType: 'contact',
  },
];