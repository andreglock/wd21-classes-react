import { NavLink } from "react-router-dom";
import homeLogo from './img/home.svg'

export default function Navigation() {
    return (<nav id="sidebar">
        <ul className="list-unstyled components">
            <li>
                <NavLink to="/"><img src={homeLogo} alt="home" className="home" height="2.7em"/></NavLink>
            </li>
            
            <li>
                <a href="#bdlSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Basic Digital Literacy</a>
                <ul className="collapse list-unstyled" id="bdlSubmenu">
                    <li><NavLink to="BDL01">BDL 1</NavLink></li>
                    <li><NavLink to="BDL02">BDL 2</NavLink></li>
                    <li><NavLink to="BDL03">BDL 3</NavLink></li>
                    <li><NavLink to="BDL04">BDL 4</NavLink></li>
                    <li><NavLink to="BDL05">BDL 5</NavLink></li>
                    <li><NavLink to="BDL06">BDL 6</NavLink></li>
                    <li><NavLink to="BDL07">BDL 7</NavLink></li>
                    <li><NavLink to="BDL08">BDL 8</NavLink></li>
                    <li><NavLink to="BDL09">BDL 9</NavLink></li>
                </ul>
            </li>
            <li>
                <a href="#uibSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">User Interface Basics</a>
                <ul className="collapse list-unstyled" id="uibSubmenu">
                    <li><NavLink to="UIB10">UIB 1</NavLink></li>
                    <li><NavLink to="UIB11">UIB 2</NavLink></li>
                    <li><NavLink to="UIB12">UIB 3</NavLink></li>
                    <li><NavLink to="UIB13">UIB 4</NavLink></li>
                    <li><NavLink to="UIB14">UIB 5</NavLink></li>
                    <li><NavLink to="UIB15">UIB 6</NavLink></li>
                    <li><NavLink to="UIB16">UIB 7</NavLink></li>
                    <li><NavLink to="UIB17">UIB 8</NavLink></li>
                    <li><NavLink to="UIB18">UIB 9</NavLink></li>
                    <li><NavLink to="UIB19">UIB 10</NavLink></li>
                    <li><NavLink to="UIB20">UIB 11</NavLink></li>
                    <li><NavLink to="UIB21">UIB 12</NavLink></li>
                    <li><NavLink to="UIB22">UIB 13</NavLink></li>
                    <li><NavLink to="UIB23">UIB 14</NavLink></li>
                    <li><NavLink to="UIB24">UIB 15</NavLink></li>
                    <li><NavLink to="UIB25">UIB 16</NavLink></li>
                    <li><NavLink to="UIB26">UIB 17</NavLink></li>
                    <li><NavLink to="UIB27">UIB 18</NavLink></li>
                    <li><NavLink to="UIB28">UIB 19</NavLink></li>
                    <li><NavLink to="UIB29">UIB 20</NavLink></li>
                    <li><NavLink to="UIB30">UIB 21</NavLink></li>
                    <li><NavLink to="UIB31">UIB 22</NavLink></li>
                    <li><NavLink to="UIB32">UIB 23</NavLink></li>
                    <li><NavLink to="UIB33">UIB 24</NavLink></li>
                    <li><NavLink to="UIB34">UIB 25</NavLink></li>
                    <li><NavLink to="UIB35">UIB 26</NavLink></li>
                </ul>
            </li>
            <li>
                <a href="#pbSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Programing Basics</a>
                <ul className="collapse list-unstyled" id="pbSubmenu">
                    <li><NavLink to="PB36">PB 1</NavLink></li>
                    <li><NavLink to="PB37">PB 2</NavLink></li>
                    <li><NavLink to="PB38">PB 3</NavLink></li>
                    <li><NavLink to="PB39">PB 4</NavLink></li>
                    <li><NavLink to="PB40">PB 5</NavLink></li>
                    <li><NavLink to="PB41">PB 6</NavLink></li>
                    <li><NavLink to="PB42">PB 7</NavLink></li>
                    <li><NavLink to="PB43">PB 8</NavLink></li>
                    <li><NavLink to="PB44">PB 9</NavLink></li>
                    <li><NavLink to="PB45">PB 10</NavLink></li>
                    <li><NavLink to="PB46">PB 11</NavLink></li>
                    <li><NavLink to="PB47">PB 12</NavLink></li>
                    <li><NavLink to="PB48">PB 13</NavLink></li>
                    <li><NavLink to="PB49">PB 14</NavLink></li>
                    <li><NavLink to="PB50">PB 15</NavLink></li>
                    <li><NavLink to="PB51">PB 16</NavLink></li>
                    <li><NavLink to="PB52">PB 17</NavLink></li>
                    <li><NavLink to="PB53">PB 18</NavLink></li>
                    <li><NavLink to="PB54">PB 19</NavLink></li>
                    <li><NavLink to="PB55">PB 20</NavLink></li>
                    <li><NavLink to="PB56">PB 21</NavLink></li>
                    <li><NavLink to="PB57">PB 22</NavLink></li>
                    <li><NavLink to="PB58">PB 23</NavLink></li>
                </ul>
            </li>
            <li>
                <a href="#spaSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Single Page Applications</a>
                <ul className="collapse list-unstyled" id="spaSubmenu">
                    <li><NavLink to="SPA59">SPA 1</NavLink></li>
                    <li><NavLink to="SPA60">SPA 2</NavLink></li>
                    <li><NavLink to="SPA61">SPA 3</NavLink></li>
                    <li><NavLink to="SPA62">SPA 4</NavLink></li>
                    <li><NavLink to="SPA63">SPA 5</NavLink></li>
                    <li><NavLink to="SPA64">SPA 6</NavLink></li>
                    <li><NavLink to="SPA65">SPA 7</NavLink></li>
                    <li><NavLink to="SPA66">SPA 8</NavLink></li>
                    <li><NavLink to="SPA67">SPA 9</NavLink></li>
                    <li><NavLink to="SPA68">SPA 10</NavLink></li>
                    <li><NavLink to="SPA69">SPA 11</NavLink></li>
                    <li><NavLink to="SPA70">SPA 12</NavLink></li>
                    <li><NavLink to="SPA71">SPA 13</NavLink></li>
                    <li><NavLink to="SPA72">SPA 14</NavLink></li>
                    <li><NavLink to="SPA73">SPA 15</NavLink></li>
                    <li><NavLink to="SPA74">SPA 16</NavLink></li>
                    <li><NavLink to="SPA75">SPA 17</NavLink></li>
                    <li><NavLink to="SPA76">SPA 18</NavLink></li>
                    <li><NavLink to="SPA77">SPA 19</NavLink></li>
                    <li><NavLink to="SPA78">SPA 20</NavLink></li>
                    <li><NavLink to="SPA79">SPA 21</NavLink></li>
                    <li><NavLink to="SPA80">SPA 22</NavLink></li>
                    <li><NavLink to="SPA81">SPA 23</NavLink></li>
                    <li><NavLink to="SPA82">SPA 24</NavLink></li>
                    <li><NavLink to="SPA83">SPA 25</NavLink></li>
                    <li><NavLink to="SPA84">SPA 26</NavLink></li>
                </ul>
            </li>
            <li>
                <a href="#backendSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Backend</a>
                <ul className="collapse list-unstyled" id="backendSubmenu">
                    <li><NavLink to="BCK900">Backend 1</NavLink></li>
                    <li><NavLink to="BCK901">Backend 2</NavLink></li>
                    <li><NavLink to="BCK902">Backend 3</NavLink></li>
                    <li><NavLink to="BCK903">Backend 4</NavLink></li>
                    <li><NavLink to="BCK904">Backend 5</NavLink></li>
                    <li><NavLink to="BCK905">Backend 6</NavLink></li>
                    <li><NavLink to="BCK906">Backend 7</NavLink></li>
                    <li><NavLink to="BCK907">Backend 8</NavLink></li>
                    <li><NavLink to="BCK908">Backend 9</NavLink></li>
                    <li><NavLink to="BCK909">Backend 10</NavLink></li>
                    <li><NavLink to="BCK910">Backend 11</NavLink></li>
                    <li><NavLink to="BCK911">Backend 12</NavLink></li>
                    <li><NavLink to="BCK912">Backend 13</NavLink></li>
                    <li><NavLink to="BCK913">Backend 14</NavLink></li>
                    <li><NavLink to="BCK914">Backend 15</NavLink></li>
                    <li><NavLink to="BCK915">Backend 16</NavLink></li>
                    <li><NavLink to="BCK916">Backend 17</NavLink></li>
                    <li><NavLink to="BCK917">Backend 18</NavLink></li>
                    <li><NavLink to="BCK918">Backend 19</NavLink></li>
                    <li><NavLink to="BCK919">Backend 20</NavLink></li>
                    <li><NavLink to="BCK920">Backend 21</NavLink></li>
                    <li><NavLink to="BCK921">Backend 22</NavLink></li>
                    <li><NavLink to="BCK922">Backend 23</NavLink></li>
                    <li><NavLink to="BCK923">Backend 24</NavLink></li>
                </ul>
            </li>
            <li>
                <a href="https://andreglock.github.io/portfolio/" target="_blank" rel="noreferrer">Portfolio</a>
            </li>
        </ul>
    </nav>)
}