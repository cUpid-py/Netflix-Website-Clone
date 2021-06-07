import React from 'react'
import "./LandingPage.css"
import Logo from "../Assets/Logo.png"

const landingPage = () => {
    return (
        <div>
            <section className="bg">
                <div className="nav-dec">
                    <img className="Logo" src={Logo} alt="Logo"></img>

                    <a href="#"><button className="btn-1">Sign In</button></a>
                </div>

                <div className="Unlimited" >
                    Unlimited movies, TV <br /> shows, and more.
                </div>

                <p className="watch" >Watch anywhere. Cancel anytime.</p>
                <p className ="ready">Ready to watch? Enter your email to create or restart your membership.</p>

                <div className="mail-but" >
                    <input className="email-box" type="email" placeholder="Email Address"></input>
                    <button className="gs-button" >Get Started</button>

                </div>      

                <hr />

            </section>
           
            
            
        </div>
    )
}

export default landingPage
