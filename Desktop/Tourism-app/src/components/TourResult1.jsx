
import React from "react";
import TourCard from "./TourCard";
import Ddata from "./Tdata";
import dubaiHotelData from './Hotels';
import "../style.css";
import "../responsive.css";

const TourResult1 = ({ totalVal, finalCity }) => {
  const { budget, days } = totalVal || {};

  let cityTourCards = null;
  let hotelTourCards = null;

  if (finalCity === "dubai") {
    // if (budget && days) {
      if (days > 2 && budget > 10000) {
        return (
            <>

                <TourCard
                    key={Ddata[0].id}
                    imgsrc={Ddata[0].imgsrc}
                    place={Ddata[0].place}
                    price={Ddata[0].price}
                    link={Ddata[0].link}
                />

                <TourCard
                    key={Ddata[1].id}
                    imgsrc={Ddata[1].imgsrc}
                    place={Ddata[1].place}
                    price={Ddata[1].price}
                    link={Ddata[1].link}
                />
                <TourCard
                    key={dubaiHotelData[0].id}
                    imgsrc={dubaiHotelData[0].imgsrc}
                    place={dubaiHotelData[0].place}
                    price={dubaiHotelData[0].price}
                    link={dubaiHotelData[0].link}
                />
                <TourCard
                    key={dubaiHotelData[1].id}
                    imgsrc={dubaiHotelData[1].imgsrc}
                    place={dubaiHotelData[1].place}
                    price={dubaiHotelData[1].price}
                    link={dubaiHotelData[1].link}
                />
                </>
                );

      } else if (days <= 2 && budget > 5000) {
        return (
            <>
            <div>
                <TourCard
                    key={Ddata[2].id}
                    imgsrc={Ddata[2].imgsrc}
                    place={Ddata[2].place}
                    price={Ddata[2].price}
                    link={Ddata[2].link}
                />
                <TourCard
                    key={Ddata[3].id}
                    imgsrc={Ddata[3].imgsrc}
                    place={Ddata[3].place}
                    price={Ddata[3].price}
                    link={Ddata[3].link}
                />
                </div>
                <div>
                <TourCard
                    key={dubaiHotelData[2].id}
                    imgsrc={dubaiHotelData[2].imgsrc}
                    place={dubaiHotelData[2].place}
                    price={dubaiHotelData[2].price}
                    link={dubaiHotelData[2].link}
                />
                <TourCard
                    key={dubaiHotelData[3].id}
                    imgsrc={dubaiHotelData[3].imgsrc}
                    place={dubaiHotelData[3].place}
                    price={dubaiHotelData[3].price}
                    link={dubaiHotelData[3].link}
                />
                </div>
            </>
        );
      }
      // Add more conditions as needed
    // }
  } else if (finalCity === "goa") {
    if (budget && days) {
      if (days > 3 && budget > 15000) {
        return (
            <>
                <TourCard
                    key={Ddata[0].id}
                    imgsrc={Ddata[0].imgsrc}
                    place={Ddata[0].place}
                    price={Ddata[0].price}
                    link={Ddata[0].link}
                />

                <TourCard
                    key={Ddata[1].id}
                    imgsrc={Ddata[1].imgsrc}
                    place={Ddata[1].place}
                    price={Ddata[1].price}
                    link={Ddata[1].link}
                />
                <br></br>
            </>
        );
      } else if (days <= 3 && budget > 10000) {
        return (
            <>
                <TourCard
                    key={Ddata[2].id}
                    imgsrc={Ddata[2].imgsrc}
                    place={Ddata[2].place}
                    price={Ddata[2].price}
                    link={Ddata[2].link}
                />
                <TourCard
                    key={Ddata[3].id}
                    imgsrc={Ddata[3].imgsrc}
                    place={Ddata[3].place}
                    price={Ddata[3].price}
                    link={Ddata[3].link}
                />
            </>
        );
      }
      // Add more conditions as needed
    }
  }
};

export default TourResult1;
