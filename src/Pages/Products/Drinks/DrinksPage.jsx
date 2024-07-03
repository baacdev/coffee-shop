import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

import Frappuccinos from './Frappuccinos'
import HotEspresso from './HotEspresso'
import ColdEspresso from './ColdEspresso'
import Refreshers from './Refreshers'
import ShakenEspressos from './ShakenEspressos'
import ColdCoffees from './ColdCoffees'
import HotCoffees from './HotCoffees'
import HotTeas from './HotTeas'
import IcedTeasAndLemonades from './IcedTeasAndLemonades'

function DrinksPage() {
  const location = useLocation();

  useEffect(() => {
    const drinkName = location.pathname.split('/').pop();
    const element = document.getElementById(drinkName);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <div className='lg:col-span-5 min-h-[100vh]'>
        <header className='bg-white lg:border-l border-gray-200'>
          <div className='mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between'>
            <div className='min-w-0 flex-1'>
              <nav className='flex' aria-label='Breadcrumb'>
                <ol role='list' className='flex items-center space-x-4'>
                  <li>
                    <div>
                      <Link to={'/menu'} className='text-base font-semibold font-opensans text-gray-500 hover:text-orange-500'>
                        Menu
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className='flex items-center'>
                      <ChevronRightIcon className='h-5 w-5 flex-shrink-0 text-gray-400' aria-hidden='true' />
                      <a className='ml-4 text-base text-gray-600 font-bold font-opensans'>
                        Drinks
                      </a>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </header>

        <div className='bg-white border-gray-200 lg:border-l'>
          {/* FRAPPUCCINOS */}
          <div id='frappuccinos' className='mx-auto max-w-screen-2xl px-4 border-gray-200 border-b sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between'>
            <h1 className='mt-10 mb-2 text-lg leading-7 font-bold text-gray-900 font-opensans sm:truncate sm:text-2xl sm:tracking-tight'>
              Frappuccinos
            </h1>
          </div>
          <Frappuccinos />

          {/* Hot Espresso */}
          <div id='hot-espresso' className='mx-auto max-w-screen-2xl px-4 border-gray-200 border-b sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between'>
            <h1 className='mt-10 mb-2 text-lg leading-7 font-bold text-gray-900 font-opensans sm:truncate sm:text-2xl sm:tracking-tight'>
              Hot Espresso
            </h1>
          </div>
          <HotEspresso />

          {/* Cold Espresso */}
          <div id='cold-espresso' className='mx-auto max-w-screen-2xl px-4 border-gray-200 border-b sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between'>
            <h1 className='mt-10 mb-2 text-lg leading-7 font-bold text-gray-900 font-opensans sm:truncate sm:text-2xl sm:tracking-tight'>
              Cold Espresso
            </h1>
          </div>
          <ColdEspresso />

          {/* SHAKEN'S ESPRESSOS */}
          <div id='shaken-espresso' className='mx-auto max-w-screen-2xl px-4 border-gray-200 border-b sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between'>
            <h1 className='mt-10 mb-2 text-lg leading-7 font-bold text-gray-900 font-opensans sm:truncate sm:text-2xl sm:tracking-tight'>
              Shaken's espressos
            </h1>
          </div>
          <ShakenEspressos />

          {/* HOT COFFEES */}
          <div id='hot-coffees' className='mx-auto max-w-screen-2xl px-4 border-gray-200 border-b sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between'>
            <h1 className='mt-10 mb-2 text-lg leading-7 font-bold text-gray-900 font-opensans sm:truncate sm:text-2xl sm:tracking-tight'>
              Hot coffees
            </h1>
          </div>
          <HotCoffees />

          {/* COLD COFFEE */}
          <div id='cold-coffees' className='mx-auto max-w-screen-2xl px-4 border-gray-200 border-b sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between'>
            <h1 className='mt-10 mb-2 text-lg leading-7 font-bold text-gray-900 font-opensans sm:truncate sm:text-2xl sm:tracking-tight'>
              Cold Coffees
            </h1>
          </div>
          <ColdCoffees />

          {/* HOT TEAS */}
          <div id='hot-teas' className='mx-auto max-w-screen-2xl px-4 border-gray-200 border-b sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between'>
            <h1 className='mt-10 mb-2 text-lg leading-7 font-bold text-gray-900 font-opensans sm:truncate sm:text-2xl sm:tracking-tight'>
              Hot Teas
            </h1>
          </div>
          <HotTeas />

          {/* ICED TEAS AND LEMONADES */}
          <div id='iced-teas-and-lemonades' className='mx-auto max-w-screen-2xl px-4 border-gray-200 border-b sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between'>
            <h1 className='mt-10 mb-2 text-lg leading-7 font-bold text-gray-900 font-opensans sm:truncate sm:text-2xl sm:tracking-tight'>
              Iced Teas And Lemonades
            </h1>
          </div>
          <IcedTeasAndLemonades />

          {/* REFRESHERS */}
          <div id='refreshers' className='mx-auto max-w-screen-2xl px-4 border-gray-200 border-b sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between'>
            <h1 className='mt-10 mb-2 text-lg leading-7 font-bold text-gray-900 font-opensans sm:truncate sm:text-2xl sm:tracking-tight'>
              Refreshers
            </h1>
          </div>
          <Refreshers />

        </div>
      </div>
    </>
  )
}

export default DrinksPage