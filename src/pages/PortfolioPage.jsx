import tastyIcon from '../assets/Tasty_tableau.png'
import quizIcon from '../assets/coding_quiz.jpg'
import safariIcon from '../assets/picture_3.jpg'
import weatherIcon from '../assets/weather.png'
import blogIcon from '../assets/tech_blog.png'

import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
// import { Tooltip } from 'bootstrap';
import { Tooltip } from 'react-tooltip'
// import { PhotoService } from './service/PhotoService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faHouseChimneyWindow } from '@fortawesome/free-solid-svg-icons'

export default function Portfolio() {
    const [images, setImages] = useState(null);
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    const imageCollection = [
        { src: tastyIcon, alt: 'Tasty tableau', link: 'https://cryptic-tundra-53497-2c1c36d10121.herokuapp.com/', github: 'https://github.com/jradmorrison/tasty-tableau',
            about: "Tasty tableau is your one-stop shop for homegrown recipes! Search our massive database, set up your own profile, upload recipes, save ones you like, and search by ingredient or chef! You'll never go anywhere else for good cookin'" },
        { src: quizIcon, alt: 'Coding quiz', link: 'https://kurtriecken.github.io/Coding-quiz/', github: 'https://github.com/kurtriecken/Coding-quiz',
            about: 'Are you a programmer of any level? Do you just have an interest in coding and would like to learn more? Take my quiz! This brief quiz consisting of a series of 6 multiple-choice questions will help you learn or reinforce your codings knowledge and skills. The quiz includes a sleak, functional interface on any device and a color scheme that is clear and easy to read.' },
        { src: safariIcon, alt: 'SongSafari', link: 'https://kathrynfisher3700.github.io/songSafari/', github: 'https://github.com/kathrynfisher3700/songSafari',
            about: "Embark on a guided journey through musical subgenres, discovering new sounds or finding familiar tracks. SongSafari is not just an app; it's your ticket to explore the vast landscape of music." },
        { src: weatherIcon, alt: 'Weather Dashboard', link: 'https://kurtriecken.github.io/Weather-dashboard/', github: 'https://github.com/kurtriecken/Weather-dashboard',
            about: 'A simple, lightweight site to get the current and five-day forecast for any city in the United States! Results are stored between sessions so you can quickly find up-to-date weather information about any city you have looked up previously.' },
        { src: blogIcon, alt: 'Tech Blog', link: 'https://afternoon-gorge-19720-60f922d0d2e8.herokuapp.com/', github: 'https://github.com/kurtriecken/Tech-Blog',
            about: 'Come visit the Tech Blog and share your thoughts about all things technology! Our fun, colorful page has a clean UI designed to get right to the heart of sharing ideas and writing about tech. Sign up today and join the fun!' },



    ]

    const itemTemplate = (item) => {
        return <div className='text-center'><a data-tooltip-id="my-tooltip" data-tooltip-content={item.alt} href={item.link}>
                <img className='w-100' src={item.src} aria-label={item.alt} style={{width: '640px', height: 'auto',}}/>
                <Tooltip id="my-tooltip" /></a><a href={item.github} src="src/assets/github-mark.png" className='text-center'>
                    Github repository
                </a>
                <p>{item.about}</p></div>
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.src} alt={item.alt} style={{ width: '100%', height: 'auto' }} />
    }

    return (
        <div className='card container w-75 text-center bg-transparent border-0'>
            <h1>My Projects</h1>
            <Galleria className='m-auto' value={imageCollection} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '650px' }} 
                item={itemTemplate} thumbnail={thumbnailTemplate} />
            <Link className='m-auto' to="/"><FontAwesomeIcon icon={faHouseChimneyWindow} /></Link>
            {/* <img src="./assets/github-mark.svg" alt="" /> */}
            {/* <h1>This is my portfolio page!</h1> */}
        </div>
    )
};