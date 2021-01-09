import Navbar from './components/Navbar';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/app.css';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Redirect from="/home" to="/" />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/" strict component={Home} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
