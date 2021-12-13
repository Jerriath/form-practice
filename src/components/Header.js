import "./styles.css";








const Header = () => {

    return (
        <header className="header">
            <span className="sign-in-msg">
                <p className="default-font">
                    Already Have an Intuit account?
                </p>
                <p className="anchor-style">
                    I forgot my User ID or Password
                </p>
            </span>
            <button className="sign-in">
            <svg style={{marginRight: "0.5rem"}} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <p style={{margin: "auto"}} className="bigger-font">Sign In</p>
            </button>
        </header>
    )
}

export default Header;