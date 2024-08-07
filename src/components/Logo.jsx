import { GiAngelWings } from "react-icons/gi";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <h2>
        <GiAngelWings />
        RED
        <span>KITE</span>
      </h2>
    </Link>
  );
}

export default Logo;
