import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const orders = [
  {
    id: 1,
    name: 'Muffin de Naranja',
    href: '#',
    imageSrc: 'https://www.starbucks.pe/Multimedia/productos/MUFFIN_DE_NARANJA_Y_CHOCOCHIPS_V2.png',
    imageAlt: 'Alimento',
    price: 'S/ 9.00',
    description: 'Muffin realizado con harina de trigo, aceite vegetal, huevos, jugo de naranja, ralladura de naranja, cobertura bitter, margarina, azucar, escencia de vainilla y naranja. Porción individual. Imágenes referenciales.',
    inStock: true,
  },
  {
    id: 2,
    name: 'Cake Pop Vainilla',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: 'Alimento',
    price: 'S/ 6.50',
    description: 'Muffin realizado con harina de trigo, aceite vegetal, huevos, jugo de naranja, ralladura de naranja, cobertura bitter, margarina, azucar, escencia de vainilla y naranja. Porción individual. Imágenes referenciales.',
    inStock: true,
  },
  {
    id: 3,
    name: 'Retro Frappuccino',
    imageSrc: 'https://www.starbucks.pe/Multimedia/productos/RETRO_FRAPPUCCINO_202405031709509334.PNG',
    imageAlt: 'Bebida',
    price: 'S/ 16.50',
    description: 'Nuestro frappuccino peruano. Delicioso jarabe de algarrobina mezclada con leche y mocha; decorado con crema batida y topping de algarrobina. Imágenes referenciales.',
  },
  {
    id: 4,
    name: 'Cookies & Creme Frappuccino',
    imageSrc: 'https://www.starbucks.es/sites/starbucks-es/files/styles/c10_2_col_text_560x467/public/2021-11/Cookies%20%26%20Cream%20Frappuccino%C2%AE%20.jpeg.webp?itok=ROToAbHv',
    imageAlt: 'Bebida',
    price: 'S/ 16.50',
  },
  {
    id: 5,
    name: 'Chocolate Cookies & Creme Frappuccino',
    imageSrc: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190531_ChocolateCookieCrumbleFrappCreme.jpg?impolicy=1by1_wide_topcrop_630',
    imageAlt: 'Bebida',
    price: 'S/ 16.50',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function ShoppingCart() {
  return (
    <div className='bg-white min-h-[100vh]'>
      <div className='pt-6'>
        <h1 className='text-2xl text-center font-bold text-gray-900 font-opensans sm:text-3xl uppercase'>Carrito de compras</h1>
        {/* Product info */}
        <div className='mx-auto max-w-2xl px-4 pb-5 pt-5 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8'>

          {/* Description and details */}
          <div className='bg-white px-1 py-10 lg:col-span-2 lg:pt-1'>
            <div className='grid w-full grid-cols-1 pb-5 pt-5 gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-5'>
              {orders.map((order) => (
                <section key={order.id} aria-labelledby='information-heading' className='col-span-12 flex justify-between border-b border-gray-200 pb-10 pt-1'>
                  <div className='flex-shrink-0 size-32 rounded-lg bg-gray-100'>
                    <img
                      src={order.imageSrc}
                      alt={order.imageAlt}
                      className='object-cover object-center size-full'
                    />
                  </div>
                  <div className='ml-5 flex-grow'>
                    <div className='flex justify-between'>
                      <div className='text-sm lg:text-lg font-bold font-opensans text-gray-900'>{order.name}</div>
                      <div className='ml-3'>
                        <button
                          type='button'
                          className='relative p-1 text-gray-400 hover:text-gray-500'
                        >
                          <span className='sr-only'>Close panel</span>
                          <XMarkIcon className='text-gray-700 h-6 w-6' aria-hidden='true' />
                        </button>
                      </div>
                    </div>
                    <p className='text-sm lg:text-base font-semibold text-gray-900 font-opensans mt-1'>{order.price}</p>
                    <div className='text-sm lg:text-base px-2 mt-2 rounded-full border border-orange-600 flex justify-between w-1/2 lg:w-1/6'>
                      <button className='text-orange-800'>+</button>
                      <a>10</a>
                      <button className='text-orange-800'>-</button>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>

          {/* Order summary */}
          <div className='bg-gray-50 rounded-xl px-7 pt-5 pb-10 mt-4 lg:mt-0 lg:sticky lg:top-5 self-start'>
            <h2 className='text-xl font-semibold font-opensans'>Resumen de compra</h2>
            <div className='mt-5 pb-3 border-gray-200 border-b flex justify-between'>
              <h3 className='text-sm text-gray-500 font-opensans'>
                <span aria-hidden='true' />
                Subtotal
              </h3>
              <p className='text-sm font-semibold text-gray-900 font-opensans'>S/ 15.00</p>
            </div>
            <div className='mt-2 pb-3 border-gray-200 border-b flex justify-between'>
              <h3 className='text-sm text-gray-500 font-opensans'>
                <span aria-hidden='true' />
                Order summary
              </h3>
              <p className='text-sm font-semibold text-gray-900 font-opensans'>S/ 3.00</p>
            </div>
            <div className='mt-2 pb-3 border-gray-200 border-b flex justify-between'>
              <h3 className='text-sm text-gray-500 font-opensans'>
                <span aria-hidden='true' />
                Estimación de impuestos
              </h3>
              <p className='text-sm font-semibold text-gray-900 font-opensans'>S/ 7.03</p>
            </div>
            <div className='mt-2 pb-3 flex justify-between'>
              <h3 className='text-base font-semibold text-gray-900 font-opensans'>
                <span aria-hidden='true' />
                Total a pagar:
              </h3>
              <p className='text-base font-semibold text-gray-900 font-opensans'>S/ 150.03</p>
            </div>

            <button
              type='submit'
              className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-8 py-3 text-base font-bold text-white font-opensans hover:bg-orange-700'
            >
              Pagar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart
