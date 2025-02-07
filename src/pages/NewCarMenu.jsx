import { width } from "@mui/system";
import React from "react";

const NewCarMenu = () => {
  const cars = 
  [
    {
        id: "01",
        brand:"Ford",
        name: "Ford Everest Sport 2.0L AT 4x2 2021",
        model: "SUV",
        price: 39000,
        seats: 7,
        fuel: "Diesel",
        transmission:"10-speed automatic",
        height:"1837 mm",
        width: "1860 mm",
        length:"4892 mm",
        color:"Black",
        imgSrc: process.env.PUBLIC_URL + "/img/ford01.jpg", 
        year: 2021        
    },
    {
        id: "02",
        brand:"Ford",
        name: "Ford Everest Titanium 2.0L AT 4x2 2021",
        model: "SUV",
        price: 39500,
        seats: 7,
        fuel: "Diesel",
        transmission:"10-speed automatic",
        height:"1837 mm",
        width: "1860 mm",
        length: "4892 mm",
        color:"Blue",
        imgSrc: process.env.PUBLIC_URL + "/img/ford06.jpg", 
        year: 2021
    },
    {
        id: "03",
        brand:"Ford",
        name: "Ford Everest Sport 2.0L AT 4x2 2021",
        model: "SUV",
        price: 39000,
        seats: 7,
        fuel: "Diesel",
        transmission:"10-speed automatic",
        height:"1837 mm",
        width: "1860 mm",
        length: "4892 mm",
        color:"Blue",
        imgSrc: process.env.PUBLIC_URL + "/img/ford11.jpg", 
        year: 2021
    },
    {
        id: "04",
        brand:"Ford",
        name: "Ford Ranger XLS 2.2L 4x2 AT 2020",
        model: "PICKUP",
        price: 23520,
        seats: 7,
        fuel: "Diesel",
        transmission:"10-speed automatic",
        height:"1830 mm",
        width: "1860 mm",
        length: "5362 mm",
        color: "Black",
        imgSrc: process.env.PUBLIC_URL + "/img/ford16.jpg", 
        year: 2020
    },
    {
        id: "05",
        brand:"Ford",
        name: "Ford Territory Titanium 1.5 AT 2023",
        model: "CUV",
        price: 34800,
        seats: 5,
        fuel: "Gasonline",
        transmission:"7-speed automatic",
        height:"1706 mm",
        width: "1935 mm",
        length: "4630 mm",
        color: "White",
        imgSrc: process.env.PUBLIC_URL + "/img/ford21.jpg", 
        year: 2023
    },
    {
        id: "06",
        brand:"HONDA",
        name: "Honda Brio RS 2021",
        model: "Hatchback",
        price: 16100,
        seats: 5,
        fuel: "Gasoline",
        transmission:"CVT",
        height:"1487 mm",
        width: "1682 mm",
        length: "3817 mm",
        color: "White",
        imgSrc: process.env.PUBLIC_URL + "/img/honda01.jpg", 
        year: 2021
    },
    {
        id: "07",
        brand:"HONDA",
        name: "Honda City L 2023",
        model: "SEDAN",
        price: 20500,
        seats: 5,
        fuel: "Gasoline",
        transmission:"CVT",
        height:"1467 mm",
        width: "1748 mm",
        length: "4580 mm",
        color: "Green",
        imgSrc: process.env.PUBLIC_URL + "/img/honda06.jpg", 
        year: 2023
    },
    {
        id: "08",
        brand:"HONDA",
        name: "Honda Civic E 2021",
        model: "SEDAN",
        price: 26500,
        seats: 5,
        fuel: "Gasoline",
        transmission:"CVT",
        height:"1415 mm",
        width: "1802 mm",
        length: "4678 mm",
        color: "White",
        imgSrc: process.env.PUBLIC_URL + "/img/honda11.jpg", 
        year: 2021
    },
    {
        id: "09",
        brand:"HONDA",
        name: "Honda CR-V 1.5 E 2022",
        model: "CUV",
        price: 31250,
        seats: 7,
        fuel: "Gasoline",
        transmission:"CVT",
        height:"1679 mm",
        width: "1855 mm",
        length: "4584 mm",
        color: "Green",
        imgSrc: process.env.PUBLIC_URL + "/img/honda16.jpg", 
        year: 2022
    },
    {
        id: "10",
        brand:"HONDA",
        name: "Honda CR-V 1.5 G 2019",
        model: "CUV",
        price: 31250,
        seats: 7,
        fuel: "Gasoline",
        transmission:"CVT",
        height: "1679 mm",
        width: "1855 mm",
        length: "4584 mm",
        color: "Green",
        imgSrc: process.env.PUBLIC_URL + "/img/honda21.jpg", 
        year: 2019
    },
    {
        id: "11",
        brand:"KIA",
        name: "Kia Carens 1.4T SIGNATURE 2023",
        model: "SUV",
        price: 30000,
        seats: 7,
        fuel: "Gasoline",
        transmission:"7DCT",
        height:"1750 mm",
        width: "1800 mm",
        length: "4540 mm",
        color: "White",
        imgSrc: process.env.PUBLIC_URL + "/img/kia01.jpg", 
        year: 2023
    },
    {
        id: "12",
        brand:"KIA",
        name: "Kia Carens 1.5G LUXURY 2023",
        model: "SUV",
        price: 30000,
        seats: 7,
        fuel: "Gasoline",
        transmission:"Automatic",
        height:"1750 mm",
        width: "1800 mm",
        length: "4540 mm",
        color: "White",
        imgSrc: process.env.PUBLIC_URL + "/img/kia06.jpg", 
        year: 2023
        
    },
    {
        id: "13",
        brand:"KIA",
        name: "Kia K3 1.6 Premium 2022",
        model: "SEDAN",
        price: 23000,
        seats: 5,
        fuel: "Gasoline",
        transmission:"Automatic",
        height:"1450 mm",
        width: "1800 mm",
        length: "4640 mm",
        color: "Blue",
        imgSrc: process.env.PUBLIC_URL + "/img/kia11.jpg", 
        year: 2022
    },
    {
        id: "14",
        brand:"KIA",
        name: "Kia K3 2.0 Premium 2024",
        model: "SEDAN",
        price: 26000,
        seats: 5,
        fuel: "Gasoline",
        transmission:"Automatic",
        height:"1450 mm",
        width: "1800 mm",
        length: "4640 mm",
        color: "White",
        imgSrc: process.env.PUBLIC_URL + "/img/kia15.jpg", 
        year: 2024
    },
    {
        id: "15",
        brand:"KIA",
        name: "Kia Rondo GAT 2022",
        model: "MPV",
        price: 21666,
        seats: 7,
        fuel: "Gasoline",
        transmission:"Automatic",
        height:"1610 mm",
        width: "1805 mm",
        length: "4525 mm",
        color: "",
        imgSrc: process.env.PUBLIC_URL + "/img/kia21.jpg", 
        year: 2022
    },
    {
        id: "16",
        brand:"MAZDA",
        name: "Mazda 3 1.5 Luxury 2022",
        model: "SEDAN",
        price: 20000,
        seats: 5,
        fuel: "Gasoline",
        transmission:"Automatic",
        height:"1440 mm",
        width: "1795 mm",
        length: "4660 mm",
        color: "Red",
        imgSrc: process.env.PUBLIC_URL + "/img/mazda01.jpg", 
        year: 2022
    },
    {
        id: "17",
        brand:"MAZDA",
        name: "Mazda 3 1.5 Premium Sport 2020",
        model: "HATCHBACK",
        price: 24000,
        seats: 5,
        fuel: "Gasoline",
        transmission:"Automatic",
        height:"1445 mm",
        width: "1795 mm",
        length: "4465 mm",
        color: "White",
        imgSrc: process.env.PUBLIC_URL + "/img/mazda06.jpg", 
        year: 2020 
    },
    {
        id: "18",
        brand:"MAZDA",
        name: "Mazda 3 15G AT HB FL 2019",
        model: "HATCHBACK",
        price: 20400,
        seats: 5,
        fuel: "Gasoline",
        transmission:"Automatic",
        height:"1540 mm",
        width: "1795 mm",
        length: "4580 mm",
        color: "White",
        imgSrc: process.env.PUBLIC_URL + "/img/mazda11.jpg", 
        year: 2019
    },
    {
        id: "19",
        brand:"MAZDA",
        name: "Mazda 6 2.0 Premium 2019",
        model: "SEDAN",
        price: 24000,
        seats: 5,
        fuel: "Gasoline",
        transmission:"Automatic",
        height:"1450 mm",
        width: "1840 mm",
        length: "4865 mm",
        color: "White",
        imgSrc: process.env.PUBLIC_URL + "/img/mazda16.jpg", 
        year: 2019
    },
    {
        id: "20",
        brand:"MAZDA",
        name: "Mazda CX-5 2.0L Premium 2022",
        model: "SUV",
        price: 32000,
        seats: 5,
        fuel: "Gasoline",
        transmission:"Automatic",
        height:"1680 mm",
        width: "1840 mm",
        length: "4550 mm",
        color: "Red",
        imgSrc: process.env.PUBLIC_URL + "/img/mazda21.jpg", 
        year: 2022
    },
    {
        id: "21",
        brand:"TESLA",
        name: "Tesla Cybertruck",
        model: "PICKUP",
        price: 60000,
        seats: 5,
        fuel: "Electric",
        transmission:"Automatic",
        height:"1900 mm",
        width: "2030 mm",
        length: "5890 mm",
        color: "Iron",
        imgSrc: process.env.PUBLIC_URL + "/img/tesla01.jpg", 
        year: 2022
    },
    {
        id: "22",
        brand:"TESLA",
        name: "Tesla Model 3",
        model: "SEDAN",
        price: 45000,
        seats: 5,
        fuel: "Electric",
        transmission:"Automatic",
        height:"1443 mm",
        width: "1933 mm",
        length: "4694 mm",
        color: "White",
        imgSrc: process.env.PUBLIC_URL + "/img/tesla06.jpg", 
        year: 2021
    },
    
    {
        id: "23",
        brand:"TESLA",
        name: "Tesla Model 3 Long Range",
        model: "SEDAN",
        price: 55000,
        seats: 5,
        fuel: "Electric",
        transmission:"Automatic",
        height:"1443 mm",
        width: "1933 mm",
        length: "4694 mm",
        color: "Black",
        imgSrc: process.env.PUBLIC_URL + "/img/tesla11.jpg", 
        year: 2020
    },
    {
        id: "24",
        brand:"TESLA",
        name: "Tesla Model S",
        model: "SEDAN",
        price: 90000,
        seats: 5,
        fuel: "Electric",
        transmission:"Automatic",
        height:"1440 mm",
        width: "1964 mm",
        length: "4970 mm",
        color: "Red",
        imgSrc: process.env.PUBLIC_URL + "/img/tesla16.jpg", 
        year: 2022
    },
    {
        id: "25",
        brand:"TESLA",
        name: "Tesla Model X",
        model: "SEDAN",
        price: 95000,
        seats: 7,
        fuel: "Electric",
        transmission:"Automatic",
        height:"1680 mm",
        width: "1990 mm",
        length: "5070 mm",
        color: "White",
        imgSrc: process.env.PUBLIC_URL + "/img/tesla21.jpg",  
        year: 2021
    },
    {
        id: "26",
        brand:"FERRARI",
        name: "Ferrari Roma Spider",
        model: "SUPERCAR",
        price: 230000,
        seats: 2,
        fuel: "Gasoline",
        transmission:"8-speed dual-clutch",
        height:"1300 mm",
        width: "1920 mm",
        length: "4700 mm",
        color: "Silver",
        imgSrc: process.env.PUBLIC_URL + "/img/ferrari01.jpg", 
        year: 2022
    },
    {
        id: "27",
        brand:"FERRARI",
        name: "Ferrari SF90 Stradale",
        model: "SUPERCAR",
        price: 625000,
        seats: 2,
        fuel: "Gasoline",
        transmission:"8-speed Dual-Clutch",
        height:"1190 mm",
        width: "1980 mm",
        length: "4700 mm",
        color: "Silver",
        imgSrc: process.env.PUBLIC_URL + "/img/ferrari06.jpg", 
        year: 2021
    },
    {
        id: "28",
        brand:"FERRARI",
        name: "Ferrari Monza SP1",
        model: "SUPERCAR",
        price: 1975000,
        seats: 1,
        fuel: "Gasoline",
        transmission:"7-speed Dual-Clutch",
        height:"1290 mm",
        width: "1940 mm",
        length: "4570 mm",
        color: "Red",
        imgSrc: process.env.PUBLIC_URL + "/img/ferrari11.jpg", 
        year: 2020
    },
    {
        id: "29",
        brand:"FERRARI",
        name: "Ferrari Daytona SP3",
        model: "SUPERCAR",
        price: 2200000,
        seats: 2,
        fuel: "Gasoline",
        transmission:"7-speed Dual-Clutch",
        height:"1180 mm",
        width: "1980 mm",
        length: "4540 mm",
        color: "Blue",
        imgSrc: process.env.PUBLIC_URL + "/img/ferrari16.jpg",
        year: 2019
    },
    {
        id: "30",
        brand:"FERRARI",
        name: "FERRARI_296_GTB",
        model: "SUPERCAR",
        price: 315000,
        seats: 2,
        fuel: "Gasoline",
        transmission:"8-speed Dual-clutch=",
        height:"1215 mm",
        width: "1950 mm",
        length: "4650 mm",
        color: "Red",
        imgSrc: process.env.PUBLIC_URL + "/img/ferrari121.jpg", 
        year: 2020
    },
    {
        id: "31",
        brand:"FORD",
        name: "Ford Ranger XLS 2.2L 4x2 AT 2019",
        model: "PICKUP",
        price: 25.000,
        seats: 5,
        fuel: "Diesel",
        transmission:"6 speed Automatic",
        height:"1830 mm",
        width: "1860 mm",
        length: "5362 mm",
        color: "White",
       imgSrc: process.env.PUBLIC_URL + "/img/ford26.jpg", 
        year: 2019
    },
    {
        id: "32",
        brand:"KIA",
        name: "Kia Sonet 1.5 Premium 2022",
        model: "SUV",
        price: 15000,
        seats: 5,
        fuel: "Gasoline",
        transmission:"CVT",
        height:"1642 mm",
        width: "1790 mm",
        length: "4120 mm",
        color: "Red",
       imgSrc: process.env.PUBLIC_URL + "/img/kia26.jpg", 
        year: 2022
    },
    {
        id: "33",
        brand:"HONDA",
        name: "Honda City RS 2021",
        model: "SEDAN",
        price: 20000,
        seats: 5,
        fuel: "Gasoline",
        transmission:"CVT",
        height:"1467 mm",
        width: "1748 mm",
        length: "4553 mm",
        color: "Red",
       imgSrc: process.env.PUBLIC_URL + "/img/honda26.jpg", 
        year: 2021
    },
    {
        id: "34",
        brand:"MAZDA",
        name: "Mazda CX-5 2.0 AT 2016",
        model: "CUV",
        price: 32150,
        seats: 5,
        fuel: "Gasoline",
        transmission:"6-speed Automatic",
        height:"1680 mm",
        width: "1840 mm",
        length: "4555 mm",
        color: "Black",
       imgSrc: process.env.PUBLIC_URL + "/img/mazda26.jpg", 
        year: 2016
    },
    {
        id: "35",
        brand:"FERRARI",
        name: "Ferrari 488",
        model: "SUPERCAR",
        price: 249.150,
        seats: 2,
        fuel: "Gasoline",
        transmission:"7-speed Dual-clutch",
        height:"1211 mm",
        width: "1953 mm",
        length: "4566 mm",
        color: "Red",
       imgSrc: process.env.PUBLIC_URL + "/img/ferrari26.jpg", 
        year: 2016
    }
];

  return (
    <div className="car-list">
      {cars.map((car) => (
        <div className="car-card" key={car.id}>
          <img src={car.imgSrc} alt={car.name} className="car-image" />
          <div className="car-info">
            <h2 className="car-name">{car.name}</h2>
            <p>
              <strong>Price:</strong> {car.price}
            </p>
            <p>
              <strong>Fuel:</strong> {car.fuel}
            </p>
            <p>
              <strong>Seats:</strong> {car.seats}
            </p>
            <p>
              <strong>Year:</strong> {car.year}
            </p>
            <p>
              <strong>Transmission:</strong> {car.transmission}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewCarMenu;
