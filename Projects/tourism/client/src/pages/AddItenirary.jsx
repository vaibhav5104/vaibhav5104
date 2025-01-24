import { useState } from "react";
import "../index.css";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import {Navigate } from "react-router-dom";

export const AddItinerary = () => {
  const { user, isLoading, API,authorizationToken  } = useAuth();

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if(!(user)) {
    return <Navigate to="/" />;
  }else if(!user.isAdmin){
    return <Navigate to="/" />;
  }

  const defaultItinerary = {
    name: [],
    budget: [],
    days: [],
    places: [],
    hotels: [],
    transportation: [],
  };

  const [itinerary, setItinerary] = useState(defaultItinerary);
  const [placeImages, setPlaceImages] = useState([]);
  const [hotelImages, setHotelImages] = useState([]);
  const [transportationImages, setTransportationImages] = useState([]);

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  const VALID_FILE_TYPES = ["image/jpeg", "image/png", "image/jpg"];

  // Validate image files
  const validateImages = (files) => {
    for (const file of files) {
      if (!VALID_FILE_TYPES.includes(file.type)) {
        toast.error(`${file.name} is not a valid image file.`);
        return false;
      }
      if (file.size > MAX_FILE_SIZE) {
        toast.error(`${file.name} exceeds the maximum file size of 5MB.`);
        return false;
      }
    }
    return true;
  };

  // Handle image file changes
  const handleImageChange = (e, category) => {
    const files = Array.from(e.target.files); // Convert FileList to an array
    if (!validateImages(files)) return;

    if (category === "places") setPlaceImages(files);
    if (category === "hotels") setHotelImages(files);
    if (category === "transportation") setTransportationImages(files);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!itinerary.name || !itinerary.budget || !itinerary.days) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (itinerary.places.length === 0) {
      toast.error("Please add at least one place.");
      return;
    }
    if (itinerary.hotels.length === 0) {
      toast.error("Please add at least one hotel.");
      return;
    }
    if (itinerary.transportation.length === 0) {
      toast.error("Please add at least one transportation option.");
      return;
    }

    const formData = new FormData();

    formData.append("name", itinerary.name);
    formData.append("budget", itinerary.budget);
    formData.append("days", itinerary.days);

    placeImages.forEach((image) => {
        formData.append("placeImages", image);
    });

    hotelImages.forEach((image) => {
        formData.append("hotelImages", image);
    });

    transportationImages.forEach((image) => {
        formData.append("transportationImages", image);
    });

    itinerary.places.forEach((place, index) => {
        formData.append(`placeName`, place.placeName);
        formData.append(`placePrice`, place.placePrice);
        formData.append(`placeLink`, place.placeLink);
    });

    itinerary.hotels.forEach((hotel, index) => {
        formData.append(`hotelName`, hotel.hotelName);
        formData.append(`hotelPrice`, hotel.hotelPrice);
        formData.append(`hotelLink`, hotel.hotelLink);
    });

    itinerary.transportation.forEach((transport, index) => {
        formData.append(`transportationName`, transport.transportationName);
        formData.append(`transportationPrice`, transport.transportationPrice);
        formData.append(`transportationLink`, transport.transportationLink);
    });

    try {
        const response = await fetch(`${API}/api/admin/city/${itinerary.name}/budget`, {
            method: "POST",
            body: formData,
            headers: {
            Authorization: authorizationToken,
            },
        });

        if (response.ok) {
            // setItinerary(defaultItinerary)
            toast.success("Itinerary added successfully")
        } else {
            const error = await response.text();
            console.error("Server Error:", error);
            toast.error(`Iteration already exist`)
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while submitting the itinerary");
    }
};

  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image">
              <img src="/images/register.png" alt="Registration" width="500" height="500" />
            </div>
            <div className="registration-form">
              <h1 className="main-heading mb-3">Itinerary Form</h1>
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                {/* Basic Details */}
                <div className="form-divs">
                  <label htmlFor="cityName">City Name</label>
                  <input
                    type="text"
                    id="cityName"
                    placeholder="City Name"
                    required
                    value={itinerary.name}
                    onChange={(e) => setItinerary({ ...itinerary, name: e.target.value })}
                  />
                </div>

                <div className="form-divs">
                  <label htmlFor="budget">Budget</label>
                  <input
                    type="number"
                    id="budget"
                    placeholder="Enter your budget"
                    required
                    value={itinerary.budget}
                    onChange={(e) => setItinerary({ ...itinerary, budget: e.target.value })}
                  />
                </div>

                <div className="form-divs">
                  <label htmlFor="days">Days</label>
                  <input
                    type="number"
                    id="days"
                    placeholder="Number of days"
                    required
                    value={itinerary.days}
                    onChange={(e) => setItinerary({ ...itinerary, days: e.target.value })}
                  />
                </div>

                {/* Dynamic Places Section */}
                <fieldset>
                  <legend>Places</legend>
                  {itinerary.places.map((place, index) => (
                    <div key={index} className="form-divs">
                      <label>Place Name</label>
                      <input
                        type="text"
                        value={place.placeName || []}
                        onChange={(e) => {
                          const updatedPlaces = [...itinerary.places];
                          updatedPlaces[index] = { ...updatedPlaces[index], placeName: e.target.value };
                          setItinerary({ ...itinerary, places: updatedPlaces });
                        }}
                      />
                      <label>Place Images</label>
                      <input
                        type="file"
                        multiple
                        onChange={(e) => handleImageChange(e, "places")}
                      /> 
                      <label>Place Price</label>
                      <input
                        type="number"
                        value={place.placePrice || []}
                        onChange={(e) => {
                          const updatedPlaces = [...itinerary.places];
                          updatedPlaces[index] = { ...updatedPlaces[index], placePrice: e.target.value };
                          setItinerary({ ...itinerary, places: updatedPlaces });
                        }}
                      />
                      <label>Place Link</label>
                      <input
                        type="text"
                        value={place.placeLink || []}
                        onChange={(e) => {
                          const updatedPlaces = [...itinerary.places];
                          updatedPlaces[index] = { ...updatedPlaces[index], placeLink: e.target.value };
                          setItinerary({ ...itinerary, places: updatedPlaces });
                        }}
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      setItinerary({
                        ...itinerary,
                        places: [...itinerary.places, { placeName: [], placePrice: [] }],
                      })                    }
                  >
                    Add Place
                  </button>
                </fieldset>

                {/* Dynamic Hotels Section */}
                <fieldset>
                  <legend>Hotels</legend>
                  {itinerary.hotels.map((hotel, index) => (
                    <div key={index} className="form-divs">
                      <label>Hotel Name</label>
                      <input
                        type="text"
                        value={hotel.hotelName || []}
                        onChange={(e) => {
                          const updatedHotels = [...itinerary.hotels];
                         updatedHotels[index] = { ...updatedHotels[index], hotelName: e.target.value };
                          setItinerary({ ...itinerary, hotels: updatedHotels });
                        }}
                      />
                      <label>Hotel Images</label>
                      <input
                        type="file"
                        multiple
                        onChange={(e) => handleImageChange(e, "hotels")}
                      />
                      <label>Hotel Price</label>
                      <input
                        type="number"
                        value={hotel.hotelPrice || []}
                        onChange={(e) => {
                          const updatedHotels = [...itinerary.hotels];
                          updatedHotels[index] = { ...updatedHotels[index], hotelPrice: e.target.value };
                         setItinerary({ ...itinerary, hotels: updatedHotels });
                        }}
                      />
                      <label>Hotel Link</label>
                      <input
                        type="text"
                        value={hotel.hotelLink || []}
                        onChange={(e) => {
                          const updatedHotels = [...itinerary.hotels];
                          updatedHotels[index] = { ...updatedHotels[index], hotelLink: e.target.value };
                          setItinerary({ ...itinerary, hotels: updatedHotels });
                        }}
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      setItinerary({
                        ...itinerary,
                        hotels: [...itinerary.hotels, { hotelName: [], hotelPrice: [] }],
                      })
                    }
                  >
                    Add Hotel
                  </button>
                </fieldset>

                {/* Dynamic Transportation Section */}
                <fieldset>
                  <legend>Transportation</legend>
                  {itinerary.transportation.map((transport, index) => (
                    <div key={index} className="form-divs">
                      <label>Transportation Name</label>
                      <input
                        type="text"
                        value={transport.transportationName || []}
                        onChange={(e) => {
                          const updatedTransportation = [...itinerary.transportation];
                          updatedTransportation[index] = { ...updatedTransportation[index], transportationName: e.target.value };
                          setItinerary({ ...itinerary, transportation: updatedTransportation });
                        }}
                      />
                      <label>Transportation Images</label>
                      <input
                        type="file"
                        multiple
                        onChange={(e) => handleImageChange(e, "transportation")}
                      />
                      <label>Transportation Price</label>
                      <input
                        type="number"
                        value={transport.transportationPrice || []}
                        onChange={(e) => {
                          const updatedTransportation = [...itinerary.transportation];
                          updatedTransportation[index] = { ...updatedTransportation[index], transportationPrice: e.target.value };
                          setItinerary({ ...itinerary, transportation: updatedTransportation });
                        }}
                      />
                      <label>Transportation Link</label>
                      <input
                        type="text"
                        value={transport.transportationLink || []}
                        onChange={(e) => {
                          const updatedTransportation = [...itinerary.transportation];
                          updatedTransportation[index] = { ...updatedTransportation[index], transportationLink: e.target.value };
                          setItinerary({ ...itinerary, transportation: updatedTransportation });
                        }}
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      setItinerary({
                        ...itinerary,
                        transportation: [
                          ...itinerary.transportation,
                          { transportationName: [], transportationPrice: [] },
                        ],
                      })
                    }
                  >
                    Add Transportation
                  </button>
                </fieldset>

                <br />
                <button type="submit" className="btn btn-submit">
                  Submit Itinerary
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

