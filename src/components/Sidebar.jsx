// Image imports
import aboutIcon from '../assets/about.png'
import photosIcon from '../assets/photos.png'
import notesIcon from '../assets/notes.png'
import mailIcon from '../assets/mail.png'

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
            icon: () => <Link to="/aboutme"><img id="about" alt="App Store" src={aboutIcon}
                 width={"100%"}/>
                {/* <Tooltip anchorSelect="#about" content="Hello world!" /> */}
                </Link>,
        },
        {
            label: 'Portfolio',
            icon: () => <Link to="/portfolio"><img alt="App Store" src={photosIcon} width="100%" /></Link>,
        },
        {
            label: 'Resume',
            icon: () => <Link to="/resume"><img alt="App Store" src={notesIcon} width="100%" /></Link>,
        },
        {
            label: 'Contact',
            icon: () => <Link to="/contact"><img alt="App Store" src={mailIcon} width="100%" /></Link>,
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
