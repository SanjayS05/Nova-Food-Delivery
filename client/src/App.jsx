import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './page/LandingPage';
import SignIn from './page/SignIn';
import Del_SignIn from "./page/DelSignIn";
import Del_SignUp from "./page/DelSignUp";
import Rest_SignIn from "./page/RestaurantSignIn";
import Rest_SignUp from './page/RestaurantSignUp';
import SignUp from './page/SignUp';
import RestaurantList from './page/RestaurantList'
import OrderConfirmation from "./page/CartPage";
import DeliveryPartner from "./page/DeliveryPartnerPg";
import RestaurantPage from "./page/RestaurantPage";
import HotelMain from "./page/HotelMain";
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/rl" element={<RestaurantList />} />
        <Route path="/cart" element={<OrderConfirmation/>} />
        <Route path="/dp" element={<DeliveryPartner/>} />
        <Route path='/rp' element={<RestaurantPage/>} />
        <Route path='/rs' element={<Rest_SignUp />} />
        <Route path="/rsi" element={<Rest_SignIn />} />
        <Route path='/ds' element={<Del_SignUp />} />
        <Route path="/dsi" element={<Del_SignIn />} />
        <Route path="/hotel" element={<HotelMain />} />
      </Routes>
    </div>
  )
}

export default App
