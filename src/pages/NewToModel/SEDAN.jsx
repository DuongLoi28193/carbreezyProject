import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGasPump, faCogs, faCalendarAlt, faTags, faCar } from '@fortawesome/free-solid-svg-icons';
import Footer from "../Footer";


function SEDANnew() {
    const cars = [
        {
            id: "07",
            brand: "HONDA",
            name: "Honda City L 1.5L Premium Edition 2023",
            model: "SEDAN",
            price: 20500,
            seats: "5 seats",
            fuel: "Gasoline",
            transmission: "CVT",
            height: "1467 mm",
            width: "1748 mm",
            length: "4580 mm",
            color: "Green",
            imgSrc: process.env.PUBLIC_URL + "/img/honda06.jpg",
            year: 2023,
            newPrice: 17888,
            power: "89 kW"
        },
        {
            id: "08",
            brand: "HONDA",
            name: "Honda Civic E 1.8L Premium Edition 2021",
            model: "SEDAN",
            price: 26500,
            seats: "5 seats",
            fuel: "Gasoline",
            transmission: "CVT",
            height: "1415 mm",
            width: "1802 mm",
            length: "4678 mm",
            color: "White",
            imgSrc: process.env.PUBLIC_URL + "/img/honda11.jpg",
            year: 2021,
            newPrice: 22500,
            power: "141 kW"
        },
        {
            id: "13",
            brand: "KIA",
            name: "Kia K3 1.6L Premium Edition Automatic Sedan 2022",
            model: "SEDAN",
            price: 23000,
            seats: "5 seats",
            fuel: "Gasoline",
            transmission: "Automatic",
            height: "1450 mm",
            width: "1800 mm",
            length: "4640 mm",
            color: "Blue",
            imgSrc: process.env.PUBLIC_URL + "/img/kia12.jpg",
            year: 2022,
            newPrice: 20000,
            power: "123 kW"
        },
        {
            id: "14",
            brand: "KIA",
            name: "Kia K3 2.0L Premium Edition Automatic Sedan 2024",
            model: "SEDAN",
            price: 26000,
            seats: "5 seats",
            fuel: "Gasoline",
            transmission: "Automatic",
            height: "1450 mm",
            width: "1800 mm",
            length: "4640 mm",
            color: "White",
            imgSrc: process.env.PUBLIC_URL + "/img/kia20.jpg",
            year: 2024,
            newPrice: 23350,
            power: "116 kW"
        },
        {
            id: "16",
            brand: "MAZDA",
            name: "Mazda 3 1.5L Luxury Automatic Sedan 2022",
            model: "SEDAN",
            price: 20000,
            seats: "5 seats",
            fuel: "Gasoline",
            transmission: "Automatic",
            height: "1440 mm",
            width: "1795 mm",
            length: "4660 mm",
            color: "Red",
            imgSrc: process.env.PUBLIC_URL + "/img/mazda02.jpg",
            year: 2022,
            newPrice: "16885",
            power: "89 kW"
        },
        {
            id: "19",
            brand: "MAZDA",
            name: "Mazda 6 2.0L Premium Edition Automatic Sedan 2019",
            model: "SEDAN",
            price: 24000,
            seats: "5 seats",
            fuel: "Gasoline",
            transmission: "Automatic",
            height: "1450 mm",
            width: "1840 mm",
            length: "4865 mm",
            color: "White",
            imgSrc: process.env.PUBLIC_URL + "/img/mazda16.jpg",
            year: 2019,
            newPrice: 22000,
            power: "118 kW"
        },
        {
            id: "22",
            brand: "TESLA",
            name: "Tesla Model 3 Long Range AWD Electric Sedan",
            model: "SEDAN",
            price: 45000,
            seats: "5 seats",
            fuel: "Electric",
            transmission: "Automatic",
            height: "1443 mm",
            width: "1933 mm",
            length: "4694 mm",
            color: "White",
            imgSrc: process.env.PUBLIC_URL + "/img/tesla06.jpg",
            year: 2021,
            newPrice: "40000",
            power: "283 kW"
        },

        {
            id: "23",
            brand: "TESLA",
            name: "Tesla Model 3 Long Range AWD Electric Luxury Sedan",
            model: "SEDAN",
            price: 55000,
            seats: "5 seats",
            fuel: "Electric",
            transmission: "Automatic",
            height: "1443 mm",
            width: "1933 mm",
            length: "4694 mm",
            color: "Black",
            imgSrc: process.env.PUBLIC_URL + "/img/tesla11.jpg",
            year: 2020,
            newPrice: "48955",
            power: "283 kW"
        },
        {
            id: "24",
            brand: "TESLA",
            name: "Tesla Model S Long Range AWD Electric Luxury Sedan",
            model: "SEDAN",
            price: 90000,
            seats: "5 seats",
            fuel: "Electric",
            transmission: "Automatic",
            height: "1440 mm",
            width: "1964 mm",
            length: "4970 mm",
            color: "Red",
            imgSrc: process.env.PUBLIC_URL + "/img/tesla16.jpg",
            year: 2022,
            newPrice: 75800,
            power: "393 kW"
        },
        {
            id: "25",
            brand: "TESLA",
            name: "Tesla Model X Long Range AWD Electric Luxury SUV",
            model: "SEDAN",
            price: 95000,
            seats: "7 seats",
            fuel: "Electric",
            transmission: "Automatic",
            height: "1680 mm",
            width: "1990 mm",
            length: "5070 mm",
            color: "White",
            imgSrc: process.env.PUBLIC_URL + "/img/tesla22.jpg",
            year: 2021,
            newPrice: 88000,
            power: "371 kW"
        },
        {
            id: "33",
            brand: "HONDA",
            name: "Honda City RS 1.5L CVT Premium Edition 2021",
            model: "SEDAN",
            price: 20000,
            seats: "5 seats",
            fuel: "Gasoline",
            transmission: "CVT",
            height: "1467 mm",
            width: "1748 mm",
            length: "4553 mm",
            color: "Red",
            imgSrc: process.env.PUBLIC_URL + "/img/honda26.jpg",
            year: 2021,
            newPrice: 18499,
            power: "121 kW"
        }
    ]

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

            {/* result bar */}
            <div className="bar-results" style={{ marginBottom: "25px" }}>
                <p className='num-results'>11 results</p>
            </div>

            <div className="container_brand-model__search">
                <div className="brands_search">
                    <span className='title-search'>Brands:</span>
                    <div className='box-brand_item'>
                        <Link to="/newCar/honda">HONDA</Link>
                        <span className='line-vertical'>|</span>
                        <Link to="/newCar/kia">KIA</Link>
                        <span className='line-vertical'>|</span>
                        <Link to="/newCar/tesla">TESLA</Link>
                        <span className='line-vertical'>|</span>
                        <Link to="/newCar/ferrari">FERRARI</Link>
                        <span className='line-vertical'>|</span>
                        <Link to="/newCar/ford">FORD</Link>
                        <span className='line-vertical'>|</span>
                        <Link to="/newCar/mazda">Mazda</Link>
                    </div>
                </div>

                <div className="brands_search">
                    <span className='title-search'>Model:</span>
                    <div className='box-brand_item'>
                        <Link to="/newCar/CUV">CUV</Link>
                        <span className='line-vertical'>|</span>
                        <Link to="/newCar/SUV">SUV</Link>
                        <span className='line-vertical'>|</span>
                        <Link to="/newCar/MPV">MPV</Link>
                        <span className='line-vertical'>|</span>
                        <Link style={{ color: "#BD1919", fontWeight: "bold", textDecoration: "underline" }} to="/newCar">SEDAN</Link>
                        <span className='line-vertical'>|</span>
                        <Link to="/newCar/PICKUP">PICKUP</Link>
                        <span className='line-vertical'>|</span>
                        <Link to="/newCar/SUPPER-CAR">SUPPER CAR</Link>
                    </div>
                </div>
            </div>

            {/* show usedCar - All */}
            <div className="car-menu" >
                <div className="car-grid center-temp">
                    {cars.map((car) => (
                        <div onClick={() => nav(`/newCar/SEDAN/${car.id}`)} className="car-item_menu" key={car.id}>
                            <img
                                src={car.imgSrc}
                                alt={car.name}
                                className="car-image_menu"
                            />
                            <div className="container_carMenu-infor ">
                                <p className="nameCar_menu">{car.name}</p>
                                <div className='box-priceCar_menu' style={{ minHeight: "23%" }}>
                                    <span className="newPriceCar_menu">
                                        ${car.newPrice}
                                    </span>
                                    <span style={{ fontSize: "22px", color: "#555", fontWeight: "400" }} className="priceCar_menu">
                                        <div className='box-extra_icon-price'>
                                            <FontAwesomeIcon className='iconTags' icon={faTags} />${car.price} (Price without DPH)
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
}

export default SEDANnew;