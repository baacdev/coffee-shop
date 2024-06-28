import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/outline';

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className='bg-white flex min-h-[90vh] flex-1 flex-col px-4 py-1 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm text-center'>
          <h2 className='mt-10 text-center text-2xl font-black font-opensans leading-9 tracking-tight text-gray-900'>
            Create an account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-4' action='#' method='POST'>
            <a className='text-left text-sm font-bold tracking-tight text-gray-500'>
              * indicates required field
            </a>
            <div>
              <h1 className='text-xl font-black font-opensans mb-4'>Personal information</h1>
              <label htmlFor='firstName' className='text-gray-700 text-sm font-opensans font-black leading-6 block'>
                * First names
              </label>
              <div className='mt-2'>
                <input
                  id='firstName'
                  name='firstName'
                  type='firstName'
                  autoComplete='firstName'
                  required
                  className='block w-full rounded-md border-none px-3.5 py-2 text-gray-900 font-opensans shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div>
              <label htmlFor='lastName' className='text-gray-700 text-sm font-opensans font-black leading-6 block'>
                * Last name
              </label>
              <div className='mt-2'>
                <input
                  id='lastName'
                  name='lastName'
                  type='lastName'
                  autoComplete='lastName'
                  required
                  className='block w-full rounded-md border-none px-3.5 py-2 text-gray-900 font-opensans shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <h1 className='text-xl font-black font-opensans mt-10 mb-4'>Account security</h1>
              <label htmlFor='email' className='text-gray-700 text-sm font-opensans font-black leading-6 block'>
                * Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='block w-full rounded-md border-none px-3.5 py-2 text-gray-900 font-opensans shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label htmlFor='password' className='text-gray-700 text-sm font-opensans font-black leading-6 block'>
                  * Password
                </label>
              </div>
              <div className='mt-2 mb-3 relative'>
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
              <a className='text-left text-sm font-bold tracking-tight text-gray-500'>
                Create a password of 8 to 25 characters that includes at least 1 upper and 1 lower case letter, 1 number and 1 special character such as an exclamation mark or an asterisk.
              </a>
            </div>

            <div className='flex items-center justify-center'>
              <button
                type='submit'
                className='shadow-lg bg-orange-800 w-fit ml-auto rounded-full border-none px-4 py-2 text-sm lg:text-base font-bold font-opensans text-gray-100 hover:bg-orange-900'
              >
                Register
              </button>
            </div>
          </form>
          <div className='sm:mx-auto sm:w-full sm:max-w-sm text-left mb-10'>
            <p className='mt-10 text-sm font-semibold font-opensans text-gray-500'>
              Already have an account?{' '}
              <Link to={'/account/login'} className='font-black underline underline-offset-2 text-orange-800 hover:text-orange-900'>
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterPage