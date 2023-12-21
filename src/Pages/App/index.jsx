import { useRoutes, BrowserRouter, Routes,Route } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SingIn from '../SingIn'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import './App.css'

function App() {

  return ( 
    <ShoppingCartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/clothes" element={<Home />} ></Route>
          <Route path="/electronics" element={<Home />} ></Route>
          <Route path="/jewelery" element={<Home />} ></Route>
          <Route path="/toys" element={<Home />} ></Route>
          <Route path="/others" element={<Home />} ></Route>
          <Route path="/my-account" element={<MyAccount />}></Route>
          <Route path="/my-orders" element={<MyOrders />}></Route>
          <Route path="/my-orders/last" element={<MyOrder />}></Route>
          <Route path="/my-orders/:id" element={<MyOrder />}></Route>
          <Route path="/my-order" element={<MyOrder />}></Route>
          <Route path="/sing-in" element={<SingIn />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
