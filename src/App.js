import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Reservations from './Pages/Reservations';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
      <Header/>
      <Nav />
      <div className='Content'>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path='/about'>
            <About/>
          </Route>
          <Route exact path='/menu'>
            <Menu/>
          </Route>
          <Route exact path="/reservations" >
            <Reservations/>
          </Route>
        </Switch>
        </div>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
