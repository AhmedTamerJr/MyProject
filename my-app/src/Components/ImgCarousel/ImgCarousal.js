import React from 'react'
import {Carousel} from "react-responsive-carousel"
import borabora from "../../mediaUsed/borabora.jpg"
import borabora2 from "../../mediaUsed/borabora2.jpg"
import maldives from "../../mediaUsed/maldives.jpg"
// import maldives2 from "../../mediaUsed/maldives2.jpg"
// import maldives3 from "../../mediaUsed/maldives3.jpg"
// import keywest from "../../mediaUsed/keywest.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./ImgCarousal.css"

export default function ImgCarousal() {
  return (
    <div>
        <div name="carousel" className='container '>
        <Carousel  autoPlay={true} infiniteLoop={true}>
            <div>
                <img src={borabora}  alt="1"/>
                {/* <p className='Carousel-legend'>You</p> */}
            </div>
            <div>
                <img src={borabora2} alt="1"/>
                {/* <p className='Carousel-legend'>You</p> */}
            </div>
            <div>
                <img src={maldives} alt="1"/>
                {/* <p className='Carousel-legend'>You</p> */}
            </div>
            
        </Carousel></div>
    </div>
  )
}
