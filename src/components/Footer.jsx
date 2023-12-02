import gitHubLogo from '../assets/github-mark.png'
import linkedInLogo from '../assets/linkedin.svg'
import './Footer.css'
// import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { Button } from 'primereact/button';


export default function Footer() {
    return (
        <>
            <div className='footer'>
                <nav className='socials_links'>
                    <Button label="Submit" />
                    <a href="https://www.google.com">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="" />
                    </a>
                    <a href="https://www.github.com">
                        <img src={gitHubLogo} alt="" />
                    </a>
                    <a href="https://www.linkedin.com">
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
        </>
    )
}