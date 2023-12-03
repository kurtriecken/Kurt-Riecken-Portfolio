
import { useState } from 'react';
import { Dock } from 'primereact/dock';
import { RadioButton } from 'primereact/radiobutton';
import '../styles/DockDemo.css';

import Footer from './Footer'
import { Link, Outlet } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

export default function BasicDemo() {
    const [position, setPosition] = useState('bottom');    
    const items = [
        {
            label: 'About Me',
            icon: () => <Link to="/aboutme"><img id="about" alt="App Store" src="src/assets/Kurt_Riecken.jpg"
                     width="100%"/>
                <Tooltip anchorSelect="#about" content="Hello world!"/></Link>,
        },
        {
            label: 'Portfolio',
            icon: () => <Link to="/portfolio"><img alt="App Store" src="src/assets/photos.png" width="100%"/></Link>,
        },
        {
            label: 'Resume',
            icon: () => <Link to="/resume"><img alt="App Store" src="src/assets/github-mark.png" width="100%"/></Link>,
        },
        {
            label: 'Contact',
            icon: () => <Link to="/contact"><img alt="App Store" src="src/assets/ichat.png" width="100%"/></Link>,
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
            <div className="dock-window" style={{ backgroundColor: 'lightblue', 
                height: "100vh" }}>
                <Dock model={items} position='left' />
                <Footer />
                <Outlet />
            </div>
        </div>
    )
}
        