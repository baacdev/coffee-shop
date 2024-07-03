import React from 'react'
import { Link } from 'react-router-dom';

function ElectronicVouchers() {
  return (
    <>
      <main className="bg-white min-h-[90vh] grid place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Electronic Vouchers</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">We are sorry, we do not have this page at the moment.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-x-6">
            <Link
              to={'/'}
              className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-bold text-white font-opensans shadow-sm hover:bg-orange-700"
            >
              Home page
            </Link>
            <Link
              to={'/menu'}
              className="pt-10 text-sm font-semibold text-gray-900 font-opensans hover:-translate-y-1 hover:scale-100 duration-500"
            >
              Continue shopping.  <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default ElectronicVouchers