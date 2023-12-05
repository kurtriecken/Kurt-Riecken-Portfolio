import gitHubLogo from '../assets/github-mark.png'
import linkedInLogo from '../assets/linkedin.svg'
import reactLogo from '../assets/react.svg'
import './Footer.css'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimneyWindow } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
    return (
        <div className='mt-5'>
            <Link className='mb-3' to="/"><FontAwesomeIcon className='m-auto' icon={faHouseChimneyWindow} style={{ width: "35px", height: 'auto' }} /></Link>

            <div className='footer container m-auto card border-0 bg-transparent'>
                <nav className='socials_links my-1 container flex text-center'>
                    <a className='mx-1' href="https://www.github.com/kurtriecken">
                        <img src={gitHubLogo} alt="" />
                    </a>
                    <a className='mx-1' href="https://www.linkedin.com/in/kurt-riecken-95ba77158/">
                        <img src={linkedInLogo} alt="" />
                    </a>
                </nav>
                <div className='row flex text-center my-1'>
                    <p className='my-0'>Built with <span><img className='reactLogo' src={reactLogo} alt="" /></span></p>
                </div>
            </div>
        </div>
    )
}