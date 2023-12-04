import gitHubLogo from '../assets/github-mark.png'
import linkedInLogo from '../assets/linkedin.svg'
import reactLogo from '../assets/react.svg'
import './Footer.css'
// import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { Button } from 'primereact/button';


export default function Footer() {
    return (
        <div className='mt-5'>
            <div className='footer container m-auto card border-0 bg-transparent'>
                <div className='row flex text-center my-1'>
                    <p className='my-0'>Built with <span><img className='reactLogo' src={reactLogo} alt="" /></span></p>
                </div>
                <nav className='socials_links my-1'>
                    {/* <Button label="Submit" /> */}
                    <h3>Socials: </h3>
                    <a href="mailto:kurt.riecken@gmail.com">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="" />
                    </a>
                    <a href="https://www.github.com/kurtriecken">
                        <img src={gitHubLogo} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/kurt-riecken-95ba77158/">
                        <img src={linkedInLogo} alt="" />
                    </a>
                    {/* <a href="https://www.linkedin.com">
                        <EmailIcon />
                    </a>
                    <a href="https://www.linkedin.com">
                        <PhoneIcon />
                    </a> */}
                </nav>
            </div>
        </div>
    )
}