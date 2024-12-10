// import { useState } from "react";
// import "../index.css";
// import { useAuth } from "../store/auth";

// export const AddItinerary = () => {
//   const { API } = useAuth();

//   const defaultItinerary = {
//     name: "",
//     budget: "",
//     days: "",
//     places: [],
//     hotels: [],
//     transportation: [],
//   };

//   const [itinerary, setItinerary] = useState(defaultItinerary);
//   const [placeImages, setPlaceImages] = useState([]);
//   const [hotelImages, setHotelImages] = useState([]);
//   const [transportationImages, setTransportationImages] = useState([]);

//   // Handle image files
//   const handleImageChange = (e, category) => {
//     const files = e.target.files;
//     if (category === "places") setPlaceImages(files);
//     if (category === "hotels") setHotelImages(files);
//     if (category === "transportation") setTransportationImages(files);
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();

//     // Append itinerary details
//     formData.append("name", itinerary.name);
//     formData.append("budget", itinerary.budget);
//     formData.append("days", itinerary.days);

//     // Append places details
//     itinerary.places.forEach((place, index) => {
//       formData.append(`placeName[${index}]`, place.placeName);
//       formData.append(`placePrice[${index}]`, place.placePrice);
//       formData.append(`placeImage[${index}]`, placeImages[index]);
//     });

//     // Append hotels details
//     itinerary.hotels.forEach((hotel, index) => {
//       formData.append(`hotelName[${index}]`, hotel.hotelName);
//       formData.append(`hotelPrice[${index}]`, hotel.hotelPrice);
//       formData.append(`hotelImage[${index}]`, hotelImages[index]);
//     });

//     // Append transportation details
//     itinerary.transportation.forEach((transport, index) => {
//       formData.append(`transportationName[${index}]`, transport.transportationName);
//       formData.append(`transportationPrice[${index}]`, transport.transportationPrice);
//       formData.append(`transportationImage[${index}]`, transportationImages[index]);
//     });

//     try {
//       const response = await fetch(`${API}/api/tour/city/${itinerary.name}/budget`, {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         const data = await response.json();
//         alert("Itinerary added successfully");
//         // You can clear the form or do something else here
//       } else {
//         const data = await response.json();
//         alert(data.message || "Failed to add itinerary");
//       }
//     } catch (error) {
//       alert("An error occurred while submitting the itinerary");
//       console.error(error);
//     }
//   };

//   return (
//     <section>
//       <main>
//         <div className="section-registration">
//           <div className="container grid grid-two-cols">
//             <div className="registration-image">
//               <img src="/images/register.png" alt="Registration" width="500" height="500" />
//             </div>

//             <div className="registration-form">
//               <h1 className="main-heading mb-3">Itinerary Form</h1>
//               <br />

//               <form onSubmit={handleSubmit} encType="multipart/form-data">
//                 {/* Basic Details */}
//                 <div className="form-divs">
//                   <label htmlFor="cityName">City Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="City Name"
//                     id="cityName"
//                     required
//                     value={itinerary.name}
//                     onChange={(e) => setItinerary({ ...itinerary, name: e.target.value })}
//                   />
//                 </div>

//                 <div className="form-divs">
//                   <label htmlFor="budget">Budget</label>
//                   <input
//                     type="number"
//                     name="budget"
//                     placeholder="Enter your budget"
//                     id="budget"
//                     required
//                     value={itinerary.budget}
//                     onChange={(e) => setItinerary({ ...itinerary, budget: e.target.value })}
//                   />
//                 </div>

//                 <div className="form-divs">
//                   <label htmlFor="days">Days</label>
//                   <input
//                     type="number"
//                     name="days"
//                     placeholder="Number of days"
//                     id="days"
//                     required
//                     value={itinerary.days}
//                     onChange={(e) => setItinerary({ ...itinerary, days: e.target.value })}
//                   />
//                 </div>

