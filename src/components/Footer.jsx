import Logo from "./Logo";
import { FaTelegramPlane, FaMediumM, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <Logo />
        <p>
          Launch hand-picked projects and help them shine. Smart Launchpad with
          AI implementation and DeFi focus.
        </p>
      </div>
      <ul className="social-media">
        <li>
          <a href="https://web.telegram.org/a/">
            <FaTelegramPlane />
          </a>
        </li>
        <li>
          <a href="https://x.com/home">
            <FaXTwitter />
          </a>
        </li>
        <li>
          <a href="https://medium.com/m/signin">
            {" "}
            <FaMediumM />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/">
            <FaLinkedinIn />
          </a>
        </li>
      </ul>

      <div className="copyright">
        <p>Copyright &copy; 2021.All reserved.</p>
        <ul>
          <li>
            <a href="">Terms of Service|</a>
          </li>
          <li>
            <a href="">Privacy Policy|</a>
          </li>
          <li>
            <a href="">Help Center|</a>
          </li>
          <li>
            <a href="">info@redkitepad.com</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
