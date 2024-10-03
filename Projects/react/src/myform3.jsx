/* 
import { useState } from 'react'
import './style.css'

const App = () => {

    const [Name,setName] = useState("")
    const [Password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [fullName,setfullName] = useState()
    const [FullEmail,setFullEmail] = useState()
    
const InputEvent1 = (event) => {

    setName(event.target.value)

} 

const InputEvent2 = (event) => {

    setPassword(event.target.value)
} 

const InputEvent3 = (event) => {

    setEmail(event.target.value)
} 

const onSubmits = (event) => {
    event.preventDefault();
    setfullName(Name + " " + Password)
    setFullEmail(email)

}


    return(
        <>
            <div>

            <form onSubmit={onSubmits}>

                <h1>Hello {fullName} </h1>
                <p className='emailPara'>{FullEmail}</p>

                <input
                    type='text'
                    placeholder='Enter your name'
                    onChange={InputEvent1}
                    value={Name}
                />
                <br/>
                <input
                    type='text'
                    placeholder='Enter your password'
                    onChange={InputEvent2}
                    value={Password}
                />
                <br/>
                <input
                    type='text'
                    placeholder='Enter your Email'
                    onChange={InputEvent3}
                    value={email}
                />
                <br/>
                <button type='submit'>Submit Me</button>

            </form>

            </div>
            
            




        </>
    )

}

export default App */

import { useState } from 'react'
import './style.css'

const App = () => {

    const [fullName,setfullName] = useState({
        fname: "",
        lname: "",
        email: "",
        contact: "",
        qua: "",
    });

    const [FinalName,setFinalName] = useState({
        finalFName: "",
        finalLName: "",
        finalEmail: "",
        finalContact: "",
        finalQua: "",
    });


    
const InputEvent1 = (event) => {

    console.log(event.target.value);
    console.log(event.target.name);

    const value = event.target.value;
    const name = event.target.name;

    setfullName((preValue) => {

        return {
            ...preValue,
            [name] : value
    
        }

        // if(name === "fname"){
        //     return {
        //         fname: value,
        //         lname: preValue.lname,
        //         email: preValue.email,
        //         contact: preValue.contact,
        //     };
        // }
        // else if(name === "lname"){
        //     return {
        //         fname: preValue.fname,
        //         lname: value,
        //         email: preValue.email,
        //         contact: preValue.contact,
        //     };
        // }
        // else if(name === "email"){
        //     return {
        //         fname: preValue.fname,
        //         lname: preValue.lname,
        //         email: value,
        //         contact: preValue.contact,
        //     };
        // }
        // else if(name === "contact"){
        //     return {
        //         fname: preValue.fname,
        //         lname: preValue.lname,
        //         email: preValue.email,
        //         contact: value,
        //     };
        // }
    })

}

const onSubmits = (event) => {
    event.preventDefault();

    setFinalName({
        finalFName: fullName.fname,
        finalLName: fullName.lname,
        finalEmail: fullName.email,
        finalContact: fullName.contact,
        finalQua: fullName.qua,
    });

    }


    return(
        <>
            <div>

            <form onSubmit={onSubmits}>

                <h1>Hello {FinalName.finalFName} {FinalName.finalLName} </h1>
                <h1> {FinalName.finalEmail}  <br/>{FinalName.finalContact}  {FinalName.finalQua} </h1>

                <input
                    type='text'
                    placeholder='Enter your name'
                    onChange={InputEvent1}
                    name="fname"
                    value={fullName.fname}
                />
                <br/>
                <input
                    type='text'
                    placeholder='Enter your last name'
                    name="lname"
                    onChange={InputEvent1}
                    value={fullName.lname}
                />
                <br/>
                <input
                    type='text'
                    placeholder='Enter your email'
                    onChange={InputEvent1}
                    name="email"
                    value={fullName.email}
                />
                <br/>
                <input
                    type='number'
                    placeholder='Enter your Mobile number'
                    name="contact"
                    onChange={InputEvent1}
                    value={fullName.contact}
                />
                <br/>
                <input
                    type='text'
                    placeholder='Enter your Qualification'
                    name="qua"
                    onChange={InputEvent1}
                    value={fullName.qua}
                />
                <br/>
                <button type='submit'>Submit Me</button>

            </form>

            </div>
            
            




        </>
    )

}

export default App