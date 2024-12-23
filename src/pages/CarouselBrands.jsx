import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrandsCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 739,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    const brands = [
        { src: "../img/Hondalogo.jpg", alt: "Honda", path: "/honda" },
        { src: "../img/KIAlogo.jpg", alt: "KIA", path: "/kia" },
        { src: "../img/Teslalogo.jpg", alt: "Tesla", path: "/tesla" },
        { src: "../img/ferrarilogo.jpg", alt: "Ferrari", path: "/ferrari", style: { width: "150px" } },
        { src: "../img/fordlogo.jpg", alt: "Ford", path: "/ford" },
        { src: "../img/mazdaLogo.png", alt: "Mazda", path: "/mazda" },
    ];

    return (
        <div className="brands-carousel">
            <Slider {...settings}>
                {brands.map((brand, index) => (
                    <div key={index} className="brands-logo">
                        <Link to={brand.path}>
                            <img
                                src={brand.src}
                                alt={brand.alt}
                                style={brand.style || {}}
                            />
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BrandsCarousel;
