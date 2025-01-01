import { Link, Routes, Route } from 'react-router-dom'
import CarMenu from './FavouriteCar';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import FAQComponent from './FAQ';
import VideoBackground from './videoBg';
import BrandsCarousel from './CarouselBrands';
import Footer from './Footer';

function Home() {
    return (
        // WELCOME TO CARBREEZY
        <div>
            <div className='overlay-title'>
                <VideoBackground />

                <div className='title-greeting'>
                    <p className='p-1'>WELCOME TO <span className='color'>CARBREEZY</span></p>
                    <p className='p-2'><span className='color luxury-text'>Luxury</span> Experience On Every Journey</p>
                </div>
            </div>

            <div className='container-white'>
                <p className='title-brands'>Our premium brands</p>

                {/* Our premium brands */}
                <BrandsCarousel />

                {/* Top favourite car models */}
                <div style={{ textAlign: "center", marginTop: "100px", marginBottom: "30px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="180" height="20" viewBox="0 0 224 20" fill="none">
                        <path d="M10 10H214" stroke="#BD1919" stroke-width="20" stroke-linecap="round" />
                    </svg>
                    <p className='title-favouriteCar'>Top favourite car models</p>

                    <div>
                        <CarMenu />
                    </div>

                    <Link to="/newCar">
                        <button className='btn-MoreCar'>See more car</button>
                    </Link>
                </div>

                {/* Why choose CarBreezy? */}
                <div className='container_reason'>
                    <div style={{ textAlign: "center", marginTop: "100px" }}>
                        <svg style={{ marginTop: "80px", marginBottom: "10px" }} xmlns="http://www.w3.org/2000/svg" width="180" height="20" viewBox="0 0 224 20" fill="none">
                            <path d="M10 10H214" stroke="#BD1919" stroke-width="20" stroke-linecap="round" />
                        </svg>
                    </div>

                    <p className='title-reason'>Why choose <span className='color'>CarBreezy?</span></p>

                    <div className='container_reason-content'>
                        <div className="reason-item">
                            <img className='logo-reason' src={process.env.PUBLIC_URL + "/img/images-removebg-preview_2-removebg-preview.png"} alt="" />
                            <p className='title-reason-content'>Quality and Reliability</p>
                            <p className='reason-content'>CarBreezy offers a range of cars that combine modern technology and high reliability. Each car in our product range is designed to meet the diverse needs of our customers.</p>
                        </div>
                        <div style={{ marginTop: "20px" }} className="reason-item">
                            <img style={{ width: "60px" }} className='logo-reason' src={process.env.PUBLIC_URL + "/img/logo-reason-2.png"} alt="" />
                            <p className='title-reason-content'>Excellent Customer Service</p>
                            <p className='reason-content'>CarBreezy's team is always ready to support you, from car selection to after-sales maintenance, ensuring a perfect experience for each customer.</p>
                        </div>
                        <div className="reason-item">
                            <img className='logo-reason' src={process.env.PUBLIC_URL + "/img/logo-reason-3.png"} alt="" />
                            <p className='title-reason-content'>Competitive Prices</p>
                            <p className='reason-content'>We offer competitive prices on both new and used cars to suit your every need and budget.</p>
                        </div>
                    </div>
                </div>

                {/* Numbers speaking */}
                <div className='bgPicture'>
                    <div className="bgColor">
                        <div style={{ zIndex: "5" }}>
                            <br />
                            <p className='extraTitle-numbers'>OUR CUSTOMISATION</p>
                            <p className='title-numbers'>Car Servin Matched with Great Workmansip</p>
                            <p className='desc-numbers'>Our dedicated team of skilled technicians and mechanics takes pride in delivering top-tier servicing for your beloved vehicle.</p>
                        </div>
                        <div className="container-numbers">
                            <div className="numbers-item">
                                <p className='numbers'>65</p>
                                <p className='numbers-content'>Total Projects</p>
                            </div>
                            <div className="numbers-item">
                                <p className='numbers'>178</p>
                                <p className='numbers-content'>Transparency</p>
                            </div>
                            <div className="numbers-item">
                                <p className='numbers'>563</p>
                                <p className='numbers-content'>Done Projects</p>
                            </div>
                            <div className="numbers-item">
                                <p className='numbers'>4018</p>
                                <p className='numbers-content'>Got Awards</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Customers talk about CarBreezy */}
                <div style={{ textAlign: "center", marginTop: "50px" }}>
                    <svg style={{ marginTop: "80px", marginBottom: "10px" }} xmlns="http://www.w3.org/2000/svg" width="180" height="20" viewBox="0 0 224 20" fill="none">
                        <path d="M10 10H214" stroke="#BD1919" stroke-width="20" stroke-linecap="round" />
                    </svg>
                    <p className='title-reason'>Customers talk about <span className='color'>CarBreezy?</span></p>
                    <p className='desc-title'>More than 1,000 customers have trusted and are using CarBreezy's sevice with satisfaction in receiving the most professional care and servie</p>

                    <div className="container-feedback">
                        <div className="feedback-item">
                            <div className='header-feedback'>
                                <img className='star' src={process.env.PUBLIC_URL + "/img/star.png"} alt="" />
                                <div style={{ width: "70px" }}></div>
                                <p className='day'>12/05/2024</p>
                            </div>
                            <p className='info_title-feedback'>Mr. Nguyen Van Dinh bought an Mustang car.</p>
                            <p className='info_detail-feedback'>Completely satisfied with the quality of the cars as well as the staff at the branch. I have no complaints about CarBreezy</p>
                            <p className='info-title-footer-a'>Mr. Nguyen Van Dinh - TPHCM</p>
                            <p className='info-car'>Ford Ranger</p>
                        </div>
                        <div className="feedback-item">
                            <div className='header-feedback'>
                                <img className='star' src={process.env.PUBLIC_URL + "/img/star.png"} alt="" />
                                <div style={{ width: "70px" }}></div>
                                <p className='day'>06/04/2023</p>
                            </div>
                            <p className='info_title-feedback'>Mr. Thanh Loc bought an Cybertruck car.</p>
                            <p className='info_detail-feedback'>Used many cars, bought this car at CarBreezy online, looked at the pictures and received the car delivery notice but was very satisfied with the quality of the car. </p>
                            <p className='info-title-footer-b'>Mr. Thanh Loc  - Ha Noi</p>
                            <p className='info-car'>Tesla Cybertruck</p>
                        </div>
                        <div className="feedback-item">
                            <div className='header-feedback'>
                                <img className='star' src={process.env.PUBLIC_URL + "/img/star.png"} alt="" />
                                <div style={{ width: "70px" }}></div>
                                <p className='day'>20/12/2024</p>
                            </div>
                            <p className='info_title-feedback'>Mr. Michael Gillian bought an Purosangue 2024.</p>
                            <p className='info_detail-feedback'>CarBreezy and the professional staff for creating a memorable car buying experience. Wish CarBreezy more and more development and continue to bring joy to many other customers like me.</p>
                            <p className='info-title-footer-c'>Mr. Michael Gillian - New York</p>
                            <p className='info-car'>Ferrari Monza</p>
                        </div>
                    </div>
                </div>

                {/* banner */}
                <div className='banner'>
                    <p className='title-banner'>CarBreezy -  Used Car Trading Platform</p>
                    <div style={{ justifyContent: "center", display: "flex", gap: "20px" }}>
                        <Link to="/used-car">
                            <button className='btn-buyCar'>Buy car now</button>
                        </Link>
                    </div>
                </div>

                {/* footer */}
                <Footer />

            </div >

            <Routes>
                <Route path='/FAQ' element={<FAQComponent />}></Route>
            </Routes>


        </div >
    );
}

export default Home;
