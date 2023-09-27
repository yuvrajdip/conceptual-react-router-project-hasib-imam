import { NavLink } from 'react-router-dom';
import Logo from '../../Logo/Logo';

const NavBar = () => {
  return (
    <div>
      <nav className='flex justify-between items-center py-7 shadow-md'>
        <Logo></Logo>
        <ul className='flex gap-5'>
          <li>
            <NavLink
              to="/Home"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-300 underline" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-300 underline" : ""
              }
            >
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-300 underline" : ""
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;