
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
            icon: () => <Link to="/aboutme"><img id="about" alt="App Store" src="src/assets/about.png"
                 width={"100%"}/>
                {/* <Tooltip anchorSelect="#about" content="Hello world!" /> */}
                </Link>,
        },
        {
            label: 'Portfolio',
            icon: () => <Link to="/portfolio"><img alt="App Store" src="src/assets/photos.png" width="100%" /></Link>,
        },
        {
            label: 'Resume',
            icon: () => <Link to="/resume"><img alt="App Store" src="src/assets/notes.png" width="100%" /></Link>,
        },
        {
            label: 'Contact',
            icon: () => <Link to="/contact"><img alt="App Store" src="src/assets/mail.png" width="100%" /></Link>,
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
        <div>
            <div className="card dock-demo border-0 bg-transparent" style={{ height: "20vh" }}>
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
                <div className="dock-window bg-transparent flex" style={{ height: "30%" }}>
                    <Dock 
                        model={items} 
                        position='top' 
                        pt={{
                            container: {
                                style: { bacground: 'linear-gradient(to right,#056BAE, #673976, #056BAE)', borderRadius: '12px' }
                            }
                        }}
                    />
                </div>
            </div>
            <Outlet />
            <Footer />
        </div>
    )
}
