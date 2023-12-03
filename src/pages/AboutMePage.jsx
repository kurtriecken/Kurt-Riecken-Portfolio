import { Link } from 'react-router-dom';


export default function AboutMe() {
    return (
        <div className='card container w-75 border-0'>
            <div className='main_body text-center flex'>
                <h1>This is all about me!</h1>
                <Link className='mx-auto' to="/">← Go Back</Link>
            </div>
        </div>
    )
};