import { useEffect, useState } from "react"
import { useAuth } from "../store/auth"
import { toast } from "react-toastify";

export const Tour = () => {
    
    const [city,setCity] = useState("")
    const [finalCity,setFinalCity] = useState(null)
    const [itinerary,setitinerary] = useState(null)
    const [isFinal,setIsFinal] = useState(false)
    const [isTourSubmit,setIsTourSubmit] = useState(false)

    const {API} = useAuth()

    const [budget, setBudget] = useState(""); // State to track budget input
    const [days, setDays] = useState("");    // State to track days input

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

    const tourSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${API}/api/tour/city/${city}/budget?budget=${budget}&days=${days}`);
            if (response.ok) {
                const itineraryData = await response.json();
                setIsTourSubmit(true)
                setitinerary(itineraryData.itinerary)
                console.log(itineraryData.itinerary);
            } else {
                console.log("Error fetching itinerary data");
            }
        } catch (error) {
            console.error("Fetch error:", error);
        }
        
    }


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
                            
                            {/* Tour Code */}

                            <form onSubmit={tourSubmit}>
                                <p>Tour</p>
                                <label>City</label>
                                <input
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    required
                                />
                                <label>Budget</label>
                                <input
                                    type="number"
                                    value={budget}
                                    onChange={(e) => setBudget(e.target.value)}
                                    required
                                />
                                <label>Days</label>
                                <input
                                    type="number"
                                    value={days}
                                    onChange={(e) => setDays(e.target.value)}
                                    required
                                />
                                <button type="submit">Submit tour details</button>
                                <br/>

                                {isTourSubmit ? ( <>
                                    <p>Tour submitted : </p> 

                                    <div>
                                        <h1>Itinerary: {itinerary.name}</h1>
                                        <h2>Budget: {itinerary.budget}</h2>
                                        <h2>Days: {itinerary.days}</h2>

                                        <section>
                                            <h3>Places</h3>
                                            {itinerary.places.placeImage.map((img, idx) => (
                                                <div key={idx}>
                                                    <img
                                                        src={img}
                                                        alt={`Place ${idx + 1}`}
                                                        style={{ width: "200px", margin: "10px" }}
                                                    />
                                                    <p>{itinerary.places.placeName[idx]}</p>
                                                    <p>Price: {itinerary.places.placePrice[idx]}</p>
                                                </div>
                                            ))}
                                        </section>

                                        <section>
                                            <h3>Hotels</h3>
                                            {itinerary.hotels.hotelImage.map((img, idx) => (
                                                <div key={idx}>
                                                    <img
                                                        src={img}
                                                        alt={`Hotel ${idx + 1}`}
                                                        style={{ width: "200px", margin: "10px" }}
                                                    />
                                                    <p>{itinerary.hotels.hotelName[idx]}</p>
                                                    <p>Price: {itinerary.hotels.hotelPrice[idx]}</p>
                                                </div>
                                            ))}
                                        </section>

                                        <section>
                                            <h3>Transportation</h3>
                                            {itinerary.transportation.transportationImage.map((img, idx) => (
                                                <div key={idx}>
                                                    <img
                                                        src={img}
                                                        alt={`Transportation ${idx + 1}`}
                                                        style={{ width: "200px", margin: "10px" }}
                                                    />
                                                    <p>{itinerary.transportation.transportationName[idx]}</p>
                                                    <p>Price: {itinerary.transportation.transportationPrice[idx]}</p>
                                                </div>
                                            ))}
                                        </section>
                                    </div>                         

                                    </> 
                                ) : (<p>Enter Submit to see Tour packages</p>)  }

                            </form>

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