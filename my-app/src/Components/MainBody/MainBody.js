import React from 'react'
import "./MainBody.css";
import borabora from "../../mediaUsed/borabora.jpg"
import borabora2 from "../../mediaUsed/borabora2.jpg"
import maldives from "../../mediaUsed/maldives.jpg"
import maldives2 from "../../mediaUsed/maldives2.jpg"
import maldives3 from "../../mediaUsed/maldives3.jpg"

function MainBody() {
  return (
    <div name="main"className='MainBody'>
        <div className='Container'>

            <h1>
                All-Inclusive Resorts
            </h1>

            <p>
                One the Corbbean Best Beaches
            </p>

            <div className='Image-Container'>
                <img className='span-3 Image-grid-span-2' src={borabora} alt="/"></img>
                <img src={borabora2} alt="/"></img>
                <img src={maldives} alt="/"></img>
                <img src={maldives2} alt="/"></img>
                <img src={maldives3} alt="/"></img>
            </div>
        </div>
    </div>
  )
}

export default MainBody