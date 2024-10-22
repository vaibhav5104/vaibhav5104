import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [token,setToken] = useState(localStorage.getItem("token"))
    const [user,setUser] = useState("")
    const [services,setServices] = useState([])


    const storeTokenInLS = (serverToken) => {
        setToken(serverToken)//it is used because only then isLoggedIn will be true and there will be logout option only , after loggedIn
        return localStorage.setItem('token',serverToken)
    } 
    let isLoggedIn = !!token

    // tackling the logout functionality
    const LogoutUser = () => {
        setToken("")
        return localStorage.removeItem('token')
    }

    // JWT AUTHENTICATION - to get the currently logged user data

    const userAuthentication = async () => {
        try{
            const response = await fetch("http://localhost:3000/api/auth/user",{
                method: "GET",
                headers: {
                    Authorization : `Bearer ${token}`,
                },
            })

            if(response.ok) {
                const data = await response.json()
                setUser(data.userData)
            }

        }catch(e){
            console.error("error fetching user data")
        }
    }

    // to fetch the services data form the database
    const getServices = async() => {

        try {
            const response = await fetch("http://localhost:3000/api/data/service",{
                method:"GET",
            })

            if(response.ok) {
                const data = await response.json()
                setServices(data.msg)
                console.log(data.msg);
            }
        } catch (error) {
            console.log(`services frontend error ${error}`);
        }

    }

    useEffect(() => {
        userAuthentication()
        getServices();
    },[token])

    return <AuthContext.Provider value={{isLoggedIn,storeTokenInLS,LogoutUser,user,services}} >
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    const authContextValue = useContext(AuthContext)
    if(!authContextValue){
        throw new Error("useAuth used outside of the provider")
    } 
    return authContextValue
}