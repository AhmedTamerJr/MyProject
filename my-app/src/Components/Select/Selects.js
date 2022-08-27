import React from 'react'
import borabora from "../../mediaUsed/borabora.jpg"
import borabora2 from "../../mediaUsed/borabora2.jpg"
import maldives from "../../mediaUsed/maldives.jpg"
import maldives2 from "../../mediaUsed/maldives2.jpg"
import maldives3 from "../../mediaUsed/maldives3.jpg"
import keywest from "../../mediaUsed/keywest.jpg"
import Imgsummon from '../Imgsummoner/imgsummon'
import"./Selects.css"
function Selects() {
  return (
    <div name="views" className="Selects-Container">
        
            <Imgsummon img={borabora} text="Bora Bora"/>
            <Imgsummon img={borabora2} text="Emerald Bay"/>
            <Imgsummon img={maldives} text="Maldives"/>
            <Imgsummon img={maldives2} text="Grenda"/>
            <Imgsummon img={maldives3} text="Barbaos"/>
            <Imgsummon img={keywest} text="Key west"/>
        
    </div>
  )
}

export default Selects;