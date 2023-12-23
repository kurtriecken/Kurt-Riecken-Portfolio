import { useState } from "react";
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
        <div
            style={{ minHeight: '400px' }}
        >
            <div className='card container w-75 border-0 bg-transparent'>
                <SelectButton className='m-3 text-center' value={value} onChange={handleSelectToggle} options={options} />
                {value === 'Say Hello' ?
                    <h2>Contact</h2> :
                    <h2 style={{ color: 'white' }}>Dun dun dun duh-nah-nah...</h2>}
                <form onSubmit={handleSubmit}>
                    <div className="p-field mb-3">
                        {value === 'Say Hello' ?
                            <label className='form-label' htmlFor="email">Name</label> :
                            <label className='form-label' htmlFor="email" style={{ color: 'white' }}>Toast</label>
                        }
                        <InputText
                            className='form-control'
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder='Name'
                            required
                        />
                    </div>
                    <div className="p-field mb-3">
                        {value === 'Say Hello' ?
                            <label className='form-label' htmlFor="email">Email</label> :
                            <label className='form-label' htmlFor="email" style={{ color: 'white' }}>Toastmail</label>
                        }
                        <InputText
                            className='form-control'
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder='Email'
                            required
                        />
                    </div>

                    <div className="p-field mb-3">
                        {value === 'Say Hello' ?
                            <label className='form-label' htmlFor="email">Message</label> :
                            <label className='form-label' htmlFor="email" style={{ color: 'white' }}>Toast?</label>
                        }
                        <InputTextarea
                            className='form-control'
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder={value === 'Say Hello' ? 'Say hello!' : "It's a contact form --- After Dark!"}
                            autoResize
                            required
                        />
                    </div>
                    <div className="p-field">
                        <Button label="Submit" type="submit" />
                        {messageSuccess ? <Message severity="success" text="Mail sent!" className='mx-3'/> : <></>}
                    </div>
                </form>
            </div>
        </div>

    )
};


