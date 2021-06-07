import React from 'react'
import "./Watch.css"
// import Netvid from "../Assets/Netvid.m4v";
import Netvid from "../Assets/Netvid.PNG";


const Watch = () => {
    return (
        <div>
            <div className="c1" >
                <div className="c1-text" >
                    <h1>Enjoy on your TV.</h1>
                    <p>Watch on Smart TVs, Playstation, Xbox, <br /> Chromecast, Apple TV,
                    Blu-ray players, and <br /> more.</p>                    
                </div>
                
                <div>
                    <img className="Netvid" src={Netvid} alt="Netvid"></img>
                </div>

            </div>
           




            
        </div>
    )
}

export default Watch
