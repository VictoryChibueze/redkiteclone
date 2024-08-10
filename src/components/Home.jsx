import { FaArrowRightLong } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <HeroSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="hero-section">
      <h1>Soar with Red Kite</h1>
      <p className="vision">
        Red Kite is a top-tier launchpad that allows investors to participate in
        a token pre-sales of carefully-chosen web3 projects
      </p>
      <div className="sponsorship">
        <p>
          <span>91+</span>IDO projects
        </p>
        <p>
          <span>$12,450,000</span>Funded raised
        </p>
        <p>
          <span>+2,996.4%</span>ATH AVG ROI
        </p>
      </div>
      <div className="hero-btn">
        <button className="btn-pools">
          See Pools <FaArrowRightLong />
        </button>
        <button className="btn-notify">
          <FaTelegramPlane />
          Get Notified
        </button>
      </div>
      <p className="sponsor-head">Supported exchanges to buy $PKF</p>
      <div className="sponsors">
        <button className="uniswap">Uniswap</button>
        <button className="gate">Gate.io</button>
        <button className="ascend">AscendEX</button>
      </div>
    </section>
  );
}
export default Home;
