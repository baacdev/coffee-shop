import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverGroup,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { Bars3Icon, ShoppingBagIcon, XMarkIcon, MapPinIcon } from '@heroicons/react/24/outline';

const navigation = {
  pages: [
    { name: 'Menu', href: '/menu' },
    { name: 'Rewards', href: '/rewards' },
    { name: 'GIFT CARDS', href: '/gift' },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className='bg-white'>
      {/* Mobile menu */}
      <Transition show={open}>
        <Dialog className='relative z-40 lg:hidden' onClose={setOpen}>
          <TransitionChild
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </TransitionChild>

          <div className='fixed inset-0 z-40 flex'>
            <TransitionChild
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <DialogPanel className='relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl'>
                <div className='flex px-4 pb-2 pt-5'>
                  <button
                    type='button'
                    className='relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'
                    onClick={() => setOpen(false)}
                  >
                    <span className='absolute -inset-0.5' />
                    <span className='sr-only'>Close menu</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>

                {/* Links */}
                <div className='space-y-6 border-t border-gray-400 px-0 py-6'>
                  {navigation.pages.map((page) => (
                    <div key={page.name} className='flow-root'>
                      <Link
                        to={page.href}
                        className={classNames(
                          'block p-2 font-bold font-opensans text-gray-700',
                          location.pathname.startsWith(page.href) && 'bg-orange-50'
                        )}
                        onClick={() => setOpen(false)}
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>

                <div className='space-y-6 border-t border-gray-300 px-4 py-6'>
                  <div className='flow-root'>
                    <Link
                      to={'/account/login'}
                      className='bg-transparent hover:bg-gray-200 text-gray-700 font-semibold py-1 px-4 border border-black rounded-full'
                      onClick={() => setOpen(false)}
                    >
                      Sign in
                    </Link>
                  </div>
                  <div className='flow-root'>
                    <Link
                      to={'/account/register'}
                      className='bg-black hover:bg-gray-700 text-gray-100 font-semibold py-1 px-4 border border-black rounded-full'
                      onClick={() => setOpen(false)}
                    >
                      Create account
                    </Link>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      <header className='relative bg-white border-b border-gray-400 shadow-md'>
        <nav aria-label='Top' className='mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8'>
          <div>
            <div className='flex h-24 items-center'>
              <button
                type='button'
                className='relative rounded-md bg-white p-2 text-gray-400 lg:hidden'
                onClick={() => setOpen(true)}
              >
                <span className='absolute -inset-0.5' />
                <span className='sr-only'>Open menu</span>
                <Bars3Icon className='h-6 w-6' aria-hidden='true' />
              </button>

              {/* Logo */}
              <div className='flex ml-4 lg:ml-0'>
                <Link to={'/'}>
                  <span className='sr-only'>Your Company</span>
                  <img
                    className='h-16 w-auto'
                    src='/assets/logos/icon-coffee-shop.png'
                    alt='A white coffee cup with the word "coffee" written in black on the side.'
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className='hidden lg:ml-8 lg:block lg:self-stretch'>
                <div className='flex h-full space-x-8'>
                  {navigation.pages.map((category) => (
                    <Popover key={category.name} className='flex'>
                      <>
                        <div className='relative flex'>
                          <Link
                            className={classNames(
                              'text-base font-opensans font-extrabold uppercase relative z-10 -mb-px flex items-center pt-px',
                              location.pathname.startsWith(category.href)
                                ? 'border-b-8 border-orange-600 border-spacing-0 hover:text-orange-600'
                                : 'hover:text-orange-600'
                            )}
                            to={category.href}
                          >
                            {category.name}
                          </Link>
                        </div>
                      </>
                    </Popover>
                  ))}
                </div>
              </PopoverGroup>

              <div className='ml-auto flex items-center'>
                <div className='ml-4 flow-root lg:mr-6'>
                  <Link to={'/store-locator'} className='group -m-2 flex items-center p-2'>
                    <span className='mr-1 text-sm font-semibold text-black group-hover:text-orange-600'>Store</span>
                    <MapPinIcon
                      className='h-6 w-6 flex-shrink-0 text-black group-hover:text-orange-600'
                      aria-hidden='true'
                    />
                    <span className='sr-only'>location</span>
                  </Link>
                </div>
                <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-2'>
                  <Link
                    to={'/account/login'}
                    className='bg-transparent hover:bg-gray-200 text-sm text-gray-700 font-semibold py-1 px-4 border border-black rounded-full'
                  >
                    Log in
                  </Link>
                  <Link
                    to={'/account/register'}
                    className='bg-black hover:bg-gray-700 text-sm text-gray-100 font-semibold py-1 px-4 border border-black rounded-full'
                  >
                    Create account
                  </Link>
                </div>

                {/* Cart */}
                <div className='ml-4 flow-root lg:ml-6'>
                  <Link to={'/cart'} className='group -m-2 flex items-center p-2'>
                    <ShoppingBagIcon
                      className='h-6 w-6 flex-shrink-0 text-black group-hover:text-gray-500'
                      aria-hidden='true'
                    />
                    <span className='ml-2 text-sm font-medium text-black group-hover:text-gray-500'>5</span>
                    <span className='sr-only'>items in cart, see bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
