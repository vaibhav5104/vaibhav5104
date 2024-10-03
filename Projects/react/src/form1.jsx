import { useState } from "react"

const App = () => {

    const [fullName,setfullName] = useState({
        fname : "",
        lname : "",
    });
    // const [lastName,setLastName] = useState("");
    // const [fullName,setFullName] = useState("");
    // const [lastNamenew,setLastNamenew] = useState("");

    const inputEvent = (event) => {
        console.log(event.target.value);
        // setName(event.target.value);
    };

    const onSubmits = (event) => {
        event.preventDefault();
        setfullName(fullName.fname)
        setfullName(fullName.lname)
        // alert("Submitted");
    };

    

    // const inputEventTWo = (event) => {
    //     setLastName(event.target.value);
    // }

    return(
        <>
            <div className="main_div">
                <form onSubmit={onSubmits}>
                    <div>
                        <h1>
                            Hello {fullName.fname} {fullName.lname}
                        </h1>
                        <input
                            type="text"
                            placeholder="Enter your Name"
                            name="fname"
                            onChange={setfullName.fname}
                            value={fullName.fname}
                        />
                        <br/>
                        <input
                            type="text"
                            placeholder="Enter your Name"
                            name="lname"
                            onChange={setfullName.lname}
                            value={fullName.lname}
                        />
                        <button type="submit">Submit Me</button>

                    </div>
                </form>
            </div>


        </>
    )
    


}

export default App;