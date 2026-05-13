import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="div">
      <img src="" alt="logo" />

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/product">Product</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
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