import React, { useState } from 'react';
import axios from 'axios';



const Contact = () => {
    const [formData, setFormData] = useState({});
    const [email, setEmail] = useState('');






    const handleInputChange = (event) => {
        setEmail(event.target.value)
        setFormData({ ...formData, [event.target.name]: event.target.value })

    }
    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(formData)
        // appendSpreadsheet(formData)
        // setEmail('');
        // console.log(email);

        const data = {
            Email: email,
        }

        axios.post('https://sheet.best/api/sheets/d72fe0c5-266c-42ae-90d2-a70757956234',data).then((response)=>
        console.log(response));
        setEmail('');
    }




    return (
        <form autoComplete="off" className="App" onSubmit={handleSubmit}>
            <div id='contact'>
                <h3>Want to Join Us?</h3>
                <p>Get $10 off your first bot when you sign up.</p>
                <div className="contact-input">
                    <input onChange={handleInputChange} type='email' value={email} onBlur={(e) => e.target.placeholder = 'example@gmail.com'} onFocus={(e) => e.target.placeholder = ''} placeholder='example@gmail.com' required /><a ><button className="buttonStyle" >Join Now</button></a>

                </div>

            </div></form>
    )
}

export default Contact;