import React from "react";
import { useParams , useLocation} from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const User = (props) => {
    const {fname,lname} = useParams();
    const location = useLocation()
    const navigate = useNavigate()


    return (
        <>
            <h1>This is {props.name} page of user : {fname} {lname}</h1>
            <p>My current location is {location.pathname}</p>
            {location.pathname === `/Vaibhav/Sharma` ? (<>
                <button onClick={() => navigate('/')}>Homepage</button>
                <button onClick={() => navigate(-1)}>back</button>
            </>

            ) : null
            }
        </>
    )
}

export default User;