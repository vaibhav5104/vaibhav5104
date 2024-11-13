import React, { useEffect, useState } from "react";
import {useAuth} from "../store/auth"

export const Service = () => {
    const defaultData = [];
    const [data, setData] = useState(defaultData);
    const {API} = useAuth()

    const services = async () => {
        try {
            const response = await fetch(`${API}/api/data/service`, { method: "GET" });

            if (response.ok) {
                const ser_data = await response.json();
                setData(ser_data.data || []);
            } else {
                console.error("Error:", response.status, response.statusText);
            }

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        services(); // Call services when the component mounts
    }, []); // Empty dependency array means this runs once on mount

    return (
        <>
            <section className="section-services">
                <div className="container">
                    <h1 className="main-heading">Services</h1>
                </div>
                <div className="container grid grid-three-cols">
                    {data.length > 0 ? (
                        data.map((service, index) => (
                            <div className="card" key={index}>
                                <div className="card-img">
                                    <img src="../../public/images/design.png" alt="designer" width="200" />
                                </div>
                                <div className="card-details">
                                    <div className="grid grid-two-cols">
                                        <p>{service.provider}</p>
                                        <p>{service.price}</p>
                                    </div>
                                    <h2>{service.service}</h2>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No services available</p>
                    )}
                </div>
            </section>
        </>
    );
};
// export {data}