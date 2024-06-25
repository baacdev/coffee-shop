import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Navbar from './Components/Navbar'

import ScrollToTop from './Components/ScrollToTop'

import AlimentosPage from './Pages/Products/Alimentos/AlimentosPage'
import BebidasPage from './Pages/Products/Bebidas/BebidasPage'
import MercanciaPage from './Pages/Products/Mercancia/MercanciaPage'
import PacksPage from './Pages/Products/Packs/PacksPage'

import LoginPage from './Pages/Account/LoginPage'
import RegisterPage from './Pages/Account/RegisterPage'
import ForgotPasswordPage from './Pages/Account/ForgotPasswordPage'
import RewardsPage from './Pages/rewards/RewardsPage'
import Footer from './Components/Footer'
import MenuPage from './Pages/Products/MenuPage'
import PruebasPage from './Pages/Products/PruebasPage'
import MainAddress from './Pages/Addresses/MainAddress'
import ShoppingCart from './Components/ShoppingCarts/ShoppingCart'
import GiftCardsPage from './Pages/Gifts/GiftCardsPage'

import OurCompany from './Pages/Footer/AboutUs/OurCompany'
import OurCoffee from './Pages/Footer/AboutUs/OurCoffee'
import CustomerService from './Pages/Footer/AboutUs/CustomerService'
import LineAndEthics from './Pages/Footer/AboutUs/LineAndEthics'
import CultureAndValues from './Pages/Footer/OurCulture/CultureAndValues'
import WorkWithUs from './Pages/Footer/OurCulture/WorkWithUs'
import People from './Pages/Footer/SocialImpact/People'
import Planet from './Pages/Footer/SocialImpact/Planet'
import TyC from './Pages/Footer/Polices/TyC'
import FAQ from './Pages/Footer/Polices/FAQ'
import ElectronicVouchers from './Pages/Footer/CustomerSupport/ElectronicVouchers'

function App() {
  return (
    <BrowserRouter>
      {/* Componente ScrollToTop para asegurar que la página se desplace arriba al cambiar de ruta */}
      <ScrollToTop />
      
      {/* Navbar de la aplicación */}
      <Navbar />
      
      <Routes>
        {/* Ruta principal que muestra la página de promociones */}
        <Route path='/' element={<HomePage />} />
        
        {/* Rutas de autenticación */}
        <Route path='/account/login' element={<LoginPage />} />
        <Route path='/account/register' element={<RegisterPage />} />
        <Route path='/account/forgot-password' element={<ForgotPasswordPage />} />
        
        {/* Ruta para mostrar un menú específico */}
        <Route path='/ecommerce/section/menu/*' element={<MenuPage />} />
        
        {/* Rutas para productos específicos */}
        <Route path='/ecommerce/section/bebidas/:drinkName' element={<BebidasPage />} />
        <Route path='/ecommerce/section/alimentos/:foodName' element={<AlimentosPage />} />
        <Route path='/ecommerce/section/merch-y-cafe-en-grano/:merchName' element={<MercanciaPage />} />
        <Route path='/ecommerce/section/packs-y-boxes/:packName' element={<PacksPage />} />
        
        {/* Ruta para localizador de tiendas */}
        <Route path='/ecommerce/store-locator' element={<MainAddress />} />
        
        {/* Ruta para el carrito de compras */}
        <Route path='/ecommerce/cart' element={<ShoppingCart />} />

        {/* Ruta de recompensas*/}
        <Route path='/rewards' element={<RewardsPage /> } />

        {/* Ruta de targetas de regalo*/}
        <Route path='/gift' element={<GiftCardsPage /> } />
        
        {/* Ruta de pruebas, posiblemente para desarrollo */}
        <Route path='/ecommerce/section/pruebas' element={<PruebasPage />} />

         {/* Ruta de los links del footer */}
         <Route path='/our-company' element={<OurCompany /> } />
         <Route path='/our-coffee' element={<OurCoffee /> } />
         <Route path='/customer-service' element={<CustomerService /> } />
         <Route path='/line-and-ethics' element={<LineAndEthics /> } />
         <Route path='/culture-and-values' element={<CultureAndValues /> } />
         <Route path='/work-with-us' element={<WorkWithUs /> } />
         <Route path='/people' element={<People /> } />
         <Route path='/planet' element={<Planet /> } />
         <Route path='/terminos-y-condiciones' element={<TyC /> } />
         <Route path='/preguntas-frecuentes' element={<FAQ /> } />
         <Route path='/electronic-vouchers' element={<ElectronicVouchers /> } />


      </Routes>
      
      {/* Footer de la aplicación */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
