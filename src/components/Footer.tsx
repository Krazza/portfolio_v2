import React from "react";
import "../styles/Footer.css";
import { FaDiscord, FaLinkedin, FaInstagramSquare  } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

function Footer() {
    const discordID = "224950551861919744";

    const discordNotify = () => { 
        toast('Discord user ID was copied to your clipboard!', { position: "bottom-right", className: "notificationPopUp" });
        navigator.clipboard.writeText(discordID)
    }


    return(
        <footer>
            <section>
                <h3>{"Hello World, lets connect!"}</h3>
                <div className="iconContainer">
                    <a href="https://www.linkedin.com/in/vladislav-muondo-87021a194/" rel="noopener noreferrer" target="_blank"><FaLinkedin className="appIcon ln"/></a>
                    <FaDiscord className="appIcon dc" onClick={discordNotify}/>
                    <a href="https://www.instagram.com/krazza_em/" rel="noopener noreferrer" target="_blank"><FaInstagramSquare className="appIcon inst"/></a>
                </div>
            </section>
            <Toaster 
            toastOptions={{
                style: {
                maxWidth: 500
              }}}
            containerStyle={{
                bottom: 75,
                right: 75,
            }}/>
        </footer>
    )
}

export default Footer;