import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const excludedPaths = [
      '/menu/drinks/frappuccinos', 
      '/menu/drinks/hot-espresso',
      '/menu/drinks/cold-espresso', 
      '/menu/drinks/refreshers',
      '/menu/drinks/shaken-espresso', 
      '/menu/drinks/cold-coffees',
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
