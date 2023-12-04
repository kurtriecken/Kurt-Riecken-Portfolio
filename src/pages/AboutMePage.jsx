import { Link } from 'react-router-dom';


export default function AboutMe() {
    return (
        <div className='card container w-75 border-0 bg-transparent'>
            <div className='text-center flex'>
                <h1>This is all about me!</h1>
                <Link className='m-auto' to="/">← Home</Link>
            </div>
        </div>
    )
};