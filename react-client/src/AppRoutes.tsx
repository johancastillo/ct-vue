
import { Route, Router, Switch, Link } from 'wouter'
// Pages
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import MyCount from './pages/MyCount'


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

        </ul>
      </nav>

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/nosotros" component={AboutUs} />
        <Route path="/mi-cuenta" component={MyCount} />
      </Switch>

    </Router>
  )
}

export default AppRoutes
