import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const excludedPaths = [
      '/menu/drinks/hot-coffees',
      '/menu/drinks/cold-coffees',
      '/menu/drinks/hot-teas',
      '/menu/drinks/iced-teas-and-lemonades',
      '/menu/drinks/refreshers',
      '/menu/foods/pastries',
      '/menu/foods/desserts',
      '/menu/foods/sandwiches',
      '/menu/merchandise/cold-cups',
      '/menu/at-home-coffee/whole-bean',
    ]; // excluded routes

    if (!excludedPaths.includes(pathname)) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
