import "./styles.css";

import PasswordLock from "../assets/imgs/password-lock.png";






const Form = () => {

    return (
        <form>
            <h4 className="title-font centered mb">Create an Intuit account</h4>
            <h5 className="default-font centered mb">One account for everything Intuit, including Mint. <p className="anchor-style">Learn more</p></h5>
            <label className="label-font" htmlFor="email">Email</label>
            <input className="text-input" type="text" name="email" /> 
            <label className="label-font" htmlFor="phone">Phone <p style={{display: "inline"}} className="default-font">(recommended)</p></label>
            <input style={{marginBottom: 0}} className="text-input" type="tel" name="phone" /> 
            <p style={{marginBottom: "1rem", marginTop: "0.5rem"}} className="small-font">Standard call, message, or data rates may apply.</p>
            <label className="label-font" htmlFor="password">Password</label>
            <div className="text-input">
                <input className="password-input" type="password" name="password" /> 
                <img className="password-lock" src={PasswordLock} alt="" />
            </div>
            <button className="submit-btn">
            <svg style={{marginRight: "0.5rem"}} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                Create Account
            </button>
        </form>
    )
}

export default Form;