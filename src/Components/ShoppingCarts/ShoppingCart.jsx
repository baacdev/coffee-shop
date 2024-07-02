import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const orders = [
  {
    id: 1,
    name: 'Pineapple Cloud Cake',
    href: '#',
    imageSrc: 'https://globalassets.starbucks.com/digitalassets/products/food/PineappleCloudCake.jpg?impolicy=1by1_medium_630',
    imageAlt: 'Food',
    price: '$3.00',
    description: '240 calories.',
    inStock: true,
  },
  {
    id: 2,
    name: 'Double Chocolate Brownie',
    href: '#',
    imageSrc: 'https://globalassets.starbucks.com/digitalassets/products/food/SBX20190715_DoubleChocolateChunkBrownie.jpg?impolicy=1by1_medium_630',
    imageAlt: 'Food',
    price: '$2.50',
    description: '480 calories',
    inStock: true,
  },
  {
    id: 3,
    name: 'Mocha Cookie Crumble Frappuccino®',
    imageSrc: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20211210_MochaCookieCrumbleFrapp.jpg?impolicy=1by1_wide_topcrop_630',
    imageAlt: 'Drink',
    price: '$4.50',
    description: '480 calories',
  },
  {
    id: 4,
    name: 'Cookies & Creme Frappuccino',
    imageSrc: 'https://www.starbucks.es/sites/starbucks-es/files/styles/c10_2_col_text_560x467/public/2021-11/Cookies%20%26%20Cream%20Frappuccino%C2%AE%20.jpeg.webp?itok=ROToAbHv',
    imageAlt: 'Drink',
    price: '$4.00',
  },
  {
    id: 5,
    name: 'Chocolate Cookies & Creme Frappuccino',
    imageSrc: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190531_ChocolateCookieCrumbleFrappCreme.jpg?impolicy=1by1_wide_topcrop_630',
    imageAlt: 'Drink',
    price: '$3.00',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function ShoppingCart() {
  return (
    <div className='bg-white min-h-[100vh]'>
      <div className='pt-6'>
        <h1 className='text-2xl text-center font-bold text-gray-900 font-opensans sm:text-3xl uppercase'>Shopping cart</h1>
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
                      <a>1</a>
                      <button className='text-orange-800'>-</button>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>

          {/* Order summary */}
          <div className='bg-gray-50 rounded-xl px-7 pt-5 pb-10 mt-4 lg:mt-0 lg:sticky lg:top-5 self-start'>
            <h2 className='text-xl font-bold font-opensans'>Summary of purchase</h2>
            <div className='mt-5 pb-3 border-gray-200 border-b flex justify-between'>
              <h3 className='text-sm text-gray-500 font-opensans'>
                <span aria-hidden='true' />
                Subtotal
              </h3>
              <p className='text-sm font-semibold text-gray-900 font-opensans'>$14.00</p>
            </div>
            <div className='mt-2 pb-3 border-gray-200 border-b flex justify-between'>
              <h3 className='text-sm text-gray-500 font-opensans'>
                <span aria-hidden='true' />
                Order summary
              </h3>
              <p className='text-sm font-semibold text-gray-900 font-opensans'>$0.00</p>
            </div>
            <div className='mt-2 pb-3 border-gray-200 border-b flex justify-between'>
              <h3 className='text-sm text-gray-500 font-opensans'>
                <span aria-hidden='true' />
                Tax estimation
              </h3>
              <p className='text-sm font-semibold text-gray-900 font-opensans'>$1.90</p>
            </div>
            <div className='mt-2 pb-3 flex justify-between'>
              <h3 className='text-base font-bold text-gray-900 font-opensans'>
                <span aria-hidden='true' />
                Total to pay:
              </h3>
              <p className='text-base font-semibold text-gray-900 font-opensans'>$15.90</p>
            </div>

            <button
              type='submit'
              className='mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-orange-700 px-8 py-3 text-base font-bold text-white font-opensans hover:bg-orange-800'
            >
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart
