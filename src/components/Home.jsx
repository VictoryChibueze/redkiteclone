import { FaArrowRightLong } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <HeroSection />
      <TokenSales />
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

function TokenSales() {
  return (
    <section className="tokensales">
      <div className="tokensales-mission">
        <h2>Token Sale Launchpad</h2>
        <p>
          Gain early access to public and special token sales at a lower price
          before they hit the market
        </p>

        <div className="btn-join">
          <button>
            Join now <GoArrowRight />
          </button>
        </div>
      </div>

      <section className="IDO-section">
        <h3>Staking Pool</h3>
        <p>
          Earn high yield by staking PKF, LP-PKF or join other attractive
          staking pools from IDO projects on Red Kite
        </p>
        <div className="staking-pool">
          <div className="container">
            <h4>30 Days Staking </h4>
            <p>With IDO</p>
            <p>
              APR <span>1%</span>
            </p>
            <p>
              Lock-up term <span>30 days</span>
            </p>
            <p>
              Withdrawal delay time <span>8 days</span>
            </p>
            <div className="discover-btn__container">
              <button className="discover-btn">
                Discover
                <GoArrowRight />
              </button>
            </div>
          </div>
          <div className="container">
            <h4>30 Days Staking </h4>
            <p>With IDO</p>
            <p>
              APR <span>1%</span>
            </p>
            <p>
              Lock-up term <span>30 days</span>
            </p>
            <p>
              Withdrawal delay time <span>8 days</span>
            </p>
            <div className="discover-btn__container">
              <button className="discover-btn">
                Discover
                <GoArrowRight />
              </button>
            </div>
          </div>
          <div className="container">
            <h4>30 Days Staking </h4>
            <p>With IDO</p>
            <p>
              APR <span>1%</span>
            </p>
            <p>
              Lock-up term <span>30 days</span>
            </p>
            <p>
              Withdrawal delay time <span>8 days</span>
            </p>
            <div className="discover-btn__container">
              <button className="discover-btn">
                Discover
                <GoArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
export default Home;
