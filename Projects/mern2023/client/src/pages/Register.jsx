import React, { useState } from "react"; // Import React and useState
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { Error } from "./Error";
import { toast } from "react-toastify";



const URL = "http://localhost:3000/api/auth/register"

export const Register = () => {

    const [user,setUser] = useState({
        username:"thapa",
        email:"",
        phone:"",
        password:"",
    })

    const navigate = useNavigate()
    const {storeTokenInLS} = useAuth()


    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value

        setUser({
            ...user,//spread operator , change the only field which we want
            [name] : value,//only this value change since it is dynamic, it will
        })

    }
    const handleSubmit = async (e) => {
        try{
                e.preventDefault();
            // console.log(user);
            const response = await fetch(URL,{
                method:"POST",
                headers: {
                    'Content-Type' : "application/json"
                },
                body : JSON.stringify(user)
            })
            const res_data = await response.json()
            
            if(response.ok){
                storeTokenInLS(res_data.token)
                setUser({username:"",email:"",phone:"",password:""})
                toast.success("Registration successful")
                navigate("/")
            }else{
                console.log(response);
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
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
                            <img src="/images/register.png" alt=""
                                width="500"
                                height="500"
                            />
                        </div>

                        <div className="regsitration-form">
                            <h1 className="main-heading mb-3">regsitration form</h1>
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
                                        value={user.username}
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
                                        value={user.email} // Add value
                                        onChange={handleInput} // Add onChange
                                    />
                                </div>
                                <div className="form-divs">
                                    <label htmlFor="phone">phone</label>
                                    <input
                                        type="number"
                                        name="phone"
                                        placeholder="enter your phone"
                                        id="phone"
                                        required
                                        autoComplete="off"
                                        value={user.phone} // Add value
                                        onChange={handleInput} // Add onChange
                                    />
                                </div>
                                <div className="form-divs">
                                    <label htmlFor="password">password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="enter your password"
                                        id="password"
                                        required
                                        autoComplete="off"
                                        value={user.password} // Add value
                                        onChange={handleInput} // Add onChange
                                    />
                                </div>
                                <br/>
                                <button type="submit" className="btn btn-submit">Register Now</button>

                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    </>)
}