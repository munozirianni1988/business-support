import {NavLink} from 'react-router-dom'
import{navbarData} from '../data/navbarData'

function Navbar() {
  return (
    <nav>
      <ul>
        {navbarData.map((item) => (
          <li key={item.id}>
            <NavLink to={item.path}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;