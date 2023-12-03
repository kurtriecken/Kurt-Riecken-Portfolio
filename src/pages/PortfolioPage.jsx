import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
// import { Tooltip } from 'bootstrap';
import { Tooltip } from 'react-tooltip'
// import { PhotoService } from './service/PhotoService';

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
        { src: 'src/assets/Tasty_tableau.png', alt: 'Tasty tableau', link: 'https://cryptic-tundra-53497-2c1c36d10121.herokuapp.com/', github: 'https://github.com/jradmorrison/tasty-tableau' },
        { src: 'src/assets/coding_quiz.jpg', alt: 'Coding quiz' },
        { src: 'src/assets/picture_3.jpg', alt: 'SongSafari' },
        { src: 'src/assets/picture_5.jpg', alt: 'Picture 5' },
        { src: 'src/assets/picture_4.jpg', alt: 'Picture 4' },
        { src: 'src/assets/Tasty_tableau.png', alt: 'Tasty tableau' },
        { src: 'src/assets/coding_quiz.jpg', alt: 'Coding quiz' },
        { src: 'src/assets/picture_3.jpg', alt: 'SongSafari' },
        { src: 'src/assets/picture_5.jpg', alt: 'Picture 5' },
        { src: 'src/assets/picture_4.jpg', alt: 'Picture 4' },


    ]

    const itemTemplate = (item) => {
        return <div className='text-center'><a data-tooltip-id="my-tooltip" data-tooltip-content={item.alt} href={item.link}>
                <img className='w-100' src={item.src} ariaLabel={item.alt} style={{height: '400px'}}/>
                <Tooltip id="my-tooltip" /></a><a href={item.github} className='m-auto'>GitHub</a>
                <p>Tasty tableau is your one-stop shop for homegrown recipes! Search our massive database, set up your own profile,
                    upload recipes, save ones you like, and search to find more from that chef! You'll never go anywhere else for
                    good cookin'</p></div>
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.src} alt={item.alt} style={{ width: '100%', height: '90px' }} />
    }

    return (
        <div className='card container w-75 text-center bg-transparent border-0'>
            <h1>My Projects</h1>
            <Galleria className='m-auto' value={imageCollection} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '650px' }} 
                item={itemTemplate} thumbnail={thumbnailTemplate} />
            <Link className='m-auto' to="/">← Go Back</Link>
            {/* <img src="./assets/github-mark.svg" alt="" /> */}
            {/* <h1>This is my portfolio page!</h1> */}
        </div>
    )
};