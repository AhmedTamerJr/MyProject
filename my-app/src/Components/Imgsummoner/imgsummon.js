import React from 'react'
import "./imgsummon.css"
export default function imgsummon({img,text}) {
  return (
    <div className='Img-Container'>
        <img src={img} alt={text}/>
        <div className='overlay'>
            <p>{text}</p>
        </div>
    </div>
  )
}
