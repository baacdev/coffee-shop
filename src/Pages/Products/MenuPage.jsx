import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import BebidasPage from './Bebidas/BebidasPage';
import AlimentosPage from './Alimentos/AlimentosPage';
import MercanciaPage from './Mercancia/MercanciaPage';
import PacksPage from './Packs/PacksPage';

const drinks = [
  {
    id: 1,
    name: 'Frappuccinos',
    imageSrc: 'https://www.clarin.com/2020/09/30/EjIM9hfpm_1200x0__1.jpg',
    imageAlt: 'Front of mens Basic Tee in black.',
  },
  {
    id: 2,
    name: 'Espresso Caliente',
    imageSrc: 'https://previews.123rf.com/images/nerudol/nerudol1611/nerudol161100144/66710989-taza-de-espresso-sabroso-fresco-de-caf%C3%A9-caliente-con-granos-de-caf%C3%A9-sobre-fondo-oscuro.jpg',
    imageAlt: 'Front of mens Basic Tee in black.',
  },
  {
    id: 3,
    name: 'Espresso Frío',
    imageSrc: 'https://www.breville.com/content/dam/breville-brands/coffeehub/language-masters/mx_es/recipes/recipe-hero-stills/Recipes_Banner8_1200x1200_IcedLatte.jpeg',
    imageAlt: 'Front of mens Basic Tee in black.',
  },
  {
    id: 4,
    name: 'Refreshers',
    imageSrc: 'https://www.foodandwine.com/thmb/uDcO7GMWP3NqyUy4fGQhTFmpdNk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Starbucks-Spicy-Refreshers-FT-BLOG0424-2a27c6129e7948ff80f84126e9b13c83.jpg',
    imageAlt: 'Front of mens Basic Tee in black.',
  },
  {
    id: 5,
    name: 'Otras bebidas calientes',
    imageSrc: 'https://i0.wp.com/thehappening.com/wp-content/uploads/2018/08/reglas-etiqueta-tomar-cafe-te-bebidas-calientes-3.jpg?fit=1024%2C694&ssl=1',
    imageAlt: 'Front of mens Basic Tee in black.',
  },
  {
    id: 6,
    name: 'Otras bebidas frías',
    imageSrc: 'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2023/06/29/16880581793532.png',
    imageAlt: 'Front of mens Basic Tee in black.',
  },
  {
    id: 7,
    name: 'Shaken Espresso',
    imageSrc: 'https://www.tasteofhome.com/wp-content/uploads/2023/04/FT23_272959_ST_3_03_2-Starbucks-Shaken-Espresso-TMB-studio.jpg',
    imageAlt: 'Front of mens Basic Tee in black.',
  },

]
const foods = [
  {
    id: 1,
    name: 'Pastries',
    imageSrc: 'https://5.imimg.com/data5/ZR/JQ/TK/IOS-15292022/chocolate-pastries.jpeg',
    imageAlt: 'Front of mens Basic Tee in black.',
  },
  {
    id: 2,
    name: 'Postres',
    imageSrc: 'https://www.paulinacocina.net/wp-content/uploads/2024/01/receta-de-postre-de-maracuya-Paulina-Cocina-Recetas-1200x675.jpg',
    imageAlt: 'Front of mens Basic Tee in black.',
  },
  {
    id: 3,
    name: 'Sandwiches',
    imageSrc: 'https://www.eatingwell.com/thmb/LQXwKPvgYghCs2LH7bwlsx0gD1Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cucumber-caprese-sandwich-6343482dece14c3d876bc7bac317ecd8.jpg',
    imageAlt: 'Front of mens Basic Tee in black.',
  },
]
const merchs = [
  {
    id: 1,
    name: 'Café en Grano',
    imageSrc: 'https://www.nestleprofessional.es/sites/default/files/styles/np_hero_small_small/public/2023-09/saco-de-granos-de-caf.png?itok=2d4Z3hmK',
    imageAlt: 'Front of mens Basic Tee in black.',
  },
  {
    id: 2,
    name: 'Merch',
    imageSrc: 'https://img.freepik.com/vector-gratis/maqueta-diseno-cafeteria_1284-21752.jpg',
    imageAlt: 'Front of mens Basic Tee in black.',
  },
]
const packs = [
  {
    id: 1,
    name: 'Coffee for Share',
    imageSrc: 'https://lawhimsy.com/wp-content/uploads/2019/01/fika-means-having-coffee-with-friends-and-enjoying-the-good-things-in-life-via-lawhimsy.jpg?w=848',
    imageAlt: 'Front of mens Basic Tee in black.',
  },
  {
    id: 2,
    name: 'Antojos de la tarde',
    imageSrc: 'https://www.starbucks.pe/Multimedia/subsecciones/PACK_ANTOJOS_V3.png',
    imageAlt: 'Front of mens Basic Tee in black.',
  },
  {
    id: 3,
    name: 'Desayunos',
    imageSrc: 'https://bestbarsinlima.com/wp-content/uploads/2024/03/desayuno-frances-cuadrado-1-1024x1024.jpg',
    imageAlt: 'Front of mens Basic Tee in black.',
  },
]

