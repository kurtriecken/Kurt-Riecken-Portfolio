import { Link } from 'react-router-dom';

export default function Resume() {
    return (
        <div className='container w-75'>

            <Link to="/">← Go Back</Link>
            <h1>This will include a downloadable copy of my resume</h1>
        </div>
    )
};