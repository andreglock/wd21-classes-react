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

                    <li><a href="classes/10UIB.html">UIB 1</a></li>
                    <li><a href="classes/11UIB.html">UIB 2</a></li>
                    <li><a href="classes/12UIB.html">UIB 3</a></li>
                    <li><a href="classes/13UIB.html">UIB 4</a></li>
                    <li><a href="classes/14UIB.html">UIB 5</a></li>
                    <li><a href="classes/15UIB.html">UIB 6</a></li>
                    <li><a href="classes/16UIB.html">UIB 7</a></li>
                    <li><a href="classes/17UIB.html">UIB 8</a></li>
                    <li><a href="classes/18UIB.html">UIB 9</a></li>
                    <li><a href="classes/19UIB.html">UIB 10</a></li>
                    <li><a href="classes/20UIB.html">UIB 11</a></li>
                    <li><a href="classes/21UIB.html">UIB 12</a></li>
                    <li><a href="classes/22UIB.html">UIB 13</a></li>
                    <li><a href="classes/23UIB.html">UIB 14</a></li>
                    <li><a href="classes/24UIB.html">UIB 15</a></li>
                    <li><a href="classes/25UIB.html">UIB 16</a></li>
                    <li><a href="classes/26UIB.html">UIB 17</a></li>
                    <li><a href="classes/27UIB.html">UIB 18</a></li>
                    <li><a href="classes/28UIB.html">UIB 19</a></li>
                    <li><a href="classes/29UIB.html">UIB 20</a></li>
                    <li><a href="classes/30UIB.html">UIB 21</a></li>
                    <li><a href="classes/31UIB.html">UIB 22</a></li>
                    <li><a href="classes/32UIB.html">UIB 23</a></li>
                    <li><a href="classes/33UIB.html">UIB 24</a></li>
                    <li><a href="classes/34UIB.html">UIB 25</a></li>
                    <li><a href="classes/35UIB.html">UIB 26</a></li>
                </ul>
            </li>
            <li>
                <a href="#pbSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Programing Basics</a>
                <ul className="collapse list-unstyled" id="pbSubmenu">
                    <li><a href="classes/36PB.html">PB 1</a></li>
                    <li><a href="classes/37PB.html">PB 2</a></li>
                    <li><a href="classes/38PB.html">PB 3</a></li>
                    <li><a href="classes/39PB.html">PB 4</a></li>
                    <li><a href="classes/40PB.html">PB 5</a></li>
                    <li><a href="classes/41PB.html">PB 6</a></li>
                    <li><a href="classes/42PB.html">PB 7</a></li>
                    <li><a href="classes/43PB.html">PB 8</a></li>
                    <li><a href="classes/44PB.html">PB 9</a></li>
                    <li><a href="classes/45PB.html">PB 10</a></li>
                    <li><a href="classes/46PB.html">PB 11</a></li>
                    <li><a href="classes/47PB.html">PB 12</a></li>
                    <li><a href="classes/48PB.html">PB 13</a></li>
                    <li><a href="classes/49PB.html">PB 14</a></li>
                    <li><a href="classes/50PB.html">PB 15</a></li>
                    <li><a href="classes/51PB.html">PB 16</a></li>
                    <li><a href="classes/52PB.html">PB 17</a></li>
                    <li><a href="classes/53PB.html">PB 18</a></li>
                    <li><a href="classes/54PB.html">PB 19</a></li>
                    <li><a href="classes/55PB.html">PB 20</a></li>
                    <li><a href="classes/56PB.html">PB 21</a></li>
                    <li><a href="classes/57PB.html">PB 22</a></li>
                    <li><a href="classes/58PB.html">PB 23</a></li>
                </ul>
            </li>
            <li>
                <a href="https://andreglock.github.io/portfolio/" target="_blank" rel="noreferrer">Portfolio</a>
            </li>
        </ul>
    </nav>)
}