function MenuPage() {
  const navigate = useNavigate();  // Inicializando la función navigate del gancho useNavigate para enrutamiento
  const location = useLocation();  // Inicializando el objeto location del gancho useLocation para la ruta URL actual

  // Función para formatear el nombre del ítem para URL eliminando acentos y convirtiendo a minúsculas con guiones
  const formatNameForUrl = (name) => {
    return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
  };

  // Función para manejar el clic en las secciones del menú y navegar a URLs específicas
  const handleSectionClick = (section, itemName, event) => {
    event.preventDefault();  // Evitando el comportamiento de enlace predeterminado
    navigate(`/ecommerce/section/menu/${section}/${formatNameForUrl(itemName)}`);  // Navegando a una URL específica según la sección y nombre del ítem
  };

  // Función para renderizar diferentes secciones del menú según la ruta URL actual
  const renderSection = () => {
    const path = location.pathname;  // Obteniendo la ruta pathname actual desde el objeto location

    // Renderizando componentes de sección específicos según la ruta URL actual
    if (path.includes('/bebidas')) {
      return <BebidasPage />;
    } else if (path.includes('/alimentos')) {
      return <AlimentosPage />;
    } else if (path.includes('/merch-y-cafe-en-grano')) {
      return <MercanciaPage />;
    } else if (path.includes('/packs-y-boxes')) {
      return <PacksPage />;
    } else {
      return (
        // Renderización por defecto para la sección principal del menú con bebidas, alimentos, mercancía y packs
        <div className='lg:col-span-5 min-h-[100vh]'>
          {/* Sección de Bebidas */}
          <div className='bg-white border-gray-200 lg:border-l'>
            <div className='mx-auto max-w-screen-2xl px-4 border-gray-200 border-b sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between'>
              <div className='min-w-0'>
              <h1 className='mt-0 mb-10 text-2xl font-extrabold font-opensans leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>
                  Menu
                </h1>
                <h1 className='mt-0 mb-2 text-xl font-bold font-opensans leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight'>
                  Bebidas
                </h1>
              </div>
            </div>
            {/* Cuadrícula de ítems de bebidas */}
            <div className='flex justify-center mx-auto max-w-2xl px-4 py-1 sm:px-6 sm:py10 lg:max-w-7xl lg:px-8'>
              <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-20'>
                {drinks.map((drink) => (
                  <div key={drink.id} className='group relative'>
                    <div className='h-60 w-60 overflow-hidden rounded-full bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60 lg:w-60'>
                      <img
                        src={drink.imageSrc}
                        alt={drink.imageAlt}
                        className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                      />
                    </div>
                    <div className='mt-4 flex justify-center'>
                      <div>
                        <h3 className='text-base font-semibold font-opensans text-gray-700'>
                          <Link className='hover:text-orange-500' href='#' onClick={(e) => handleSectionClick('bebidas', drink.name, e)}>
                            <span aria-hidden='true' className='absolute inset-0' />
                            {drink.name}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Sección de Alimentos */}
            <div className='mx-auto max-w-screen-2xl px-4 border-gray-200 border-b sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between'>
              <div className='min-w-0'>
                <h1 className='mt-10 mb-2 text-xl font-bold font-opensans leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight'>
                  Alimentos
                </h1>
              </div>
            </div>
            {/* Cuadrícula de ítems de alimentos */}
            <div className='flex justify-center mx-auto max-w-2xl px-4 py-1 sm:px-6 sm:py10 lg:max-w-7xl lg:px-8'>
              <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-20'>
                {foods.map((food) => (
                  <div key={food.id} className='group relative'>
                    <div className='h-60 w-60 overflow-hidden rounded-full bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60 lg:w-60'>
                      <img
                        src={food.imageSrc}
                        alt={food.imageAlt}
                        className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                      />
                    </div>
                    <div className='mt-4 flex justify-center'>
                      <div>
                        <h3 className='text-base font-semibold font-opensans text-gray-700'>
                          <Link className='hover:text-orange-500' href='#' onClick={(e) => handleSectionClick('alimentos', food.name, e)}>
                            <span aria-hidden='true' className='absolute inset-0' />
                            {food.name}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Sección de Merch y Café en Grano */}
            <div className='mx-auto max-w-screen-2xl px-4 border-gray-200 border-b sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between'>
              <div className='min-w-0'>
                <h1 className='mt-10 mb-2 text-xl font-bold font-opensans leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight'>
                  Merch y café en grano
                </h1>
              </div>
            </div>
            {/* Cuadrícula de ítems de merch y café en grano */}
            <div className='flex justify-center mx-auto max-w-2xl px-4 py-1 sm:px-6 sm:py10 lg:max-w-7xl lg:px-8'>
              <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-20'>
                {merchs.map((merch) => (
                  <div key={merch.id} className='group relative'>
                    <div className='h-60 w-60 overflow-hidden rounded-full bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60 lg:w-60'>
                      <img
                        src={merch.imageSrc}
                        alt={merch.imageAlt}
                        className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                      />
                    </div>
                    <div className='mt-4 flex justify-center'>
                      <div>
                        <h3 className='text-base font-semibold font-opensans text-gray-700'>
                          <Link className='hover:text-orange-500' href='#' onClick={(e) => handleSectionClick('merch-y-cafe-en-grano', merch.name, e)}>
                            <span aria-hidden='true' className='absolute inset-0' />
                            {merch.name}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Sección de Packs y Boxes */}
            <div className='mx-auto max-w-screen-2xl px-4 border-gray-200 border-b sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between'>
              <div className='min-w-0'>
                <h1 className='mt-10 mb-2 text-xl font-bold font-opensans leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight'>
                  Packs y boxes
                </h1>
              </div>
            </div>
            {/* Cuadrícula de ítems de packs y boxes */}
            <div className='flex justify-center mx-auto max-w-2xl px-4 py-1 sm:px-6 sm:py10 lg:max-w-7xl lg:px-8'>
              <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-20'>
                {packs.map((pack) => (
                  <div key={pack.id} className='group relative'>
                    <div className='h-60 w-60 overflow-hidden rounded-full bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60 lg:w-60'>
                      <img
                        src={pack.imageSrc}
                        alt={pack.imageAlt}
                        className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                      />
                    </div>
                    <div className='mt-4 flex justify-center'>
                      <div>
                        <h3 className='text-base font-semibold font-opensans text-gray-700'>
                          <Link className='hover:text-orange-500' href='#' onClick={(e) => handleSectionClick('packs-y-boxes', pack.name, e)}>
                            <span aria-hidden='true' className='absolute inset-0' />
                            {pack.name}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      );
    }
  };

  // Renderizado principal de la página de menú
  return (
    <div className='bg-white'>
      <main className='mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8'>
        {/* Sección principal del menú */}
        <section aria-labelledby='menu-heading' className='pb-24 pt-6'>
          <h2 id='menu-heading' className='sr-only'>Menu</h2>
          {/* Cuadrícula para menú principal con columnas */}
          <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-6'>
            {/* Formulario y listas de enlaces para diferentes secciones del menú (oculto en pantallas pequeñas) */}
            <form className='hidden lg:block'>
              {/* Lista de bebidas */}
              <h3 className='text-xl font-bold font-opensans text-gray-900 pb-3'>BEBIDAS</h3>
              <ul role='list' className='space-y-3 border-b border-gray-200 pb-6 text-sm font-semibold font-opensans text-gray-500'>
                {drinks.map((drink) => (
                  <li key={drink.name}>
                    {/* Enlaces para cada bebida que manejan clics para navegar */}
                    <Link className='hover:text-orange-500' href='#' onClick={(e) => handleSectionClick('bebidas', drink.name, e)}>{drink.name}</Link>
                  </li>
                ))}
              </ul>

              {/* Lista de alimentos */}
              <h3 className='text-xl font-bold font-opensans text-gray-900 pb-3'>ALIMENTOS</h3>
              <ul role='list' className='space-y-3 border-b border-gray-200 pb-6 text-sm font-semibold font-opensans text-gray-500'>
                {foods.map((food) => (
                  <li key={food.name}>
                    {/* Enlaces para cada alimento que manejan clics para navegar */}
                    <Link className='hover:text-orange-500' href='#' onClick={(e) => handleSectionClick('alimentos', food.name, e)}>{food.name}</Link>
                  </li>
                ))}
              </ul>

              {/* Lista de merch y café en grano */}
              <h3 className='text-xl font-bold font-opensans text-gray-900 pb-3'>MERCH Y CAFÉ EN GRANO</h3>
              <ul role='list' className='space-y-3 border-b border-gray-200 pb-6 text-sm font-semibold font-opensans text-gray-500'>
                {merchs.map((merch) => (
                  <li key={merch.name}>
                    {/* Enlaces para cada ítem de merch que manejan clics para navegar */}
                    <Link className='hover:text-orange-500' href='#' onClick={(e) => handleSectionClick('merch-y-cafe-en-grano', merch.name, e)}>{merch.name}</Link>
                  </li>
                ))}
              </ul>

              {/* Lista de packs y boxes */}
              <h3 className='text-xl font-bold font-opensans text-gray-900 pb-3'>PACKS Y BOXES</h3>
              <ul role='list' className='space-y-3 border-b border-gray-200 pb-6 text-sm font-semibold font-opensans text-gray-500'>
                {packs.map((pack) => (
                  <li key={pack.name}>
                    {/* Enlaces para cada pack que manejan clics para navegar */}
                    <Link className='hover:text-orange-500' href='#' onClick={(e) => handleSectionClick('packs-y-boxes', pack.name, e)}>{pack.name}</Link>
                  </li>
                ))}
              </ul>
            </form>

            {/* Sección principal del menú para renderizar secciones */}
            <div className='lg:col-span-5'>
              {renderSection()}  {/* Renderizando la sección de acuerdo a la ruta URL */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MenuPage