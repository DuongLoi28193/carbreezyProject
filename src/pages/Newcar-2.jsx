import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import FAQComponent from './FAQ'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump, faCogs, faSearch, faTags, faCar } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Footer';

function Newcar2() {
    const cars =
        [
            {
                id: "14",
                brand: "KIA",
                name: "Kia K3 2.0L Premium 6-Speed Automatic Sedan 2024",
                model: "SEDAN",
                price: 26000,
                seats: "5 seats",
                fuel: "Gasoline",
                transmission: "Automatic",
                height: "1450 mm",
                width: "1800 mm",
                length: "4640 mm",
                color: "White",
                imgSrc: "/img/kia12.jpg",
                year: 2024,
                power: "115 kW",
                priceWithout: 23000
            },
            {
                id: "15",
                brand: "KIA",
                name: "Kia Rondo 2.0L GAT 6-Speed Automatic MPV 2022",
                model: "MPV",
                price: 21666,
                seats: "7 seats",
                fuel: "Gasoline",
                transmission: "Automatic",
                height: "1610 mm",
                width: "1805 mm",
                length: "4525 mm",
                color: "",
                imgSrc: "./img/kia21.jpg",
                year: 2022,
                power: "113 kW",
                priceWithout: 19666
            },
            {
                id: "16",
                brand: "MAZDA",
                name: "Mazda 3 1.5L SkyActiv Luxury 6-Speed Automatic Sedan 2022",
                model: "SEDAN",
                price: 20000,
                seats: "5 seats",
                fuel: "Gasoline",
                transmission: "Automatic",
                height: "1440 mm",
                width: "1795 mm",
                length: "4660 mm",
                color: "Red",
                imgSrc: "./img/mazda02.jpg",
                year: 2022,
                power: "88 kW",
                priceWithout: 18300
            },
            {
                id: "17",
                brand: "MAZDA",
                name: "Mazda 3 1.5L Premium Sport 6-Speed Automatic Sedan 2020",
                model: "HATCHBACK",
                price: 24000,
                seats: "5 seats",
                fuel: "Gasoline",
                transmission: "Automatic",
                height: "1445 mm",
                width: "1795 mm",
                length: "4465 mm",
                color: "White",
                imgSrc: "./img/mazda06.jpg",
                year: 2020,
                power: "88 kW",
                priceWithout: 22200
            },
            {
                id: "18",
                brand: "MAZDA",
                name: "Mazda 3 1.5L G AT Hatchback Facelift 2019",
                model: "HATCHBACK",
                price: 20400,
                seats: "5 seats",
                fuel: "Gasoline",
                transmission: "Automatic",
                height: "1540 mm",
                width: "1795 mm",
                length: "4580 mm",
                color: "White",
                imgSrc: "./img/mazda11.jpg",
                year: 2019,
                power: "88 kW",
                priceWithout: 17500
            },
            {
                id: "19",
                brand: "MAZDA",
                name: "Mazda 6 2.0L SkyActiv Premium 6-Speed Automatic Sedan 2019",
                model: "SEDAN",
                price: 24000,
                seats: "5 seats",
                fuel: "Gasoline",
                transmission: "Automatic",
                height: "1450 mm",
                width: "1840 mm",
                length: "4865 mm",
                color: "White",
                imgSrc: "./img/mazda16.jpg",
                year: 2019,
                power: "114 kW",
                priceWithout: 20800
            },
            {
                id: "20",
                brand: "MAZDA",
                name: "Mazda CX-5 2.0L Sport 6-Speed Automatic SUV 2020",
                model: "SUV",
                price: 30500,
                seats: "5 seats",
                fuel: "Gasoline",
                transmission: "Automatic",
                height: "1680 mm",
                width: "1840 mm",
                length: "4540 mm",
                color: "Black",
                imgSrc: "./img/mazda22.jpg",
                year: 2020,
                power: "125 kW",
                priceWithout: 27377
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
                imgSrc: "./img/tesla05.jpg",
                year: 2022,
                power: "746 kW",
                priceWithout: 55000
            },
            {
                id: "22",
                brand: "TESLA",
                name: "Tesla Model 3 Dual Motor Long Range AWD 2022",
                model: "SEDAN",
                price: 45000,
                seats: "5 seats",
                fuel: "Electric",
                transmission: "Automatic",
                height: "1443 mm",
                width: "1933 mm",
                length: "4694 mm",
                color: "White",
                imgSrc: "./img/tesla06.jpg",
                year: 2021,
                power: "283 kW",
                priceWithout: 40000
            },
            {
                id: "23",
                brand: "TESLA",
                name: "Tesla Model 3 Long Range Dual Motor AWD 2022",
                model: "SEDAN",
                price: 55000,
                seats: "5 seats",
                fuel: "Electric",
                transmission: "Automatic",
                height: "1443 mm",
                width: "1933 mm",
                length: "4694 mm",
                color: "Black",
                imgSrc: "./img/tesla11.jpg",
                year: 2020,
                power: "283 kW",
                priceWithout: 51000
            },
            {
                id: "24",
                brand: "TESLA",
                name: "Tesla Model S Long Range Dual Motor AWD 2022",
                model: "SEDAN",
                price: 90000,
                seats: "5 seats",
                fuel: "Electric",
                transmission: "Automatic",
                height: "1440 mm",
                width: "1964 mm",
                length: "4970 mm",
                color: "Red",
                imgSrc: "./img/tesla16.jpg",
                year: 2022,
                power: "393 kW",
                priceWithout: 75000
            },
            {
                id: "25",
                brand: "TESLA",
                name: "Tesla Model X Long Range Dual Motor AWD 2022",
                model: "SEDAN",
                price: 95000,
                seats: "7 seats",
                fuel: "Electric",
                transmission: "Automatic",
                height: "1680 mm",
                width: "1990 mm",
                length: "5070 mm",
                color: "White",
                imgSrc: "./img/tesla22.jpg",
                year: 2021,
                power: "393 kW",
                priceWithout: 80000
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
                imgSrc: "./img/ferrari01.jpg",
                year: 2022,
                power: "456 kW",
                priceWithout: 180000
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
                        <p style={{ marginBottom: "0" }}>Page 2 from 3</p>
                    </div>
                    <Link style={{ textDecoration: "none", color: "#000" }} to="/newCar">
                        <div className='nav-pageCar-item-2'>
                            <p style={{ marginBottom: "0" }}>Previous</p>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "#000" }} to="/newCar-page-3">
                        <div className='nav-pageCar-item-3'>
                            <p style={{ marginBottom: "0" }}>Final</p>
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

export default Newcar2;