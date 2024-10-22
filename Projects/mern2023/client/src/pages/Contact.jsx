import React, { useState } from "react"; // Import React and useState
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";
const URL = "http://localhost:3000/api/form/contact"



export const Contact = () => {

    const defaultContactFormData = {
        username:"",
        email:"",
        message:"",
    }

    const [contact,setContact] = useState(defaultContactFormData)

    const navigate = useNavigate()

    const [userData,setUserData] = useState(true)

    const {user} = useAuth() 

    if(userData && user){
        setContact({
            username:user.username,
            email:user.email,
            message:""
        })

        setUserData(false)
    }

    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value

        setContact({
            ...contact,//spread operator , change the only field which we want
            [name] : value,//only this value change since it is dynamic, it will
        })

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(user);

        try{
        
            const response = await fetch(URL,{
                method:"POST",
                headers:{
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(contact)
            })
            
            if(response.ok) {
                setContact(defaultContactFormData)
                const res_data = await response.json();
                navigate("/")
            }else {
                alert("Invalid Credentials")
                console.log("Invalid Credentials");
            }

        }catch(e){
            console.log(e);
        }


    }




    return(<>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img src="/images/support.png" alt="contact-page-photo"
                                width="500"
                                height="500"
                            />
                        </div>

                        <div className="regsitration-form">
                            <h1 className="main-heading mb-3">Contact form</h1>
                            <br/>

                            <form onSubmit={handleSubmit}>
                                <div className="form-divs">
                                    <label htmlFor="username">username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="username"
                                        id="username"
                                        required
                                        autoComplete="off"
                                        value={contact.username}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="form-divs">
                                    <label htmlFor="email">email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="enter your email"
                                        id="email"
                                        required
                                        autoComplete="off"
                                        value={contact.email} // Add value
                                        onChange={handleInput} // Add onChange
                                    />
                                </div>
                                <div className="form-divs">
                                    <label htmlFor="message">message</label>
                                    <textarea
                                        name="message"
                                        placeholder="enter your message"
                                        id="message"
                                        cols="30"
                                        rows="8"
                                        required
                                        autoComplete="off"
                                        value={contact.message} // Add value
                                        onChange={handleInput} // Add onChange
                                    />
                                </div>
                                <br/>
                                <button type="submit" className="btn btn-submit">Register Now</button>

                            </form>
                        </div>
                        <section className="mb-3">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
                                width="200%"
                                height="450"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </section>
                    </div>
                </div>
            </main>
        </section>
    </>)
}