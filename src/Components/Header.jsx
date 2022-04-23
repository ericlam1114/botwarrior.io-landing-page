import React, {useState} from 'react';
import Navbar from './Navbar';
import SideImage from './SideImage';
import axios from 'axios';

const Header = () => {

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
        <div id="main">
            <Navbar /><form className="App" onSubmit={handleSubmit}>
            <div className="flexHeader"><div>
            <div className="name">
            <h1><span>Win The Internet</span> by gaining an edge on the competition</h1>
            <p className="details">Join the increasing number of internet natives signing up for the first bot and automation tools marketplace.</p>
           <div>
            <div className="contact-input"> 
            <input onChange={handleInputChange} type='email' value={email} onBlur={(e) => e.target.placeholder = 'example@gmail.com'} onFocus={(e) => e.target.placeholder = ''} placeholder='example@gmail.com' required /><a ><button className="buttonStyle" >Join Now</button></a>
           </div></div></div><div className="shiftThis">
                <SideImage /></div>
            </div></div>
</form>

        </div>
    )
}

export default Header;