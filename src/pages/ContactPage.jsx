import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { SelectButton } from 'primereact/selectbutton'
import { InputText } from 'primereact/inputtext'

import { Button } from 'primereact/button'
import { InputTextarea } from 'primereact/inputtextarea';
        

import '../styles/ContactStyles.css'

export default function Contact() {
    const options = ['Say Hello', 'Send Pizza!'];
    // const [name, setName] = useState('');
    // const [value, setValue] = useState(options[0]);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // This is where I will include NODEMAILER to email myself a copy of the message
        console.log('Form submittted:', formData);
    }

    return (
        <>
            <div className='card container w-75 border-0'>
                <h2>Contact Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="p-field mb-3">
                        <label className='form-label' htmlFor="name">Name</label>
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
                        <label className='form-label' htmlFor="email">Email</label>
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
                        <label className='form-label' htmlFor="message">Message</label>
                        <InputTextarea
                            className='form-control w-50'
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleInputChange}
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
{/* <SelectButton className='' value={value} onChange={(e) => setValue(e.value)} options={options} /> */ }
{/* <h1>Here will be a contact form to write an email to me; including nodemailer support</h1> */ }
{/* <div className="card flex text-center">
    <span className="p-float-label m-auto">
        <InputText id="username" value={name} onChange={(e) => setName(e.target.name)} />
        <label htmlFor="username">Username</label>
    </span>
</div>
</div> */}