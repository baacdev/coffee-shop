import React from 'react'

function ForgotPasswordPage() {
  return (
    <>
      <div className='bg-white flex min-h-[90vh] flex-1 flex-col px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h1 className='text-4xl lg:text-5xl text-center font-black font-opensans text-black mb-10 lg:mb-20'>
            Forgot my password
          </h1>
          <a className='text-left text-sm font-semibold tracking-tight text-gray-900'>
            We just need to confirm your email address to send you the instructions to reset your password.
          </a>
        </div>

        <div className='rounded-xl mt-5 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' action='#' method='POST'>
            <div>
              <a className='text-left text-sm font-bold tracking-tight text-gray-900'>
                * indicates required field
              </a>
              <label htmlFor='email' className='text-gray-700 text-sm font-bold font-opensans mt-5 block leading-6'>
                Email address
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
              <button
                type='submit'
                className='shadow-lg bg-orange-800 w-fit ml-auto rounded-full border-none px-4 py-2 text-sm lg:text-base font-bold font-opensans text-gray-100 hover:bg-orange-900'
              >
                Reset password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ForgotPasswordPage