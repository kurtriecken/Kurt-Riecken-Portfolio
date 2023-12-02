import gitHubLogo from '../assets/github-mark.png'
import linkedInLogo from '../assets/linkedin.svg'
import './Footer.css'

export default function Footer() {
    return (
        <>
            <div className='footer'>
                <nav className='socials_links'>
                    <a href="https://www.google.com">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="" />
                    </a>
                    <a href="https://www.github.com">
                        <img src={gitHubLogo} alt="" />
                    </a>
                    <a href="https://www.linkedin.com">
                        <img src={linkedInLogo} alt="" />
                    </a>
                </nav>
            </div>
        </>
    )
}