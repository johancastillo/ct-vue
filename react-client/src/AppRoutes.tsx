
import { Route, Router, Switch, Link } from 'wouter'
import AccountSidebar from './components/AccountSidebar'
import Header from './components/Header'
import TopBar from './components/TopBar'
// Pages
import AboutUs from './pages/AboutUs'
import Category from './pages/Category'
import Home from './pages/Home'
import MyCount from './pages/MyCount'
import SingleProduct from './pages/SingleProduct'


const AppRoutes = () => {
  return (
    <Router>

      <nav>
        <ul>
          
          <li>
            <a>
              <Link to="/">Home</Link>
            </a>
          </li>

          <li>
            <a>
              <Link to="/nosotros">About</Link>
            </a>
          </li>

          <li>
            <a>
              <Link to="/mi-cuenta">My Count</Link>
            </a>
          </li>

          <li>
            <a>
              <Link to="/producto">Single Product</Link>
            </a>
          </li>

          <li>
            <a>
              <Link to="/categoria">Category</Link>
            </a>
          </li>

        </ul>
      </nav>

      <TopBar />
      <Header />
      <AccountSidebar />


      <Switch>
        <Route path="/" component={Home} />
        <Route path="/nosotros" component={AboutUs} />
        <Route path="/mi-cuenta" component={MyCount} />
        <Route path="/producto/:name" component={SingleProduct} />
        <Route path="/producto" component={SingleProduct} />
        <Route path="/categoria" component={Category} />
      </Switch>

    </Router>
  )
}

export default AppRoutes
