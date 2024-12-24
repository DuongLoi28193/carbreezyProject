
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faGasPump, faCogs, faBolt, faPhone, faEnvelope, faArrowLeft, faCalendarAlt, faShareAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer';

function CarDetailFERRARI({ data }) {
    const { ID } = useParams();
    const [selectedImage, setSelectedImage] = useState("");

    const index = data.findIndex((item) => item.id === ID);
    const dataItem = data[index];

    useEffect(() => {
        if (dataItem && Array.isArray(dataItem.imgSrc) && dataItem.imgSrc.length > 0) {
            setSelectedImage(dataItem.imgSrc[0]);
        }
    }, [dataItem]);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const SimpleCarousel = () => {
        const slides = [
            dataItem.imgSrc[0],
            dataItem.imgSrc[1],
            dataItem.imgSrc[2],
            dataItem.imgSrc[3]
        ];

        const [currentSlide, setCurrentSlide] = useState(0);

        const nextSlide = () => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        };

        const prevSlide = () => {
            setCurrentSlide((prevSlide) =>
                prevSlide === 0 ? slides.length - 1 : prevSlide - 1
            );
        };

        return (
            <div className="carousel-container" style={{ maxWidth: "500px", margin: "auto", textAlign: "center" }}>
                <div className="carousel-slide" >
                    <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} style={{ width: '100%', borderRadius: '10px' }} />
                </div>
                <div className="carousel-controls" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <button onClick={prevSlide} style={{ background: "none", border: "none", fontSize: "30px", cursor: "pointer", marginTop: "-210px", color: "#fff", width: "80px", marginLeft: "-10px" }}>
                        <FontAwesomeIcon className="icon-chervon-img__details" icon={faChevronLeft} />
                    </button>
                    <button onClick={nextSlide} style={{ background: "none", border: "none", fontSize: "30px", cursor: "pointer", marginTop: "-210px", color: "#fff", marginRight: "-160px" }}>
                        <FontAwesomeIcon className="icon-chervon-img__details" icon={faChevronRight} />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            {/* white space */}
            <div className="space-white"></div>

            {/* nav page */}
            <div className="bar-results">
                <Link style={{ textDecoration: "none" }} to="/ferrari">
                    <p className='num-results arrowLeft'>
                        <FontAwesomeIcon style={{ width: "15px" }} icon={faArrowLeft} />Back to vehicle list
                    </p>
                </Link>
            </div>

            {/* chi tiết xe */}
            <main>
                {dataItem && Array.isArray(dataItem.imgSrc) && dataItem.imgSrc.length > 0 ? (
                    <div className="container__car-detail">
                        <div className="box_image-car">
                            {/* Picture main */}
                            <div>
                                <img className="img__car" src={selectedImage} alt="Ảnh xe lớn" />
                            </div>
                            {/* Picture items */}
                            {dataItem.imgSrc.slice(0).map((src, index) => (
                                <div key={index} className="box-extra_image-car">
                                    <img
                                        className="img__car small"
                                        src={src}
                                        alt={`Xe ${index + 1}`}
                                        onClick={() => handleImageClick(src)}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Thêm Carousel vào đây */}
                        <div className="container__carouselDetail">
                            <SimpleCarousel />

                        </div>

                        <div className="box_info-car">
                            <p className="nameCar__details">{dataItem.name}</p>
                            <p className="priceCar__details">${dataItem.price}</p>
                            <div className="box_infor-car_extra">
                                <div className="box_infor-car_extra-item">
                                    <FontAwesomeIcon className="icon__details" icon={faCalendarAlt} />
                                    <p className="yearOfManfac">Year of manufacture</p>
                                    <p className="content_item__details">{dataItem.year}</p>
                                </div>
                                <hr style={{ marginTop: "-10px", marginBottom: "10px", backgroundColor: "rgba(180,180,180,0.4)" }} />
                                <div className="box_infor-car_extra-item">
                                    <FontAwesomeIcon className="icon__details" icon={faCar} />
                                    <p className="yearOfManfac">Seats</p>
                                    <p className="content_item__details">{dataItem.seats.split(" ")[0]}</p>
                                </div>
                                <hr style={{ marginTop: "-10px", marginBottom: "10px", backgroundColor: "rgba(180,180,180,0.4)" }} />
                                <div className="box_infor-car_extra-item">
                                    <FontAwesomeIcon className="icon__details" icon={faBolt} />
                                    <p className="yearOfManfac">Power</p>
                                    <p className="content_item__details">{dataItem.power}</p>
                                </div>
                                <hr style={{ marginTop: "-10px", marginBottom: "10px", backgroundColor: "rgba(180,180,180,0.4)" }} />
                                <div className="box_infor-car_extra-item">
                                    <FontAwesomeIcon className="icon__details" icon={faGasPump} />
                                    <p className="yearOfManfac">Fuel</p>
                                    <p className="content_item__details">{dataItem.fuel}</p>
                                </div>
                                <hr style={{ marginTop: "-10px", marginBottom: "10px", backgroundColor: "rgba(180,180,180,0.4)" }} />
                                <div className="box_infor-car_extra-item">
                                    <FontAwesomeIcon className="icon__details" icon={faCogs} />
                                    <p className="yearOfManfac">Transmission</p>
                                    <p className="content_item__details">{dataItem.transmission}</p>
                                </div>
                                <div className="box-buttonContact__details">
                                    <button>
                                        <a href="tel:+84825 355 355">
                                            <FontAwesomeIcon icon={faPhone} className="icon-conTact__details" />Call
                                        </a>
                                    </button>
                                    <button className="temp-abcd">
                                        <a href="mailto:carBreezy@gmail.com?subject=Request%20to%20Book%20Appointment%20with%20CarBreezy">
                                            <FontAwesomeIcon className="icon-conTact__details" icon={faEnvelope} />E-mail
                                        </a>
                                    </button>
                                    <button>
                                        <FontAwesomeIcon className="icon-conTact__details" icon={faShareAlt} />Share
                                    </button>
                                </div>
                                <button className="btn-signUp__details">
                                    <label style={{ width: "100%", cursor: "pointer" }} for="check-testDrive">Sign up for a test drive</label>
                                </button>

                            </div>
                        </div>

                        {/* content speci */}
                        <div className="container__speci">
                            <p className="title__speci">Specifications</p>
                            <div className="box-detail__speci">
                                <div style={{ borderBottom: "1px solid rgb(180,180,180)", paddingBottom: "10px", marginBottom: "8px", }}>
                                    <p style={{ fontWeight: "600", marginBottom: "0px" }}>Overview</p>
                                </div>
                                <div className="box-detail__speci-extra">
                                    <div className="speci-item">
                                        <p className="title__speci-item" style={{ flex: "1" }}>Brand</p>
                                        <p className="content__speci-item">{dataItem.brand}</p>
                                    </div>
                                    <div className="speci-item">
                                        <p className="title__speci-item" style={{ flex: "1" }}>Model</p>
                                        <p className="content__speci-item">{dataItem.model}</p>
                                    </div>
                                </div>
                                <div style={{ borderBottom: "1px solid rgb(180,180,180)", paddingBottom: "10px", marginBottom: "8px" }}>
                                    <p style={{ fontWeight: "600", marginBottom: "0px" }}>Overall</p>
                                </div>
                                <div className="box-detail__speci-extra">
                                    <div className="speci-item">
                                        <p className="title__speci-item" style={{ flex: "1" }}>Length</p>
                                        <p className="content__speci-item">{dataItem.length}</p>
                                    </div>
                                    <div className="speci-item">
                                        <p className="title__speci-item" style={{ flex: "1" }}>Width</p>
                                        <p className="content__speci-item">{dataItem.width}</p>
                                    </div>

                                </div>
                                <div className="box-detail__speci-extra">
                                    <div className="speci-item">
                                        <p className="title__speci-item" style={{ flex: "1" }}>Height</p>
                                        <p className="content__speci-item">{dataItem.height}</p>
                                    </div>
                                    <div style={{ width: "50%" }} className="speci-item">
                                        <p className="title__speci-item" style={{ flex: "1" }}>Exterior color</p>
                                    </div>
                                </div>
                                <div style={{ borderTop: "1px solid rgb(180,180,180)", paddingBottom: "10px", marginBottom: "-25px" }}>
                                    <div style={{ width: "100%", marginTop: "15px" }} className="speci-item">
                                        <p className="title__speci-item" style={{ flex: "1", marginBottom: "0px" }}>Location</p>
                                        <p className="content__speci-item">Vietnam</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* description car */}
                        <div className="container__speci description__details">
                            <p className="title__speci">Describe</p>
                            <div className="box-detail__speci">
                                <p className="content-desc__details" style={{ marginBottom: "0px", lineHeight: "23px", color: "#333" }}>{dataItem.desc}</p>
                            </div>
                        </div>

                        {/* popUp - testDrive */}
                        <input className="input_check-testDrive" type="checkbox" id="check-testDrive" style={{ display: "none" }} />

                        <label for="check-testDrive" className="overlay__testDrive"></label>

                        <div className="container__popUp-testdrive">
                            <div className="container__content__popUpTestDrive" style={{ fontFamily: 'Poppins', backgroundColor: '#f0f4fb', padding: '20px', borderRadius: '8px', margin: 'auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                                <h2 style={{ color: '#333', textAlign: 'left' }}>Test drive registration information</h2>
                                <form>
                                    <div style={{ marginBottom: '15px' }}>
                                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Appointment date <span style={{ color: 'red' }}>*</span></label>
                                        <input type="date" placeholder="2024-12-15" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                                    </div>
                                    <div style={{ marginBottom: '15px' }}>
                                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Time <span style={{ color: 'red' }}>*</span></label>
                                        <input type="time" placeholder="15:57" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                                    </div>
                                    <div style={{ marginBottom: '15px' }}>
                                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Full name <span style={{ color: 'red' }}>*</span></label>
                                        <input type="text" placeholder="Nguyen Van A" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                                    </div>
                                    <div style={{ marginBottom: '15px' }}>
                                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Phone number <span style={{ color: 'red' }}>*</span></label>
                                        <input type="text" placeholder="Phone number" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <button type="button" className="btn-close__testDrive">
                                            <label style={{ cursor: "pointer" }} for="check-testDrive">Close</label>
                                        </button>
                                        <button type="submit" className="btn-confirm__testDrive">Confirm</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                ) : (
                    <p>Không có ảnh hoặc dữ liệu không hợp lệ</p>  
                )
                }
                <div>                    
                    <Footer/>
                </div>
            </main >
        </div >
    );
}

export default CarDetailFERRARI;

