import { Link } from 'react-router-dom';


export default function AboutMe() {
    return (
        <div className='container w-75'>
            <div className='main_body'>
                <Link to="/">← Go Back</Link>
                <h1>This is all about me!</h1>
            </div>
        </div>
    )
};