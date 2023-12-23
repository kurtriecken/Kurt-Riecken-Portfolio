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
        {
            name: 'ChatGPT',
            url: 'https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white'
        },
        {
            name: 'MongoDB',
            url: 'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white'
        },
        {
            name: 'SQLite',
            url: 'https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white'
        },
        {
            name: 'Canva',
            url: 'https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white'
        },
        {
            name: 'Figma',
            url: 'https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white'
        },
        {
            name: 'CodePen',
            url: 'https://img.shields.io/badge/Codepen-000000?style=for-the-badge&logo=codepen&logoColor=white'
        },
        {
            name: 'LeetCode',
            url: 'https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06',
        },
        {
            name: 'Kaggle',
            url: 'https://img.shields.io/badge/Kaggle-035a7d?style=for-the-badge&logo=kaggle&logoColor=white',
        },
        {
            name: 'Codewars',
            url: 'https://img.shields.io/badge/Codewars-B1361E?style=for-the-badge&logo=codewars&logoColor=grey',
        },
        {
            name: 'Coursera',
            url: 'https://img.shields.io/badge/Coursera-%230056D2.svg?style=for-the-badge&logo=Coursera&logoColor=white',
        },
        {
            name: 'edX',
            url: 'https://img.shields.io/badge/edX-%2302262B.svg?style=for-the-badge&logo=edX&logoColor=white',
        },
        {
            name: 'MDN Web Docs',
            url: 'https://img.shields.io/badge/MDN_Web_Docs-black?style=for-the-badge&logo=mdnwebdocs&logoColor=white',
        },
        {
            name: 'Apollo-GraphQL',
            url: 'https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql',
        },
        {
            name: 'Bulma',
            url: 'https://img.shields.io/badge/bulma-00D0B1?style=for-the-badge&logo=bulma&logoColor=white',
        },
        {
            name: 'Chakra',
            url: 'https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white',
        },
        {
            name: 'JWT',
            url: 'https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens',
        },
        {
            name: 'NPM',
            url: 'https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white',
        },
        {
            name: 'React',
            url: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
        },
        {
            name: 'SASS',
            url: 'https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white',
        },
        {
            name: 'Webpack',
            url: 'https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black',
        },
        // {
        //     name: 'SASS',
        //     url: '',
        // },
        // {
        //     name: 'SASS',
        //     url: '',
        // },

    ]

    const badges = skills.map(skill => (

            <img 
                key={skill.url}
                src={skill.url} 
                alt={skill.name} 
                
            >
            </img>

    ));

    return (
        <div
            className='card container w-75 border-0 bg-transparent text-center'
            style={{ verticalAlign: "middle", minHeight: "450px" }}
        >
            <h2>My skills</h2>
            <ul>{badges}</ul>
            <h4>Click my portrait to download a copy of my resume!</h4>
            <div className="shimmer-container m-auto">
                <a
                    className='m-auto'
                    href={resume}
                    download>
                    <img src={notesIcon} alt="Resume" style={{ width: "160px" }} />
                </a>
                <div className="shimmer-overlay">
                </div>
            </div>

        </div>
    )
};