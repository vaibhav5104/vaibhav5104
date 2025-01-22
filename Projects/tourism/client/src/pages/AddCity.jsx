
/* 
    import { useState } from "react";
    import "../index.css";
    import { useAuth } from "../store/auth";
    import { toast } from "react-toastify";

    export const AddCity = () => {
        const { API } = useAuth();

    const defaultCity = {
        name: "",
        cityImage: [],
        events: {
            eventName: [""], // Start with one empty event
            eventImage: [],
            eventLink: [""]
        },
        blog: "",
        mapUrl: ""
    };

    const [city, setCity] = useState(defaultCity);
    const [eventImages, setEventImages] = useState([]);
    const [cityImages, setCityImages] = useState([]);

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
        const files = Array.from(e.target.files);
        if (!validateImages(files)) return;

        if (category === "events") setEventImages(files);
        if (category === "cityImage") setCityImages(files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validate fields
        if (!city.name || !city.blog) {
            toast.error("Please fill in all required fields.");
            return;
        }
    
        const formData = new FormData();
        formData.append("name", city.name);
        formData.append("blog", city.blog);
        formData.append("mapUrl", city.mapUrl);
    
        // Append multiple city images
        cityImages.forEach((image) => {
            formData.append("cityImages", image); // Key must match backend's expected key
        });
    
        // Append multiple event images
        eventImages.forEach((image) => {
            formData.append("eventImages", image); // Key must match backend's expected key
        });
    
        // Append event names and links
        city.events.eventName.forEach((eventName) => {
            formData.append("eventName[]", eventName); // Use array notation for consistency
        });
        city.events.eventLink.forEach((eventLink) => {
            formData.append("eventLink[]", eventLink);
        });
    
        // Debugging: Log FormData entries
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value instanceof File ? value.name : value}`);
        }
    
        try {
            const response = await fetch(`${API}/api/tour/add/city`, {
                method: "POST",
                body: formData,
            });
    
            if (response.ok) {
                toast.success("City added successfully!");
                setCity(defaultCity); // Reset state
                setCityImages([]);
                setEventImages([]);
            } else {
                const errorResponse = await response.json();
                toast.error(errorResponse.message || "Failed to add city.");
            }
        } catch (error) {
            console.error(error);
            toast.error("An error occurred while adding the city.");
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
                            <h1 className="main-heading mb-3">City Form</h1>
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className="form-divs">
                                    <label htmlFor="cityName">City Name</label>
                                    <input
                                        type="text"
                                        id="cityName"
                                        placeholder="City Name"
                                        required
                                        value={city.name}
                                        onChange={(e) => setCity({ ...city, name: e.target.value })}
                                    />
                                </div>
                                <div className="form-divs">
                                    <label htmlFor="cityBlog">City Blog</label>
                                    <input
                                        type="text"
                                        id="cityBlog"
                                        placeholder="City Blog"
                                        required
                                        value={city.blog}
                                        onChange={(e) => setCity({ ...city, blog: e.target.value })}
                                    />
                                </div>
                                <div className="form-divs">
                                    <label htmlFor="cityMapUrl">City Map Url</label>
                                    <input
                                        type="text"
                                        id="cityMapUrl"
                                        placeholder="City Map Url"
                                        required
                                        value={city.mapUrl}
                                        onChange={(e) => setCity({ ...city, mapUrl: e.target.value })}
                                    />
                                </div>

                                <fieldset>
                                    <legend>Events</legend>
                                    {city.events.eventName.map((event, index) => (
                                        <div key={index} className="form-divs">
                                            <label>Event Name</label>
                                            <input
                                                type="text"
                                                value={event}
                                                onChange={(e) => {
                                                    const updatedEvents = { ...city.events };
                                                    updatedEvents.eventName[index] = e.target.value;
                                                    setCity({ ...city, events: updatedEvents });
                                                }}
                                            />
                                            <label>Event Images</label>
                                            <input
                                                type="file"
                                                multiple
                                                accept=".jpg,.jpeg,.png"
                                                onChange={(e) => handleImageChange(e, "events")}
                                            />
                                            <label>Event Link</label>
                                            <input
                                                type="text"
                                                value={city.events.eventLink[index] || ""}
                                                onChange={(e) => {
                                                    const updatedEvents = { ...city.events };
                                                    updatedEvents.eventLink[index] = e.target.value;
                                                    setCity({ ...city, events: updatedEvents });
                                                }}
                                            />
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setCity({
                                                ...city,
                                                events: {
                                                    ...city.events,
                                                    eventName: [...city.events.eventName, ""],
                                                    eventLink: [...city.events.eventLink, ""]
                                                }
                                            })
                                        }
                                    >
                                        Add Event
                                    </button>
                                </fieldset>

                                <fieldset>
                                    <legend>City Images</legend>
                                    {cityImages.length > 0 && (
                                        <div className="image-preview">
                                            {cityImages.map((file, index) => (
                                                <div key={index} className="image-container" style={{ display: "inline-block", margin: "10px" }}>
                                                    <img
                                                        src={URL.createObjectURL(file)}
                                                        alt={`City Image ${index + 1}`}
                                                        width="100"
                                                        height="100"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            const updatedImages = cityImages.filter((_, i) => i !== index);
                                                            setCityImages(updatedImages);
                                                        }}
                                                        style={{
                                                            display: "block",
                                                            marginTop: "5px",
                                                            backgroundColor: "red",
                                                            color: "white",
                                                            border: "none",
                                                            padding: "5px",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    <input
                                        type="file"
                                        multiple
                                        accept=".jpg,.jpeg,.png"
                                        onChange={(e) => handleImageChange(e, "cityImage")}
                                    />
                                </fieldset>

                                <button type="submit" className="btn btn-submit">
                                    Submit City
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
    };
 
*/


