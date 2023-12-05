import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div 
            className='container w-75 m-auto align-middle text-center'
            style={{minHeight: '400px'}}
        >
            {/* <Link to="/">← Go Back</Link> */}
            <h1>Welcome!</h1>
            <p>Welcome to my digital space, where creativity meets functionality and innovation thrives. I'm delighted to invite you to explore my portfolio, 
                a reflection of my passion for web design and software engineering. Here, you'll find a collection of projects that showcase not only my 
                technical prowess but also my commitment to creating user-centric, visually captivating digital experiences. Whether you're a fellow 
                enthusiast of code, a potential collaborator, or simply someone curious to see what's behind the screen, I extend a warm welcome. 
                Join me on this journey where technology meets artistry, and let's embark on a seamless and inspiring digital adventure together.
            </p>
        </div>

    );
}