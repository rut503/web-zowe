import React from "react";
import "../css/FooterCSS.css";

function Footer({ className }) {
    return (
        <div className="footer" >
            <div className="container">
				<span>© {(new Date().getFullYear())} Rutvik Patel</span>
            </div>
        </div>
    );
}

export default Footer;