import React, { useState,useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddCity = () => {
  const [cityData, setCityData] = useState({
    name: "",
    blog: "",
    mapUrl: "",
  });
  const cityImageInputRef = useRef(null); // Create a ref for the file input

  const [events, setEvents] = useState([
    { eventName: "", eventImage: null, eventLink: "" },
  ]);
  const [cityImages, setCityImages] = useState([]);

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  const VALID_FILE_TYPES = ["image/jpeg", "image/png", "image/jpg"];

  const handleChange = (e) => {
    setCityData({ ...cityData, [e.target.name]: e.target.value });
  };

  const handleEventChange = (index, field, value) => {
    const updatedEvents = [...events];
    updatedEvents[index][field] = value;
    setEvents(updatedEvents);
  };

  const handleEventImageChange = (index, file) => {
    if (!VALID_FILE_TYPES.includes(file.type)) {
      toast.error(`Invalid file type: ${file.name}`);
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      toast.error(`File size exceeds 5MB: ${file.name}`);
      return;
    }
    const updatedEvents = [...events];
    updatedEvents[index].eventImage = file;
    setEvents(updatedEvents);
  };

  const handleAddEvent = () => {
    setEvents([...events, { eventName: "", eventImage: null, eventLink: "" }]);
  };

  const handleRemoveEvent = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
  };

  const handleCityImageChange = (file) => {
    if (!VALID_FILE_TYPES.includes(file.type)) {
      toast.error(`Invalid file type: ${file.name}`);
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      toast.error(`File size exceeds 5MB: ${file.name}`);
      return;
    }
    setCityImages([...cityImages, file]);
  };

  const handleRemoveCityImage = (index) => {
    const updatedImages = cityImages.filter((_, i) => i !== index);
    setCityImages(updatedImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append basic city data
    formData.append("name", cityData.name);
    formData.append("blog", cityData.blog);
    if (cityData.mapUrl) formData.append("mapUrl", cityData.mapUrl);

    // Append events
    events.forEach((event, index) => {
      formData.append(`eventName[${index}]`, event.eventName);
      formData.append(`eventLink[${index}]`, event.eventLink);
      if (event.eventImage) {
        formData.append(`eventImages`, event.eventImage);
      }
    });

    // Append city images
    cityImages.forEach((image) => formData.append("cityImages", image));

    try {
      const response = await fetch("http://localhost:3000/api/tour/add/city", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || "City added successfully!");
        setCityData({ name: "", blog: "", mapUrl: "" });
        setEvents([{ eventName: "", eventImage: null, eventLink: "" }]);
        setCityImages([]);
      } else {
        toast.error(result.message || "Failed to add city");
      }
    } catch (error) {
      toast.error("An error occurred while adding the city");
    }
  };

  return (
    <div className="add-city-container">
      <h2>Add City</h2>
      <form onSubmit={handleSubmit}>
        {/* City Name */}
        <div>
          <label>City Name:</label>
          <input
            type="text"
            name="name"
            value={cityData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Blog */}
        <div>
          <label>Blog:</label>
          <textarea
            name="blog"
            value={cityData.blog}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Map URL */}
        <div>
          <label>Map Link:</label>
          <input
            type="text"
            name="mapUrl"
            value={cityData.mapUrl}
            onChange={handleChange}
          />
        </div>

        {/* Events */}
        <fieldset>
            <legend>Events</legend>
            <div>
                {events.map((event, index) => (
                <div key={index} className="event-item">
                  <label>Event Name:</label>
                  <input
                    type="text"
                    value={event.eventName}
                    onChange={(e) => handleEventChange(index, "eventName", e.target.value)}
                    required
                  />
                  <label>Event Image:</label>
                  <input
                    type="file"
                    accept={VALID_FILE_TYPES.join(",")}
                    onChange={(e) => handleEventImageChange(index, e.target.files[0])}
                  />
                  <label>Event Link:</label>
                  <input
                    type="text"
                    value={event.eventLink}
                    onChange={(e) => handleEventChange(index, "eventLink", e.target.value)}
                  />
                  <button type="button" onClick={() => handleRemoveEvent(index)}>
                    Remove Event
                  </button>
                </div>
                ))}
                <button type="button" onClick={handleAddEvent}>
                    Add Another Event
                </button>
            </div>
        </fieldset>

        {/* City Images */}
        <fieldset>
            <legend>City Images</legend>
            <div>

                <input
                    type="file"
                    accept={VALID_FILE_TYPES.join(",")}
                    ref={cityImageInputRef} // Use useRef to manage the file input
                    // style={{ display: "none" }} // Hide the input element
                    onChange={(e) => handleCityImageChange(e.target.files[0])}
                />
                {cityImages.map((image, index) => (
                    <div key={index} className="city-image-item">
                    <span>{image.name}</span>
                    <button type="button" onClick={() => handleRemoveCityImage(index)}>
                        Remove Image
                    </button>
                    </div>
                ))}                
                <button
                    type="button"
                    onClick={() => cityImageInputRef.current && cityImageInputRef.current.click()} // Trigger the file input programmatically
                >
                    Add Another Image
                </button>
            </div>
        </fieldset>        

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
