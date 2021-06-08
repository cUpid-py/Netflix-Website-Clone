import React from 'react'
import "./DownloadSection.css"
import DownloadImg from "../Assets/Download.PNG"

const DownloadSection = () => {
    return (
        <div>
            <div className="c2" >
                <div className="c2-text" >
                    <h1>Download your shows <br /> to watch offline.</h1>
                    <p>Save your favorites easily and always have <br /> something to watch.</p>
                </div>
                <div className="c2-img" >
                    <img className="DownloadImg" src={DownloadImg} alt="DownloadImg"></img>
                </div>
            </div>
            
        </div>
    )
}

export default DownloadSection
