import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Tour = () => {
    const [city, setCity] = useState("");
    const [finalCity, setFinalCity] = useState(null);
    const [itinerary, setItinerary] = useState(null);
    const [isFinal, setIsFinal] = useState(false);
    const [isTourSubmit, setIsTourSubmit] = useState(false);
    const [loading, setLoading] = useState(false);

    const { API } = useAuth();

    const [budget, setBudget] = useState("");
    const [days, setDays] = useState("");

    const inputEvent = (event) => {
        setCity(event.target.value);
    };
    const getUrlType = (url) => {
        try {
            const parsedUrl = new URL(url);
    
            // Check if the URL contains a protocol (http:// or https://)
            if (parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:") {
                return "Absolute URL";
            }
    
            // Check if it's a protocol-relative URL (starts with //)
            if (url.startsWith("//")) {
                return "Protocol-Relative URL";
            }
    
            // Check if it's a data URL
            if (url.startsWith("data:")) {
                return "Data URL";
            }
    
            // Otherwise, it's a relative URL
            return "Relative URL";
        } catch (error) {
            return "Invalid URL";
        }
    };
    

    const handleClick = (url) => {
        if (typeof url !== "string") {
            const type = getUrlType(url)
            toast.error(`Invalid URL format : ${type}`);
            return;
        }
    
        // Check if the URL starts with 'http' or 'https'
        const absoluteUrl = url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
        window.location.href = absoluteUrl;
    };
    
    
    

    const onSubmit = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${API}/api/tour/city/${city}`, { method: "GET" });
            if (response.ok) {
                const city_data = await response.json();
                setIsFinal(true);
                setFinalCity(city_data.cityData);
            } else {
                toast.error(`${city} ${response.statusText}`);
            }
        } catch (error) {
            toast.error(error);
        }
        setLoading(false);
    };

    const tourSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API}/api/tour/city/${city}/budget?budget=${budget}&days=${days}`);
            if (response.ok) {
                const itineraryData = await response.json();
                setIsTourSubmit(true);
                setItinerary(itineraryData.itinerary);
            } else {
                console.log("Error fetching itinerary data");
            }
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };

    return (
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
                    placeholder="Enter Destination City such as dubai, jaipur"
                    onChange={inputEvent}
                    value={city}
                />
                <button className="Tbtn" onClick={onSubmit} disabled={loading}>
                    {loading ? "Loading..." : "Enter"}
                </button>
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

                        {/* Tour form */}
                        <form onSubmit={tourSubmit}>
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

                            {isTourSubmit ? (
                                <>
                                    <p>Tour submitted:</p>
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
                                                    {itinerary.places.placeLink[idx] ? (
                                                        <button onClick={() => handleClick(itinerary.places.placeLink[idx])}>
                                                            Go To
                                                        </button>
                                                    ) : (<h3>No button</h3>) }

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
                                                    {itinerary.hotels.hotelLink[idx] ? (
                                                        <button onClick={() => handleClick(itinerary.hotels.hotelLink[idx])}>
                                                            Go To
                                                        </button>
                                                    ) : (<h3>No button</h3>) }
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
                                                    {itinerary.transportation.transportationLink[idx] ? (
                                                        <button onClick={() => handleClick(itinerary.transportation.transportationLink[idx])}>
                                                            Go To
                                                        </button>
                                                    ) : (<h3>No button</h3>) }
                                                </div>
                                            ))}
                                        </section>
                                    </div>
                                </>
                            ) : (
                                <p>Enter Submit to see Tour packages</p>
                            )}
                        </form>

                    </div>
                ) : (
                    <p>Enter a city to see details</p>
                )}
            </div>
        </section>
    );
};
