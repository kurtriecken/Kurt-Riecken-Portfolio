import notesIcon from '../assets/Kurt_Riecken.jpg'
import '../styles/ResumeStyles.css'

export default function Resume() {
    return (
        <div
            className='card container w-75 border-0 bg-transparent text-center'
            style={{ verticalAlign: "middle", minHeight: "450px" }}
        >
            <h2>Click my portrait to download a copy of my resume!</h2>
            <div class="shimmer-container m-auto">
                <a
                    className='m-auto'
                    href="src/assets/Kurt_Riecken_Resume.pdf"
                    download>
                    <img src={notesIcon} alt="Resume" style={{ width: "160px" }} />
                </a>
                <div class="shimmer-overlay">
                </div>
            </div>

        </div>
    )
};