import React from 'react'

function ForgotPasswordPage() {
  return (
    <>
      <div className='bg-white flex min-h-[90vh] flex-1 flex-col px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h1 className='text-4xl lg:text-5xl text-center font-black font-opensans text-black mb-10 lg:mb-20'>
          Olvidé mi contraceña
          </h1>
          <a className='text-left text-sm font-semibold font-opensanss tracking-tight text-gray-900'>
            Sólo necesitamos confirmar tu correo electrónico para enviarte las instrucciones para restablecer tu contraseña.
          </a>
        </div>

        <div className='rounded-xl mt-5 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' action='#' method='POST'>
            <div>
              <a className='text-left text-sm font-bold font-opensanss tracking-tight text-gray-900'>
                * indica campo obligatorio
              </a>
              <label htmlFor='email' className='text-gray-700 text-sm font-bold font-opensans mt-5 block leading-6'>
                Dirección de correo electrónico
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  className='block w-full rounded-md border-none px-3.5 py-2 text-gray-900 font-opensans shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex w-auto justify-center rounded-md bg-orange-600 px-5 py-1.5 text-sm font-bold font-opensans leading-6 text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'
              >
                Restablecer contraseña
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ForgotPasswordPage