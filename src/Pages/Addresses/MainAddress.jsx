import React from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';

const addresses = [
  {
    id: 1,
    name: 'Location',
    description: 'Street 159, San Martin de Socabaya - Arequipa',
    reference: 'Next to the gym',
    buttonName: 'Open Google Maps',
    imageSrc: '../../../public/assets/img/maps.webp',
  },
];

function MainAddress() {
  return (
    <div className="flex min-h-[90vh] bg-white items-center">
      <div className="bg-white mt-10 mb-10 mx-auto max-w-2xl flex flex-col gap-y-16 px-4 lg:max-w-7xl">
        {addresses.map((address) => (
          <div key={address.id} className="flex flex-col lg:flex-row items-center">
            <div className="text-center lg:text-left lg:w-1/2">
              <h2 className="mt-3 text-3xl font-bold font-opensans tracking-tight text-black sm:text-5xl sm:mt-0">
                {address.name}
              </h2>
              <p className="mt-5 text-black text-lg font-bold font-opensans">
                {address.description}
              </p>
              <p className="mt-1 text-black text-base font-semibold font-opensans">
              Reference: {address.reference}
              </p>
              <a
                className="text-sm font-bold font-opensans text-white mt-10 w-full lg:w-1/2 mx-auto lg:mx-0 flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-8 py-3 hover:bg-orange-700"
                href="https://maps.app.goo.gl/hMgQ4ngqyL2qWx17A"
                target="_blank"
                rel="noopener noreferrer"
              >
                {address.buttonName}
                <ArrowTopRightOnSquareIcon className="ml-0.5 mr-1 h-5 w-5 text-white" aria-hidden="true" />
              </a>
            </div>
            <div className="mt-5 lg:mt-0 lg:ml-10 lg:w-1/2 flex justify-center">
              <img
                src={address.imageSrc}
                alt="Image of the site"
                className="rounded-none bg-gray-100"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainAddress;
