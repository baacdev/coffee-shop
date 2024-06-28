import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/outline';

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className='bg-white flex min-h-[90vh] flex-1 flex-col px-4 py-1 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm text-center'>
          <h2 className='mt-10 text-center text-4xl font-black font-opensans leading-9 tracking-tight text-gray-900'>
            Sign in
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' action='#' method='POST'>
            <div>
              <a className='text-left text-sm font-bold tracking-tight text-gray-500'>
                * indicates required field
              </a>
              <label htmlFor='email' className=' text-gray-700 text-sm font-opensans font-black block leading-6 mt-3'>
                * Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  required
                  autoComplete='email'
                  className='block w-full rounded-md border-none px-3.5 py-2 text-gray-900 font-opensans shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label htmlFor='password' className='block text-sm font-black font-opensans leading-6 text-gray-700'>
                  * Password
                </label>
              </div>
              <div className='mt-2 relative'>
                <input
                  id='password'
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  autoComplete='current-password'
                  required
                  className='block w-full rounded-md border-none px-3.5 py-2 text-gray-900 font-opensans shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button type="button" onClick={togglePasswordVisibility} className="text-gray-600">
                    {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              <div className='text-sm mt-5'>
                <Link
                  to={'/account/forgot-password'}
                  className='font-black font-opensans underline underline-offset-2 text-orange-800 hover:text-orange-900'
                >
                  Forgot your password?
                </Link>
              </div>

            </div>

            <div className='flex items-center justify-center'>
              <button
                type='submit'
                className='shadow-lg bg-orange-800 w-fit ml-auto rounded-full border-none px-4 py-2 text-sm lg:text-base font-bold font-opensans text-gray-100 hover:bg-orange-900'
              >
                Sign in
              </button>
            </div>

          </form>
        </div>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm text-center mb-10'>
          <h2 className='mt-40 text-center text-base font-black font-opensans leading-9 tracking-tight text-gray-900'>
          JOIN 'YOUR COMPANY'® REWARDS
          </h2>
          <p className='text-sm font-semibold font-opensans'>
          Join 'Your Business' Rewards to earn free food and drink, get free top-ups, pay and order with your phone and much more.
          </p>
          <Link
            to={'/account/register'}
            className='mt-5 w-fit mx-auto lg:mx-auto flex items-center justify-center rounded-full border border-orange-900 px-4 py-2 text-sm lg:text-base font-bold font-opensans text-orange-800 hover:bg-orange-50'
          >
            Join now
          </Link>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
