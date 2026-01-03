
import './App.css'
import Footer from './components/Footer/Footer.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Main from './components/Main/Main.jsx'
import { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LoginPopup from './components/LoginPopup/LoginPopup.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Login from './components/Login/Login.jsx'
import Signup from './components/Signup/Signup.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import ExploreMenu from './components/ExploreMenu/ExploreMenu.jsx'
import UserProfile from './components/UserProfile/UserProfile.jsx'
import axios from 'axios'
import { ProductProvider } from './context/ProductDataContext.jsx'
import Product from './components/Product/Product.jsx'
import SingleProductPage from './components/SingleProductPage/SingleProductPage.jsx'
import { CartProvider } from './context/CartContext.jsx'
import CartPage from './components/CartPage/CartPage.jsx'
import CatergoryPage from './components/CategoryPage/CategoryPage.jsx'
import { WishlistProvider } from './context/WishListContext.jsx'
import WishlistPage from './components/WishlistPage/WishlistPage.jsx'
import ChangePassword from './components/ChangePassword/ChangePassword.jsx'
import CheckoutPage from './components/CheckoutPage/CheckoutPage.jsx'
import UpdateProfile from './components/UpdateProfile/UpdateProfile.jsx'

function App() {
  const [orderPopup, setOrderPopup] = useState(false);
  const [location, setLocation] = useState()

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const { latitude, longitude } = pos.coords
      console.log(longitude, latitude);

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
      try {
        const location = await axios.get(url);
        const exactLocation = location.data.address;
        setLocation(exactLocation)
        console.log(exactLocation);
      }
      catch (error) {
        console.log(error);
      }
    })
  }

  useEffect(() => {
    getLocation()
  }, [])

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <div className='duration-200'>

      <ProductProvider>
        <CartProvider>
          <WishlistProvider>
            <Router>
              <div className="sticky top-0 w-full z-50   shadow-md  ">
                <Navbar location={location} getLocation={getLocation} />

              </div>

              <Routes>
                <Route path='/' element={<>
                  <Main handleOrderPopup={handleOrderPopup} />
                  <ExploreMenu />
                  <Product />
                  <Testimonials />
                  <Footer />
                </>}></Route>
                <Route path='/login' element={<Login />} ></Route>
                <Route path='/testimonials' element={<Testimonials />} ></Route>
                <Route path='/dashboard' element={<Dashboard />} ></Route>
                <Route path='/signup' element={<Signup />} ></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />} ></Route>
                <Route path='/product' element={<CatergoryPage />} ></Route>
                <Route path='/product/:id' element={<SingleProductPage />} ></Route>
                <Route path='/cart' element={<CartPage  />} ></Route>
                <Route path='/wishlist' element={<WishlistPage/>}></Route>
                <Route path='/userProfile' element={<UserProfile />}></Route>
                <Route path='/userProfile/edit' element={<UpdateProfile />}></Route>
                <Route path='/changePassword' element={<ChangePassword />}></Route>
                <Route path='/checkout' element={<CheckoutPage location={location} getLocation={getLocation}/>}></Route>


              </Routes>

            </Router>
          </WishlistProvider>
        </CartProvider>
      </ProductProvider>




    </div>
  )
}

export default App
