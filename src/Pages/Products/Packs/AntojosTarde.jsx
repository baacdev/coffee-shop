import { useState } from 'react'
import { Dialog, DialogPanel, Radio, RadioGroup, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const antojosTarde = [
  {
    id: 1,
    name: 'Muffins 4 share',
    href: '#',
    imageSrc: 'https://www.starbucks.pe/Multimedia/productos/Muffin_4_share_v1.png',
    imageAlt: 'Packs',
    price: 'S/ 32.00',
    description: '¡Compartir siempre es mejor!. Elige 4 muffins de los sabores que más te gustan. Imágenes referenciales. Válido del 06.02.2024 al 26.06.2024.',
    inStock: false,
  },
  {
    id: 2,
    name: 'Momentos Dulces',
    href: '#',
    imageSrc: 'https://www.starbucks.pe/Multimedia/productos/Duo_Engreimiento_V5.png',
    imageAlt: 'Packs',
    price: 'S/ 14.50',
    description: '¡Es momento de engreírnos! Arma tu Dúo, elige tu bebida favorita entre 1 Vainilla Latte, Chocolate , Mocha Frappuccino o Chocolate Creme Frappuccino o Algarrobina Frappuccino y combínalo con 1 galleta, keke o muffin. Imágenes referenciales. Válido del 02.01.2024 al 26.06.2024',
    inStock: true,
  },
  {
    id: 3,
    name: 'Sweet & Share',
    href: '#',
    imageSrc: 'https://www.starbucks.pe/Multimedia/productos/Sweet_Share_V1.png',
    imageAlt: 'Packs',
    price: 'S/ 26.00',
    description: '¡Compartir siempre es mejor!. Elige 2 bebidas entre Mocha Frappuccino, Caramel Frappuccino o Café Frappuccino y combínalo con 1 keke y 1 galleta a elección. Imágenes referenciales. Válido del 02.01.2024 al 26.06.2024. Stock según disponibilidad de tienda.',
    inStock: true,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function AntojosTarde() {
  const [open, setOpen] = useState(false)
  const [selectedAntojoTarde, setSelectedAntojoTarde] = useState(antojosTarde[0])
  const [selectedPrice, setSelectedPrice] = useState(antojosTarde[0].price)

  const handleAntojoTardeClick = (antojoTarde) => {
    setSelectedAntojoTarde(antojoTarde)
    setSelectedPrice(antojoTarde.price)
    setOpen(true)
  }
  return (
    <div className='flex flex-col justify-between mx-auto max-w-2xl px-4 py-1 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8'>
      <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-20'>
        {antojosTarde.map((antojoTarde) => (
          <div key={antojoTarde.id} className='group relative flex' onClick={() => handleAntojoTardeClick(antojoTarde)}>
            <div className='flex-shrink-0 size-32 lg:h-60 lg:w-60 overflow-hidden'>
              <img
                src={antojoTarde.imageSrc}
                alt={antojoTarde.imageAlt}
                className='h-full w-full object-cover object-center'
              />
            </div>
            <div className='ml-4 flex flex-col justify-center'>
              <h3 className='text-gray-700 text-base font-bold font-opensans'>
                <a className='hover:text-orange-500 cursor-pointer'>
                  <span aria-hidden='true' className='absolute inset-0' />
                  {antojoTarde.name}
                </a>
              </h3>
              <p className='text-gray-900 text-sm font-semibold font-opensans'>{antojoTarde.price}</p>
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
                          src={selectedAntojoTarde.imageSrc}
                          alt={selectedAntojoTarde.imageAlt}
                          className='object-cover object-center size-full lg:size-auto'
                        />
                      </div>
                      <div className='sm:col-span-8 lg:col-span-7'>
                        <h2 className='text-2xl font-bold text-gray-900 sm:pr-12'>{selectedAntojoTarde.name}</h2>

                        <section aria-labelledby='information-heading' className='mt-2'>
                          <h3 id='information-heading' className='sr-only'>
                            Cafe Grano information
                          </h3>
                          <p className='text-sm text-gray-900 lg:text-lg'>{selectedAntojoTarde.description}</p>
                        </section>

                        <section aria-labelledby='options-heading' className='mt-10'>
                          <form>
                            {/* Price */}
                            <fieldset aria-label='Choose a price'>
                              <legend className='text-sm font-medium text-gray-900'>Precio</legend>
                              <RadioGroup
                                value={selectedPrice}
                                onChange={setSelectedPrice}
                                className='mt-4 flex justify-around space-x-3'
                              >
                                <Radio
                                  key={selectedAntojoTarde.name}
                                  value={selectedAntojoTarde.price}
                                  disabled={!selectedAntojoTarde.inStock}
                                  className={({ focus }) =>
                                    classNames(
                                      selectedAntojoTarde.inStock
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
                                          {selectedAntojoTarde.price}
                                        </h3>
                                      </div>
                                      {selectedAntojoTarde.inStock ? (
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
                              Add to bag
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

export default AntojosTarde