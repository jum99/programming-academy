import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import MenuBar from './components/MenuBar/MenuBar';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div>
      <Router>
        <MenuBar></MenuBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
