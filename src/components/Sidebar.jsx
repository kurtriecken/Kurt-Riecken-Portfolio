
import { useState } from 'react';
import { Dock } from 'primereact/dock';
import { RadioButton } from 'primereact/radiobutton';
import '../styles/DockDemo.css';

import Footer from './Footer'
import { Link, Outlet } from 'react-router-dom';

export default function BasicDemo() {
    const [position, setPosition] = useState('bottom');    
    const items = [
        {
            label: 'Finder',
            icon: () => <Link to="/aboutme"><img alt="App Store" src="src/assets/Kurt_Riecken.jpg" width="100%"/></Link>,
        },
        {
            label: 'App Store',
            icon: () => <Link to="/portfolio"><img alt="App Store" src="src/assets/coding_quiz.jpg" width="100%"/></Link>,
        },
        {
            label: 'Photos',
            icon: () => <Link to="/resume"><img alt="App Store" src="src/assets/github-mark.png" width="100%"/></Link>,
        },
        {
            label: 'Trash',
            icon: () => <Link to="/contact"><img alt="App Store" src="src/assets/github-mark.png" width="100%"/></Link>,
        }
    ];

    const positions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];

    return (
        <div className="card dock-demo">
            {/* <div className="flex flex-wrap gap-3 mb-5">
                {positions.map((option) => {
                    const { value, label } = option;

                    return (
                        <div className="flex align-items-center" key={label}>
                            <RadioButton value={label} onChange={() => setPosition(option.value)} checked={position === value} />
                            <label htmlFor={label} className="ml-2">
                                {label}
                            </label>
                        </div>
                    );
                })}
            </div> */}
            <div className="dock-window" style={{ backgroundImage: 'url(https://primefaces.org/cdn/primereact/images/dock/window.jpg)', 
                height: "100vh" }}>
                <Dock model={items} position='left' />
                <Footer />
                <Outlet />
            </div>
        </div>
    )
}
        