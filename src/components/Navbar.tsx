import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar: React.FC = () => {

  const [burgerState, burgerStateSwitcher] = useState(true)

  return (
    <>
  <nav>
    <div className="nav-wrapper custom-wrapper purple darken-4">
      <a
          href="/"
          className="brand-logo green-text hide-on-med-and-down"
      ><u>Books dashboard</u>
      </a>

      <ul id="nav-mobile" className="right">
        <li><NavLink to="/"> Dashboard </NavLink></li>
        <li><NavLink to="add-book"> Add a book </NavLink></li>
      </ul>

      {burgerState &&
        <div className="custom-burger sidenav-trigger"
             onClick={() => burgerStateSwitcher(false)}
      >
          <i className="material-icons"> Menu </i>
        </div>
      }

      {burgerState ||
        <div
            className="custom-burger sidenav-trigger"
            onClick={() => burgerStateSwitcher(true)}
        >
          <i className="material-icons"> Close </i>
        </div>
      }

    </div>
  </nav>

  {burgerState ||
        <div className="custom-mobile-menu">
        <ul>
        <li
            onClick={() => burgerStateSwitcher(true)}
        >
          <NavLink className="custom-mobile-link" to="/"> Dashboard </NavLink>
        </li>

        <li
            onClick={() => burgerStateSwitcher(true)}
        >
          <NavLink className="custom-mobile-link" to="add-book"> Add a book </NavLink>
        </li>
      </ul>
        </div>
      }
  </>
)
}
