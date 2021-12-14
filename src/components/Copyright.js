import "./styles.css";








const Copyright = () => {

    return (
        <div className="copyright">
            <div style={{marginBottom: "0.25rem"}} className="terms-holder">
                <p className="p-anchor">Legal</p>
                <p className="p-anchor">Privacy</p>
                <p className="p-anchor">Security</p>
            </div>
            <p style={{marginBottom: "0.25rem"}} className="default-font">© 2021 Intuit, Inc. All rights reserved. Intuit, QuickBooks, QB, TurboTax, ProConnect and Mint are registered trademarks of Intuit Inc.</p>
            <p style={{marginBottom: "3rem"}} className="default-font">Terms and conditions, features, support, pricing, and service options subject to change without notice.</p>
        </div>
    )
}

export default Copyright;