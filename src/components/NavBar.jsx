import { Link } from "react-router-dom";
import { FaEthereum } from "react-icons/fa6";
import Logo from "./Logo";

function NavBar() {
  return (
    <nav>
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

      <div>
        <button>
          <FaEthereum />
          Ethereum
        </button>
        <button>Connect</button>
      </div>
    </nav>
  );
}

export default NavBar;
