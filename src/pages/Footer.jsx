import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faFacebook, faYoutube, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import CountUser from './CountUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import Marquee from './Marquee';
library.add(faFacebook, faYoutube, faXTwitter, faLinkedin);

function Footer() {

    const ScrollFooter = () => {
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        };

        useEffect(() => {
            const scrollToTopBtn = document.getElementById("scrollToTopBtn");

            window.onscroll = () => {
                if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                    scrollToTopBtn.style.display = "block";
                } else {
                    scrollToTopBtn.style.display = "none";
                }
            };
        }, []);

        return (
            <button
                id="scrollToTopBtn"
                className="scroll-to-top-btn"
                onClick={scrollToTop}
                style={{ display: 'none' }}
            >
                ↑
            </button>
        );
    };

    const [phone, setPhone] = useState("");
    const [errorPhone, setErrorPhone] = useState("");

    const rePhone = /^[0-9]{8,15}$/;

    const checkPhone = (e) => {
        const valPhone = e.target.value;

        setPhone(valPhone);
        if (valPhone === "") {
            setErrorPhone("Phone must be required");
        }

        else {
            setErrorPhone("");
        }
    }

    const registerSubmit = () => {
        if (errorPhone !== "") {
            alert(Error + " ❌");
            return;
        }

        if (phone === "") {
            alert("Phone field can't be left blank ❌");
        } else if (!rePhone.test(phone)) {
            alert("Phone must be a valid number between 8 and 15 digits ❌");
        } else {
            alert("You registered successfully ✔✨");
        }
    };

    return (
        <div style={{ marginTop: "200px" }}>
            <div className="container__showAllCar">
                <div className="showAllCar-1">
                    <div className="showAllCar-item">
                        <div style={{ textAlign: 'left' }}>
                            <p className="nameBrand-showAllCar">Honda</p>
                            <p className='nameBrand-detail-showAllCar'>Honda Brio</p>
                            <p className='nameBrand-detail-showAllCar'>Honda City</p>
                            <p className='nameBrand-detail-showAllCar'>Honda Civic</p>
                            <p className='nameBrand-detail-showAllCar'>Honda CR-V</p>
                        </div>
                    </div>
                    <div className="showAllCar-item">
                        <div style={{ textAlign: 'left' }}>
                            <p className="nameBrand-showAllCar">KIA</p>
                            <p className='nameBrand-detail-showAllCar'>Kia Carens</p>
                            <p className='nameBrand-detail-showAllCar'>Kia K3</p>
                            <p className='nameBrand-detail-showAllCar'>Kia Rondo</p>
                            <p className='nameBrand-detail-showAllCar'>Kia Sonet</p>
                            <p className='nameBrand-detail-showAllCar'>Kia Sedona</p>
                        </div>
                    </div>
                    <div className="showAllCar-item">
                        <div style={{ textAlign: 'left' }}>
                            <p className="nameBrand-showAllCar">Mazda</p>
                            <p className='nameBrand-detail-showAllCar'>Mazda 3 1.5L</p>
                            <p className='nameBrand-detail-showAllCar'>Mazda 6 2.0L</p>
                            <p className='nameBrand-detail-showAllCar'>Mazda CX-5 2.0L</p>
                            <p className='nameBrand-detail-showAllCar'>Mazda BT-50</p>
                        </div>
                    </div>
                    <div className="showAllCar-item">
                        <div style={{ textAlign: 'left' }}>
                            <p className="nameBrand-showAllCar">Tesla</p>
                            <p className='nameBrand-detail-showAllCar'>Tesla Cybertruck</p>
                            <p className='nameBrand-detail-showAllCar'>Tesla Model 3</p>
                            <p className='nameBrand-detail-showAllCar'>Tesla Model S</p>
                            <p className='nameBrand-detail-showAllCar'>Tesla Model X</p>
                        </div>
                    </div>
                    <div className="showAllCar-item">
                        <div style={{ textAlign: 'left' }}>
                            <p className="nameBrand-showAllCar">Ford</p>
                            <p className='nameBrand-detail-showAllCar'>Ford Everest</p>
                            <p className='nameBrand-detail-showAllCar'>Ford Ranger</p>
                            <p className='nameBrand-detail-showAllCar'>Ford Territory</p>
                            <p className='nameBrand-detail-showAllCar'>Ford Tourneo</p>
                        </div>
                    </div>
                    <div className="showAllCar-item">
                        <div style={{ textAlign: 'left' }}>
                            <p className="nameBrand-showAllCar">Ferrari</p>
                            <p className='nameBrand-detail-showAllCar'>Ferrari Roma Spider</p>
                            <p className='nameBrand-detail-showAllCar'>Ferrari SF90</p>
                            <p className='nameBrand-detail-showAllCar'>Ferrari Monza</p>
                            <p className='nameBrand-detail-showAllCar'>Ferrari Daytona</p>
                            <p className='nameBrand-detail-showAllCar'>Ferrari 296</p>
                            <p className='nameBrand-detail-showAllCar'>Ferrari 488</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container__footer">
                <div className="box__social-footer">
                    <img className="logo-img__footer" src={process.env.PUBLIC_URL + "/img/mainlogo.jpg"} alt="" />
                    <p className="slogan__footer">CarBreezy – Vietnam's top platform for premium and pre-owned vehicles, offering a fast, transparent, and trusted experience.</p>
                    <div className='box-icon__footer'>
                        <div>
                            <a style={{ display: "inline-block", width: "100%" }} href="https://www.facebook.com/easypeasycarbreezy" target='_blank'>
                                <FontAwesomeIcon className='icon__footer' icon={['fab', 'facebook']} />
                            </a>
                        </div>
                        <div>
                            <a style={{ display: "inline-block", width: "100%" }} href="https://www.youtube.com/@carbreezy1639" target='_blank'>
                                <FontAwesomeIcon className='icon__footer' icon={['fab', 'youtube']} />
                            </a>
                        </div>
                        <div>
                            <a style={{ display: "inline-block", width: "100%" }} href="https://x.com/EasyCarBreezy" target='_blank'>
                                <FontAwesomeIcon className='icon__footer' icon={['fab', 'x-twitter']} />
                            </a>
                        </div>
                        <div>
                            <a style={{ display: "inline-block", width: "100%" }} href="https://www.linkedin.com/company/carbreezy/" target='_blank'>
                                <FontAwesomeIcon className='icon__footer' icon={['fab', 'linkedin']} />
                            </a>
                        </div>
                    </div>

                </div>
                <div className="box__content-footer">
                    <div className='box-contentAbove__footer'>
                        <div className='box-signUp__footer'>
                            <p className='sign-up_insurance'>Sign up to buy insurance at CarBreezy</p>
                            <p className='get-the-lastes'>Subscribe now for the latest car insurance deals, promotions, and benefits directly to your inbox!</p>
                            <div>
                                <input onChange={checkPhone} className='input__footer' type="text" placeholder='Enter your phone number' />
                                <button onClick={registerSubmit} className='btn-register_footer'>Register</button>
                            </div>
                            <span style={{ color: "#BD1919" }}>{errorPhone}</span>

                        </div>
                        <div className='countUser-position'>
                            <CountUser />
                        </div>
                    </div>
                    <div className='box-contentUnder__footer'>
                        <div className='col-item__footer'>
                            <p style={{ fontWeight: "bold", fontSize: "20px" }}>Service</p>
                            <Link style={{ textDecoration: "none", color: "#000" }} to="/newCar">
                                <p className='content-col__footer'>Buy a car</p>
                            </Link>
                            <Link style={{ textDecoration: "none", color: "#000" }} to="/used-car">
                                <p className='content-col__footer'>Car for sale</p>
                            </Link>
                            <Link style={{ textDecoration: "none", color: "#000" }} to="/offers">
                                <p className='content-col__footer'>Ride & Save</p>
                            </Link>
                        </div>
                        <div className='col-item__footer'>
                            <p style={{ fontWeight: "bold", fontSize: "20px" }}>Support</p>
                            <Link style={{ textDecoration: "none", color: "#000" }} to="/FAQ">
                                <p className='content-col__footer'>FAQ</p>
                            </Link>
                            <Link style={{ textDecoration: "none", color: "#000" }} to="/contact">
                                <p className='content-col__footer'>Contact</p>
                            </Link>
                        </div>
                        <div className='col-item__footer'>
                            <p style={{ fontWeight: "bold", fontSize: "20px" }}>Contact Us</p>
                            <Link style={{ textDecoration: "none", color: "#000" }} to="mailto:CarBreezy@gmail.com?subject=I%20%E2%80%99d%20appreciate%20CarBreezy%E2%80%99s%20expert%20advice.">
                                <p className='content-col__footer'>
                                    <FontAwesomeIcon style={{ width: "20px" }} icon={faEnvelope} />
                                    CarBreezy@gmail.com</p>
                            </Link>
                            <Link style={{ textDecoration: "none", color: "#000" }} to="tel:+12532895242">
                                <p className='content-col__footer'>Hotline: +1 253-289-5242</p>
                            </Link>
                        </div>
                        <div className='col-item__footer'>
                            <p style={{ fontWeight: "bold", fontSize: "20px" }}>About</p>
                            <p className='content-col__footer'>Company Introduction</p>
                            <p className='content-col__footer'>News</p>
                            <p className='content-col__footer'>Privacy Policy</p>
                            <p className='content-col__footer'>Terms of Use</p>
                            <p className='content-col__footer'>CarBreezy Certification </p>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>

            <div>
                <hr />
                <p className='word__footer' style={{ textAlign: "center", marginBottom: "0px" }}>©<span className='color'>CarBreezy</span> 2024. All rights reserved.</p>
                <Marquee />
            </div>

            <ScrollFooter />

        </div >
    );
}

export default Footer;