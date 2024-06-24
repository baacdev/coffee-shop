import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const product = {
  name: 'Basic Tee 6-Pack ',
  price: '$192',
  rating: 3.9,
  reviewCount: 117,
  href: '#',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg',
  imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: 'XXL', inStock: true },
    { name: 'XXXL', inStock: false },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function PruebasPage() {
  const [open, setOpen] = useState(true)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  return (
    <div className='relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8'>
      <button
        type='button'
        className='absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8'
        onClick={() => setOpen(false)}
      >
        <span className='sr-only'>Close</span>
        <XMarkIcon className='h-6 w-6' aria-hidden='true' />
      </button>
      <div className='grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8'>
        <div className='aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5'>
          <img src={product.imageSrc} alt={product.imageAlt} className='object-cover object-center' />
        </div>
        <div className='sm:col-span-8 lg:col-span-7'>
          <h2 className='text-2xl font-bold text-gray-900 sm:pr-12'>{product.name}</h2>

          <section aria-labelledby='information-heading' className='mt-2'>
            <h3 id='information-heading' className='sr-only'>
              Product information
            </h3>
            <p className='text-2xl text-gray-900'>{product.price}</p>
          </section>
          <section aria-labelledby='options-heading' className='mt-10'>
            <h3 id='options-heading' className='sr-only'>
              Product options
            </h3>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PruebasPage