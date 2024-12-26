import { Link, Routes, Route, useNavigate } from "react-router-dom"
import Footer from "./Footer";
import React, { useState } from 'react';

function Offers({ dataUsed }) {

    const nav = useNavigate();

    return (
        <div>
            <div className="bgOffers">
                <div className="bgColorOffers">
                    <div style={{ marginTop: "180px" }}>
                        <p className="title-extra-Offers">Discover unbeatable car deals tailored to your needs and budget. </p>
                        <p className="title-Offers">Drive Home with the Best Deal</p>
                        <button className="btn-greeting-Offers">See now</button>
                    </div>
                </div>
            </div>

            {/* Top Featured Cars with Exclusive Offers  */}
            <div>
                {/* {dataUsed.map((car) => ( */}
                <div>
                    <div className="container_offers-car-basic">
                        {/* offer-car-1 */}
                        <div className="offers-car_item-1" id="offer1" >
                            <img className="img-offers-car-1" src="../img/kia02.jpg" alt="" />
                            <div className="infoCar-offers">
                                <p className="nameCar-offers">Kia Carens Signature Premium MPV 2023</p>
                                <p className="descCar-offers">Spacious design, advanced technology, and powerful performance. The perfect choice for your family! Explore now and enjoy exclusive offers!</p>
                                <button onClick={() => nav(`/offers/41`)} className="btnView-offers btn-greeting-Offers">View Details</button>
                            </div>
                        </div>

                        {/* offer-car-2 */}
                        <div className="offers-car_item-1">
                            <div className="infoCar-offers">
                                <p className="nameCar-offers">Tesla Model 3 Long Range Dual Motor AWD 2022</p>
                                <p className="descCar-offers">Experience unmatched range, dual-motor precision, and cutting-edge technology. Drive the future today with Tesla. Book your test drive now!</p>
                                <button onClick={() => nav(`/offers/45`)} className="btnView-offers btn-greeting-Offers">View Details</button>
                            </div>
                            <img className="img-offers-car-1" src="../img/tesla006.jpg" alt="" />
                        </div>


                        <div className="box__designExtra-layout">
                            <div onClick={() => nav(`/offers/46`)} className="designExtra-item">
                                <div className="designExtra-img-1">
                                    <div className="designExtra-color">
                                        <p className="title-title__offers">Kia Sonet 1.5L Turbo Premium Compact 2022 - Power Meets Style</p>
                                        <p className="desc-desc__offers">Drive smart, drive premium. Experience it now!</p>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => nav(`/offers/36`)} className="designExtra-item">
                                <div className="designExtra-img-2">
                                    <div className="designExtra-color">
                                        <p className="title-title__offers">Ford Everest Sport 2.0L Turbo 4x2 Automatic 2021</p>
                                        <p className="desc-desc__offers">Conquer every journey in style. Drive it today!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >

                    <div style={{ textAlign: "center", marginTop: "50px", marginBottom: "0px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="180" height="20" viewBox="0 0 224 20" fill="none">
                            <path d="M10 10H214" stroke="#BD1919" stroke-width="20" stroke-linecap="round" />
                        </svg>
                        <p style={{ marginTop: "10px" }} className='title-favouriteCar'>New Top Cars with Exclusive Deals</p>
                    </div>

                    <div className="container_offers-car-advance">
                        {/* offer-car-4 */}
                        <div onClick={() => nav(`/offers/newCar/26`)} className="offers-car_item-4">
                            <div className="bgColor-offers-car_item-4">
                                <div className="infor-car-4">
                                    <p className="name-name_offers-4567" style={{ color: "#fff", fontFamily: "Poppins", fontWeight: "bold" }}>Ferrari Roma Spider</p>
                                    <p className="des-des_offers-4567" style={{ color: "#fff", fontFamily: "Poppins", fontWeight: "400", textAlign: "center", marginTop: "-10px", marginBottom: "40px" }}>Experience the thrill of a 2024 V8 Twin-Turbo, RWD masterpiece – where power meets open-top elegance!</p>
                                    <button className="btn-offers-car-4">View Supercar</button>
                                </div>
                            </div>
                        </div>

                        {   /* offer-car-5 */}
                        <div onClick={() => nav(`/offers/newCar/05`)} className="offers-car_item-5">
                            <div className="bgColor-offers-car_item-5">
                                <div className="infor-car-5">
                                    <p className="name-name_offers-4567" style={{ color: "#fff", fontSize: "40px", fontFamily: "Poppins", fontWeight: "bold" }}>Ford Territory</p>
                                    <p className="des-des_offers-4567" style={{ color: "#fff", fontFamily: "Poppins", fontWeight: "400", textAlign: "center", marginTop: "-10px", marginBottom: "40px" }}>Stylish, smart, and built for comfort!</p>
                                    <button className="btn-offers-car-5">View
                                        CUV</button>
                                </div>
                            </div>
                        </div>

                        {   /* offer-car-6 */}
                        <div onClick={() => nav(`/offers/newCar/37`)} className="offers-car_item-6">
                            <div className="bgColor-offers-car_item-6">
                                <div className="infor-car-6">
                                    <p className="name-name_offers-4567" style={{ color: "#fff", fontFamily: "Poppins", fontWeight: "bold" }}>Ford Tourneo</p>
                                    <p className="des-des_offers-4567" style={{ color: "#fff", fontSize: "16px", fontFamily: "Poppins", fontWeight: "400", textAlign: "center", marginTop: "-10px", marginBottom: "40px" }}>Versatile, and designed for every adventure!</p>
                                    <button className="btn-offers-car-6">View MPV</button>
                                </div>
                            </div>
                        </div>

                        {   /* offer-car-7 */}
                        <div onClick={() => nav(`/offers/newCar/20`)} className="offers-car_item-7">
                            <div className="bgColor-offers-car_item-7">
                                <div className="infor-car-7">
                                    <p className="name-name_offers-4567" style={{ color: "#fff", fontFamily: "Poppins", fontWeight: "bold" }}>Mazda SkyActiv Luxury 2022</p>
                                    <p className="des-des_offers-4567 verySmall" style={{ color: "#fff", fontSize: "16px", fontFamily: "Poppins", fontWeight: "400", textAlign: "center", marginTop: "-10px", marginBottom: "40px" }}>Combining sleek design, advanced technology, and a 6-speed transmission for a refined and dynamic driving experience!</p>
                                    <button className="btn-offers-car-7">View Sedans</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* )) */}
                {/* } */}

                {/* Drive Confidently with CarBreezy Insurance */}
                <div style={{ textAlign: "center", marginTop: "150px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="180" height="20" viewBox="0 0 224 20" fill="none">
                        <path d="M10 10H214" stroke="#BD1919" stroke-width="20" stroke-linecap="round" />
                    </svg>
                    <p style={{ marginTop: "10px", marginBottom: "80px" }} className='title-favouriteCar'>Drive Confidently with <span className="color">CarBreezy</span> Insurance</p>
                </div>

                <div className="container_insurances">
                    <div className="insurance-item">
                        <img style={{ marginTop: "-15px" }} className="img-insurance" src="../img/insurance-logo-1.jpg" alt="" />
                        <p className="category-service">Engine Hydrolock</p>
                        <p className="desc-detail_insurance">MBI insured customers: <span className="hl-word">$560</span></p>
                        <p className="desc-detail_insurance">MBI uninsured customers: <span className="hl-word">$1050</span></p>
                        <p className="desc-detail_insurance">Uninsured: <span className="hl-word">$1500</span></p>
                    </div>
                    <div className="insurance-item">
                        <img className="img-insurance" src="../img/insurance-logo-2.jpg" alt="" />
                        <p className="category-service">Extended Warranty</p>
                        <div className="infor-insurance">
                            <p className="desc-detail_insurance">✔️<span className="hl-word">1-year</span> renewal package: receive a <span className="hl-word">$100</span> gas voucher immediately</p>
                            <p className="desc-detail_insurance">✔️<span className="hl-word">2-year</span> renewal package: receive a <span className="hl-word">$250</span> gas voucher immediately</p>
                        </div>
                    </div>
                </div>

                <div className="container_insurances">
                    <div className="insurance-item">
                        <img style={{ width: "250px", height: "250px", marginTop: "10px" }} className="img-insurance" src="../img/insurance-logo-3.jpg" alt="" />
                        <div className="infor-insurance">
                            <p style={{ marginTop: "-40px" }} className="category-service">Special Tires</p>
                            <p className="desc-detail_insurance"><span className="hl-word">2 tires:</span> Free replacement labor</p>
                            <p className="desc-detail_insurance"><span className="hl-word">4 tires:</span> Free replacement labor, free tire of the same specifications</p>
                        </div>
                    </div>
                    <div className="insurance-item">
                        <img style={{ width: "250px", height: "250px" }} className="img-insurance" src="../img/insurance-logo-4.jpg" alt="" />
                        <div className="infor-insurance">
                            <p style={{ marginTop: "-40px" }} className="category-service">Trusted Partners</p>
                            <p className="desc-detail_insurance">Comprehensive auto insurance with affordable packages, fast claims processing, and support from top insurance partners.</p>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div >

    );
}


export default Offers;