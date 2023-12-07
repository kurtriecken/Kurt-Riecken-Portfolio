import notesIcon from '../assets/Kurt_Riecken.jpg'
import '../styles/ResumeStyles.css'
import resume from '../../src/assets/Kurt_Riecken_Resume.pdf'

export default function Resume() {
    const skills = [
        {
            name: 'HTML',
            url: 'https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white',
        },
        {
            name: 'CSS',
            url: 'https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white',
        },
        {
            name: 'JavaScript',
            url: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
        },
        {
            name: 'Bootstrap',
            url: 'https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white',
        },
        {
            name: 'JQuery',
            url: 'https://img.shields.io/badge/jQuery%20-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white',
        },
        {
            name: 'NodeJS',
            url: 'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white',
        },
        {
            name: 'Nodemon',
            url: 'https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD',
        },
        {
            name: 'MySQL',
            url: 'https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white',
        },
        {
            name: 'Express.js',
            url: 'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB',
        },
        {
            name: 'Sequelize',
            url: 'https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white',
        },
    ]

    const badges = skills.map(skill => (

            <img 
                src={skill.url} 
                alt="License: MIT" 
                style={{ height: "20px", height: 'auto' }}
            >
            </img>

    ));

    return (
        <div
            className='card container w-75 border-0 bg-transparent text-center'
            style={{ verticalAlign: "middle", minHeight: "450px" }}
        >
            {/* <h2>My skills</h2> */}
            <ul style={{ height: "20px", height: 'auto' }}>{badges}</ul>
            <h4>Click my portrait to download a copy of my resume!</h4>
            <div class="shimmer-container m-auto">
                <a
                    className='m-auto'
                    href={resume}
                    download>
                    <img src={notesIcon} alt="Resume" style={{ width: "160px" }} />
                </a>
                <div class="shimmer-overlay">
                </div>
            </div>

        </div>
    )
};