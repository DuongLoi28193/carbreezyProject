import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGasPump, faCogs, faCalendarAlt, faTags, faCar } from '@fortawesome/free-solid-svg-icons';
import Footer from "../Footer";

function SUPERCARnew() {
    const cars = [
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
            imgSrc: process.env.PUBLIC_URL + "/img/ferrari01.jpg",
            year: 2022,
            newPrice: 20999,
            power: "450 kW"
        },
        {
            id: "27",
            brand: "FERRARI",
            name: "Ferrari SF90 Stradale Hybrid V8 Performance Coupe 2024",
            model: "SUPERCAR",
            price: 625000,
            seats: "2 seats",
            fuel: "Gasoline",
            transmission: "8DCT",
            height: "1190 mm",
            width: "1980 mm",
            length: "4700 mm",
            color: "Silver",
            imgSrc: process.env.PUBLIC_URL + "/img/ferrari6.jpeg",
            year: 2021,
            newPrice: 55500,
            power: "735 kW"
        },
        {
            id: "28",
            brand: "FERRARI",
            name: "Ferrari Monza SP1 V12 Roadster Limited Edition 2024",
            model: "SUPERCAR",
            price: 1975000,
            seats: "1 seat",
            fuel: "Gasoline",
            transmission: "7DCT",
            height: "1290 mm",
            width: "1940 mm",
            length: "4570 mm",
            color: "Red",
            imgSrc: process.env.PUBLIC_URL + "/img/ferrari11.jpg",
            year: 2020,
            newPrice: 1890000,
            power: "602 kW"
        },
        {
            id: "29",
            brand: "FERRARI",
            name: "Ferrari Daytona SP3 V12 Icona Limited Edition 2023",
            model: "SUPERCAR",
            price: 2200000,
            seats: "2 seats",
            fuel: "Gasoline",
            transmission: "7DCT",
            height: "1180 mm",
            width: "1980 mm",
            length: "4540 mm",
            color: "Blue",
            imgSrc: process.env.PUBLIC_URL + "/img/ferrari17.jpg",
            year: 2019,
            newPrice: 2000000,
            power: "618 kW"
        },
        {
            id: "30",
            brand: "FERRARI",
            name: "Ferrari 296 GTB V6 Hybrid Performance Coupe 2023",
            model: "SUPERCAR",
            price: 315000,
            seats: "2 seats",
            fuel: "Gasoline",
            transmission: "8DCT",
            height: "1215 mm",
            width: "1950 mm",
            length: "4650 mm",
            color: "Red",
            imgSrc: process.env.PUBLIC_URL + "/img/ferrari25.jpg",
            year: 2020,
            newPrice: 27600,
            power: "610 kW"
        },
        {
            id: "35",
            brand: "FERRARI",
            name: "Ferrari 488 GTB V8 Performance Coupe",
            model: "SUPERCAR",
            price: 249150,
            seats: "2 seats",
            fuel: "Gasoline",
            transmission: "7DCT",
            height: "1211 mm",
            width: "1953 mm",
            length: "4566 mm",
            color: "Red",
            imgSrc: process.env.PUBLIC_URL + "/img/ferrari30.jpg",
            year: 2016,
            newPrice: 2329500,
            power: "492 kW"
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
            <div className="bar-results">
                <p className='num-results'>6 results</p>
            </div>

            {/* search bar */}
            <div style={{ marginTop: "25px", marginBottom: "20px" }} className="container_searchToBrand">
                <FontAwesomeIcon icon={faSearch} className="icon-searchBar" />
                <input type="text" placeholder="Search..." />
                <button>Search</button>
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
                        <Link to="/newCar/SEDAN">SEDAN</Link>
                        <span className='line-vertical'>|</span>
                        <Link to="/newCar/PICKUP">PICKUP</Link>
                        <span className='line-vertical'>|</span>
                        <Link style={{ color: "#BD1919", fontWeight: "bold", textDecoration: "underline" }} to="/newCar">SUPPER CAR</Link>
                    </div>
                </div>
            </div>

            {/* show usedCar - All */}
            <div className="car-menu" >
                <div className="car-grid">
                    {cars.map((car) => (
                        <div onClick={() => nav(`/newCar/SUPPER-CAR/${car.id}`)} className="car-item_menu" key={car.id}>
                            <img
                                src={car.imgSrc}
                                alt={car.name}
                                className="car-image_menu"
                            />
                            <div className="container_carMenu-infor ">
                                <p className="nameCar_menu">{car.name}</p>
                                <div className='box-priceCar_menu' style={{ minHeight: "23%" }}>
                                    <span className="newPriceCar_menu">
                                        {car.newPrice}$
                                    </span>
                                    <span style={{ fontSize: "22px", color: "#555", fontWeight: "400" }} className="priceCar_menu">
                                        <div className='box-extra_icon-price'>
                                            <FontAwesomeIcon className='iconTags' icon={faTags} />{car.price}$ (Price without DPH)
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

export default SUPERCARnew;