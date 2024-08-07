import { Link } from "react-router-dom";
import { FaEthereum } from "react-icons/fa6";
import Logo from "./Logo";
import "../styles/NavBar.css";
function NavBar() {
  return (
    <nav className="navbar">
      <Logo />
      <ul>
        <li>
          <Link to="/pool">Pool</Link>
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
        <button className="connect-btn">Connect</button>
      </div>
    </nav>
  );
}

export default NavBar;
