import React from 'react'
import gold from "../../mediaUsed/gold.png";
import"./Infos.css"
export default function Infos() {
  return (
    <div name="info" className='Container-info'>
        <div className='Left-Side'>
            <h2>Lorem Ipsum</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <br/>
            <div className='Search-col-2'>
                <div className='box'>
                    <div>
                        <img src={gold} alt="/"/>
                    </div><br/>
                    <div>
                        <h3> Lorem Ipsum</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry </p>
                    </div>
                </div><br/>
                <div className='box'>
                        <h3> Lorem Ipsum</h3>
                        <p> Lorem Ipsum is simply dummy </p>
                        <br/><button>View Packages</button>
                </div>
            </div>
        
        </div>

        <div className='Search'>
            <form className='Former'>
                <label><h4>Destination</h4></label>
                <select>
                    <option vlaue="10">Granda Antigua</option>
                    <option vlaue="12">Granda</option>
                    <option vlaue="13">Emerald Bay</option>
                    <option vlaue="14">Bora Bora</option>
                    <option vlaue="15">Key West</option>
                    <option vlaue="16">Maldives</option>
                </select>
                <label><h4>Check In</h4></label>
                <input type="date"/>
                <label><h4>Check out</h4></label>
                <input type="date"/>
                <button> Rates & Avalibilities</button>
            </form>
        </div>

    </div>
  )
}
