import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/20/solid'

import WholeBean from './WholeBean'

function AtHomeCoffeePage() {
  const location = useLocation();

  useEffect(() => {
    const atHomeCoffeeName = location.pathname.split('/').pop();
    const element = document.getElementById(atHomeCoffeeName);
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
                        Whole Bean
                      </a>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </header>

        <div className='bg-white border-gray-200 lg:border-l'>
          <div id='whole-bean' className='mx-auto max-w-screen-2xl px-4 border-gray-200 border-b sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between'>
            <h1 className='mt-10 mb-2 text-lg leading-7 font-bold text-gray-900 font-opensans sm:truncate sm:text-2xl sm:tracking-tight'>
              Whole bean
            </h1>
          </div>
          {/* Whole Bean */}
          <WholeBean />
        </div>
      </div>
    </>
  )
}

export default AtHomeCoffeePage