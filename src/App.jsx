import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Navbar from './Components/Navbar'

import ScrollToTop from './Components/ScrollToTop'

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
      {/* ScrollToTop component to ensure that the page scrolls up when changing paths */}
      <ScrollToTop />
      
      {/* Application Navbar */}
      <Navbar />
      
      <Routes>
        {/* Main path showing the promotions page */}
        <Route path='/' element={<HomePage />} />
        
        {/* Authentication routes */}
        <Route path='/account/login' element={<LoginPage />} />
        <Route path='/account/register' element={<RegisterPage />} />
        <Route path='/account/forgot-password' element={<ForgotPasswordPage />} />
        
        {/* Path to display a specific menu */}
        <Route path='/menu/*' element={<MenuPage />} />
        
        
        {/* Route to shop locator */}
        <Route path='/store-locator' element={<MainAddress />} />
        
        {/* Shopping cart route */}
        <Route path='/cart' element={<ShoppingCart />} />

        {/* Rewards Route */}
        <Route path='/rewards' element={<RewardsPage /> } />

        {/* Gift card route */}
        <Route path='/gift' element={<GiftCardsPage /> } />
        
        {/* Test route, possibly for development */}
        <Route path='/ecommerce/section/pruebas' element={<PruebasPage />} />

         {/* Footer link path */}
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
      
      {/* Application footer */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
