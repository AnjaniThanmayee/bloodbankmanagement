import { Link } from "react-router-dom";
import './header.css'

const Header = () => (

  <nav className="header-container">
  <div className="logo-and-title-container">
    <img
      alt="logo"
      className="logo"
      src="bloodlogo.jpeg"
    />
  </div>

  <ul className="nav-items-list">
    <li className="link-item">
      <Link className="route-link" to="/home">
        Home
      </Link>
    </li>
    <li className="link-item">
      <Link className="route-link" to="/about">
      About Us
      </Link>
    </li>
    <li className="link-item">
      <Link className="route-link" to="/donar">
        Donar
      </Link>
    </li>
    <li className="link-item">
        <span className="route-link">Request</span>
        <li className="sub-items-list">
          <li className="sub-link-item">
            <Link className="route-link" to="/hospitalForm">
                Hospital
            </Link>
          </li>
          <li className="sub-link-item">
            <Link className="route-link" to="/recipient">
            Recipient
            </Link>
          </li>
        </li>
      </li>
    <li className="link-item">
      <Link className="route-link" to="/hospital">
        
        Blood Banks
      </Link>
    </li>
  </ul>
</nav>
  
)

export default Header