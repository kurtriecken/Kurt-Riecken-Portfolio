import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { SelectButton } from 'primereact/selectbutton'
import { InputText } from 'primereact/inputtext'

import '../styles/ContactStyles.css'

export default function Contact() {
    const options = ['Say Hello', 'Send Pizza!'];
    const [name, setName] = useState('');
    const [value, setValue] = useState(options[0]);

    return (
        <>
            <div className='card container w-75 text-center border-0'>
                <div className='card flex text-center'>
                    {/* <Link className='' to="/">← Go Back</Link> */}
                    <SelectButton className='' value={value} onChange={(e) => setValue(e.value)} options={options} />
                    {/* <h1>Here will be a contact form to write an email to me; including nodemailer support</h1> */}
                    <div className="card flex text-center">
                        <span className="p-float-label m-auto">
                            <InputText id="username" value={name} onChange={(e) => setName(e.target.name)} />
                            <label htmlFor="username">Username</label>
                        </span>
                    </div>
                </div>
                <Link className='m-auto' to="/">← Go Back</Link>
            </div>
        </>

    )
};