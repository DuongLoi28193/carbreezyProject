import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import FAQComponent from './FAQ'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump, faCogs, faSearch, faTags, faCar, faRotateLeft, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Footer';
import React, { useState } from 'react';


function Newcar() {
    const cars =
        [
            {
                id: "01",
                brand: "Ford",
                name: "Ford Everest Sport 2.0L Automatic Turbo Diesel 4x2 2021",
                model: "SUV",
                price: 39000,
                seats: "7 seats",
                fuel: "Diesel",
                transmission: "10AT",
                height: "1837 mm",
                width: "1860 mm",
                length: "4892 mm",
                color: "Black",
                imgSrc: process.env.PUBLIC_URL + "/img/ford01.jpg",
                year: 2021,
                power: "132 kW",
                priceWithout: 37500
            },
            {
                id: "02",
                brand: "Ford",
                name: "Ford Everest Titanium 2.0L Automatic 4x2 Luxury SUV 2021",
                model: "SUV",
                price: 39500,
                seats: "7 seats",
                fuel: "Diesel",
                transmission: "10AT",
                height: "1837 mm",
                width: "1860 mm",
                length: "4892 mm",
                color: "Blue",
                imgSrc: process.env.PUBLIC_URL + "/img/ford07.jpg",
                year: 2021,
                power: "154 kW",
                priceWithout: 36000
            },
            {
                id: "03",
                brand: "Ford",
                name: "Ford Everest Sport 2.0L Automatic 4x2 SUV 2021",
                model: "SUV",
                price: 39000,
                seats: "7 seats",
                fuel: "Diesel",
                transmission: "10AT",
                height: "1837 mm",
                width: "1860 mm",
                length: "4892 mm",
                color: "Blue",
                imgSrc: process.env.PUBLIC_URL + "/img/ford11.jpg",
                year: 2021,
                power: "154 kW",
                priceWithout: 34900
            },
            {
                id: "04",
                brand: "Ford",
                name: "Ford Ranger XLS 2.2L Automatic 4x2 Pickup 2020",
                model: "PICKUP",
                price: 23520,
                seats: "7 seats",
                fuel: "Diesel",
                transmission: "10AT",
                height: "1830 mm",
                width: "1860 mm",
                length: "5362 mm",
                color: "Black",
                imgSrc: process.env.PUBLIC_URL + "/img/ford20.jpg",
                year: 2020,
                power: "118 kW",
                priceWithout: 20000
            },
            {
                id: "05",
                brand: "Ford",
                name: "Ford Territory Titanium 1.5L Automatic SUV 2023",
                model: "CUV",
                price: 34800,
                seats: "5 seats",
                fuel: "Gasonline",
                transmission: "7AT",
                height: "1706 mm",
                width: "1935 mm",
                length: "4630 mm",
                color: "White",
                imgSrc: process.env.PUBLIC_URL + "/img/ford21.jpg",
                year: 2023,
                power: "120 kW",
                priceWithout: 31333
            },
            {
                id: "06",
                brand: "HONDA",
                name: "Honda Brio RS 1.2L i-VTEC Automatic Hatchback 2021",
                model: "Hatchback",
                price: 16100,
                seats: "5 seats",
                fuel: "Gasoline",
                transmission: "CVT",
                height: "1487 mm",
                width: "1682 mm",
                length: "3817 mm",
                color: "White",
                imgSrc: process.env.PUBLIC_URL + "/img/honda01.jpg",
                year: 2021,
                power: "66 kW",
                priceWithout: 14600
            },
            {
                id: "07",
                brand: "HONDA",
                name: "Honda City L 1.5L i-VTEC Automatic Sedan 2023",
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
                power: "89 kW",
                priceWithout: 19000
            },
            {
                id: "08",
                brand: "HONDA",
                name: "Honda Civic E 1.8L i-VTEC Automatic Sedan 2021",
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
                power: "104 kW",
                priceWithout: 23000
            },
            {
                id: "09",
                brand: "HONDA",
                name: "Honda CR-V 1.5L VTEC Turbo Automatic SUV 2022",
                model: "CUV",
                price: 31250,
                seats: "7 seats",
                fuel: "Gasoline",
                transmission: "CVT",
                height: "1679 mm",
                width: "1855 mm",
                length: "4584 mm",
                color: "Green",
                imgSrc: process.env.PUBLIC_URL + "/img/honda16.jpg",
                year: 2022,
                power: "140 kW",
                priceWithout: 28800
            },
            {
                id: "10",
                brand: "HONDA",
                name: "Honda CR-V 1.5L VTEC Turbo Automatic SUV 2019",
                model: "CUV",
                price: 31250,
                seats: "7 seats",
                fuel: "Gasoline",
                transmission: "CVT",
                height: "1679 mm",
                width: "1855 mm",
                length: "4584 mm",
                color: "Green",
                imgSrc: process.env.PUBLIC_URL + "/img/honda21.jpg",
                year: 2019,
                power: "140 kW",
                priceWithout: 29999
            },
            {
                id: "11",
                brand: "KIA",
                name: "Kia Carens 1.4L T-GDi Signature Automatic MPV 2023",
                model: "SUV",
                price: 30000,
                seats: "7 seats",
                fuel: "Gasoline",
                transmission: "7DCT",
                height: "1750 mm",
                width: "1800 mm",
                length: "4540 mm",
                color: "White",
                imgSrc: process.env.PUBLIC_URL + "/img/kia02.jpg",
                year: 2023,
                power: "140 kW",
                priceWithout: 27950
            },
            {
                id: "12",
                brand: "KIA",
                name: "Kia Carens 1.5L Smartstream Luxury IVT Automatic MPV 2023",
                model: "SUV",
                price: 30000,
                seats: "7 seats",
                fuel: "Gasoline",
                transmission: "Automatic",
                height: "1750 mm",
                width: "1800 mm",
                length: "4540 mm",
                color: "White",
                imgSrc: process.env.PUBLIC_URL + "/img/kia06.jpg",
                year: 2023,
                power: "115 kW",
                priceWithout: 28500
            },
            {
                id: "13",
                brand: "KIA",
                name: "Kia K3 1.6L Premium 6-Speed Automatic Sedan 2022",
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
                power: "104 kW",
                priceWithout: 21400
            },
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
                imgSrc: process.env.PUBLIC_URL + "/img/kia12.jpg",
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
                imgSrc: process.env.PUBLIC_URL + "/img/kia21.jpg",
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
                imgSrc: process.env.PUBLIC_URL + "/img/mazda02.jpg",
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
                imgSrc: process.env.PUBLIC_URL + "/img/mazda06.jpg",
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
                imgSrc: process.env.PUBLIC_URL + "/img/mazda11.jpg",
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
                imgSrc: process.env.PUBLIC_URL + "/img/mazda16.jpg",
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
                imgSrc: process.env.PUBLIC_URL + "/img/mazda22.jpg",
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
                imgSrc: process.env.PUBLIC_URL + "/img/tesla05.jpg",
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
                imgSrc: process.env.PUBLIC_URL + "/img/tesla06.jpg",
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
                imgSrc: process.env.PUBLIC_URL + "/img/tesla11.jpg",
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
                imgSrc: process.env.PUBLIC_URL + "/img/tesla16.jpg",
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
                imgSrc: process.env.PUBLIC_URL + "/img/tesla22.jpg",
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
                imgSrc: process.env.PUBLIC_URL + "/img/ferrari01.jpg",
                year: 2022,
                power: "456 kW",
                priceWithout: 180000
            },
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

    const [searchTerm, setSearchTerm] = useState("");
    const [brandFilter, setBrandFilter] = useState("");
    const [fuelFilter, setFuelFilter] = useState("");
    const [sortOrder, setSortOrder] = useState("");

    const filteredCars = cars
        .filter(car =>
            car.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (brandFilter === "" || car.brand.toLowerCase() === brandFilter.toLowerCase()) &&
            (fuelFilter === "" || car.fuel.toLowerCase() === fuelFilter.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOrder === "lowToHigh") {
                return a.price - b.price;
            } else if (sortOrder === "highToLow") {
                return b.price - a.price;
            } else {
                return 0;
            }
        });

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
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={() => console.log("Search term:", searchTerm)}>Search</button>
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
                        <p className='title-search'>Brands:</p>
                        <select
                            value={brandFilter}
                            onChange={(e) => setBrandFilter(e.target.value)}
                        >
                            <option value="">All</option>
                            <option value="Ford">Ford</option>
                            <option value="KIA">Kia</option>
                            <option value="HONDA">Honda</option>
                            <option value="Mazda">Mazda</option>
                            <option value="Tesla">Tesla</option>
                            <option value="Ferrari">Ferrari</option>
                        </select>

                        <p className='title-search'>Fuel:</p>
                        <select
                            value={fuelFilter}
                            onChange={(e) => setFuelFilter(e.target.value)}
                        >
                            <option value="">All</option>
                            <option value="Gasoline">Gasoline</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Electric">Electric</option>
                        </select>

                        <p className='title-search'>Price:</p>
                        <select
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                        >
                            <option value="">None</option>
                            <option value="lowToHigh">Price From Low To High</option>
                            <option value="highToLow">Price From High To Low</option>
                        </select>

                        <button className='btn-reset' onClick={() => {
                            setSearchTerm("");
                            setBrandFilter("");
                            setFuelFilter("");
                            setSortOrder("");
                        }}>
                            <FontAwesomeIcon icon={faRotateLeft}> filter
                        </button>
                    </div>

                    {/* cars */}
                    <div className='cars_container'>
                        {filteredCars.map((car) => (
                            <div onClick={() => nav(`/newCar/${car.id}`)} className="car-item">
                                <div className='container_img-car'>
                                    <img src={car.imgSrc} alt="" className="img-car" />
                                </div>
                                <div className='info-car'>
                                    <p className="name-car">{car.name}</p>
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
                                                    <svg style={{ width: "20px", height: "20px", marginTop: "5px", color: "hsl(220,13%,50%)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
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
                {/* <div className="box_nav-pageCar">
                    <div className='nav-pageCar-item-1'>
                        <p style={{ marginBottom: "0" }}>Page 1 from 3</p>
                    </div>
                    <Link to="/newCar-page-2" style={{ textDecoration: "none", color: "#000" }}>
                        <div className='nav-pageCar-item-2'>
                            <p style={{ marginBottom: "0" }}>Next</p>
                        </div>
                    </Link>
                    <Link to="/newCar-page-3" style={{ textDecoration: "none", color: "#000" }}>
                        <div className='nav-pageCar-item-3'>
                            <p style={{ marginBottom: "0" }}>Final</p>
                        </div>
                    </Link>
                </div> */}

            </main >

            {/* footer */}
            <Footer />

            <Routes>
                <Route path='/FAQ' element={<FAQComponent />}></Route>
            </Routes>
        </div >
    );
}

export default Newcar;