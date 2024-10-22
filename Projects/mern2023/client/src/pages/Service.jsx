// import React, { useState } from "react"
// const URL = "http://localhost:3000/api/data/service"

// export const Service = () => {
//     const defaultData = {
//         service:"",
//         description:"",
//         price:"",
//         provider:""
//     }

//     const [data,setData] = useState(defaultData);

//     const services = async () => {
//         try {
//             const response = await fetch(URL, { method: "GET" });
//             const result = response.find(service)

//             if (response.ok) {
//                 const ser_data = await result.json();
//                 setData(ser_data)
//             } else {
//                 console.error("Error:", response.status, response.statusText);
//             }

//         } catch (error) {
//             console.log(error);
//         }

//     }

//     // useEffect(() => {
//     //     services(); // Call services when the component mounts
//     // }, []); // Empty dependency array means this runs once on mount

//     return(<>
//             <h1>Services</h1>
//             {data.length >= 0 ? (
//                 data.map((service, index) => (
//                     <div key={index}>
//                         <h2>{service.service}</h2>
//                         <p>Description: {service.description}</p>
//                         <p>Price: ${service.price}</p>
//                         <p>Provider: {service.provider}</p>
//                     </div>
//                 ))
//             ) : (
//                 <p>No services available</p>
//             )}
//     </>)
// }

import { useAuth } from "../store/auth";
// const img = require("../../public/images/design.png")

export const Service = () => {
  const { services } = useAuth();

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services </h1>
      </div>

      <div className="container grid grid-three-cols">
        {services.map((curElem, index) => {
          return (
            <div className="card" key={index}>
              <div className="card-img">
                <img src="../../public/images/design.png" alt="desginer" width="200" />
              </div>

              <div className="card-details">
                <div className="grid grid-two-cols">
                  <p>{curElem.provider}</p>

                  <p>{curElem.price}</p>
                </div>

                <h2>{curElem.service}</h2>

                <p>{curElem.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
