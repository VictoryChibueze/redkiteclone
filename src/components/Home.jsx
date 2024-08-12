import { FaArrowRightLong } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { FaAtom, FaAward, FaTelegramPlane } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { ImHammer2 } from "react-icons/im";

import "../styles/Home.css";

function Home() {
  return (
    <>
      <HeroSection />
      <TokenSales />
      <Features />
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
      <div className="btn-stake">
        <button>
          Stake now <GoArrowRight />
        </button>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="features">
      <div className="features-heading">
        <h3>Red Kite Features</h3>
        <p>Smart Launchpad with AI implementation and DeFi focus</p>
      </div>
      <div className="features-container">
        <div>
          <div className="feature-logo__container">
            <span>
              <FaAtom />
            </span>
          </div>
          <h4>Multi-chain, flexible options</h4>
          <p>
            Red Kite offers one the most diverse forms of blockchain support,
            aiming to create a one-stop location for both investors and
            startups. We currently supports the following chains: Ethereum,
            Binance Smart Chain, Polygon, Avalanche, and all EVM compatible
            chains.
          </p>
        </div>
        <div>
          <div className="feature-logo__container">
            <span>
              <FaAward />
            </span>
          </div>

          <h4>Hand-picked projects</h4>
          <p>
            We hand-pick projects cautiously, scrutinize and verify the project
            team’s origin and legitimacy, innovation of idea, and their capacity
            to execute their vision
          </p>
        </div>
        <div>
          <div className="feature-logo__container">
            <span>
              <IoDiamondOutline />
            </span>
          </div>
          <h4>Reputation system</h4>
          <p>
            Our loyal members can earn incentives in the form of Red Kite points
            from our Reputation system for every $PKF placed in addition to the
            benefits of participating in profitable token sales and earning APY
            from the staking mechanism.
          </p>
        </div>
        <div>
          <div className="feature-logo__container">
            <span>
              <FaBalanceScale />
            </span>
          </div>
          <h4>Fairness</h4>
          <p>
            We understand that opportunities should be delivered fairly and
            efficiently. Red Kite's lane-based swap system ensures everybody has
            a chance to join accordingly based on their tier without having to
            resort to gas war.
          </p>
        </div>
        <div>
          <div className="feature-logo__container">
            <span>
              <LuCalendarDays />
            </span>
          </div>
          <h4>Integrated Vesting Schedule</h4>
          <p>
            Red Kite goes with a Distribution Portal for projects to vest their
            sold tokens. This feature can also be used for pre-sale or post-sale
            secondary offerings.
          </p>
        </div>
        <div>
          <div className="feature-logo__container">
            <span>
              <ImHammer2 />
            </span>
          </div>
          <h4>Advanced Features</h4>
          <p>
            Red Kite constantly places a high priority on safeguarding and
            preserving the benefits of users with an appropriate refund policy.
            In the future, Red Kite will continuously develop top-notch features
            like project incubation, DAO model application, AI technologies, and
            many more to deliver robust user experience.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Home;