//                 {/* Dynamic Places Section */}
//                 <fieldset>
//                   <legend>Places</legend>
//                   {itinerary.places.map((place, index) => (
//                     <div key={index} className="form-divs">
//                       <label htmlFor={`placeName-${index}`}>Place Name</label>
//                       <input
//                         type="text"
//                         id={`placeName-${index}`}
//                         value={place.placeName || ""}
//                         onChange={(e) => {
//                           const updatedPlaces = [...itinerary.places];
//                           updatedPlaces[index] = { ...updatedPlaces[index], placeName: e.target.value };
//                           setItinerary({ ...itinerary, places: updatedPlaces });
//                         }}
//                       />
//                       <label htmlFor={`placeImage-${index}`}>Place Image</label>
//                       <input
//                         type="file"
//                         id={`placeImage-${index}`}
//                         onChange={(e) => handleImageChange(e, "places")}
//                       />
//                       <label htmlFor={`placePrice-${index}`}>Place Price</label>
//                       <input
//                         type="number"
//                         id={`placePrice-${index}`}
//                         value={place.placePrice || ""}
//                         onChange={(e) => {
//                           const updatedPlaces = [...itinerary.places];
//                           updatedPlaces[index] = { ...updatedPlaces[index], placePrice: e.target.value };
//                           setItinerary({ ...itinerary, places: updatedPlaces });
//                         }}
//                       />
//                     </div>
//                   ))}
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setItinerary({
//                         ...itinerary,
//                         places: [
//                           ...itinerary.places,
//                           { placeName: "", placeImage: "", placePrice: "" },
//                         ],
//                       });
//                     }}
//                   >
//                     Add Place
//                   </button>
//                 </fieldset>

//                 {/* Dynamic Hotels Section */}
//                 <fieldset>
//                 <legend>Hotels</legend>
//                 {itinerary.hotels.map((hotel, index) => (
//                     <div key={index} className="form-divs">
//                     <label htmlFor={`hotelName-${index}`}>Hotel Name</label>
//                     <input
//                         type="text"
//                         id={`hotelName-${index}`}
//                         value={hotel.hotelName || ""}
//                         onChange={(e) => {
//                         const updatedHotels = [...itinerary.hotels];
//                         updatedHotels[index] = { ...updatedHotels[index], hotelName: e.target.value };
//                         setItinerary({ ...itinerary, hotels: updatedHotels });
//                         }}
//                     />
//                     <label htmlFor={`hotelImage-${index}`}>Hotel Image</label>
//                     <input
//                         type="file"
//                         id={`hotelImage-${index}`}
//                         onChange={(e) => handleImageChange(e, "hotels")}
//                     />
//                     <label htmlFor={`hotelPrice-${index}`}>Hotel Price</label>
//                     <input
//                         type="number"
//                         id={`hotelPrice-${index}`}
//                         value={hotel.hotelPrice || ""}
//                         onChange={(e) => {
//                         const updatedHotels = [...itinerary.hotels];
//                         updatedHotels[index] = { ...updatedHotels[index], hotelPrice: e.target.value };
//                         setItinerary({ ...itinerary, hotels: updatedHotels });
//                         }}
//                     />
//                     </div>
//                 ))}
//                 <button
//                     type="button"
//                     onClick={() => {
//                     setItinerary({
//                         ...itinerary,
//                         hotels: [
//                         ...itinerary.hotels,
//                         { hotelName: "", hotelImage: "", hotelPrice: "" },
//                         ],
//                     });
//                     }}
//                 >
//                     Add Hotel
//                 </button>
//                 </fieldset>

//                 {/* Dynamic Transportation Section */}
// <fieldset>
//   <legend>Transportation</legend>
//   {itinerary.transportation.map((transport, index) => (
//     <div key={index} className="form-divs">
//       <label htmlFor={`transportationName-${index}`}>Transportation Name</label>
//       <input
//         type="text"
//         id={`transportationName-${index}`}
//         value={transport.transportationName || ""}
//         onChange={(e) => {
//           const updatedTransportation = [...itinerary.transportation];
//           updatedTransportation[index] = { ...updatedTransportation[index], transportationName: e.target.value };
//           setItinerary({ ...itinerary, transportation: updatedTransportation });
//         }}
//       />
//       <label htmlFor={`transportationImage-${index}`}>Transportation Image</label>
//       <input
//         type="file"
//         id={`transportationImage-${index}`}
//         onChange={(e) => handleImageChange(e, "transportation")}
//       />
//       <label htmlFor={`transportationPrice-${index}`}>Transportation Price</label>
//       <input
//         type="number"
//         id={`transportationPrice-${index}`}
//         value={transport.transportationPrice || ""}
//         onChange={(e) => {
//           const updatedTransportation = [...itinerary.transportation];
//           updatedTransportation[index] = { ...updatedTransportation[index], transportationPrice: e.target.value };
//           setItinerary({ ...itinerary, transportation: updatedTransportation });
//         }}
//       />
//     </div>
//   ))}
//   <button
//     type="button"
//     onClick={() => {
//       setItinerary({
//         ...itinerary,
//         transportation: [
//           ...itinerary.transportation,
//           { transportationName: "", transportationImage: "", transportationPrice: "" },
//         ],
//       });
//     }}
//   >
//     Add Transportation
//   </button>
// </fieldset>




//                 {/* Similar sections for Hotels and Transportation */}

//                 <br />
//                 <button type="submit" className="btn btn-submit">
//                   Register Now
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </main>
//     </section>
//   );
// };

import { useState } from "react";
import "../index.css";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


export const AddItinerary = () => {
  const { API } = useAuth();

  const defaultItinerary = {
    name: "",
    budget: "",
    days: "",
    places: [],
    hotels: [],
    transportation: [],
  };

  const [itinerary, setItinerary] = useState(defaultItinerary);
  const [placeImages, setPlaceImages] = useState([]);
  const [hotelImages, setHotelImages] = useState([]);
  const [transportationImages, setTransportationImages] = useState([]);

  // Handle image file changes
  const handleImageChange = (e, category) => {
    const files = Array.from(e.target.files); // Convert FileList to an array
    if (category === "places") setPlaceImages(files);
    if (category === "hotels") setHotelImages(files);
    if (category === "transportation") setTransportationImages(files);
  };
  

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

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
    });

    itinerary.hotels.forEach((hotel, index) => {
        formData.append(`hotelName`, hotel.hotelName);
        formData.append(`hotelPrice`, hotel.hotelPrice);
    });

    itinerary.transportation.forEach((transport, index) => {
        formData.append(`transportationName`, transport.transportationName);
        formData.append(`transportationPrice`, transport.transportationPrice);
    });

    try {
        const response = await fetch(`${API}/api/tour/city/${itinerary.name}/budget`, {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            // setItinerary(defaultItinerary)
            toast.success("Itinerary added successfully")
            // alert("Itinerary added successfully");
        } else {
            const error = await response.text();
            console.error("Server Error:", error);
            toast.error("Itinerary added successfully")
            // alert("Failed to add itinerary");
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
                        value={place.placeName || ""}
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
                        value={place.placePrice || ""}
                        onChange={(e) => {
                          const updatedPlaces = [...itinerary.places];
                          updatedPlaces[index] = { ...updatedPlaces[index], placePrice: e.target.value };
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
                        places: [...itinerary.places, { placeName: "", placePrice: "" }],
                      })
                    }
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
                        value={hotel.hotelName || ""}
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
                        value={hotel.hotelPrice || ""}
                        onChange={(e) => {
                          const updatedHotels = [...itinerary.hotels];
                          updatedHotels[index] = { ...updatedHotels[index], hotelPrice: e.target.value };
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
                        hotels: [...itinerary.hotels, { hotelName: "", hotelPrice: "" }],
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
                        value={transport.transportationName || ""}
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
                        value={transport.transportationPrice || ""}
                        onChange={(e) => {
                          const updatedTransportation = [...itinerary.transportation];
                          updatedTransportation[index] = { ...updatedTransportation[index], transportationPrice: e.target.value };
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
                          { transportationName: "", transportationPrice: "" },
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

