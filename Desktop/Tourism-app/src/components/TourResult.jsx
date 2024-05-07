import React from "react";
import TourCard from './TourCard';
import dubaiVehicle from './Transport';
import jaipurVehicle from './Transport';
// import Ddata, { Gdata } from './Tdata';
// import jaipurData from './Tdata';
import Ddata, { Gdata, jaipurData } from './Tdata';
import dubaiHotelData , {jaipurHotelsData} from './Hotels';
// import  from './Hotels';
import '../style.css';
import '../responsive.css';

const TourResult = ({ totalVal, finalCity }) => {
  const { budget, days } = totalVal || {};

  if (finalCity === "jaipur") {
    if (days > 2 && budget > 10000) {
        return (
            <>
            <div>
                <TourCard
                    key={jaipurData[0].id}
                    category="Place"
                    imgsrc={jaipurData[0].imgsrc}
                    place={jaipurData[0].place}
                    price={jaipurData[0].price}
                    link={jaipurData[0].link}
                />

                <TourCard
                    key={jaipurHotelsData[0].id}
                    category="Hotel"
                    imgsrc={jaipurHotelsData[0].imgsrc}
                    place={jaipurHotelsData[0].place}
                    price={jaipurHotelsData[0].price}
                    link={jaipurHotelsData[0].link}
                />
                <TourCard
                    key={jaipurVehicle[0].id}
                    category="Transportation"
                    imgsrc={jaipurVehicle[0].imgsrc}
                    place={jaipurVehicle[0].place}
                    price={jaipurVehicle[0].price}
                    link={jaipurVehicle[0].link}
                />

                </div>
                <br></br>

                <div>
                <TourCard
                    key={jaipurData[1].id}
                    imgsrc={jaipurData[1].imgsrc}
                    place={jaipurData[1].place}
                    price={jaipurData[1].price}
                    link={jaipurData[1].link}
                />
                <TourCard
                    key={jaipurHotelsData[1].id}
                    imgsrc={jaipurHotelsData[1].imgsrc}
                    place={jaipurHotelsData[1].place}
                    price={jaipurHotelsData[1].price}
                    link={jaipurHotelsData[1].link}
                />
                 <TourCard
                    key={jaipurVehicle[1].id}
                    imgsrc={jaipurVehicle[1].imgsrc}
                    place={jaipurVehicle[1].place}
                    price={jaipurVehicle[1].price}
                    link={jaipurVehicle[1].link}
                />
                </div>

                {/* Trasportation */}
            </>
        );
    } else if (days <= 2 && budget > 5000) {
        return (
            <>
            <div>
                <TourCard
                    key={jaipurData[2].id}
                    imgsrc={jaipurData[2].imgsrc}
                    place={jaipurData[2].place}
                    price={jaipurData[2].price}
                    link={jaipurData[2].link}
                />
                <TourCard
                    key={jaipurHotelsData[2].id}
                    imgsrc={jaipurHotelsData[2].imgsrc}
                    place={jaipurHotelsData[2].place}
                    price={jaipurHotelsData[2].price}
                    link={jaipurHotelsData[2].link}
                />
                <TourCard
                    key={jaipurVehicle[0].id}
                    imgsrc={jaipurVehicle[0].imgsrc}
                    place={jaipurVehicle[0].place}
                    price={jaipurVehicle[0].price}
                    link={jaipurVehicle[0].link}
                />
                
                </div>
                <div>
                <TourCard
                    key={jaipurData[3].id}
                    imgsrc={jaipurData[3].imgsrc}
                    place={jaipurData[3].place}
                    price={jaipurData[3].price}
                    link={jaipurData[3].link}
                />
                <TourCard
                    key={jaipurHotelsData[3].id}
                    imgsrc={jaipurHotelsData[3].imgsrc}
                    place={jaipurHotelsData[3].place}
                    price={jaipurHotelsData[3].price}
                    link={jaipurHotelsData[3].link}
                />
                 <TourCard
                    key={jaipurVehicle[1].id}
                    imgsrc={jaipurVehicle[1].imgsrc}
                    place={jaipurVehicle[1].place}
                    price={jaipurVehicle[1].price}
                    link={jaipurVehicle[1].link}
                />
                </div>
                
            </>
        );
    } else {
        // return <button>Go Back</button>;
    }
}
  else if (finalCity === "dubai") {
    // if (budget && days) {
        if (days > 2 && budget > 10000) {
            return (
                <>
                
                <div>
                    <TourCard
                        key={Ddata[0].id}
                        category="Place"
                        imgsrc={Ddata[0].imgsrc}
                        place={Ddata[0].place}
                        price={Ddata[0].price}
                        link={Ddata[0].link}
                    />

<TourCard
    key={dubaiHotelData[0].id}
    category="Hotel"
    imgsrc={dubaiHotelData[0].imgsrc}
    place={dubaiHotelData[0].place}
    price={dubaiHotelData[0].price}
    link={dubaiHotelData[0].link}
/>
<TourCard
    key={dubaiVehicle[0].id}
    category="Transportation"
    imgsrc={dubaiVehicle[0].imgsrc}
    place={dubaiVehicle[0].place}
    price={dubaiVehicle[0].price}
    link={dubaiVehicle[0].link}
/>
                    
                    </div>
                    <br></br>
                    {/* HOtel */}
                    <div>
                    <TourCard
                        key={Ddata[1].id}
                        imgsrc={Ddata[1].imgsrc}
                        place={Ddata[1].place}
                        price={Ddata[1].price}
                        link={Ddata[1].link}
                    />
                    <TourCard
                        key={dubaiHotelData[1].id}
                        imgsrc={dubaiHotelData[1].imgsrc}
                        place={dubaiHotelData[1].place}
                        price={dubaiHotelData[1].price}
                        link={dubaiHotelData[1].link}
                    />
                     <TourCard
                        key={dubaiVehicle[1].id}
                        imgsrc={dubaiVehicle[1].imgsrc}
                        place={dubaiVehicle[1].place}
                        price={dubaiVehicle[1].price}
                        link={dubaiVehicle[1].link}
                    />
                    </div>
                    


                    {/* Trasportation */}
                </>
            );
          }

       else if (days <= 2 && budget > 5000) {
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
                    key={dubaiHotelData[2].id}
                    imgsrc={dubaiHotelData[2].imgsrc}
                    place={dubaiHotelData[2].place}
                    price={dubaiHotelData[2].price}
                    link={dubaiHotelData[2].link}
                />
                <TourCard
                    key={dubaiVehicle[0].id}
                    imgsrc={dubaiVehicle[0].imgsrc}
                    place={dubaiVehicle[0].place}
                    price={dubaiVehicle[0].price}
                    link={dubaiVehicle[0].link}
                />
                
                </div>
                <div>
                <TourCard
                    key={Ddata[3].id}
                    imgsrc={Ddata[3].imgsrc}
                    place={Ddata[3].place}
                    price={Ddata[3].price}
                    link={Ddata[3].link}
                />
                <TourCard
                    key={dubaiHotelData[3].id}
                    imgsrc={dubaiHotelData[3].imgsrc}
                    place={dubaiHotelData[3].place}
                    price={dubaiHotelData[3].price}
                    link={dubaiHotelData[3].link}
                />
                 <TourCard
                    key={dubaiVehicle[1].id}
                    imgsrc={dubaiVehicle[1].imgsrc}
                    place={dubaiVehicle[1].place}
                    price={dubaiVehicle[1].price}
                    link={dubaiVehicle[1].link}
                />
                </div>
                
            </>
        );
      }
      // Add more conditions as needed
    // }
  } else if (finalCity === "goa") {
        // if (budget && days) {
      if (days > 3 && budget > 15000) {
        return (
            <>
                <div>
                    <TourCard
                        key={Gdata[0].id}
                        category="Place"
                        imgsrc={Gdata[0].imgsrc}
                        place={Gdata[0].place}
                        price={Gdata[0].price}
                        link={Gdata[0].link}
                    />

<TourCard
    key={dubaiHotelData[0].id}
    category="Hotel"
    imgsrc={dubaiHotelData[0].imgsrc}
    place={dubaiHotelData[0].place}
    price={dubaiHotelData[0].price}
    link={dubaiHotelData[0].link}
/>
<TourCard
    key={dubaiVehicle[0].id}
    category="Transportation"
    imgsrc={dubaiVehicle[0].imgsrc}
    place={dubaiVehicle[0].place}
    price={dubaiVehicle[0].price}
    link={dubaiVehicle[0].link}
/>
                    
                    </div>
                    <br></br>
                    {/* HOtel */}
                    <div>
                    <TourCard
                        key={Ddata[1].id}
                        imgsrc={Ddata[1].imgsrc}
                        place={Ddata[1].place}
                        price={Ddata[1].price}
                        link={Ddata[1].link}
                    />
                    <TourCard
                        key={dubaiHotelData[1].id}
                        imgsrc={dubaiHotelData[1].imgsrc}
                        place={dubaiHotelData[1].place}
                        price={dubaiHotelData[1].price}
                        link={dubaiHotelData[1].link}
                    />
                     <TourCard
                        key={dubaiVehicle[1].id}
                        imgsrc={dubaiVehicle[1].imgsrc}
                        place={dubaiVehicle[1].place}
                        price={dubaiVehicle[1].price}
                        link={dubaiVehicle[1].link}
                    />
                    </div>
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
    // }
 
  }
};

export default TourResult;
