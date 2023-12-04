import { Link } from 'react-router-dom';

export default function Resume() {
    return (
        <div className='card container w-75 border-0 bg-transparent text-center' style={{"veritcal-align": "middle"}}>
            <h1>Click the link below to download a copy of my resume!</h1>
            <a className='m-auto' href="src/assets/Kurt_Riecken_Resume.pdf" download>Click to download</a>
            <Link className='m-auto' to="/">← Home</Link>
        </div>
    )
};