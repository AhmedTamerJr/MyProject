import React ,{useState}from 'react'
import  {BiSearch} from "react-icons/bi"
import {BsSegmentedNav,BsPersonFill} from "react-icons/bs"
import {TiSocialFacebook ,TiSocialTwitter,TiSocialYoutubeCircular ,TiSocialGithub ,TiSocialInstagramCircular} from "react-icons/ti"
import "./NavBar.css"
export default function NavBar() {

    const [nav, setNav]=useState(false)
    const handleNav=()=> setNav(!nav)
    
  return (
    
    <div className='NavBar '>
        <div>
            <h2>BEACH.</h2>
        </div>

        <ul className='Nav-Menu'>
            <li>Home</li>
            <li>Destination</li>
            <li>Travel</li>
            <li>Book</li>
            <li>Views</li>
        </ul>

        <div className='Nav-Icons'>   
        <BiSearch className="icon"/>
        <BsPersonFill className="icon"/>
        </div>

        <div className='Right-Side'>
            <BsSegmentedNav className="icon" onClick={handleNav}/>
        </div>
        {/* mobile menu */}
        <div className={nav ? 'Mobile-Menu active':"Mobile-Menu"}> 
            <ul className='mobile-nav'>
                <li>Home</li>
                <li>Destination</li>
                <li>Travel</li>
                <li>Book</li>
                <li>Views</li>
            </ul>

            <div className='Mobile-menu-bottom'>
                
                <div className='menu-Buttons'>
                    <button>Search</button>
                    <button>Account</button>
                </div>

                <div className='Social-Media'>
                    <TiSocialFacebook className="icon"/>
                    <TiSocialTwitter className="icon"/>
                    <TiSocialInstagramCircular className="icon"/>
                    <TiSocialYoutubeCircular className="icon"/>
                    <TiSocialGithub className="icon"/>
                </div>
            </div>
        </div>
        {/* End on mobile menu */}

    </div>

  )
}
