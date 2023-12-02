import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
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
        { src: 'src/assets/Tasty_tableau.png', alt: 'Tasty tableau' },
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
        return <a href="https://www.google.com"><img className='w-100' src={item.src} alt={item.alt} style={{height: '400px'}}/></a>
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.src} alt={item.alt} style={{ width: '100%', height: '90px' }} />
    }

    return (
        <div className='card container w-75 text-center'>
            <Galleria className='m-auto' value={imageCollection} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '650px' }} 
                item={itemTemplate} thumbnail={thumbnailTemplate} />
            <Link className='m-auto' to="/">← Go Back</Link>
            {/* <img src="./assets/github-mark.svg" alt="" /> */}
            {/* <h1>This is my portfolio page!</h1> */}
        </div>
    )
};