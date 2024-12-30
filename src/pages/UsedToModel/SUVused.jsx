import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGasPump, faCogs, faCalendarAlt, faTags, faCar } from '@fortawesome/free-solid-svg-icons';
import Footer from "../Footer";

function SUVused() {
    const cars =
        [
            {
                "id": "36",
                "brand": "Ford",
                "name": "Ford Everest Sport 2.0L Turbo  4x2 Automatic 2021",
                "model": "SUV",
                "price": 25000,
                "newcarPrice": 39000,
                "seats": "7 seats",
                "fuel": "Diesel",
                "transmission": "10AT",
                "height": "1837 mm",
                "width": "1860 mm",
                "length": "4892 mm",
                "color": "Black",
                "imgSrc": process.env.PUBLIC_URL + "/img/ford01.jpg",
                "year": 2021,
                "power": "158 kW",
                "newPrice": 20000,
                "desc": "The Ford Everest Sport 2.0L Turbo 4x2 Automatic 2021 is a powerful and stylish SUV featuring a 2.0L Turbocharged diesel engine that delivers 180 horsepower and 420 Nm of torque. It offers a smooth driving experience with a 10-speed automatic transmission, ideal for both city and highway driving. The vehicle's bold exterior includes a black grille, LED headlights, and 20-inch alloy wheels, while the interior provides comfort with premium leather seats, a spacious seven-seater layout, and advanced tech features. Safety is enhanced with features like Autonomous Emergency Braking and Lane-Keeping Assist, making it a versatile and reliable choice for any journey"
            },
            {
                "id": "37",
                "brand": "Ford",
                "name": "Ford Everest Titanium 2.0L Turbo 4x2 Automatic 2021",
                "model": "SUV",
                "price": 26000,
                "newcarPrice": 39500,
                "seats": "7 seats",
                "fuel": "Diesel",
                "transmission": "10AT",
                "height": "1837 mm",
                "width": "1860 mm",
                "length": "4892 mm",
                "color": "Blue",
                "imgSrc": process.env.PUBLIC_URL + "/img/ford07.jpg",
                "year": 2021,
                "power": "158 kW",
                "newPrice": 22880,
                "desc": "The Ford Everest Titanium 2.0L Turbo 4x2 Automatic 2021 is a powerful and luxurious SUV, featuring a 2.0L Turbocharged diesel engine with 180 horsepower and 420 Nm of torque. It comes with a 10-speed automatic transmission for smooth performance and fuel efficiency. The SUV boasts a sleek exterior with a bold grille and 20-inch alloy wheels, while the interior offers leather upholstery and spacious seating for seven. Equipped with advanced safety features like Adaptive Cruise Control and Lane-Keeping Assist, the Everest Titanium is a well-rounded choice for those seeking performance, luxury, and safety."
            },
            {
                "id": "41",
                "brand": "KIA",
                "name": "Kia Carens Signature 1.4L T-GDi Premium MPV 2023",
                "model": "SUV",
                "price": 22000,
                "newcarPrice": 30000,
                "seats": "7 seats",
                "fuel": "Gasoline",
                "transmission": "7DCT",
                "height": "1750 mm",
                "width": "1800 mm",
                "length": "4540 mm",
                "color": "White",
                "imgSrc": process.env.PUBLIC_URL + "/img/kia02.jpg",
                "year": 2023,
                "power": "104 kW",
                "newPrice": 20545,
                "desc": "The Kia Carens Signature 1.4L T-GDi Premium MPV 2023 is a versatile and stylish family vehicle powered by a 1.4L turbocharged engine. It offers a premium design with LED headlights and alloy wheels. Inside, it features a spacious cabin with advanced infotainment and comfortable seating for seven. Safety features include multiple airbags, rear parking sensors, and driver assistance systems, making it an ideal choice for families seeking performance, comfort, and reliability."
            },
            {
                "id": "44",
                "brand": "MAZDA",
                "name": "Mazda CX-5 2.0L SkyActiv-G Premium Compact SUV 2022",
                "model": "SUV",
                "price": 21000,
                "newcarPrice": 32000,
                "seats": "5 seats",
                "fuel": "Gasoline",
                "transmission": "Automatic",
                "height": "1680 mm",
                "width": "1840 mm",
                "length": "4550 mm",
                "color": "Red",
                "imgSrc": process.env.PUBLIC_URL + "/img/mazda22.jpg",
                "year": 2022,
                "power": "121 kW",
                "newPrice": 17859,
                "desc": "The Mazda CX-5 2.0L SkyActiv-G Premium Compact SUV 2022 combines performance and style with its 2.0L engine and SkyActiv-G technology. It features a sleek design, premium interior, and advanced infotainment. With safety features like multiple airbags and a rearview camera, the Mazda CX-5 is a reliable and comfortable SUV for everyday driving."
            },
            {
                "id": "46",
                "brand": "KIA",
                "name": "Kia Sonet 1.5L Turbo Premium Compact SUV 2022",
                "model": "SUV",
                "price": 10250,
                "newcarPrice": 15000,
                "seats": "5 seats",
                "fuel": "Gasoline",
                "transmission": "CVT",
                "height": "1642 mm",
                "width": "1790 mm",
                "length": "4120 mm",
                "color": "Red",
                "imgSrc": process.env.PUBLIC_URL + "/img/kia26.jpg",
                "year": 2022,
                "power": "85 kW",
                "newPrice": 9485,
                "desc": "The Kia Sonet 1.5L Turbo Premium Compact SUV 2022 features a 1.5L turbocharged engine, offering a balance of performance and efficiency. It has a stylish design, premium interior, and advanced tech features. With safety options like airbags and a rearview camera, the Sonet is a compact, reliable SUV for urban and family use."
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
                <p className='num-results'>5 results</p>
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
                        <Link style={{ color: "#BD1919", fontWeight: "bold", textDecoration: "underline" }} to="/used-car">SUV</Link>
                        <span className='line-vertical'>|</span>
                        <Link to="/used-car/MPV">MPV</Link>
                        <span className='line-vertical'>|</span>
                        <Link to="/used-car/SEDAN">SEDAN</Link>
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
                        <div onClick={() => nav(`/used-car/SUV/${car.id}`)} className="car-item_menu" key={car.id}>
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
                                        <div className='box-extra_icon-price' style={{ textDecoration: "line-through" }}>
                                            <FontAwesomeIcon className='iconTags' icon={faTags} />${car.price} (Price with DPH)
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

export default SUVused;