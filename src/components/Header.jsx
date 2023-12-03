import kurtPicture from '../assets/Kurt_Riecken.jpg'
import './Header.css'
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';
import { Link } from 'react-router-dom';


export default function Header() {
    const [activeIndex, setActiveIndex] = useState(3);
    const items = [
        // {label: 'Home', icon: 'pi pi-fw pi-home'},
        { label: 'About me', icon: 'pi pi-fw pi-calendar', url: 'aboutme' },
        { label: 'Portfolio', icon: 'pi pi-fw pi-pencil', url: 'portfolio' },
        { label: 'Resume', icon: 'pi pi-fw pi-file', url: 'resume' },
        { label: 'Contact', icon: 'pi pi-fw pi-cog', url: 'contact' }
    ];

    return (
        <div className='header'>
            <div className="kurt_picture">
                {/* <Link to="/">← Go Back</Link> */}
                {/* <a href="#"> */}
                <img src={kurtPicture} alt="" />
                {/* </a> */}
            </div>
            <div className="card bg-transparent">
                {/* <Button onClick={() => setActiveIndex(0)} className="p-button-outlined mb-5" label="Activate 1st" /> */}
                <TabMenu to='/' className='p-menuitem-link bg-transparent' model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            </div>
            {/* <div className='navbar'>
                <nav>
                    <a href="#">About me</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Resume</a>
                    <a href="#">Contact</a>
                </nav>
            </div> */}
        </div>
    )
}




// export default function ControlledDemo() {


//     return (

//     )
// }
