import { useState } from 'react'
import { Dialog, DialogPanel, Radio, RadioGroup, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const merchandise = [
  {
    id: 1,
    name: 'Cardboard cups with plastic lids - 12 oz',
    href: '#',
    imageSrc: '/assets/img/merchandise/cold-cups/cold-cups-cardboard-cups-with-plastic-lids.avif',
    imageAlt: 'Three coffee cups arranged neatly on a wooden table.',
    price: '$9.00',
    description: 'Cardboard cups with lined interior and plastic lid. More environmentally friendly option compared to plastic.',
    inStock: true,
  },
  {
    id: 2,
    name: 'Plastic cups with seal lids - 16 oz',
    href: '#',
    imageSrc: '/assets/img/merchandise/cold-cups/cold-cups-plastic-cups-with-seal-lids.avif',
    imageAlt: 'A white cup with a black handle on a wooden cutting board.',
    price: '$9.00',
    description: 'PET plastic cups with seal lid to avoid spills. Ideal for beverages that are taken to go.',
    inStock: false,
  },
  {
    id: 3,
    name: 'Reusable Cold Cup 24 oz',
    href: '#',
    imageSrc: '/assets/img/merchandise/cold-cups/cold-cups-reusable-cold-cup.avif',
    imageAlt: 'A black cup with a straw inside, ready for a refreshing drink.',
    price: '$10.00',
    description: 'Enjoy your cold beverages with our Reusable Cold Cup. Made of durable, BPA-free plastic, this cup includes a secure lid and reusable straw. Perfect for iced coffee, smoothies and more, its a stylish and sustainable option for your everyday beverages.',
    inStock: true,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function ColdCups() {
  const [open, setOpen] = useState(false)
  const [selectedMerchandise, setSelectedMerchandise] = useState(merchandise[0])
  const [selectedPrice, setSelectedPrice] = useState(merchandise[0].price)

  const handleMerchandiseClick = (item) => {
    setSelectedMerchandise(item)
    setSelectedPrice(item.price)
    setOpen(true)
  }

  return (
    <div className='flex flex-col justify-between mx-auto max-w-2xl px-4 py-1 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8'>
      <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-20'>
        {merchandise.map((item) => (
          <div key={item.id} className='group relative flex' onClick={() => handleMerchandiseClick(item)}>
            <div className='flex-shrink-0 size-32 lg:h-60 lg:w-60 overflow-hidden'>
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                className='h-full w-full object-cover object-center rounded-full'
              />
            </div>
            <div className='ml-4 flex flex-col justify-center'>
              <h3 className='text-gray-700 text-base font-bold font-opensans'>
                <a className='hover:text-orange-500 cursor-pointer'>
                  <span aria-hidden='true' className='absolute inset-0' />
                  {item.name}
                </a>
              </h3>
              <p className='text-gray-900 text-sm font-semibold font-opensans'>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <Transition show={open}>
        <Dialog className='relative z-10' onClose={setOpen}>
          <TransitionChild
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block' />
          </TransitionChild>

          <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
            <div className='flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4'>
              <TransitionChild
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 md:translate-y-0 md:scale-95'
                enterTo='opacity-100 translate-y-0 md:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 md:scale-100'
                leaveTo='opacity-0 translate-y-4 md:translate-y-0 md:scale-95'
              >
                <DialogPanel className='flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl'>
                  <div className='relative flex w-full items-start overflow-hidden bg-white px-4 pb-8 pt-16 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8'>
                    <button
                      type='button'
                      className='absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8'
                      onClick={() => setOpen(false)}
                    >
                      <span className='sr-only'>Close</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    </button>

                    <div className='grid grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8 w-full'>
                      <div className='flex-shrink-0 size-60 lg:h-full lg:w-full overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5 flex items-center justify-center mx-auto'>
                        <img
                          src={selectedMerchandise.imageSrc}
                          alt={selectedMerchandise.imageAlt}
                          className='object-cover object-center size-full lg:size-auto'
                        />
                      </div>
                      <div className='sm:col-span-8 lg:col-span-7'>
                        <h2 className='text-2xl font-bold text-gray-900 sm:pr-12'>{selectedMerchandise.name}</h2>

                        <section aria-labelledby='information-heading' className='mt-2'>
                          <h3 id='information-heading' className='sr-only'>
                            Merchandise information
                          </h3>
                          <p className='text-sm text-gray-900 lg:text-lg'>{selectedMerchandise.description}</p>
                        </section>

                        <section aria-labelledby='options-heading' className='mt-10'>
                          <form>
                            {/* Price */}
                            <fieldset aria-label='Choose a price'>
                              <legend className='text-sm font-medium text-gray-900'>Price</legend>
                              <RadioGroup
                                value={selectedPrice}
                                onChange={setSelectedPrice}
                                className='mt-4 flex justify-around space-x-3'
                              >
                                <Radio
                                  key={selectedMerchandise.name}
                                  value={selectedMerchandise.price}
                                  disabled={!selectedMerchandise.inStock}
                                  className={({ focus }) =>
                                    classNames(
                                      selectedMerchandise.inStock
                                        ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                        : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                      focus ? 'ring-2 ring-indigo-500' : '',
                                      'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                    )
                                  }
                                >
                                  {({ checked, focus }) => (
                                    <>
                                      <div className='text-center' aria-hidden='true'>
                                        <h3 className='text-sm text-gray-700'>
                                          {selectedMerchandise.price}
                                        </h3>
                                      </div>
                                      {selectedMerchandise.inStock ? (
                                        <span
                                          className={classNames(
                                            checked ? 'border-orange-500' : 'border-transparent',
                                            focus ? 'border' : 'border-2',
                                            'pointer-events-none absolute -inset-px rounded-md'
                                          )}
                                          aria-hidden='true'
                                        />
                                      ) : (
                                        <span
                                          aria-hidden='true'
                                          className='pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200'
                                        >
                                          <svg
                                            className='absolute inset-0 h-full w-full stroke-2 text-gray-200'
                                            viewBox='0 0 100 100'
                                            preserveAspectRatio='none'
                                            stroke='currentColor'
                                          >
                                            <line x1={0} y1={100} x2={100} y2={0} vectorEffect='non-scaling-stroke' />
                                          </svg>
                                        </span>
                                      )}
                                    </>
                                  )}
                                </Radio>
                              </RadioGroup>
                            </fieldset>

                            <button
                              type='submit'
                              className='mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-orange-500 px-8 py-3 text-base font-medium text-white hover:bg-orange-600 focus-none'
                            >
                              Add to cart
                            </button>
                          </form>
                        </section>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default ColdCups