import { NavLink, useLocation } from "react-router-dom";

import "./Nav.css";
const Nav = ()=>{
  const currentLocation = useLocation();
  if (currentLocation.pathname === '/productos' || currentLocation.pathname === '/presentaciones' || currentLocation.pathname === '/laboratorios') {
    return (
      <nav>
        <ul>
          <li>
            <NavLink
              to='/productos'
              className={currentLocation.pathname === '/productos' ? 'active' : ''}
            >
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/presentaciones'
              className={currentLocation.pathname === '/presentaciones' ? 'active' : ''}
            >
              Presentaciones
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/laboratorios'
              className={currentLocation.pathname === '/laboratorios' ? 'active' : ''}
            >
              Laboratorio
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to='/'
            className={currentLocation.pathname === '/'?'active':''}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login'
            className={currentLocation.pathname === '/login' ? 'active' : ''}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/signin'
            className={currentLocation.pathname === '/signin' ? 'active' : ''}
          >
            Signin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
