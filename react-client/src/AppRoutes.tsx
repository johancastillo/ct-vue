import { Component } from 'react'
import { Route, Router, Switch, Link } from 'wouter'
import AccountSidebar from './components/AccountSidebar'
import Header from './components/Header'
import TopBar from './components/TopBar'
// Context
import UserState from './context/User/UserState'
// Pages
import AboutUs from './pages/AboutUs'
import Cart from './pages/Cart'
import Category from './pages/Category'
import Checkout from './pages/Checkout'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import MyCount from './pages/MyCount'
import PageNotFound from './pages/PageNotFound'
import ResetPassword from './pages/ResetPassword'
import Services from './pages/Services'
import SingleProduct from './pages/SingleProduct'


class AppRoutes extends Component{
  
  render(){
    return (
      <UserState>
        <Router>
  
          <TopBar />
          <Header />
          <AccountSidebar />
  
  
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/nosotros" component={AboutUs} />
            <Route path="/mi-cuenta" component={MyCount} />
            <Route path="/producto/:id" component={SingleProduct} />
            <Route path="/categoria" component={Category} />
            <Route path="/carrito" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/services" component={Services} />
            <Route path="/reset-password" component={ResetPassword} />
            <Route path="/favoritos" component={Favorites} />
            <Route component={PageNotFound} />
          </Switch>
  
        </Router>
      </UserState>
    )
  }
}

export default AppRoutes
