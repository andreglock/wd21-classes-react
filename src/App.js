import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Index from './pages/Index';
import BDL01 from './pages/01BDL';
import BDL02 from './pages/02BDL';
import BDL03 from './pages/03BDL';
import BDL04 from './pages/04BDL';
import BDL05 from './pages/05BDL';
import BDL06 from './pages/06BDL';
import BDL07 from './pages/07BDL';
import BDL08 from './pages/08BDL';
import BDL09 from './pages/09BDL';
import UIB10 from './pages/10UIB';

function App() {
  return ( <div className="wrapper">
    <Navigation />
    <button type="button" id="sidebarCollapse" className="navbar-btn">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <Switch>
      <Route exact path='/'>
        <Index />
      </Route>
      <Route path='/BDL01'>
        <BDL01 />
      </Route>
      <Route path='/BDL02'>
        <BDL02 />
      </Route>
      <Route path='/BDL03'>
        <BDL03 />
      </Route>
      <Route path='/BDL04'>
        <BDL04 />
      </Route>
      <Route path='/BDL05'>
        <BDL05 />
      </Route>
      <Route path='/BDL06'>
        <BDL06 />
      </Route>
      <Route path='/BDL07'>
        <BDL07 />
      </Route>
      <Route path='/BDL08'>
        <BDL08 />
      </Route>
      <Route path='/BDL09'>
        <BDL09 />
      </Route>
      <Route path='/UIB10'>
        <UIB10 />
      </Route>
    </Switch>
  </div>);
}

export default App;
