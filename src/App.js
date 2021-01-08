import Navbar from './components/Navbar';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/Home';

import './styles/app.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Redirect from="/home" to="/" />
        <Route to="/" component={Home} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
