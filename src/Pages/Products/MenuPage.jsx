import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import DrinksPage from './Drinks/DrinksPage'
import FoodsPage from './Foods/FoodsPage'
import MerchandisePage from './Merchandise/MerchandisePage'
import AtHomeCoffeePage from './AtHomeCoffee/AtHomeCoffeePage'

const drinks = [
  {
    id: 1,
    name: 'Frappuccinos',
    imageSrc: 'https://www.clarin.com/2020/09/30/EjIM9hfpm_1200x0__1.jpg',
    imageAlt: 'Front of mens Basic Tee in black.',
  },
  {
    id: 2,
    name: 'Hot Espresso',
    imageSrc: 'https://previews.123rf.com/images/nerudol/nerudol1611/nerudol161100144/66710989-taza-de-espresso-sabroso-fresco-de-caf%C3%A9-caliente-con-granos-de-caf%C3%A9-sobre-fondo-oscuro.jpg',
    imageAlt: 'Front of mens Basic Tee in black.',
  },
  {
    id: 3,
    name: 'Cold Espresso',
    imageSrc: 'https://www.breville.com/content/dam/breville-brands/coffeehub/language-masters/mx_es/recipes/recipe-hero-stills/Recipes_Banner8_1200x1200_IcedLatte.jpeg',
    imageAlt: 'Front of mens Basic Tee in black.',
  },
  {
    id: 4,
    name: 'Refreshers',
    imageSrc: '/assets/img/drinks/refreshers/refreshers.avif',
    imageAlt: 'Five colorful drinks in glasses on a table.',
  },
  {
    id: 5,
    name: 'Shaken Espresso',
    imageSrc: 'https://www.tasteofhome.com/wp-content/uploads/2023/04/FT23_272959_ST_3_03_2-Starbucks-Shaken-Espresso-TMB-studio.jpg',
    imageAlt: 'Front of mens Basic Tee in black.',
  },
  {
    id: 6,
    name: 'Hot coffees',
    imageSrc: '/assets/img/drinks/hot-coffees/hot-coffees.avif',
    imageAlt: 'Two steaming coffee cups on a table.',
  },
  {
    id: 7,
    name: 'Cold coffees',
    imageSrc: '/assets/img/drinks/cold-coffees/cold-coffees.avif',
    imageAlt: 'Three coffee drinks topped with whipped cream and coffee beans.',
  },
  {
    id: 8,
    name: 'Hot teas',
    imageSrc: '/assets/img/drinks/hot-teas/hot-teas.avif',
    imageAlt: 'Hot tea with cinnamon, ginger and cloves arranged in a pattern.',
  },
  {
    id: 9,
    name: 'Iced teas and lemonades',
    imageSrc: '/assets/img/drinks/iced-teas-and-lemonades/iced-teas-and-lemonades.avif',
    imageAlt: 'Three glasses of iced tea with lemon slices on a wooden table.',
  },
]
const foods = [
  {
    id: 1,
    name: 'Pastries',
    imageSrc: 'https://5.imimg.com/data5/ZR/JQ/TK/IOS-15292022/chocolate-pastries.jpeg',
    imageAlt: 'Front of mens Basic Tee in black.',
  },
  {
    id: 2,
    name: 'Desserts',
    imageSrc: 'https://www.paulinacocina.net/wp-content/uploads/2024/01/receta-de-postre-de-maracuya-Paulina-Cocina-Recetas-1200x675.jpg',
    imageAlt: 'Front of mens Basic Tee in black.',
  },
  {
    id: 3,
    name: 'Sandwiches',
    imageSrc: 'https://www.eatingwell.com/thmb/LQXwKPvgYghCs2LH7bwlsx0gD1Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cucumber-caprese-sandwich-6343482dece14c3d876bc7bac317ecd8.jpg',
    imageAlt: 'Front of mens Basic Tee in black.',
  },
]
const merchandise = [
  {
    id: 1,
    name: 'Cold Cups',
    imageSrc: 'https://img.freepik.com/vector-gratis/maqueta-diseno-cafeteria_1284-21752.jpg',
    imageAlt: 'Front of mens Basic Tee in black.',
  },
]
const atHomeCoffeePage = [
  {
    id: 1,
    name: 'Whole Bean',
    imageSrc: 'https://lawhimsy.com/wp-content/uploads/2019/01/fika-means-having-coffee-with-friends-and-enjoying-the-good-things-in-life-via-lawhimsy.jpg?w=848',
    imageAlt: 'Front of mens Basic Tee in black.',
  },
]

