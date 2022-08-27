import React from 'react'
import "./Footer.css"
import {TiSocialFacebook ,TiSocialTwitter,TiSocialYoutubeCircular ,TiSocialGithub ,TiSocialInstagramCircular} from "react-icons/ti"

export default function Footer() {
  return (
    <div className='Footer'>
         <div className='Footer-Container'>
            <div className='Top'> 
                <h3>BEACHES . </h3>
                    <div className='Icons-Footery'>
                        <ul>
                            <li><TiSocialFacebook/></li>
                            <li><TiSocialTwitter/></li>
                            <li><TiSocialYoutubeCircular/></li>
                            <li><TiSocialGithub/></li>
                            <li><TiSocialInstagramCircular/></li>
                        </ul>
                    </div>
            </div>
            <div className='bottom'>
                <div className='Left-part'>
                    <ul>
                        <li>About</li>
                        <li>Partners</li>
                        <li>Careers</li>
                        <li>News</li>
                        <li>Advertising</li>
                    </ul>
                </div>
                <div className='Right-part'>
                     <ul>
                        <li>Contact</li>
                        <li>Terms</li>
                        <li>Policy</li>
                        <li>Privacy</li>
                        <li>Customer Service</li>
                    </ul>
                </div>
            </div>
         </div>
    </div>
  )
}
