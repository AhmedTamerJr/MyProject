import React from 'react'
import "./Hero.css"
import Video from "../../mediaUsed/maldivesVideo.mp4"
import {GoSearch} from "react-icons/go"
function Hero() {
  return (
    <div className='Hero'>
        
        <video autoPlay loop muted id="vedio">
            <source src={Video} type="video/mp4"/>
        </video>

        <div className='overlay'></div>
        <div className='Content'>

            <h1>First Class Travel</h1>

            <h2>
                Top 1% location wolrdwide
            </h2>

            <form className='form'>

                <div>
                    <input type="text" placeholder='Search Destination'/>
                </div>

                <div className='SearchIcon'>

                    <GoSearch className="icon"/>

                </div>
            </form>
        </div>
        
    </div>
  )
}

export default Hero