

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import Sidedrawer from './components/Sidedrawer';
import Login from './components/Login'
import Register from './components/Register'

import { useState } from 'react'
import ProtectedRoute from './components/ProtectedRoute';
import { useSelector } from 'react-redux'



function App() {

  const [sideToggle, setSideToggle] = useState(false)
  const { isAuth } = useSelector(state => state.user)

  return (
    <div className='App'>

      <Router>
        <Navbar click={() => setSideToggle(true)} />
        <Sidedrawer show={sideToggle} click={() => setSideToggle(false)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <main>
          <Switch>
            <Route exact path='/' component={isAuth ? HomeScreen : Login} />
            <Route exact path='/register' component={Register} />
            <ProtectedRoute exact path='/products' component={HomeScreen} isAuth={isAuth} />
            <ProtectedRoute exact path='/product' component={HomeScreen} isAuth={isAuth} />
            <ProtectedRoute exact path='/product/:id' component={ProductScreen} isAuth={isAuth} />
            <ProtectedRoute exact path='/cart' component={CartScreen} isAuth={isAuth} />

          </Switch>
        </main>

      </Router>
    </div>
  );
}

export default App;
