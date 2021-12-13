import "./styles.css";
import IntuitLogo from "../assets/imgs/intuit-logo.png";
import MintLogo from "../assets/imgs/mint-logo.png";
import QuickbooksLogo from "../assets/imgs/quickbooks-logo.png";
import TurbotaxLogo from "../assets/imgs/turbotax-logo.png";




const Logos = () => {

    return (
        <div className="logos">
            <img className="main-logo" src={IntuitLogo} alt="main logo" />
            <div className="small-logos">
                <img class="logo-sizing" src={MintLogo} alt="side logo" />
                <h4 className="logo-font">mint</h4>
                <img class="logo-sizing" src={QuickbooksLogo} alt="side logo" />
                <h4 className="logo-font">quickbooks</h4>
                <img class="logo-sizing" src={TurbotaxLogo} alt="side logo" />
                <h4 className="logo-font">turbotax</h4>
            </div>
        </div>
    )
}

export default Logos;