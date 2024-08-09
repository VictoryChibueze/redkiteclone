import "../styles/Connect.css";
import { MdCancel } from "react-icons/md";

function Connect({ onOpenModal }) {
  return (
    <div className="overlay">
      <section className="connect">
        <span onClick={onOpenModal}>
          <MdCancel />
        </span>
        <h4>Connect Wallet</h4>
        <div className="agreement-box">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">
            I read and accept the Terms of Service and Privacy Policy
          </label>
        </div>
        <div className="network">
          <h5>Choose Network</h5>
          <button>Ethereum</button>
          <button>BSC</button>
          <button>Polygon</button>
          <button>Avalanche</button>
          <button>Arbitrum</button>
          <button>5ireChain</button>
          <button>Sei</button>
        </div>
        <div className="wallet">
          <h5>Choose Wallet</h5>
          <button>Metamask</button>
        </div>
      </section>
    </div>
  );
}

export default Connect;
