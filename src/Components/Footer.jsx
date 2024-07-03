import React, { useState } from 'react';
import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

// links
const SITEMAP = [
  {
    title: 'About Us',
    links: [
      {
        name: 'Our company',
        href: '/our-company',
      },
      {
        name: 'Our Coffee',
        href: '/our-coffee',
      },
      {
        name: 'Customer Service',
        href: '/customer-service',
      },
      {
        name: 'Line and ethics',
        href: '/line-and-ethics',
      },
    ],
  },
  {
    title: 'Our Culture',
    links: [
      {
        name: 'Culture and Values',
        href: '/culture-and-values',
      },
      {
        name: 'Work with us',
        href: '/work-with-us',
      },
    ],
  },
  {
    title: 'Social Impact',
    links: [
      {
        name: 'Planet',
        href: '/planet',
      },
      {
        name: 'People',
        href: '/people',
      },
    ],
  },
  {
    title: 'Policies',
    links: [
      {
        name: 'Terms and conditions of COMPANY NAME',
        href: '/terminos-y-condiciones',
      },
      {
        name: 'FAQ',
        href: '/preguntas-frecuentes',
      },
    ],
  },
  {
    title: 'Customer service',
    links: [
      {
        name: 'Telephone Arequipa: (01)505-0050',
        href: '/',
      },
      {
        name: 'Electronic vouchers',
        href: '/electronic-vouchers',
      },
    ],
  },
];

const currentYear = new Date().getFullYear();

function Footer() {
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (index) => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <footer className='relative w-full bg-white border-t border-gray-300'>
      <div className='mx-auto w-full max-w-screen-2xl px-8'>
        <div className='mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-5'>
          {SITEMAP.map((section, index) => (
            <div key={section.title} className='w-full'>
              <div 
                className='flex justify-between items-center cursor-pointer md:cursor-default'
                onClick={() => toggleSection(index)}
              >
                <Typography
                  variant='small'
                  color='blue-gray'
                  className='mb-2 font-bold font-opensans uppercase'
                >
                  {section.title}
                </Typography>
                <ChevronDownIcon 
                  className={`w-5 h-5 transition-transform duration-300 ${openSections.includes(index) ? 'rotate-180' : ''} md:hidden`}
                />
              </div>
              <ul 
                className={`space-y-1 transition-all duration-700 overflow-hidden ${openSections.includes(index) ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} md:max-h-full md:opacity-100`}
              >
                {section.links.map((link) => (
                  <Typography key={link.name} as='li' color='blue-gray' className='font-normal'>
                    <Link
                      to={link.href}
                      className='text-gray-500 text-sm font-semibold font-opensans inline-block py-0.5 pr-2 transition-transform hover:text-gray-800'
                    >
                      {link.name}
                    </Link>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='flex w-full flex-col items-center justify-center border-t border-gray-300 py-4 md:flex-row md:justify-between'>
          <Typography
            variant='small'
            className='text-gray-700 text-center font-medium font-opensans mb-4 md:mb-0'
          >
            &copy; {currentYear} <a>COMPANY NAME</a>. All rights reserved.
          </Typography>
          <div className='flex gap-4 text-blue-gray-900 sm:justify-center'>
            <Typography as='a' href='#' className='opacity-80 transition-opacity hover:opacity-100'>
              <svg className='h-6 w-6 hover:text-blue-700' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                <path
                  fillRule='evenodd'
                  d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                  clipRule='evenodd'
                />
              </svg>
            </Typography>
            <Typography as='a' href='#' className='opacity-80 transition-opacity hover:opacity-100'>
              <svg className='h-6 w-6 hover:text-rose-700' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                <path
                  fillRule='evenodd'
                  d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                  clipRule='evenodd'
                />
              </svg>
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
