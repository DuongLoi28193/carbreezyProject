import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump, faCogs, faCalendarAlt, faTags, faCar } from '@fortawesome/free-solid-svg-icons';
import BrandsCarousel from "../CarouselBrands";
import Footer from "../Footer";


const FORDnew = () => {
  const cars = [
    {
      id: "01",
      name: "Ford Everest Sport 2.0L AT 4x2 2021",
      price: 39000,
      fuel: "Diesel",
      seats: "7 seats",
      year: 2021,
      transmission: "10AT",
      imgSrc: "../img/ford01.jpg",
      priceWithout: 37500,
      power: "132 kW"
    },
    {
      id: "02",
      name: "Ford Everest Titanium 2.0L Automatic 4x2 Luxury SUV 2021",
      price: 39500,
      fuel: "Diesel",
      seats: 7,
      year: 2021,
      transmission: "10AT",
      imgSrc: "../img/ford07.jpg",
      priceWithout: 36000,
      power: "154 kW"
    },
    {
      id: "03",
      name: "Ford Everest Sport 2.0L Automatic 4x2 SUV 2021",
      price: 39000,
      fuel: "Diesel",
      seats: "7 seats",
      year: 2021,
      transmission: "10AT",
      imgSrc: "../img/ford11.jpg",
      priceWithout: 34900,
      power: "154 kW"
    },
    {
      id: "04",
      name: "Ford Ranger XLS 2.2L Automatic 4x2 Pickup 2020",
      price: 23520,
      fuel: "Diesel",
      seats: 7,
      year: 2020,
      transmission: "10AT",
      imgSrc: "../img/ford20.jpg",
      priceWithout: 20000,
      power: "118 kW"
    },
    {
      id: "05",
      name: "Ford Territory Titanium 1.5L Automatic SUV 2023",
      price: 34800,
      fuel: "Gasoline",
      seats: 5,
      year: 2023,
      transmission: "7AT",
      imgSrc: "../img/ford21.jpg",
      priceWithout: 31333,
      power: "120 kW"
    },
    {
      id: "31",
      brand: "FORD",
      name: "Ford Ranger XLS 2.2L 4x2 Diesel Double Cab 2019",
      model: "PICKUP",
      price: 25000,
      seats: "5 seats",
      fuel: "Diesel",
      transmission: "6AT",
      height: "1830 mm",
      width: "1860 mm",
      length: "5362 mm",
      color: "White",
      imgSrc: "../img/ford26.jpg",
      year: 2019,
      priceWithout: 22300,
      power: "118 kW"
    },
    {
      id: 37,
      brand: "FORD",
      name: "Ford Tourneo Premium Executive Edition MPV",
      model: "MPV",
      price: 45000,
      seats: 7,
      fuel: "Gasoline",
      transmission: "Automatic",
      height: "1990 mm",
      width: "2095 mm",
      length: "4976 mm",
      color: "White",
      imgSrc: "../img/ford33.jpg",
      year: 2022,
      priceWithout: 412500,
      power: "149 kW"
    }
  ];

  const nav = useNavigate();

  return (
    <div>
      <div style={{ height: "70px" }}></div>

      {/* nav page */}
      <div style={{ marginBottom: "-10px" }} className='nav-page'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-9">
          <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
          <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
        </svg>
        <Link className='a' to="/">
          <span className='content_nav-page not'>Home</span>
        </Link>
        <svg className='chevron-right' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
          <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
        </svg>
        <span className='content_nav-page'>Purchase a pre-owned car</span>
      </div>

      {/* carousel logo */}
      <div style={{ marginTop: "20px" }}>
        <BrandsCarousel />
      </div>

      {/* result bar */}
      <div className="bar-results" style={{marginBottom: "30px"}}>
        <p className='num-results'>7 results</p>
      </div>

      {/*show used car - CUV  */}
      <div className="car-menu" >
        <div className="car-grid center-temp">
          {cars.map((car) => (
            <div onClick={() => nav(`/ford/${car.id}`)} className="car-item_menu" key={car.id}>
              <img
                src={car.imgSrc}
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
                    <p style={{ paddingLeft: "15px", marginTop: "0px" }}>
                      <strong><FontAwesomeIcon icon={faCogs} style={{ paddingRight: "3px" }} className="icon-menu" /></strong> <span className="temp_icon">{car.transmission}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />

    </div>
  );
};

export default FORDnew;
