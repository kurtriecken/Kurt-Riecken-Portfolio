import kurtPicture from '../assets/Kurt_Riecken.jpg'
import './Header.css'
import React, { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';


export default function Header() {
    const [activeIndex, setActiveIndex] = useState(3);
    const items = [
        { label: 'About me', icon: 'pi pi-fw pi-calendar', url: 'aboutme' },
        { label: 'Portfolio', icon: 'pi pi-fw pi-pencil', url: 'portfolio' },
        { label: 'Resume', icon: 'pi pi-fw pi-file', url: 'resume' },
        { label: 'Contact', icon: 'pi pi-fw pi-cog', url: 'contact' }
    ];

    return (
        <div className='header'>
            <div className="kurt_picture">
                <img src={kurtPicture} alt="" />
            </div>
            <div className="card bg-transparent">
                <TabMenu to='/' className='p-menuitem-link bg-transparent' model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            </div>
        </div>
    )
}



