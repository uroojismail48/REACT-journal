import { Link, NavLink , useNavigate} from "react-router-dom";

function Header() {
  const navigate = useNavigate();
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
          <NavLink to="/ContactLayout">Contact</NavLink>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <button onClick={() => navigate('/contact', {replace:true})}>Get Started </button>
    </div>
  );
}

export default Header;