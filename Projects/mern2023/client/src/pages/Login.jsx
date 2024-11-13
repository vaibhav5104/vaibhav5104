import React, { useState } from "react"; // Import React and useState
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Login = () => {

    const [user,setUser] = useState({
        email:"",
        password:"",
    })

    const navigate = useNavigate()
    const {storeTokenInLS,API} = useAuth()//not an inbuilt hook

    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value

        setUser({
            ...user,//spread operator , change the only field which we want
            [name] : value,//only this value change since it is dynamic, it will
        })

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(user);
        try{
            const response = await fetch(`${API}/api/auth/login`,{
                method:"POST",
                headers:{
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(user)
            })
            const res_data = await response.json();
            if(response.ok){
                // alert("Login Successful")
                storeTokenInLS(res_data.token)
                setUser({email:"",password:""})
                toast.success("Login successful")
                navigate("/")
            }else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
                // console.log("Invalid Credentials");
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
                            <img src="/images/login.png" alt="login-photo"
                                width="500"
                                height="500"
                            />
                        </div>

                        <div className="regsitration-form">
                            <h1 className="main-heading mb-3">Login form</h1>
                            <br/>

                            <form onSubmit={handleSubmit}>
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
                                <button type="submit" className="btn btn-submit">Login Now</button>

                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    </>)
}