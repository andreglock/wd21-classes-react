import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './Navigation';
import Index from './pages/Index'; import BDL01 from './pages/01BDL'; import BDL02 from './pages/02BDL';
import BDL03 from './pages/03BDL'; import BDL04 from './pages/04BDL'; import BDL05 from './pages/05BDL';
import BDL06 from './pages/06BDL'; import BDL07 from './pages/07BDL'; import BDL08 from './pages/08BDL';
import BDL09 from './pages/09BDL'; import UIB10 from './pages/10UIB'; import UIB11 from './pages/11UIB';
import UIB12 from './pages/12UIB'; import UIB13 from './pages/13UIB'; import UIB14 from './pages/14UIB';
import UIB15 from './pages/15UIB'; import UIB16 from './pages/16UIB'; import UIB17 from './pages/17UIB';
import UIB18 from './pages/18UIB'; import UIB19 from './pages/19UIB'; import UIB20 from './pages/20UIB';
import UIB21 from './pages/21UIB'; import UIB22 from './pages/22UIB'; import UIB23 from './pages/23UIB';
import UIB24 from './pages/24UIB'; import UIB25 from './pages/25UIB'; import UIB26 from './pages/26UIB';
import UIB27 from './pages/27UIB'; import UIB28 from './pages/28UIB'; import UIB29 from './pages/29UIB';
import UIB30 from './pages/30UIB'; import UIB31 from './pages/31UIB'; import UIB32 from './pages/32UIB';
import UIB33 from './pages/33UIB'; import UIB34 from './pages/34UIB'; import UIB35 from './pages/35UIB';
import PB36 from './pages/36PB'; import PB37 from './pages/37PB'; import PB38 from './pages/38PB';
import PB39 from './pages/39PB'; import PB40 from './pages/40PB'; import PB41 from './pages/41PB';
import PB42 from './pages/42PB'; import PB43 from './pages/43PB'; import PB44 from './pages/44PB';
import PB45 from './pages/45PB'; import PB46 from './pages/46PB'; import PB47 from './pages/47PB';
import PB48 from './pages/48PB'; import PB49 from './pages/49PB'; import PB50 from './pages/50PB';
import PB51 from './pages/51PB'; import PB52 from './pages/52PB'; import PB53 from './pages/53PB';
import PB54 from './pages/54PB'; import PB55 from './pages/55PB'; import PB56 from './pages/56PB';
import PB57 from './pages/57PB'; import PB58 from './pages/58PB';
import SPA59 from './pages/59SPA'; import SPA60 from './pages/60SPA'; import SPA61 from './pages/61SPA';
import SPA62 from './pages/62SPA'; import SPA63 from './pages/63SPA'; import SPA64 from './pages/64SPA';
import SPA65 from './pages/65SPA'; import SPA66 from './pages/66SPA'; import SPA67 from './pages/67SPA';
import SPA68 from './pages/68SPA'; import SPA69 from './pages/69SPA'; import SPA70 from './pages/70SPA';
import SPA71 from './pages/71SPA'; import SPA72 from './pages/72SPA'; import SPA73 from './pages/73SPA';
import SPA74 from './pages/74SPA'; import SPA75 from './pages/75SPA'; import SPA76 from './pages/76SPA';
import SPA77 from './pages/77SPA'; import SPA78 from './pages/78SPA'; import SPA79 from './pages/79SPA';
import SPA80 from './pages/80SPA'; import SPA81 from './pages/81SPA'; import SPA82 from './pages/82SPA'; 
import SPA83 from './pages/83SPA'; import SPA84 from './pages/84SPA'; import BCK900 from './pages/900BCK';
import BCK901 from './pages/901BCK'; import BCK902 from './pages/902BCK'; import BCK903 from './pages/903BCK';
import BCK904 from './pages/904BCK'; import BCK905 from './pages/905BCK'; import BCK906 from './pages/906BCK';
import BCK907 from './pages/907BCK'; import BCK908 from './pages/908BCK'; import BCK909 from './pages/909BCK';
import BCK910 from './pages/910BCK'; import BCK911 from './pages/911BCK'; import BCK912 from './pages/912BCK';
import BCK913 from './pages/913BCK'; import BCK914 from './pages/914BCK'; import BCK915 from './pages/915BCK';
import BCK916 from './pages/916BCK'; import BCK917 from './pages/917BCK'; import BCK918 from './pages/918BCK';
import BCK919 from './pages/919BCK'; import BCK920 from './pages/920BCK'; import BCK921 from './pages/921BCK';
import BCK922 from './pages/922BCK'; import BCK923 from './pages/923BCK';

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
      <Route path='/BDL01' component={BDL01} />
      <Route path='/BDL02' component={BDL02} />
      <Route path='/BDL03' component={BDL03} />
      <Route path='/BDL04' component={BDL04} />
      <Route path='/BDL05' component={BDL05} />
      <Route path='/BDL06' component={BDL06} />
      <Route path='/BDL07' component={BDL07} />
      <Route path='/BDL08' component={BDL08} />
      <Route path='/BDL09' component={BDL09} />
      <Route path='/UIB10' component={UIB10} />
      <Route path='/UIB11' component={UIB11} />
      <Route path='/UIB12' component={UIB12} />
      <Route path='/UIB13' component={UIB13} />
      <Route path='/UIB14' component={UIB14} />
      <Route path='/UIB15' component={UIB15} />
      <Route path='/UIB16' component={UIB16} />
      <Route path='/UIB17' component={UIB17} />
      <Route path='/UIB18' component={UIB18} />
      <Route path='/UIB19' component={UIB19} />
      <Route path='/UIB20' component={UIB20} />
      <Route path='/UIB21' component={UIB21} />
      <Route path='/UIB22' component={UIB22} />
      <Route path='/UIB23' component={UIB23} />
      <Route path='/UIB24' component={UIB24} />
      <Route path='/UIB25' component={UIB25} />
      <Route path='/UIB26' component={UIB26} />
      <Route path='/UIB27' component={UIB27} />
      <Route path='/UIB28' component={UIB28} />
      <Route path='/UIB29' component={UIB29} />
      <Route path='/UIB30' component={UIB30} />
      <Route path='/UIB31' component={UIB31} />
      <Route path='/UIB32' component={UIB32} />
      <Route path='/UIB33' component={UIB33} />
      <Route path='/UIB34' component={UIB34} />
      <Route path='/UIB35' component={UIB35} />
      <Route path='/PB36' component={PB36} />
      <Route path='/PB37' component={PB37} />
      <Route path='/PB38' component={PB38} />
      <Route path='/PB39' component={PB39} />
      <Route path='/PB40' component={PB40} />
      <Route path='/PB41' component={PB41} />
      <Route path='/PB42' component={PB42} />
      <Route path='/PB43' component={PB43} />
      <Route path='/PB44' component={PB44} />
      <Route path='/PB45' component={PB45} />
      <Route path='/PB46' component={PB46} />
      <Route path='/PB47' component={PB47} />
      <Route path='/PB48' component={PB48} />
      <Route path='/PB49' component={PB49} />
      <Route path='/PB50' component={PB50} />
      <Route path='/PB51' component={PB51} />
      <Route path='/PB52' component={PB52} />
      <Route path='/PB53' component={PB53} />
      <Route path='/PB54' component={PB54} />
      <Route path='/PB55' component={PB55} />
      <Route path='/PB56' component={PB56} />
      <Route path='/PB57' component={PB57} />
      <Route path='/PB58' component={PB58} />
      <Route path='/SPA59' component={SPA59} />
      <Route path='/SPA60' component={SPA60} />
      <Route path='/SPA61' component={SPA61} />
      <Route path='/SPA62' component={SPA62} />
      <Route path='/SPA63' component={SPA63} />
      <Route path='/SPA64' component={SPA64} />
      <Route path='/SPA65' component={SPA65} />
      <Route path='/SPA66' component={SPA66} />
      <Route path='/SPA67' component={SPA67} />
      <Route path='/SPA68' component={SPA68} />
      <Route path='/SPA69' component={SPA69} />
      <Route path='/SPA70' component={SPA70} />
      <Route path='/SPA71' component={SPA71} />
      <Route path='/SPA72' component={SPA72} />
      <Route path='/SPA73' component={SPA73} />
      <Route path='/SPA74' component={SPA74} />
      <Route path='/SPA75' component={SPA75} />
      <Route path='/SPA76' component={SPA76} />
      <Route path='/SPA77' component={SPA77} />
      <Route path='/SPA78' component={SPA78} />
      <Route path='/SPA79' component={SPA79} />
      <Route path='/SPA80' component={SPA80} />
      <Route path='/SPA81' component={SPA81} />
      <Route path='/SPA82' component={SPA82} />
      <Route path='/SPA83' component={SPA83} />
      <Route path='/SPA84' component={SPA84} />
      <Route path='/BCK900' component={BCK900} />
      <Route path='/BCK901' component={BCK901} />
      <Route path='/BCK902' component={BCK902} />
      <Route path='/BCK903' component={BCK903} />
      <Route path='/BCK904' component={BCK904} />
      <Route path='/BCK905' component={BCK905} />
      <Route path='/BCK906' component={BCK906} />
      <Route path='/BCK907' component={BCK907} />
      <Route path='/BCK908' component={BCK908} />
      <Route path='/BCK909' component={BCK909} />
      <Route path='/BCK910' component={BCK910} />
      <Route path='/BCK911' component={BCK911} />
      <Route path='/BCK912' component={BCK912} />
      <Route path='/BCK913' component={BCK913} />
      <Route path='/BCK914' component={BCK914} />
      <Route path='/BCK915' component={BCK915} />
      <Route path='/BCK916' component={BCK916} />
      <Route path='/BCK917' component={BCK917} />
      <Route path='/BCK918' component={BCK918} />
      <Route path='/BCK919' component={BCK919} />
      <Route path='/BCK920' component={BCK920} />
      <Route path='/BCK921' component={BCK921} />
      <Route path='/BCK922' component={BCK922} />
      <Route path='/BCK923' component={BCK923} />
      <Route path='*'>
        <Redirect to="/" />
      </Route>
    </Switch>
  </div>);
}

export default App;
