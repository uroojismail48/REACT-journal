import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="div">
<h3>LOGO</h3>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/product">Product</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <button>Get Started</button>
    </div>
  );
}

export default Header;