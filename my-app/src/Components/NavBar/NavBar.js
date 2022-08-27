import React ,{useState}from 'react'
import  {BiSearch} from "react-icons/bi"
import {BsSegmentedNav,BsPersonFill} from "react-icons/bs"
import {TiSocialFacebook ,TiSocialTwitter,TiSocialYoutubeCircular ,TiSocialGithub ,TiSocialInstagramCircular} from "react-icons/ti"
import "./NavBar.css"
import {Link} from "react-scroll";
export default function NavBar() {

    const [nav, setNav]=useState(false)
    const handleNav=()=> setNav(!nav)
    
  return (
    
    <div name="nav" className='NavBar '>
        <div>
            <h2>BEACH.</h2>
        </div>

        <ul className='Nav-Menu'>
           <Link to="main" smooth duration={500}> <li><b>H</b>ome</li></Link>
           <Link to="carousel"  smooth duration={500}> <li>Destination</li></Link>
           <Link to="views"  smooth duration={500}> <li>Travel</li></Link>
           <Link to="info"  smooth duration={500}> <li>Book</li></Link>
           <Link to="footer"  smooth duration={2000}> <li>About us</li></Link>
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
                <li><span>H</span>ome</li>
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
