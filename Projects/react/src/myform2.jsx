
import { useState } from 'react'
import './style.css'

const App = () => {

    const [Name,setName] = useState("")
    const [Password,setPassword] = useState("")
    const [FullName,setFullName] = useState()
    // const [FullPassword,setFullPassword] = useState()

const InputEvent1 = (event) => {

    setName(event.target.value)

} 

const InputEvent2 = (event) => {

    setPassword(event.target.value)

} 

const onSubmits = (event) => {
    event.preventDefault();
    setFullName(Name + " " + Password)
    // setFullPassword(Password)

}


    return(
        <>
            <div className="main_div">

            <form onSubmit={onSubmits}>

            

                <h1>Hello {FullName} {/* {FullPassword} */}</h1>

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
                <button type='submit'>Submit Me</button>{/* Since type of button is 'submit'
                it will call onSubmit */}

            </form>

            </div>
            
            




        </>
    )

}

export default App