import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../CartContext";

function Nav() {
  const { cart } = useContext(CartContext);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className='navbars'>
      <div className='nav-container'>
        <NavLink className='nav-logo' to='/'>
          <img className='logoNav' src={"/images/logo.png"} />
        </NavLink>
        <div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
              <NavLink activeClassName='active' className='nav-links' onClick={handleClick} to='/'>
                <i className='fa fa-search' />
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink activeClassName='active' className='nav-links' onClick={handleClick} to='/cart'>
                <i className='fa fa-shopping-bag' />
                {cart.length > 0 && <span>{cart.length}</span>}
              </NavLink>
            </li>
          </ul>
          <div className='nav-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
