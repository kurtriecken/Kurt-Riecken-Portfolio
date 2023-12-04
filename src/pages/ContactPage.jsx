import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { SelectButton } from 'primereact/selectbutton'
import { InputText } from 'primereact/inputtext'

import toastersGif from '../assets/flying_toasters.gif'

import { Button } from 'primereact/button'
import { InputTextarea } from 'primereact/inputtextarea';

import { Message } from 'primereact/message';

// const nodemailer = require('nodemailer');
// import axios from 'axios'

import '../styles/ContactStyles.css'

export default function Contact() {
    const options = ['Say Hello', 'Toast?'];
    // const [name, setName] = useState('');
    const [value, setValue] = useState(options[0]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [messageSuccess, setMessageSuccess] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // This is where I will include NODEMAILER to email myself a copy of the message

        // Use error handling when actually submitting
        setMessageSuccess(true);
        setInterval(() => {
            setMessageSuccess(false);
        }, 3000)
        console.log('Form submittted:', formData);
    }

    const handleSelectToggle = async (e) => {
        await setValue(e.value);
        if (value === 'Toast?') {
            document.getElementById('root').style.backgroundImage = "linear-gradient(to bottom, #87CEEB, #E6E6FA)";
        } else {
            document.getElementById('root').style.backgroundImage = `url(${toastersGif})`;
        }
    }

    return (
        <>
            <div className='card container w-75 border-0 bg-transparent'>
                <SelectButton className='m-3 text-center' value={value} onChange={handleSelectToggle} options={options} />
                <h2>{value === 'Say Hello' ? 'Contact' : 'Flying toasters' }</h2>
                <form onSubmit={handleSubmit}>
                    <div className="p-field mb-3">
                        <label className='form-label' htmlFor="name">{value === 'Say Hello' ? 'Name' : 'Toast' }</label>
                        <InputText
                            className='form-control w-50'
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="p-field mb-3">
                        <label className='form-label' htmlFor="email">{value === 'Say Hello' ? 'Email' : 'Toastmail' }</label>
                        <InputText
                            className='form-control w-50'
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    
                    <div className="p-field mb-3">
                        <label className='form-label' htmlFor="message">{value === 'Say Hello' ? 'Message' : 'Toast your toast' }</label>
                        <InputTextarea
                            className='form-control w-50'
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder={value === 'Say Hello' ? 'Say hello!' : 'I love toast! 🍞' }
                            autoResize
                            required
                        />
                    </div>
                    <div className="p-field">
                        <Button label="Submit" type="submit" />
                        {messageSuccess ? <Message severity="success" text="Mail sent!"/> : <></>}
                    </div>
                </form>
                <Link className='m-auto' to="/">← Home</Link>
            </div>
        </>

    )
};


{/* <div className='card flex text-center'> */ }
{/* <Link className='' to="/">← Go Back</Link> */ }
{/* <h1>Here will be a contact form to write an email to me; including nodemailer support</h1> */ }
{/* <div className="card flex text-center">
    <span className="p-float-label m-auto">
        <InputText id="username" value={name} onChange={(e) => setName(e.target.name)} />
        <label htmlFor="username">Username</label>
    </span>
</div>
</div> */}