import { useState } from 'react';
import './style.css'

const App = () => {

    const [Name,setName] = useState("")
    const [fullName,setFullName] = useState()

    const InputEvent = (event) => {
    setName(event.target.value)
    }

    const onSubmits= () => {
            setFullName(Name)
    }
    

    return(

        <>
            <div>

            {/* <form onSubmit={onSubmits}> */}
            <div>
            <h1>Hiii {fullName}</h1>

            <input
                type="text"
                placeholder="Write your Name"
                onChange={InputEvent}
                value={Name}
            />
            {/* In a controlled component, form data is handeled by a React component. The alternative is uncontrolled
            component, where form data is handeled by the DOM<input> itself. */}
            <br/>

            {/* <button onSubmit={onSubmits}>Submit</button> */}
            <button onClick={onSubmits} type='submit'>Submit Me</button>
            </div>
            
            {/* </form> */}

            </div>

        </>

    )
}

export default App;