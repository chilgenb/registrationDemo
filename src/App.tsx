import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

type formData = {
    firstName: string,
    lastName: string,
    npiNumber: string,
    address1: string,
    address2: string,
    city: string,
    address_state: string
    zipcode: string,
    phone: string,
    email:string
}

function App() {
    const initialState = {
            firstName: "",
            lastName: "",
            npiNumber: "",
            address1: "",
            address2: "",
            city: "",
            address_state: "",
            zipcode: "",
            phone: "",
            email:""
    } as formData

    let userInput: {} = {
        firstName: "",
        lastName: "",
        npiNumber: "",
        address1: "",
        address2: "",
        city: "",
        address_state: "",
        zipcode: "",
        phone:"",
        email:""
    } as formData;

    const [values, setValues] = useState(initialState);

    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [event.target.name]: event.target.value});
    }

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) =>
    {
        event.preventDefault();
        await userCallback();
    }

    async function userCallback() {
        saveFormData();
    }

    const saveFormData = async () => {
        /*const response = await fetch('/api/registeration', {
            method: 'POST',
            body: JSON.stringify(values)
        });
        if (response.status !== 200) {
            throw new Error('Request failed: ${response.status}');
        } else {
            alert('Your registration was successfully submitted!');
        }*/
        console.log(JSON.stringify(values));
    }

    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={onSubmit}>
                    <h2> Register For Availity </h2>

                    <p> Become a part of something special. </p>

                    <p>Sign up to request access to be part of the Availity
                        platform. </p>

                    <label>First Name*: </label>
                    <input type="text" id= 'firstName' name='firstName' defaultValue={values.firstName} required onChange={onChange}/>
                    <br/>
                    <label>Last Name*: </label>
                    <input type="text" required id='lastName' name='lastName' defaultValue={values.lastName} onChange={onChange}/>
                    <br/>
                    <label>NPI Number*: </label>
                    <input type="text" required id='npiNumber' name='npiNumber' defaultValue={values.npiNumber} onChange={onChange}/>
                    <br/><br/>
                    <div>
                        <label>Business Address*:</label>
                        <br/>
                        <label>Address 1*: </label>
                        <input type="text" required id='address1' name ='address1' defaultValue={values.address1} onChange={onChange}/>
                        <br/>
                        <label>Address 2: </label>
                        <input type="text" id='address2' name='address2' defaultValue={values.address2} onChange={onChange}/>
                        <br/>
                        <label>City*: </label>
                        <input type="text" required id='city' name='city' defaultValue={values.city} onChange={onChange}/>
                        <br/>
                        <label>State*: </label>
                        <input type="text" required id='address_state' name='address_state' defaultValue={values.address_state} onChange={onChange}/>
                        <br/>
                        <label>ZipCode*: </label>
                        <input type="text" required id='zipcode' name='zipcode' defaultValue={values.zipcode} onChange={onChange}/>
                        <br/>
                    </div>
                    <br/>
                    <label>Telephone Number*: </label>
                    <input type="tel" required name='phone' id='phone' defaultValue={values.phone} onChange={onChange}/>
                    <br/>
                    <label>Email Address*: </label>
                    <input type="email" required name='email' id='email' defaultValue={values.email} onChange={onChange}/>
                    <br/>
                    <button type="submit" >Submit</button>
                </form>
            </header>
        </div>
    );
}

export default App;
