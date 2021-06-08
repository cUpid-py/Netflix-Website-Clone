import React from 'react'
import "./KidsSection.css"
import Kids from "../Assets/Kids.png"

const KidsSection = () => {
    return (
        <div>
            <div className="c4" > 
                <div className="c4-text" >
                    <h1>Create profiles for kids.</h1>
                    <p>Send kids on adventures with their favorite <br /> characters in a 
                    space made just for them— <br /> free with your membership.</p>
                </div>

                <div className="c4-img" >
                    <img className="Kids" src={Kids} alt="Kids"  height="380px" ></img>
                </div>
            </div>
            
        </div>
    )
}

export default KidsSection
