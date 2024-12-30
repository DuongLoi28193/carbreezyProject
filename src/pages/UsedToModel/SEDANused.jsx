import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGasPump, faCogs, faCalendarAlt, faTags, faCar } from '@fortawesome/free-solid-svg-icons';
import Footer from "../Footer";

function SEDANused() {
    const cars =
        [
            {
                "id": "40",
                "brand": "HONDA",
                "name": "Honda City L 1.5L i-VTEC Premium Sedan 2023",
                "model": "SEDAN",
                "price": 12520,
                "newcarPrice": 20500,
                "seats": "5 seats",
                "fuel": "Gasoline",
                "transmission": "CVT",
                "height": "1467 mm",
                "width": "1748 mm",
                "length": "4580 mm",
                "color": "Green",
                "imgSrc": process.env.PUBLIC_URL + "/img/honda06.jpg",
                "year": 2023,
                "power": "90 kW",
                "newPrice": 9630,
                "desc": "The Honda City L 1.5L i-VTEC Premium Sedan 2023 offers a blend of style and performance with a 1.5L i-VTEC engine producing 121 horsepower. Its sleek design features LED headlights and 16-inch alloy wheels. The spacious, premium interior includes advanced infotainment and comfortable seating for five. With safety features like lane-keeping assist, dual airbags, and a rearview camera, the Honda City L is a reliable and well-equipped sedan for those seeking comfort and performance."
            },
            {
                "id": "45",
                "brand": "TESLA",
                "name": "Tesla Model 3 Long Range Dual Motor AWD 2022",
                "model": "SEDAN",
                "price": 28000,
                "newcarPrice": 45000,
                "seats": "5 seats",
                "fuel": "Electric",
                "transmission": "Automatic",
                "height": "1443 mm",
                "width": "1933 mm",
                "length": "4694 mm",
                "color": "White",
                "imgSrc": process.env.PUBLIC_URL + "/img/tesla06.jpg",
                "year": 2021,
                "power": "283 kW",
                "newPrice": 25000,
                "desc": "The Tesla Model 3 Long Range Dual Motor AWD 2022 offers impressive performance with dual motors and all-wheel drive. It features a sleek design, advanced autopilot, and a long electric range. With cutting-edge technology and a minimalist interior, the Model 3 provides a high-performance, eco-friendly driving experience."
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

            {/* result bar */}
            <div className="bar-results" style={{ marginBottom: "25px" }}>
                <p className='num-results'>2 results</p>
            </div>

            {/* search brand-model */}
            <div className="container_brand-model__search">
                <div className="brands_search">
                    <span className='title-search'>Brands:</span>
                    <div className='box-brand_item'>
                        <Link to="/used-car/honda">HONDA</Link>
                        <span className='line-vertical'>|</span>
                        <Link to="/used-car/kia">KIA</Link>
                        <span className='line-vertical'>|</span>
                        <Link to="/used-car/tesla">TESLA</Link>
                        <span className='line-vertical'>|</span>
                        <Link to="/used-car/ferrari">FERRARI</Link>
                        <span className='line-vertical'>|</span>
                        <Link to="/used-car/ford">FORD</Link>
                        <span className='line-vertical'>|</span>
                        <Link to="/used-car/mazda">Mazda</Link>
                    </div>
                </div>

                <div className="brands_search">
                    <span className='title-search'>Model:</span>
                    <div className='box-brand_item'>
                        <Link to="/used-car/CUV">CUV</Link>
                        <span className='line-vertical'>|</span>
                        <Link to="/used-car/SUV">SUV</Link>
                        <span className='line-vertical'>|</span>
                        <Link to="/used-car/MPV">MPV</Link>
                        <span className='line-vertical'>|</span>
                        <Link style={{ color: "#BD1919", fontWeight: "bold", textDecoration: "underline" }} to="/used-car">SEDAN</Link>
                        <span className='line-vertical'>|</span>
                        <Link to="/used-car/PICKUP">PICKUP</Link>
                        <span className='line-vertical'>|</span>
                        <Link to="/used-car/SUPPER-CAR">SUPPER CAR</Link>
                    </div>
                </div>
            </div>

            {/* show usedCar - All */}
            <div className="car-menu" >
                <div className="car-grid center-temp">
                    {cars.map((car) => (
                        <div onClick={() => nav(`/used-car/SEDAN/${car.id}`)} className="car-item_menu" key={car.id}>
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
                                        <div className='box-extra_icon-price' style={{ textDecoration: "line-through" }}>
                                            <FontAwesomeIcon className='iconTags' icon={faTags} />{car.price}$ (Price with DPH)
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
        </div >
    );
}

export default SEDANused;