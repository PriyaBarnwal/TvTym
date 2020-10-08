import React, {useState} from 'react'
import './style.scss'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider} from 'react-redux'
import { Link } from 'react-router-dom'
import Store from './Store'
import Navbar from './UIComponents/Navbar'
import HomeContainer from './Containers/HomeContainer'
import FavContainer from './Containers/FavContainer'
import PortalContainer from './Containers/PortalContainer'
import NotFound from './UIComponents/NotFound'
import logo from './assets/logo1.ZzdP9AdvlCYog+Quq6R6b0gN4FcLgRULcMU+jDIqD99LxUc6unyAOA=='

function App() {
  let [shown, setShown] = useState(true),
  renderModal = () => (
    <PortalContainer handleClose={()=>setShown(!shown)}>
      <img src={logo} alt='logo' height="150"/>
      <div>
        <Link to="/home" className="btn-large"><div onClick={()=>setShown(!shown)}>Go to Home Page</div></Link>
        <Link to="/favorites" className="btn-large"><div onClick={()=>setShown(!shown)}>See your Favorites</div></Link>
      </div>
    </PortalContainer>
  )

  return (
    <Provider store={Store}>
      <Router>
        {shown && renderModal()}
        <Navbar/>
        <Switch>
          <Route exact path="/home" component={HomeContainer}/>
          <Route exact path="/favorites" component={FavContainer}/>
          <Route component={NotFound}/>
        </Switch>
      </Router> 
    </Provider>
  )
}

export default App
