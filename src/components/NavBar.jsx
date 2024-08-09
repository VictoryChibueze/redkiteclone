import { Link } from "react-router-dom";
import { FaEthereum } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import "../styles/NavBar.css";
import { useState } from "react";

// import { Connect } from "../components/Connect.jsx";
function NavBar({ onOpenModal }) {
  const [isMobileMenuOpen, setIsMobileOpen] = useState(false);

  function handleMobileMenu() {
    setIsMobileOpen(!isMobileMenuOpen);
  }
  return (
    <header className="header">
      <Logo />
      <button className="mobile-menu-icon" onClick={handleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav className={`navbar ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/pool" className="active">
              Pool
            </Link>
          </li>
          <li>
            <Link to="/staking">Staking</Link>
          </li>
          <li>
            <Link to="/phishkite">PhishKite</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <div className="nav-btn">
          <button className="eth-btn">
            <FaEthereum />
            Ethereum
          </button>
          <button className="connect-btn" onClick={onOpenModal}>
            Connect
          </button>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
