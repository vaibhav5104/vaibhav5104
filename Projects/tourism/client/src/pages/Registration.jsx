import { useState } from "react"
import "../index.css"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";

export const Register = () => {

    const defaultUser = {
        username : "",
        email : "",
        phone : "",
        password : "",
    }
    const [user,setUser] = useState(defaultUser)
    const navigate = useNavigate()
    const {storeTokenInLS,API} = useAuth()

    const handleInput = (e) => {

        let name = e.target.name
        let value = e.target.value

        setUser({
            ...user,//spread operator , change the only field which we want
            [name] : value,//only this value change since it is dynamic, it will
        })
    }

    const handleSubmit = async (e) => {

        try {
            e.preventDefault();
            const response = await fetch(`${API}/api/auth/register`,{
                method:"POST",
                headers: {
                        'Content-Type' : "application/json"
                    },
                body : JSON.stringify(user)
            })
            const res_data = await response.json()

            if(response.ok){
                // console.log("user is : ",user.email);
                storeTokenInLS(res_data.token)
                setUser({username:"",email:"",phone:"",password:""})
                toast.success("Registration successful")
                console.log("Token is : ",res_data.token);
                navigate("/")
            }else{
                console.log(response);
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
            }
        } catch (error) {
                console.log(error);
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
                                        type="text"
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