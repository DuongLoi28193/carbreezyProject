import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGasPump, faCogs, faCalendarAlt, faTags, faCar } from '@fortawesome/free-solid-svg-icons';
import Footer from "./Footer";

function UsedCar() {
    const cars =
        [
            {
                id: "36",
                brand: "Ford",
                name: "Ford Everest Sport 2.0L Turbo  4x2 Automatic 2021",
                model: "SUV",
                price: 25000,
                newcarPrice: 39000,
                seats: "7 seats",
                fuel: "Diesel",
                transmission: "10AT",
                height: "1837 mm",
                width: "1860 mm",
                length: "4892 mm",
                color: "Black",
                imgSrc: "/img/ford01.jpg",
                year: 2021,
                power: "158 kW",
                newPrice: 20000,
                desc: "The Ford Everest Sport 2.0L Turbo 4x2 Automatic 2021 is a powerful and stylish SUV featuring a 2.0L Turbocharged diesel engine that delivers 180 horsepower and 420 Nm of torque. It offers a smooth driving experience with a 10-speed automatic transmission, ideal for both city and highway driving. The vehicle's bold exterior includes a black grille, LED headlights, and 20-inch alloy wheels, while the interior provides comfort with premium leather seats, a spacious seven-seater layout, and advanced tech features. Safety is enhanced with features like Autonomous Emergency Braking and Lane-Keeping Assist, making it a versatile and reliable choice for any journey"
            },
            {
                id: "37",
                brand: "Ford",
                name: "Ford Everest Titanium 2.0L Turbo 4x2 Automatic 2021",
                model: "SUV",
                price: 26000,
                newcarPrice: 39500,
                seats: "7 seats",
                fuel: "Diesel",
                transmission: "10AT",
                height: "1837 mm",
                width: "1860 mm",
                length: "4892 mm",
                color: "Blue",
                imgSrc: "/img/ford07.jpg",
                year: 2021,
                power: "158 kW",
                newPrice: 22880,
                desc: "The Ford Everest Titanium 2.0L Turbo 4x2 Automatic 2021 is a powerful and luxurious SUV, featuring a 2.0L Turbocharged diesel engine with 180 horsepower and 420 Nm of torque. It comes with a 10-speed automatic transmission for smooth performance and fuel efficiency. The SUV boasts a sleek exterior with a bold grille and 20-inch alloy wheels, while the interior offers leather upholstery and spacious seating for seven. Equipped with advanced safety features like Adaptive Cruise Control and Lane-Keeping Assist, the Everest Titanium is a well-rounded choice for those seeking performance, luxury, and safety."
            },
            {
                id: "38",
                brand: "Ford",
                name: "Ford Ranger XLS 2.2L Turbo 4x2 Automatic 2020",
                model: "PICKUP",
                price: 18250,
                newcarPrice: 23520,
                seats: "7 seats",
                fuel: "Diesel",
                transmission: "10AT",
                height: "1830 mm",
                width: "1860 mm",
                length: "5362 mm",
                color: "Black",
                imgSrc: "/img/ford20.jpg",
                year: 2020,
                power: "118 kW",
                newPrice: 15512,
                desc: "The Ford Ranger XLS 2.2L Turbo 4x2 Automatic 2020 is a strong and versatile pickup, equipped with a 2.2L Turbocharged diesel engine that produces 160 horsepower and 385 Nm of torque. It features a 6-speed automatic transmission for smooth performance and efficiency. The rugged exterior includes a bold grille and 16-inch alloy wheels, while the interior offers a practical, comfortable cabin with seating for five and durable materials. With safety features like a rearview camera and electronic stability control, the Ranger XLS is an excellent choice for both work and off-road adventures."
            },
            {
                id: "39",
                brand: "HONDA",
                name: "Honda Brio RS 1.2L i-VTEC Compact Hatchback 2021",
                model: "Hatchback",
                price: 11000,
                newcarPrice: 16100,
                seats: "5 seats",
                fuel: "Gasoline",
                transmission: "CVT",
                height: "1487 mm",
                width: "1682 mm",
                length: "3817 mm",
                color: "White",
                imgSrc: "/img/honda01.jpg",
                year: 2021,
                power: "66 kW",
                newPrice: 8000,
                desc: "The Honda Brio RS 1.2L i-VTEC Compact Hatchback 2021 is a stylish and efficient city car with a 1.2L i-VTEC engine producing 90 horsepower. Its compact design features a bold front grille and 15-inch alloy wheels. Inside, it offers comfortable seating for five, modern infotainment, and practical storage. With safety features like dual airbags, ABS, and rear parking sensors, the Honda Brio RS is a reliable and fun-to-drive hatchback perfect for urban driving."
            },
            {
                id: "40",
                brand: "HONDA",
                name: "Honda City L 1.5L i-VTEC Premium Sedan 2023",
                model: "SEDAN",
                price: 12520,
                newcarPrice: 20500,
                seats: "5 seats",
                fuel: "Gasoline",
                transmission: "CVT",
                height: "1467 mm",
                width: "1748 mm",
                length: "4580 mm",
                color: "Green",
                imgSrc: "/img/honda06.jpg",
                year: 2023,
                power: "90 kW",
                newPrice: 9630,
                desc: "The Honda City L 1.5L i-VTEC Premium Sedan 2023 offers a blend of style and performance with a 1.5L i-VTEC engine producing 121 horsepower. Its sleek design features LED headlights and 16-inch alloy wheels. The spacious, premium interior includes advanced infotainment and comfortable seating for five. With safety features like lane-keeping assist, dual airbags, and a rearview camera, the Honda City L is a reliable and well-equipped sedan for those seeking comfort and performance."
            },
            {
                id: "41",
                brand: "KIA",
                name: "Kia Carens Signature 1.4L T-GDi Premium MPV 2023",
                model: "SUV",
                price: 22000,
                newcarPrice: 30000,
                seats: "7 seats",
                fuel: "Gasoline",
                transmission: "7DCT",
                height: "1750 mm",
                width: "1800 mm",
                length: "4540 mm",
                color: "White",
                imgSrc: "/img/kia02.jpg",
                year: 2023,
                power: "104 kW",
                newPrice: 20545,
                desc: "The Kia Carens Signature 1.4L T-GDi Premium MPV 2023 is a versatile and stylish family vehicle powered by a 1.4L turbocharged engine. It offers a premium design with LED headlights and alloy wheels. Inside, it features a spacious cabin with advanced infotainment and comfortable seating for seven. Safety features include multiple airbags, rear parking sensors, and driver assistance systems, making it an ideal choice for families seeking performance, comfort, and reliability."
            },
            {
                id: "42",
                brand: "KIA",
                name: "Kia Rondo 2.0L GAT Premium Compact MPV 2022",
                model: "MPV",
                price: 15700,
                newcarPrice: 21666,
                seats: "7 seats",
                fuel: "Gasoline",
                transmission: "Automatic",
                height: "1610 mm",
                width: "1805 mm",
                length: "4525 mm",
                color: "",
                imgSrc: "/img/kia21.jpg",
                year: 2022,
                power: "104 kW",
                newPrice: 10235,
                desc: "The Kia Rondo 2.0L GAT Premium Compact MPV 2022 is a practical and stylish family vehicle with a 2.0L engine. It features a modern design, a spacious cabin with advanced infotainment, and seating for seven. Equipped with safety features like multiple airbags and parking sensors, the Kia Rondo is a reliable choice for families seeking comfort and performance in a compact MPV."
            },
            {
                id: "43",
                brand: "MAZDA",
                name: "Mazda 3 1.5L SkyActiv Premium Sport Sedan 2020",
                model: "HATCHBACK",
                price: 19500,
                newcarPrice: 24000,
                seats: "5 seats",
                fuel: "Gasoline",
                transmission: "Automatic",
                height: "1445 mm",
                width: "1795 mm",
                length: "4465 mm",
                color: "White",
                imgSrc: "/img/mazda06.jpg",
                year: 2020,
                power: "82 kW",
                newPrice: 16400,
                desc: "The Mazda 3 1.5L SkyActiv Premium Sport Sedan 2020 offers a dynamic driving experience with its 1.5L engine and SkyActiv technology. It features a sleek design, premium interior, and advanced infotainment. With safety features like airbags and a rearview camera, the Mazda 3 is a stylish and reliable sedan for those seeking performance and comfort"
            },
            {
                id: "44",
                brand: "MAZDA",
                name: "Mazda CX-5 2.0L SkyActiv-G Premium Compact SUV 2022",
                model: "SUV",
                price: 21000,
                newcarPrice: 32000,
                seats: "5 seats",
                fuel: "Gasoline",
                transmission: "Automatic",
                height: "1680 mm",
                width: "1840 mm",
                length: "4550 mm",
                color: "Red",
                imgSrc: "/img/mazda22.jpg",
                year: 2022,
                power: "121 kW",
                newPrice: 17859,
                desc: "The Mazda CX-5 2.0L SkyActiv-G Premium Compact SUV 2022 combines performance and style with its 2.0L engine and SkyActiv-G technology. It features a sleek design, premium interior, and advanced infotainment. With safety features like multiple airbags and a rearview camera, the Mazda CX-5 is a reliable and comfortable SUV for everyday driving."
            },
            {
                id: "45",
                brand: "TESLA",
                name: "Tesla Model 3 Long Range Dual Motor AWD 2022",
                model: "SEDAN",
                price: 28000,
                newcarPrice: 45000,
                seats: "5 seats",
                fuel: "Electric",
                transmission: "Automatic",
                height: "1443 mm",
                width: "1933 mm",
                length: "4694 mm",
                color: "White",
                imgSrc: "/img/tesla06.jpg",
                year: 2021,
                power: "283 kW",
                newPrice: 25000,
                desc: "The Tesla Model 3 Long Range Dual Motor AWD 2022 offers impressive performance with dual motors and all-wheel drive. It features a sleek design, advanced autopilot, and a long electric range. With cutting-edge technology and a minimalist interior, the Model 3 provides a high-performance, eco-friendly driving experience."
            },
            {
                id: "46",
                brand: "KIA",
                name: "Kia Sonet 1.5L Turbo Premium Compact SUV 2022",
                model: "SUV",
                price: 10250,
                newcarPrice: 15000,
                seats: "5 seats",
                fuel: "Gasoline",
                transmission: "CVT",
                height: "1642 mm",
                width: "1790 mm",
                length: "4120 mm",
                color: "Red",
                imgSrc: "/img/kia26.jpg",
                year: 2022,
                power: "85 kW",
                newPrice: 9485,
                desc: "The Kia Sonet 1.5L Turbo Premium Compact SUV 2022 features a 1.5L turbocharged engine, offering a balance of performance and efficiency. It has a stylish design, premium interior, and advanced tech features. With safety options like airbags and a rearview camera, the Sonet is a compact, reliable SUV for urban and family use."
            },
            {
                id: "47",
                brand: "MAZDA",
                name: "Mazda CX-5 2.0L SkyActiv Automatic Compact SUV 2016",
                model: "CUV",
                price: 32150,
                newcarPrice: 39000,
                seats: "5 seats",
                fuel: "Gasoline",
                transmission: "6AT",
                height: "1680 mm",
                width: "1840 mm",
                length: "4555 mm",
                color: "Black",
                imgSrc: "/img/mazda26.jpg",
                year: 2016,
                power: "121 kW",
                newPrice: 29555,
                desc: "The Mazda CX-5 2.0L SkyActiv Automatic Compact SUV 2016 offers a 2.0L engine with SkyActiv technology for efficient performance. It features a sleek design, comfortable interior, and advanced safety features like airbags and stability control. The spacious cabin and user-friendly infotainment system make it ideal for family drives. With its responsive handling and smooth ride, it is a reliable and practical SUV for everyday driving."
            }
        ];

    const nav = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const filteredCars = cars.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()));

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
                <p className='num-results'>12 results</p>
            </div>

            {/* search bar */}
            <div style={{ marginTop: "25px", marginBottom: "20px" }} className="container_searchToBrand">
                <FontAwesomeIcon icon={faSearch} className="icon-searchBar" />
                <input type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
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
                <div className="car-grid">
                    {filteredCars.map((car) => (
                        <div onClick={() => nav(`/used-car/${car.id}`)} className="car-item_menu" key={car.id}>
                            <img
                                src={`${process.env.PUBLIC_URL}${car.imgSrc}`}
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

                <div style={{ marginTop: "200px" }} className='used-intro'>
                    <div className="used-buysell">
                        <h1>Buy and sell used cars</h1>
                    </div>
                    <div className='used-intro1'>
                        <div>
                            <h2 style={{ textAlign: "center" }}>Buy and sell used cars, used cars at good prices</h2>
                        </div>
                        <div className='used-intro2'>
                            <span className="span-para">
                                Nowadays, customers have many options <strong><u>to buy used cars</u></strong> from many different sources. Many customers choose to buy from individuals or from used car dealers. Cars are a big asset so many people have to think carefully especially when buying a used car. So why should people choose to buy at CarBreezy compared to other places.
                            </span>
                            <span>
                                <h3>Why should you choose Carpla when buying a used car?</h3>
                            </span>
                            <span>
                                <h3>Good warranty</h3>
                            </span>
                            <span className="span-para">
                                When customers buy a used car at CarBreezy, they will receive a 1-year or 20,000km warranty. In case the car is still under warranty at the manufacturer, customers can still use this service. When buying a used car from an acquaintance, customers will definitely not receive this policy. Buying a car at Carpla brings absolute peace of mind and trust
                            </span>
                            <span>
                                <h3>Strict inspection</h3>
                            </span>
                            <span className="span-para">
                                The <strong><u>purchase of used cars</u></strong> must go through strict inspection steps. At each stage, experts compare documents to verify the vehicle's history, ensuring that the vehicle sold has a chassis number and engine number that match the legal documents. The engine and electrical system are all checked with error reading equipment to ensure that the vehicle is eligible for operation. The chassis and undercarriage must be checked to ensure that the vehicle has never been in an accident, collision or water hammer.
                            </span>
                            <span>
                                <h3>Fast and free procedure</h3>
                            </span>
                            <span className="span-para">
                                All procedures related to notarized sales contracts and withdrawal of documents are free at CarBreezy. In addition, CarBreezy staff support customers with procedures for changing ownership and registration to help customers quickly receive their cars. Customers can be completely assured when buying used cars at CarBreezy.
                            </span>
                            <span>
                                <h3>Long-term loan policy</h3>
                            </span>
                            <span className="span-para">
                                The highlight when buying a used car at CarBreezy is that customers will be able to pay in installments with the longest term on the market. CarBreezy also cooperates with many banks to support customers with loan value up to 70% of the car value and preferential interest rates. <br />
                                CarBreezy  affirms that user value is the top priority, which also helps CarBreezy become the most prestigious used car buying and selling platform in Vietnam. You can contact CarBreezy to receive more advice from the staff. <br />
                                Collapse
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default UsedCar;