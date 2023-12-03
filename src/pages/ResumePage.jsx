import { Link } from 'react-router-dom';

export default function Resume() {
    return (
        <div className='card container w-75 border-0 bg-transparent'>
            <h1>This will include a downloadable copy of my resume</h1>
            <a href="src/assets/Kurt_Riecken_Resume.pdf" download>Click to download</a>
            <Link className='m-auto' to="/">← Go Back</Link>
        </div>
    )
};