function MenuPage() {
  const navigate = useNavigate();  // Initializing the navigate function of the hook useNavigate for routing
  const location = useLocation();  // Initializing the location object of the useLocation hook for the current URL path

  // Function to format the item name for URL by removing accents and converting to lowercase with hyphens
  const formatNameForUrl = (name) => {
    return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
  };

  // Function to handle clicking on menu sections and navigating to specific URLs
  const handleSectionClick = (section, itemName, event) => {
    event.preventDefault();  // Avoiding default linking behavior
    navigate(`/menu/${section}/${formatNameForUrl(itemName)}`);  // Navigating to a specific URL according to the section and item name
  };

  // Function to render different sections of the menu according to the current URL path
  const renderSection = () => {
    const path = location.pathname;  // Getting the current pathname path from the location object

    // Rendering specific section components according to the current URL path
    if (path.includes('/drinks')) {
      return <DrinksPage />;
    } else if (path.includes('/foods')) {
      return <FoodsPage />;
    } else if (path.includes('/merchandise')) {
      return <MerchandisePage />;
    } else if (path.includes('/at-home-coffee')) {
      return <AtHomeCoffeePage />;
    } else {
      return (
        // Default rendering for the main menu section with beverages, food, merchandise and packs
        <div className='lg:col-span-5 min-h-[100vh]'>
          {/* Drinks Section */}
          <div className='bg-white border-gray-200 lg:border-l'>
            <div className='mx-auto max-w-screen-2xl px-4 border-gray-200 border-b sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between'>
              <div className='min-w-0'>
                <h1 className='mt-0 mb-10 text-2xl font-extrabold font-opensans leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>
                  Menu
                </h1>
                <h1 className='mt-0 mb-2 text-xl font-bold font-opensans leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight'>
                  Drinks
                </h1>
              </div>
            </div>
            {/* drinks items */}
            <div className='flex justify-center mx-auto max-w-2xl px-4 py-1 sm:px-6 sm:py10 lg:max-w-7xl lg:px-8'>
              <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-20'>
                {drinks.map((drink) => (
                  <div key={drink.id} className='group relative'>
                    <div className='h-60 w-60 overflow-hidden rounded-full bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60 lg:w-60'>
                      <img
                        src={drink.imageSrc}
                        alt={drink.imageAlt}
                        className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                      />
                    </div>
                    <div className='mt-4 flex justify-center'>
                      <h3 className='text-base font-semibold font-opensans text-gray-700'>
                        <Link className='hover:text-orange-500' href='#' onClick={(e) => handleSectionClick('drinks', drink.name, e)}>
                          <span aria-hidden='true' className='absolute inset-0' />
                          {drink.name}
                        </Link>
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Food Section */}
            <div className='mx-auto max-w-screen-2xl px-4 border-gray-200 border-b sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between'>
              <div className='min-w-0'>
                <h1 className='mt-10 mb-2 text-xl font-bold font-opensans leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight'>
                  Food
                </h1>
              </div>
            </div>
            {/* Food items */}
            <div className='flex justify-center mx-auto max-w-2xl px-4 py-1 sm:px-6 sm:py10 lg:max-w-7xl lg:px-8'>
              <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-20'>
                {foods.map((food) => (
                  <div key={food.id} className='group relative'>
                    <div className='h-60 w-60 overflow-hidden rounded-full bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60 lg:w-60'>
                      <img
                        src={food.imageSrc}
                        alt={food.imageAlt}
                        className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                      />
                    </div>
                    <div className='mt-4 flex justify-center'>
                      <div>
                        <h3 className='text-base font-semibold font-opensans text-gray-700'>
                          <Link className='hover:text-orange-500' href='#' onClick={(e) => handleSectionClick('foods', food.name, e)}>
                            <span aria-hidden='true' className='absolute inset-0' />
                            {food.name}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Merchandising and Coffee Bean Section */}
            <div className='mx-auto max-w-screen-2xl px-4 border-gray-200 border-b sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between'>
              <div className='min-w-0'>
                <h1 className='mt-10 mb-2 text-xl font-bold font-opensans leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight'>
                  MERCHANDISE
                </h1>
              </div>
            </div>
            {/* Merchandising and Coffee Bean Items */}
            <div className='flex justify-center mx-auto max-w-2xl px-4 py-1 sm:px-6 sm:py10 lg:max-w-7xl lg:px-8'>
              <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-20'>
                {merchandise.map((item) => (
                  <div key={item.id} className='group relative'>
                    <div className='h-60 w-60 overflow-hidden rounded-full bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60 lg:w-60'>
                      <img
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                      />
                    </div>
                    <div className='mt-4 flex justify-center'>
                      <div>
                        <h3 className='text-base font-semibold font-opensans text-gray-700'>
                          <Link className='hover:text-orange-500' href='#' onClick={(e) => handleSectionClick('merchandise', item.name, e)}>
                            <span aria-hidden='true' className='absolute inset-0' />
                            {item.name}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* At Home Coffee Page */}
            <div className='mx-auto max-w-screen-2xl px-4 border-gray-200 border-b sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between'>
              <div className='min-w-0'>
                <h1 className='mt-10 mb-2 text-xl font-bold font-opensans leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight'>
                  At Home Coffee Page
                </h1>
              </div>
            </div>
            {/* At Home Coffee Page items */}
            <div className='flex justify-center mx-auto max-w-2xl px-4 py-1 sm:px-6 sm:py10 lg:max-w-7xl lg:px-8'>
              <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-20'>
                {atHomeCoffeePage.map((coffeeItem) => (
                  <div key={coffeeItem.id} className='group relative'>
                    <div className='h-60 w-60 overflow-hidden rounded-full bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60 lg:w-60'>
                      <img
                        src={coffeeItem.imageSrc}
                        alt={coffeeItem.imageAlt}
                        className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                      />
                    </div>
                    <div className='mt-4 flex justify-center'>
                      <div>
                        <h3 className='text-base font-semibold font-opensans text-gray-700'>
                          <Link className='hover:text-orange-500' href='#' onClick={(e) => handleSectionClick('at-home-coffee', coffeeItem.name, e)}>
                            <span aria-hidden='true' className='absolute inset-0' />
                            {coffeeItem.name}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      );
    }
  };

  // Main menu page rendering
  return (
    <div className='bg-white'>
      <main className='mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8'>
        {/* Main menu section */}
        <section aria-labelledby='menu-heading' className='pb-24 pt-6'>
          <h2 id='menu-heading' className='sr-only'>Menu</h2>
          {/* Main menu grid with columns */}
          <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-6'>
            {/* Form and lists of links for different menu sections (hidden on small screens) */}
            <form className='hidden lg:block lg:sticky lg:top-5 self-start'>
              {/* List of drinks */}
              <h3 className='text-xl font-bold font-opensans text-gray-900 pb-3'>DRINKS</h3>
              <ul role='list' className='space-y-3 border-b border-gray-200 pb-6 text-sm font-semibold font-opensans text-gray-500'>
                {drinks.map((drink) => (
                  <li key={drink.name}>
                    {/* Links for each beverage that manage clicks to browse */}
                    <Link className='hover:text-orange-500' href='#' onClick={(e) => handleSectionClick('drinks', drink.name, e)}>{drink.name}</Link>
                  </li>
                ))}
              </ul>

              {/* Food list */}
              <h3 className='text-xl font-bold font-opensans text-gray-900 pb-3'>FOOD</h3>
              <ul role='list' className='space-y-3 border-b border-gray-200 pb-6 text-sm font-semibold font-opensans text-gray-500'>
                {foods.map((food) => (
                  <li key={food.name}>
                    {/* Links for each food handling clicks for navigation */}
                    <Link className='hover:text-orange-500' href='#' onClick={(e) => handleSectionClick('foods', food.name, e)}>{food.name}</Link>
                  </li>
                ))}
              </ul>

              {/* List of merchandise and coffee beans */}
              <h3 className='text-xl font-bold font-opensans text-gray-900 pb-3'>MERCHANDISE</h3>
              <ul role='list' className='space-y-3 border-b border-gray-200 pb-6 text-sm font-semibold font-opensans text-gray-500'>
                {merchandise.map((item) => (
                  <li key={item.name}>
                    {/* Links for each merchandise item that handle clicks to browse */}
                    <Link className='hover:text-orange-500' href='#' onClick={(e) => handleSectionClick('merchandise', item.name, e)}>{item.name}</Link>
                  </li>
                ))}
              </ul>

              {/* List of At Home Coffee */}
              <h3 className='text-xl font-bold font-opensans text-gray-900 pb-3'>AT HOME COFFEE</h3>
              <ul role='list' className='space-y-3 border-b border-gray-200 pb-6 text-sm font-semibold font-opensans text-gray-500'>
                {atHomeCoffeePage.map((coffeeItem) => (
                  <li key={coffeeItem.name}>
                    {/* Links for each pack that handle clicks to browse */}
                    <Link className='hover:text-orange-500' href='#' onClick={(e) => handleSectionClick('at-home-coffee', coffeeItem.name, e)}>{coffeeItem.name}</Link>
                  </li>
                ))}
              </ul>
            </form>

            {/* Main menu section for rendering sections */}
            <div className='lg:col-span-5'>
              {renderSection()}  {/* Rendering the section according to URL path */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MenuPage