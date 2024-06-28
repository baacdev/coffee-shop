import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';

const addresses = [
  {
    id: 1,
    name: 'Location',
    description: 'Street 159, San Martin de Socabaya - Arequipa',
    reference: 'Next to the gym',
    buttonName: 'Open Google Maps',
    imageSrc: '/assets/img/maps.webp',
    href: 'https://www.google.com/maps/@-16.4517111,-71.5397899,14z?entry=ttu'
  },
];

function MainAddress() {
  return (
    <>
      <div className='bg-white flex min-h-[100vh]'>
        <div className='mt-10 mb-10 mx-auto max-w-2xl flex flex-col items-center gap-y-16 lg:max-w-7xl'>
          {addresses.map((address) => (
            <div key={address.id} className='flex flex-col lg:flex-row items-center lg:pb-0'>
              <div className='text-center m-1 lg:m-0 lg:pl-10 lg:text-left lg:w-1/2'>
                <h2 className='mt-3 text-2xl font-bold font-opensans tracking-tight text-orange-900 sm:text-5xl sm:mt-0'>
                  {address.name}
                </h2>
                <p className='mt-5 text-orange-900 text-base lg:text-lg font-bold font-opensans'>
                  {address.description}
                </p>
                <p className='mt-1 text-orange-900 text-sm lg:text-base font-semibold font-opensans'>
                  {address.reference}
                </p>
                <Link
                  to={address.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='mt-5 w-fit mx-auto lg:mx-0 flex items-center justify-center rounded-full border border-orange-900 bg-orange-900 px-4 py-2 text-sm lg:text-base font-bold font-opensans text-orange-100 hover:bg-orange-800'
                >
                  {address.buttonName}
                  <ArrowTopRightOnSquareIcon className="ml-0.5 mr-1 h-5 w-5 text-white" aria-hidden="true" />
                </Link>
              </div>
              <div className='w-full h-full mt-5 lg:mt-0 lg:ml-10 lg:w-1/2 flex justify-center'>
                <img
                  src={address.imageSrc}
                  alt={address.imageAlt}
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
