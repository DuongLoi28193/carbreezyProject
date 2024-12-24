import Footer from "./Footer";

function Offers() {
    return (
        <div>
            <div className="bgOffers">
                <div className="bgColorOffers">
                    <div style={{ marginTop: "180px" }}>
                        <p className="title-extra-Offers">Discover unbeatable car deals tailored to your needs and budget. </p>
                        <p className="title-Offers">Welcome to Offers of Car</p>
                        <button className="btn-greeting-Offers">See now</button>
                    </div>
                </div>
            </div>

            <div style={{ textAlign: "center", marginTop: "150px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="180" height="20" viewBox="0 0 224 20" fill="none">
                    <path d="M10 10H214" stroke="#BD1919" stroke-width="20" stroke-linecap="round" />
                </svg>
                <p style={{ marginTop: "10px" }} className='title-favouriteCar'>Top Featured Cars with Exclusive Offers</p>
            </div>

            <div className="container_offers-car-basic">
                {/* offer-car-1 */}
                <div className="offers-car_item-1">
                    <img className="img-offers-car-1" src={process.env.PUBLIC_URL+"/img/car-offers-1.jpg"} alt="" />
                    <div className="infoCar-offers">
                        <p className="nameCar-offers">SUV CLearance Sale</p>
                        <p className="descCar-offers">Explore our incredible discounts on a wide range of SUVs. Perfect for families and adventurers alike, these deals won't last long!</p>
                        <button className="btnView-offers btn-greeting-Offers">View Details</button>
                    </div>
                </div>

                {/* offer-car-2 */}
                <div className="offers-car_item-2">
                    <div className="bgColor-offers-item">
                        <div className="infoCar-offers-2">
                            <p className="nameCar-offers-2">SUV CLearance Sale</p>
                            <p className="descCar-offers-2">Explore our incredible discounts on a wide range of SUVs. Perfect for families and adventurers alike, these deals won't last long!</p>
                            <button className="btnView-offers btn-greeting-Offers">View Details</button>
                        </div>
                    </div>
                </div>

                {/* offer-car-3 */}
                <div className="offers-car_item-1">
                    <div className="infoCar-offers">
                        <p className="nameCar-offers">SUV CLearance Sale</p>
                        <p className="descCar-offers">Explore our incredible discounts on a wide range of SUVs. Perfect for families and adventurers alike, these deals won't last long!</p>
                        <button className="btnView-offers btn-greeting-Offers">View Details</button>
                    </div>
                    <img className="img-offers-car-1" src="../img/car-offers-6.jpeg" alt="" />
                </div>
            </div>

            <div className="container_offers-car-advance">
                {   /* offer-car-4 */}
                <div className="offers-car_item-4">
                    <div className="bgColor-offers-car_item-4">
                        <div className="infor-car-4">
                            <p style={{ color: "#fff", fontSize: "40px", fontFamily: "Poppins", fontWeight: "bold" }}>Sedans</p>
                            <p style={{ color: "#fff", fontSize: "16px", fontFamily: "Poppins", fontWeight: "400", width: "500px", textAlign: "center", marginTop: "-10px", marginBottom: "40px" }}>Explore our wide selection of sedans that combine style, comfort, and efficiency for everyday driving.</p>
                            <button className="btn-offers-car-4">View Sedans</button>
                        </div>
                    </div>
                </div>

                {   /* offer-car-5 */}
                <div className="offers-car_item-5">
                    <div className="bgColor-offers-car_item-5">
                        <div className="infor-car-5">
                            <p style={{ color: "#fff", fontSize: "40px", fontFamily: "Poppins", fontWeight: "bold" }}>SUVs</p>
                            <p style={{ color: "#fff", fontSize: "16px", fontFamily: "Poppins", fontWeight: "400", width: "300px", textAlign: "center", marginTop: "-10px", marginBottom: "40px" }}>Discover the versatility of our SUVs, perfect for families and adventurous spirits alike.</p>
                            <button className="btn-offers-car-5">View Sedans</button>
                        </div>
                    </div>
                </div>

                {   /* offer-car-6 */}
                <div className="offers-car_item-6">
                    <div className="bgColor-offers-car_item-6">
                        <div className="infor-car-6">
                            <p style={{ color: "#fff", fontSize: "40px", fontFamily: "Poppins", fontWeight: "bold" }}>SUVs</p>
                            <p style={{ color: "#fff", fontSize: "16px", fontFamily: "Poppins", fontWeight: "400", width: "300px", textAlign: "center", marginTop: "-10px", marginBottom: "40px" }}>Discover the versatility of our SUVs, perfect for families and adventurous spirits alike.</p>
                            <button className="btn-offers-car-6">View Sedans</button>
                        </div>
                    </div>
                </div>

                {   /* offer-car-7 */}
                <div className="offers-car_item-7">
                    <div className="bgColor-offers-car_item-7">
                        <div className="infor-car-7">
                            <p style={{ color: "#fff", fontSize: "40px", fontFamily: "Poppins", fontWeight: "bold" }}>Sedans</p>
                            <p style={{ color: "#fff", fontSize: "16px", fontFamily: "Poppins", fontWeight: "400", width: "500px", textAlign: "center", marginTop: "-10px", marginBottom: "40px" }}>Explore our wide selection of sedans that combine style, comfort, and efficiency for everyday driving.</p>
                            <button className="btn-offers-car-7">View Sedans</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* Drive Confidently with CarBreezy Insurance */}
            <div style={{ textAlign: "center", marginTop: "150px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="180" height="20" viewBox="0 0 224 20" fill="none">
                    <path d="M10 10H214" stroke="#BD1919" stroke-width="20" stroke-linecap="round" />
                </svg>
                <p style={{ marginTop: "10px", marginBottom: "100px" }} className='title-favouriteCar'>Drive Confidently with <span className="color">CarBreezy</span> Insurance</p>
            </div>

            <div className="container_insurances">
                <div className="insurance-item">
                    <img style={{ marginTop: "-15px" }} className="img-insurance" src={process.env.PUBLIC_URL+"/img/insurance-logo-1.jpg"} alt="" />
                    <p className="category-service">Engine Hydrolock</p>
                    <p className="desc-detail_insurance">MBI insured customers: <span className="hl-word">$560</span></p>
                    <p className="desc-detail_insurance">MBI uninsured customers: <span className="hl-word">$1050</span></p>
                    <p className="desc-detail_insurance">Uninsured: <span className="hl-word">$1500</span></p>
                </div>
                <div className="insurance-item">
                    <img className="img-insurance" src={process.env.PUBLIC_URL + "/img/insurance-logo-2.jpg"} alt="" />
                    <p className="category-service">Extended Warranty</p>
                    <div className="infor-insurance">
                        <p className="desc-detail_insurance">✔️<span className="hl-word">1-year</span> renewal package: receive a <span className="hl-word">$100</span> gas voucher immediately</p>
                        <p className="desc-detail_insurance">✔️<span className="hl-word">2-year</span> renewal package: receive a <span className="hl-word">$250</span> gas voucher immediately</p>
                    </div>
                </div>

                <div className="insurance-item">
                    <img style={{ width: "250px", height: "250px", marginTop: "10px" }} className="img-insurance" src={ process.env.PUBLIC_URL + "/img/insurance-logo-3.jpg"} alt="" />
                    <div className="infor-insurance">
                        <p style={{ marginTop: "-40px" }} className="category-service">Special Tires</p>
                        <p className="desc-detail_insurance"><span className="hl-word">2 tires:</span> Free replacement labor</p>
                        <p className="desc-detail_insurance"><span className="hl-word">4 tires:</span> Free replacement labor, free tire of the same specifications</p>
                    </div>
                </div>
                <div className="insurance-item">
                    <img style={{ width: "250px", height: "250px" }} className="img-insurance" src={process.env.PUBLIC_URL+"/img/insurance-logo-4.jpg"} alt="" />
                    <div className="infor-insurance">
                        <p style={{ marginTop: "-40px" }} className="category-service">Trusted Partners</p>
                        <p className="desc-detail_insurance">Comprehensive auto insurance with affordable packages, fast claims processing, and support from top insurance partners.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default Offers;