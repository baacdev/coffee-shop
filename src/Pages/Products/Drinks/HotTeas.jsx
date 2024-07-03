import { useState } from 'react'
import { Dialog, DialogPanel, Radio, RadioGroup, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const hotTeas = [
  {
    id: 1,
    name: 'Chai tea with spices',
    imageSrc: '/assets/img/drinks/hot-teas/hot-tea-chai-tea-with-spices.avif',
    imageAlt: 'A mug filled with cinnamon and cardamom, ready for a warm and comforting drink.',
    price: '$4.30',
    description: 'Aromatic drink that blends black tea with various herbs and spices.',
    sizes: [
      {
        name: 'Alto',
        milliliters: '300',
        price: '$4.30',
        inStock: true,
      },
      {
        name: 'Grande',
        milliliters: '400',
        price: '$4.85',
        inStock: false,
      },
      {
        name: 'Venti',
        milliliters: '500',
        price: '$5.10',
        inStock: false,
      },
    ],
  },
  {
    id: 2,
    name: 'Chamomile herbal tea',
    imageSrc: '/assets/img/drinks/hot-teas/hot-tea-chamomile-herbal-tea.avif',
    imageAlt: 'A cup of chamomile tea with chamomile flowers floating on top.',
    price: '$4.30',
    description: 'Soft notes of apple, and in the cup a soft sweetness similar to honey is perceived.',
    sizes: [
      {
        name: 'Alto',
        milliliters: '300',
        price: '$4.30',
        inStock: true,
      },
      {
        name: 'Grande',
        milliliters: '400',
        price: '$4.85',
        inStock: false,
      },
      {
        name: 'Venti',
        milliliters: '500',
        price: '$5.10',
        inStock: true,
      },
    ],
  },
  {
    id: 3,
    name: 'Matcha green tea',
    imageSrc: '/assets/img/drinks/hot-teas/hot-tea-matcha-green-tea.avif',
    imageAlt: 'A cup of green tea on a wooden table.',
    price: '$4.30',
    description: 'High quality green tea ground into powder.',
    sizes: [
      {
        name: 'Alto',
        milliliters: '300',
        price: '$4.30',
        inStock: false,
      },
      {
        name: 'Grande',
        milliliters: '400',
        price: '$4.85',
        inStock: true,
      },
      {
        name: 'Venti',
        milliliters: '500',
        price: '$5.10',
        inStock: true,
      },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function HotTeas() {
  const [open, setOpen] = useState(false)
  const [selectedHotTea, setSelectedHotTea] = useState(hotTeas[0])
  const [selectedSize, setSelectedSize] = useState(selectedHotTea.sizes[0])

  const handleHotTeaClick = (hotTea) => {
    setSelectedHotTea(hotTea)
    setSelectedSize(hotTea.sizes[0])
    setOpen(true)
  }
  return (
    <div className='flex flex-col justify-between mx-auto max-w-2xl px-4 py-1 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8'>
      <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-20'>
        {hotTeas.map((hotTea) => (
          <div key={hotTea.id} className='group relative flex' onClick={() => handleHotTeaClick(hotTea)}>
            <div className='flex-shrink-0 size-32 lg:h-60 lg:w-60 overflow-hidden'>
              <img
                src={hotTea.imageSrc}
                alt={hotTea.imageAlt}
                className='h-full w-full object-cover object-center rounded-full'
              />
            </div>
            <div className='ml-4 flex flex-col justify-center'>
              <h3 className='text-gray-700 text-base font-bold font-opensans'>
                <a className='hover:text-orange-500 cursor-pointer'>
                  <span aria-hidden='true' className='absolute inset-0' />
                  {hotTea.name}
                </a>
              </h3>
              <p className='text-gray-900 text-sm font-semibold font-opensans'>From: {hotTea.price}</p>
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
                          src={selectedHotTea.imageSrc}
                          alt={selectedHotTea.imageAlt}
                          className='object-cover object-center size-full lg:size-auto'
                        />
                      </div>
                      <div className='sm:col-span-8 lg:col-span-7'>
                        <h2 className='text-2xl font-bold text-gray-900 sm:pr-12'>{selectedHotTea.name}</h2>

                        <section aria-labelledby='information-heading' className='mt-2'>
                          <h3 id='information-heading' className='sr-only'>
                            Hot Tea information
                          </h3>

                          <p className='text-sm text-gray-900 lg:text-lg'>{selectedHotTea.description}</p>
                        </section>

                        <section aria-labelledby='options-heading' className='mt-10'>
                          <form>
                            {/* Size */}
                            <fieldset aria-label='Choose a Size'>
                              <legend className='text-sm font-medium text-gray-900'>Size</legend>
                              <RadioGroup
                                value={selectedSize}
                                onChange={setSelectedSize}
                                className='mt-4 flex justify-around space-x-3'
                              >
                                {selectedHotTea.sizes.map((size) => (
                                  <Radio
                                    key={size.name}
                                    value={size}
                                    disabled={!size.inStock}
                                    className={({ focus }) =>
                                      classNames(
                                        size.inStock
                                          ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                          : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                        focus ? 'ring-2 ring-indigo-500' : '',
                                        'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                      )
                                    }
                                  >
                                    {/* Check if it is in stock(true) or not(false) */}
                                    {({ checked, focus }) => (
                                      <>
                                        <div className='text-center' aria-hidden='true'>
                                          <h3 className='text-sm text-gray-700'>
                                            {size.milliliters} ml
                                          </h3>
                                          <p className='mt-1 text-sm text-gray-500'>{size.price}</p>
                                        </div>
                                        {size.inStock ? (
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
                                ))}
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

export default HotTeas