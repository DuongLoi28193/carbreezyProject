import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import FAQComponent from './FAQ'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump, faCogs, faSearch, faTags, faCar } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Footer';

function Newcar3() {
    const cars =
        [
            {
                id: "27",
                brand: "FERRARI",
                name: "Ferrari SF90 Stradale 4.0L V8 Plug-in Hybrid AWD 2024",
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
                power: "735 kW",
                priceWithout: 580400
            },
            {
                id: "28",
                brand: "FERRARI",
                name: "Ferrari Monza SP1 6.3L V12 RWD Roadster 2024",
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
                power: "588 kW",
                priceWithout: 1500000
            },
            {
                id: "29",
                brand: "FERRARI",
                name: "Ferrari Daytona SP3 6.5L V12 Rear-Wheel Drive 2024",
                model: "SUPERCAR",
                price: 2200000,
                seats: "2 seats",
                fuel: "Gasoline",
                transmission: "7DCT",
                height: "1180 mm",
                width: "1980 mm",
                length: "4540 mm",
                color: "Blue",
                imgSrc: process.env.PUBLIC_URL + "/img/ferrari19.jpg",
                year: 2019,
                power: "618 kW",
                priceWithout: 1905000
            },
            {
                id: "30",
                brand: "FERRARI",
                name: "Ferrari 296 GTB 3.0L V6 Plug-in Hybrid RWD 2024",
                model: "SUPERCAR",
                price: 3150000,
                seats: "2 seats",
                fuel: "Gasoline",
                transmission: "8DCT",
                height: "1215 mm",
                width: "1950 mm",
                length: "4650 mm",
                color: "Red",
                imgSrc: process.env.PUBLIC_URL + "/img/ferrari25.jpg",
                year: 2020,
                power: "610 kW",
                priceWithout: 2600000
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
                imgSrc: process.env.PUBLIC_URL + "/img/ford26.jpg",
                year: 2019,
                power: "118 kW",
                priceWithout: 22300
            },
            {
                id: "32",
                brand: "KIA",
                name: "Kia Sonet 1.5L Premium Compact SUV 2022",
                model: "SUV",
                price: 15000,
                seats: "5 seats",
                fuel: "Gasoline",
                transmission: "CVT",
                height: "1642 mm",
                width: "1790 mm",
                length: "4120 mm",
                color: "Red",
                imgSrc: process.env.PUBLIC_URL + "/img/kia26.jpg",
                year: 2022,
                power: "84 kW",
                priceWithout: 13666
            },
            {
                id: "33",
                brand: "HONDA",
                name: "Honda City RS 1.5L CVT Sport Sedan 2021 Edition",
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
                power: "89 kW",
                priceWithout: 17363
            },
            {
                id: "34",
                brand: "MAZDA",
                name: "Mazda CX-5 2.0L Automatic Luxury SUV 2016",
                model: "CUV",
                price: 32150,
                seats: "5 seats",
                fuel: "Gasoline",
                transmission: "6AT",
                height: "1680 mm",
                width: "1840 mm",
                length: "4555 mm",
                color: "Black",
                imgSrc: process.env.PUBLIC_URL + "/img/mazda26.jpg",
                year: 2016,
                power: "114 kW",
                priceWithout: 29999
            },
            {
                id: "35",
                brand: "FERRARI",
                name: "Ferrari 488 GTB 3.9L V8 Twin-Turbocharged Coupe",
                model: "SUPERCAR",
                price: 249150,
                seats: "2 seats",
                fuel: "Gasoline",
                transmission: "7DCT",
                height: "1211 mm",
                width: "1953 mm",
                length: "4566 mm",
                color: "Red",
                imgSrc: process.env.PUBLIC_URL + "/img/ferrari29.jpg",
                year: 2016,
                power: "493 kW",
                priceWithout: 22800
            },
            {
                id: "36",
                brand: "HONDA",
                name: "Honda BR-V 1.5L i-VTEC Elite Edition SUV",
                model: "MPV",
                price: 32500,
                seats: 7,
                fuel: "Gasoline",
                transmission: "Stepless CVT",
                height: "1685 mm",
                width: "1780 mm",
                length: "4490 mm",
                color: "White",
                imgSrc: process.env.PUBLIC_URL + "/img/honda35.jpg",
                year: 2022,
                priceWithout: 31000,
                power: "88 kW"
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
                imgSrc: process.env.PUBLIC_URL + "/img/ford33.jpg",
                year: 2022,
                priceWithout: 412500,
                power: "149 kW"
            },
            {
                id: 38,
                brand: "KIA",
                name: "Kia Sedona Premium Luxury Edition MPV",
                model: "MPV",
                price: 39580,
                seats: "7 seats",
                fuel: "Gasoline",
                transmission: "Automatic",
                height: "1775 mm",
                width: "1985 mm",
                length: "5115 mm",
                color: "White",
                imgSrc: process.env.PUBLIC_URL + "/img/kia36.jpg",
                year: 2022,
                priceWithout: 37950,
                power: "147 kW"
            },
            {
                id: 39,
                brand: "MAZDA",
                name: "Mazda BT-50 Double Cab 4x4 Utility Pickup Truck",
                model: "PICKUP",
                price: 42000,
                seats: 5,
                fuel: "Diesel",
                transmission: "6MT",
                height: "1800 mm",
                width: "1870 mm",
                length: "5280 mm",
                color: "Silver",
                imgSrc: process.env.PUBLIC_URL + "/img/mazda33.jpg",
                year: 2022,
                priceWithout: 39000,
                power: "140 kW"
            }
        ];

    const nav = useNavigate();

    return (
        <div>
            {/* space white  */}
            <div className="space-white"></div>

            {/* nav page */}
            <header>
                <div style={{ marginBottom: "-60px" }} className='nav-page'>
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
                    <span className='content_nav-page'>Purchase a new vehicle</span>
                </div>

                <div style={{ marginTop: "80px" }}>
                </div>

            </header >

            {/* result bar */}
            <div div className="bar-results" >
                <p className='num-results'>39 results</p>
            </div>

            {/* search bar */}
            <div style={{ marginTop: "25px", marginBottom: "20px" }} className="container_searchToBrand">
                <FontAwesomeIcon icon={faSearch} className="icon-searchBar" />
                <input type="text" placeholder="Search..." />
                <button>Search</button>
            </div>

            {/* search brand-model */}
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
                        <Link to="/newCar/SUPPER-CAR">SUPPER CAR</Link>
                    </div>
                </div>
            </div>


            {/* show car  */}
            <main>
                <div className="show-car_container">
                    {/*  filter box */}
                    <div className="filter-box_container">
                        <p className='title-search'>Brands: </p>
                        <select name="" id="" defaultValue="">
                            <option value="" disabled>Ford</option>
                            <option value="option1">Kia</option>
                            <option value="option2">Honda</option>
                            <option value="option2">Mazda</option>
                            <option value="option2">Tesla</option>
                            <option value="option2">Ferrari</option>
                        </select>

                        <p className='title-search'>Fuel: </p>
                        <select name="" id="" defaultValue="">
                            <option value="" disabled>Gasoline</option>
                            <option value="option1">Diesel</option>
                            <option value="option2">Electric</option>
                        </select>

                        <p className='title-search'>Price: </p>
                        <div style={{ display: "flex", gap: "20px" }}>
                        <select name="" id="" defaultValue="">
                            <option value="" selected>------------</option>
                            <option value="lowToHigh" selected>Price From Low To High</option>
                            <option value="highToLow" selected>Price Form High To Low</option>
                        </select>
                        </div>

                        <button className='btn-filter'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-13">
                                <path fill-rule="evenodd" d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z" clip-rule="evenodd" />
                            </svg>
                            <span>Apply filter</span>
                        </button>
                        <button className='btn-reset'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-13">
                                <path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clip-rule="evenodd" />
                            </svg>
                            <span>Reset filter</span>
                        </button>
                    </div>

                    {/* cars */}
                    <div className='cars_container'>
                        {cars.map((car) => (
                            <div onClick={() => nav(`/newCar/${car.id}`)} className="car-item">
                                <div className='container_img-car'>
                                    <img src={car.imgSrc} alt="" className="img-car" />
                                </div>
                                <div className='info-car'>
                                    <p className="name-car">{car.name}</p>
                                    {/* <p className='price-car'>{car.price}$</p> */}
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
                                    <div className='box_info-extra'>
                                        <div className='boxColor-item'>
                                            <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "0px", padding: "0 8px" }}>
                                                <svg style={{ width: "20px", height: "20px", marginTop: "5px", color: "#6f7a90" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                                                    <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                                    <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                                </svg>
                                                <span style={{ fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0", fontWeight: "500" }}>{car.year}</span>
                                            </div>
                                        </div>
                                        <div className='boxColor-item'>
                                            <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "8px", padding: "0 10px" }}>
                                                <p style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0", fontWeight: "500" }}><FontAwesomeIcon icon={faCar} className="icon-dmm-watch" />{car.seats}</p>
                                            </div>
                                        </div>
                                        <div className='boxColor-item_temp'>
                                            <div style={{ width: "100px" }} className='boxColor-item'>
                                                <div style={{
                                                    textAlign: "center", display: "flex", justifyContent: "center", gap: "0px", padding: "0 8px"
                                                }}>
                                                    < svg style={{ width: "20px", height: "20px", marginTop: "5px", color: "hsl(220,13%,50%)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                                                        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                                                    </svg>
                                                    <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0", fontWeight: "500", marginLeft: "-2px" }}>{car.power}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='boxColor-item'>
                                            <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "0px", padding: "0px 8px", paddingRight: "14px" }}>
                                                <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0", fontWeight: "500" }}><FontAwesomeIcon icon={faGasPump} className="icon-dmm" />{car.fuel}</span>
                                            </div>
                                        </div>
                                        <div className='boxColor-item'>
                                            <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "8px", padding: "0 14px" }}>
                                                <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "6px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>
                                                    <FontAwesomeIcon icon={faCogs} className="icon-dmm-cogs" /></span>
                                                <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0", marginLeft: "-6px", fontWeight: "500" }}>{car.transmission}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* box nav car-page  */}
                <div className="box_nav-pageCar">
                    <div className='nav-pageCar-item-1'>
                        <p style={{ marginBottom: "0" }}>Page 3 from 3</p>
                    </div>
                    <Link style={{ textDecoration: "none", color: "#000" }} to="/newCar-page-2">
                        <div className='nav-pageCar-item-2'>
                            <p style={{ marginBottom: "0" }}>Previous</p>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "#000" }} to="/newCar">
                        <div className='nav-pageCar-item-3'>
                            <p style={{ marginBottom: "0" }}>First</p>
                        </div>
                    </Link>
                </div>

            </main >

            {/* footer */}
            <Footer />

            <Routes>
                <Route path='/FAQ' element={<FAQComponent />}></Route>
            </Routes>
        </div >
    );
}

export default Newcar3;