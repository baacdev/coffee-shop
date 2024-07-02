import React from 'react'
import { Link } from 'react-router-dom';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';

const promotions = [
  {
    id: 1,
    name: 'Location',
    description: 'Street 159, San Martin de Socabaya - Arequipa',
    href: 'https://www.google.com/maps/',
    buttonName: 'Open Google Maps',
    imageAlt: 'Location',
    imageSrc: '/assets/img/maps.webp'
  },
]


function MainAddress() {
  return (
    <>
      <div className='bg-white flex min-h-[100vh]'>
        <div className='bg-white mt-10 mb-10 mx-auto max-w-2xl flex flex-col items-center gap-y-16 lg:max-w-7xl'>
          {promotions.map((promotion) => (
            <div key={promotion.id} className='flex flex-col lg:flex-row items-center lg:pb-0'>
              <div className='text-center m-1 lg:m-0 lg:pl-10 lg:text-left lg:w-1/2'>
                <h2 className='mt-3 text-2xl font-bold font-opensans tracking-tight text-orange-900 sm:text-5xl sm:mt-0'>
                  {promotion.name}
                </h2>
                <p className='mt-5 text-orange-900 text-base lg:text-lg font-bold font-opensans'>
                  {promotion.description}
                </p>
                <p className='mt-1 text-orange-900 text-sm lg:text-base font-semibold font-opensans'>
                  {promotion.promotionStartDate} {promotion.promotionEndDate}
                </p>
                <Link
                  to={promotion.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='mt-5 w-fit mx-auto lg:mx-0 flex items-center justify-center rounded-full bg-orange-800 px-4 py-2 text-sm lg:text-base font-bold font-opensans text-orange-100 hover:bg-orange-600'
                >
                  {promotion.buttonName}
                  <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
              <div className='w-full h-full mt-5 lg:mt-0 lg:ml-10 lg:w-1/2 flex justify-center'>
                <img
                  src={promotion.imageSrc}
                  alt={promotion.imageAlt}
                  className='rounded-none bg-gray-100 w-full h-full'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MainAddress;