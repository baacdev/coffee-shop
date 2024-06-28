import React from 'react'
import { Link } from 'react-router-dom';

function GiftCardsPage() {
  return (
    <>
      <main className="grid min-h-[90vh] place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <span className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl before:block before:absolute before:-inset-2 before:-skew-y-2 before:bg-orange-600 relative inline-block">
            <span className="relative text-white">Próximamente</span>
          </span>
          <p className="text-2xl font-semibold italic text-center text-slate-900 pt-5">Lo sentimos, actualmente no disponemos de tarjetas regalo.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-x-6">
            <Link
              to={'/'}
              className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-bold text-white font-opensans shadow-sm hover:bg-orange-700"
            >
              Página de inicio
            </Link>
            <Link
              to={'/menu'}
              className="pt-10 text-sm font-semibold text-gray-900 font-opensans hover:-translate-y-1 hover:scale-100 duration-500"
            >
              Seguir comprando. <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default GiftCardsPage