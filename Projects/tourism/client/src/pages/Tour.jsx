import { useState } from "react"
import { useAuth } from "../store/auth"
import { toast } from "react-toastify";

export const Tour = () => {
    
    const [city,setCity] = useState("")
    const [finalCity,setFinalCity] = useState(null)
    const [isFinal,setIsFinal] = useState(false)

    const {API} = useAuth()

    const inputEvent = (event) => {
        setCity(event.target.value)
    }

    const onSubmit = async () => {
        const response = await fetch(`${API}/api/tour/city/${city}`, {method:"GET"})
        // console.log("response is  : ",response)

        try {

            if(response.ok){
                const city_data = await response.json()
                setIsFinal(true)
                setFinalCity(city_data.cityData);
                // console.log("city_data is : ",city_data);

            }else{
                // console.error("Error:", response.status, response.statusText);
                toast.error( `${city} ${response.statusText}` )
            }
        } catch (error) {
            // console.log(error);
            toast.error(error)
        }
    }
    // const city_component  = response


    
    
    return(<>
        
        <section className="events" id="events">
        <div className="container">
            <div className="title">
                <h1 className="dark">City</h1>
                <div className="line"></div>
            </div>
        </div>

        <div>
            <input 
                type="text"
                placeholder="Enter Destination City such as  dubai , jaipur"
                onChange={inputEvent}
                value={city}
            />
            <button className="Tbtn" onClick={onSubmit}>Enter</button>
                    <br />
                    {isFinal && finalCity ? (
                        <div>
                            <h2>City: {finalCity.name}</h2>
                            <p>{finalCity.blog}</p>
                            <h3>Events:</h3>
                            <ul>
                                {finalCity.event.name.map((event, index) => (
                                    <li key={index}>
                                        <strong>{event}</strong>
                                        <br />
                                        <img
                                            src={finalCity.event.image[index]}
                                            alt={event}
                                            width="200"
                                        />
                                    </li>
                                ))}
                            </ul>
                            <h3>City Images:</h3>
                            {finalCity.cityImage.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`City Image ${index + 1}`}
                                    width="200"
                                />
                            ))}
                            <h3>Map:</h3>
                            {/* <iframe
                                src={finalCity.mapUrl}
                                title="City Map"
                                width="600"
                                height="450"
                                style={{ border: "0" }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe> */}
                        </div>
                    ) : (
                        <p>Enter a city to see details</p>
                    )}
        </div>

      </section>

    </>)
}