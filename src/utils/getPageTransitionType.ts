import {
  navigationItems,
  type PageTransitionType,
} from '../services/navigation';

const DEFAULT_TRANSITION_TYPE: PageTransitionType = 'home';

export const getPageTransitionType = (
  pathname: string,
): PageTransitionType => {
  const navigationItem = navigationItems.find(
    (item) => item.path === pathname,
  );

  return (
    navigationItem?.transitionType ??
    DEFAULT_TRANSITION_TYPE
  );
};