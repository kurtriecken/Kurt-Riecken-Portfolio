// Image imports
import aboutIcon from '../assets/about.png'
import photosIcon from '../assets/photos.png'
import notesIcon from '../assets/notes.png'
import mailIcon from '../assets/mail.png'

import { useState } from 'react';
import { Dock } from 'primereact/dock';

import Footer from './Footer'
import { Link, Outlet } from 'react-router-dom';
import { Tooltip } from 'primereact/tooltip';

import '../styles/DockDemo.css';

export default function Sidebar() {
    const items = [
        {
            label: "About Me",
            icon: () => (
                <>
                    <Tooltip
                        target='.about-test'
                        onShow={console.log("on show triggered")}
                        onBeforeShow={console.log("on before show triggered")}
                        onHide={console.log("on hide triggered")}
                        onBeforeHide={console.log("on before hide triggered")}
                        mouseTrack
                        mouseTrackTop={17}
                    />
                    <i
                        className='about-test'
                        data-pr-tooltip='About Kurt'
                        data-pr-position='bottom'
                        style={{ fontSize: "2rem", cursor: "pointer" }}
                    >
                        <Link to='/aboutme' >
                            <img 
                                id='about' 
                                alt='About Kurt' 
                                src={aboutIcon} 
                                width={"100%"} 
                                />
                        </Link>
                    </i>
                </>
            ),
        },
        {
            label: "Portfolio",
            icon: () => (
                <>
                    <Tooltip
                        target='.portfolio-test'
                        onShow={console.log("on show triggered")}
                        onBeforeShow={console.log("on before show triggered")}
                        onHide={console.log("on hide triggered")}
                        onBeforeHide={console.log("on before hide triggered")}
                        mouseTrack
                        mouseTrackTop={17}
                    />
                    <i
                        className='portfolio-test'
                        data-pr-tooltip='Projects'
                        data-pr-position='bottom'
                        style={{ 
                            fontSize: "2rem", 
                            cursor: "pointer" 
                        }}
                    >
                        <Link to='/portfolio'>
                            <img alt='App Store' src={photosIcon} width='100%' />
                        </Link>
                    </i>
                </>
            ),
        },
        {
            label: "Resume",
            icon: () => (
                <>
                    <Tooltip
                        target='.resume-test'
                        onShow={console.log("on show triggered")}
                        onBeforeShow={console.log("on before show triggered")}
                        onHide={console.log("on hide triggered")}
                        onBeforeHide={console.log("on before hide triggered")}
                        mouseTrack
                        mouseTrackTop={17}
                    />
                    <i
                        className='resume-test'
                        data-pr-tooltip='Resume'
                        data-pr-position='bottom'
                        style={{
                            fontSize: "2rem",
                            cursor: "pointer",
                        }}
                    >
                        <Link to='/resume'>
                            <img alt='App Store' src={notesIcon} width='100%' />
                        </Link>
                    </i>
                </>
            ),
        },
        {
            label: "Contact",
            icon: () => (
                <>
                    <Tooltip
                        target='.contact-test'
                        onShow={console.log("on show triggered")}
                        onBeforeShow={console.log("on before show triggered")}
                        onHide={console.log("on hide triggered")}
                        onBeforeHide={console.log("on before hide triggered")}
                        mouseTrack
                        mouseTrackTop={17}

                    />
                    <i
                        className='contact-test'
                        data-pr-tooltip='Contact Kurt'
                        data-pr-position='bottom'
                        style={{ 
                            fontSize: "2rem", 
                            cursor: "pointer" 
                        }}
                    >
                        <Link to='/contact'>
                            <img alt='App Store' src={mailIcon} width='100%' />
                        </Link>
                    </i>
                </>
            ),
        },
    ];

    return (
        <div>
            <div
                className="card dock-demo border-0 bg-transparent"
                style={{ height: "20vh" }}
            >
                <div
                    className="dock-window bg-transparent flex"
                    style={{ height: "30%" }}
                >
                    <Dock
                        model={items}
                        position='top'
                        pt={{
                            container: {
                                style: {
                                    borderRadius: '12px'
                                }
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
