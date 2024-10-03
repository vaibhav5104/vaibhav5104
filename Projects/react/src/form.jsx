import { useState } from "react"

const App = () => {

    const [name,setName] = useState("");
    const [lastName,setLastName] = useState("");
    const [fullName,setFullName] = useState("");
    const [lastNamenew,setLastNamenew] = useState("");

    const onSubmits = (event) => {
        event.preventDefault();
        setFullName(name);
        setLastNamenew(lastName); 
    };

    const inputEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
        setLastName(event.target.value);

    };

    const inputEventTWo = (event) => {
        setLastName(event.target.value);
    }

    return(
        <>
            <div className="main_div">
                <form onSubmit={onSubmits}>
                    <div>
                        <h1>
                            Hello {fullName} {lastNamenew}
                        </h1>
                        <input
                            type="text"
                            placeholder="Enter your Name"
                            onChange={inputEvent}
                        />
                        <br/>
                        <input
                            type="text"
                            placeholder="Enter your Name"
                            onChange={inputEvent}
                        />
                        <button type="submit">Submit Me</button>

                    </div>
                </form>
            </div>


        </>
    )
    


}

export default App;