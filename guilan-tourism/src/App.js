import './App.css';
import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Pages/Home'
import Services from './components/Pages/Services'
import Products from './components/Pages/Products'
import Signup from './components/Pages/Signup'

function App() {
  return (
  <>
    <Router>
      <Navbar />
      <switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Services' component={Services} />
        <Route path='/Products' component={Products} />
        <Route path='/Signup' component={Signup} />
      </switch>
    </Router>
  </>
  );
}

export default App;
