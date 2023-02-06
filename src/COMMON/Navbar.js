import { Link } from 'react-router-dom'
import React,{useState} from "react";
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im";
import './Navbar style.css'

const NavBar = () => {
    const [MobileBar,setMobileBar] = useState(false);
    return (
        <>
        <div className="Nav-Menu">
      <ul className={MobileBar ? 'nav-links-mobile' : 'nav-links'} onClick={()=>setMobileBar(false)}>
                <li><Link  to="/">Home</Link></li>
                <li><Link  to="/bollywood">Bollywood</Link></li>
                <li><Link  to="/technology">Technology</Link></li>
                <li><Link  to="/hollywood">Hollywood</Link></li>
                <li><Link  to="/fitness">Fitness</Link></li>
                <li><Link  to="/food">Food</Link></li>
            </ul>

         <button className="mobile-menu-icon" onClick={()=>setMobileBar(!MobileBar)}>
            {MobileBar ? <ImCross/> : <FaBars />}

          </button>
          </div>
        </>
    )
}
export default NavBar;
