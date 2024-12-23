import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump, faCogs, faCalendarAlt, faTags, faCar } from '@fortawesome/free-solid-svg-icons';

const carData = [
  {
    id: "01",
    brand: "Ford",
    name: "Ford Everest Sport 2.0L AT 4x2 2021",
    model: "SUV",
    price: 39000,
    seats: "7 seats",
    fuel: "Diesel",
    transmission: "10AT",
    height: "1837 mm",
    width: "1860 mm",
    length: "4892 mm",
    color: "Black",
    imgSrc: [process.env.PUBLIC_URL + "/img/ford01.jpg"],
    year: 2021,
    power: "158 kW",
    priceWithout: 35000
  },
  {
    id: "07",
    brand: "HONDA",
    name: "Honda City L 1.5L CVT 4x2 2023",
    model: "SEDAN",
    price: 20500,
    seats: "5 seats",
    fuel: "Gasoline",
    transmission: "CVT",
    height: "1467 mm",
    width: "1748 mm",
    length: "4580 mm",
    color: "Green",
    imgSrc: [process.env.PUBLIC_URL + "/img/honda06.jpg"],
    year: 2023,
    power: "90 kW",
    priceWithout: 18500
  },
  {
    id: "11",
    brand: "KIA",
    name: "Kia Carens 1.4T SIGNATURE 2023",
    model: "SUV",
    price: 30000,
    seats: "7 seats",
    fuel: "Gasoline",
    transmission: "7DCT",
    height: "1750 mm",
    width: "1800 mm",
    length: "4540 mm",
    color: "White",
    imgSrc: [process.env.PUBLIC_URL + "/img/kia02.jpg"],
    year: 2023,
    power: "104 kW",
    priceWithout: 28099
  },
  {
    id: "16",
    brand: "MAZDA",
    name: "Mazda 3 1.5L Luxury AT 4x2 2022",
    model: "SEDAN",
    price: 20000,
    seats: "5 seats",
    fuel: "Gasoline",
    transmission: "Automatic",
    height: "1440 mm",
    width: "1795 mm",
    length: "4660 mm",
    color: "Red",
    imgSrc: [process.env.PUBLIC_URL + "/img/mazda02.jpg"],
    year: 2022,
    power: "82 kW",
    priceWithout: 18000
  },
  {
    id: "21",
    brand: "TESLA",
    name: "Tesla Cybertruck Dual Motor AWD Electric 2024",
    model: "PICKUP",
    price: 60000,
    seats: "5 seats",
    fuel: "Electric",
    transmission: "Automatic",
    height: "1900 mm",
    width: "2030 mm",
    length: "5890 mm",
    color: "Iron",
    imgSrc: [process.env.PUBLIC_URL + "/img/tesla05.jpg"],
    year: 2022,
    power: "596 kW",
    priceWithout: 55000
  },
  {
    id: "26",
    brand: "FERRARI",
    name: "Ferrari Roma Spider 3.9L V8 Twin-Turbo RWD 2024",
    model: "SUPERCAR",
    price: 230000,
    seats: "2 seats",
    fuel: "Gasoline",
    transmission: "8DCT",
    height: "1300 mm",
    width: "1920 mm",
    length: "4700 mm",
    color: "Silver",
    imgSrc: [process.env.PUBLIC_URL + "/img/ferrari01.jpg"],
    year: 2022,
    power: "450 kW",
    priceWithout: 20999
  }
];


const CarMenu = () => {

  const nav = useNavigate();

  return (
    <div className="car-menu">
      <div className="car-grid">
        {carData.map((car) => (
          <div onClick={() => nav(`/newCar/${car.id}`)} className="car-item_menu" key={car.id}>
            <img
              src={car.imgSrc[0]}
              alt={car.name}
              className="car-image_menu"
            />
            <div className="container_carMenu-infor ">
              <p className="nameCar_menu">{car.name}</p>
              <div className='box-priceCar_menu' style={{ minHeight: "23%" }}>
                <span className="newPriceCar_menu">
                  {car.price}$
                </span>
                <span style={{ fontSize: "22px", color: "#555", fontWeight: "400" }} className="priceCar_menu">
                  <div className='box-extra_icon-price'>
                    <FontAwesomeIcon className='iconTags' icon={faTags} />{car.priceWithout}$ (Price without DPH)
                  </div>
                </span>
              </div>
              <div className="carMenu-infor-detail">
                <div className="carMenu-infor-item">
                  <p style={{ paddingLeft: "20px", paddingTop: "5px", paddingBottom: "5px" }}>
                    <strong><FontAwesomeIcon icon={faCalendarAlt} className="icon-menu" /></strong> <span style={{ paddingLeft: "3px" }}>{car.year}</span>
                  </p>
                </div>
                <div className="carMenu-infor-item">
                  <p style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px" }}>
                    <strong><FontAwesomeIcon icon={faCar} className="icon-menu" /></strong>  <span style={{ paddingLeft: "3px" }}>{car.seats}</span>
                  </p>
                </div>
                <div className='boxColor-item_temp'>
                  <div style={{ width: "100px" }} className='boxColor-item'>
                    <div style={{
                      textAlign: "center", display: "flex", justifyContent: "center", gap: "0px", padding: "0 8px", marginTop: "2px"
                    }}>
                      < svg style={{ width: "20px", height: "20px", marginTop: "5px", color: "hsl(220,13%,50%)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                      </svg>
                      <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0", marginLeft: "3px", fontWeight: "500" }}>{car.power}</span>
                    </div>
                  </div>
                </div>
                <div className="carMenu-infor-item">
                  <p style={{ paddingLeft: "15px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px" }}>
                    <strong><FontAwesomeIcon icon={faGasPump} style={{ paddingRight: "4px" }} className="icon-menu" /></strong> {car.fuel}
                  </p>
                </div>
                <div className="carMenu-infor-item">
                  <p style={{ paddingLeft: "15px", marginTop: "0px", paddingTop: "3px", paddingBottom: "3px" }}>
                    <strong><FontAwesomeIcon icon={faCogs} style={{ paddingRight: "3px" }} className="icon-menu" /></strong> <span className="temp_icon">{car.transmission}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default CarMenu;
