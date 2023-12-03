import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { SelectButton } from 'primereact/selectbutton'
import { InputText } from 'primereact/inputtext'

import { Button } from 'primereact/button'
import { InputTextarea } from 'primereact/inputtextarea';

// const nodemailer = require('nodemailer');
// import axios from 'axios'

import '../styles/ContactStyles.css'

export default function Contact() {
    const options = ['Say Hello', 'Send Pizza!'];
    // const [name, setName] = useState('');
    const [value, setValue] = useState(options[0]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

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

        console.log('Form submittted:', formData);
    }

    return (
        <>
            <div className='card container w-75 border-0 bg-transparent'>
                <SelectButton className='m-3 text-center' value={value} onChange={(e) => setValue(e.value)} options={options} />
                <h2>{value === 'Say Hello' ? 'Contact' : 'Pizza pizza pizza' }</h2>
                <form onSubmit={handleSubmit}>
                    <div className="p-field mb-3">
                        <label className='form-label' htmlFor="name">{value === 'Say Hello' ? 'Name' : 'Pizza' }</label>
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
                        <label className='form-label' htmlFor="email">{value === 'Say Hello' ? 'Email' : 'Pizza pizza' }</label>
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
                        <label className='form-label' htmlFor="message">{value === 'Say Hello' ? 'Message' : 'Pizza pizza pizza' }</label>
                        <InputTextarea
                            className='form-control w-50'
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder={value === 'Say Hello' ? 'Say hello!' : 'Ohhh how generous! My favorite is hawaiian 🍕' }
                            autoResize
                            required
                        />
                    </div>
                    <div className="p-field">
                        <Button label="Submit" type="submit" />
                    </div>
                </form>
                <Link className='m-auto' to="/">← Go Back</Link>
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