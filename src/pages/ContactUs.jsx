import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone, faClock } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        comments: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email address is required";
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = "Email address is invalid";
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
        }

        if (!formData.comments.trim()) {
            newErrors.comments = "Comments/Questions are required";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            alert("Form submitted successfully!");
            console.log(formData);

            setFormData({
                name: "",
                email: "",
                subject: "",
                comments: "",
            });
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div style={{ paddingTop: "70px" }}>
            <div className="cont-us-banner">
                <div className="contus-overlay"></div>
                <span className="cont-us_content">
                    <h1>CONTACT US</h1>
                </span>
            </div>
            {/* <div className="cont-us-info">
                <div className="cont-us-getin">
                    <h1>Get In Touch</h1>
                    <div className="cont-us-icon">
                        <div className="cont-us-icon2">
                            <span>
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: "#BD1919", marginRight: "10px" }} />
                                590 CMT8 Street, District3, Ho Chi Minh, VietNam
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#BD1919", marginRight: "10px" }} />
                                carbreezyCar@gmail.com
                            </span>
                        </div>
                        <div className="cont-us-icon2">
                            <span>
                                <FontAwesomeIcon icon={faPhone} style={{ color: "#BD1919", marginRight: "10px" }} />
                                0825 355 355
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faClock} style={{ color: "#BD1919", marginRight: "10px" }} />
                                carbreezyCar@gmail.com
                            </span>
                        </div>
                    </div>
                    <div className="cont-us_ggmap">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3253163053173!2d56.66372207616801!3d5.786376989363044!2m3!1f0!2f0!3f0!3m2!1i524!2i768!4f13.1!3m3!1m2!1s0x31752ed2182fc277%3A0xd13475e1f695561e!2zU2nDqnUgVGjhu4sgxJBp4buHbiBNw6F5IE7hu5lpIFRo4bqldCBDaOG7oyBM4bubbg!5e0!3m2!1sen!2s!4v1734391378686!5m2!1sen!2s" ></iframe>
                    </div>
                </div>
                <div className="cont-us-about">
                    <div className="contus-keepclose">
                        <span><hr style={{ width: "50px" }} /></span>
                        <span>KEEP CLOSE</span>
                    </div>
                    <div className="contus-aboutus">
                        <h1>About Us</h1>
                        <div className="contus-introduce">
                            <div style={{ width: "85%" }}>
                                <span style={{ color: "#BD1919" }}>CarBreezyp</span> is a leading automotive digital marketplace that seeks to make car buyingand selling easy, transparent and efficient.
                                Your car buying destiny is in your hands, but we will help you every step of the way. Webuilt this site to make car buying as fast and easy as possible.
                            </div>
                            <div style={{ width: "85%" }}>
                                <span style={{ color: "#BD1919" }}>CarBreezy</span> has built a trusted brand and a strong reputation for providing consumers withuseful tools, research, market context and pricing transparency as they embark on theircar-buying journey. The Company is bringing more of the purchasing process online by
                                allowing consumers to find a vehicle that is marginRight for them and complete their purchasewith all from the comfort of their home.
                            </div>
                        </div>
                    </div>
                    <div className="contus-yourdetails">
                        <div>
                            <h1 style={{ marginRight: "70px 0 0 0" }}>YOUR DETAILS</h1>
                            <span style={{ color: "#767676" }}>Let us know how to get back to you!</span>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="contus-getinfo">
                                <div className="contus-name_mail">
                                    <div className="contus_name">
                                        <h5>NAME *</h5>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                                    </div>
                                    <div className="contus_mail">
                                        <h5>EMAIL ADDRESS *</h5>
                                        <input
                                            type="text"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                                    </div>
                                </div>
                                <div className="contus-Subject">
                                    <h5>SUBJECT *</h5>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                    {errors.subject && <p style={{ color: "red" }}>{errors.subject}</p>}
                                </div>
                                <div className="contus-questions">
                                    <h5>COMMENTS/QUESTIONS *</h5>
                                    <textarea
                                        name="comments"
                                        value={formData.comments}
                                        onChange={handleChange}
                                        rows="5"
                                    ></textarea>
                                    {errors.comments && (
                                        <p style={{ color: "red" }}>{errors.comments}</p>
                                    )}
                                </div>
                                <div className="contus-btn">
                                    <button type="submit">SEND</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}

            <div className="cont-us-info">
                <div className="cont-us-getin">
                    <h1>Get In Touch</h1>
                    <div className="cont-us-icon">
                        <div className="cont-us-icon2">
                            <span>
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: "#BD1919", marginRight: "10px" }} />
                                2425 Carriage Loop Sw
                                Olympia, WA 98502
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#BD1919", marginRight: "10px" }} />
                                carbreezyCar@gmail.com
                            </span>
                        </div>
                        <div className="cont-us-icon2">
                            <span>
                                <FontAwesomeIcon icon={faPhone} style={{ color: "#BD1919", marginRight: "10px" }} />
                                +1 253-289-5242
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faClock} style={{ color: "#BD1919", marginRight: "10px" }} />
                                carbreezyCar@gmail.com
                            </span>
                        </div>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.381617533073!2d-122.93148629999997!3d47.032742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549175b27b9a2823%3A0x27d8c680f79bfddd!2s2425%20Carriage%20Loop%20SW%2C%20Olympia%2C%20WA%2098502%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1734876448707!5m2!1svi!2s"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </div>

                <div className="cont-us-about">
                    <div className="contus-keepclose">
                        <span><hr className="hr__contact" style={{ width: "50px" }} /></span>
                        <span className="keep-close__contact">KEEP CLOSE</span>
                    </div>
                    <div className="contus-aboutus">
                        <h1>About Us</h1>
                        <div className="contus-introduce">
                            <div style={{ width: "100%" }}>
                                <p>
                                    <span className="color">CarBreezy</span> is a leading digital marketplace that makes car buying and selling easy, transparent, and efficient. We provide useful tools, research, and pricing transparency to help consumers make informed decisions.
                                </p>
                            </div>
                            <div style={{ width: "100%" }}>
                                <p>
                                    Our platform allows buyers to find the right vehicle and complete the entire purchase process from the comfort of their home, bringing more of the car-buying journey online. With a trusted brand and strong reputation, <span className="color">CarBreezy</span> ensures a fast, convenient, and seamless car-buying experience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="contus-yourdetails">
                        <div>
                            <h1 style={{ marginRight: "70px 0 0 0" }}>YOUR DETAILS</h1>
                            <span style={{ color: "#767676" }}>Let us know how to get back to you!</span>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="contus-getinfo">
                                <div className="contus-name_mail">
                                    <div className="contus_name">
                                        <h5>NAME *</h5>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                                    </div>
                                    <div className="contus_mail">
                                        <h5>EMAIL ADDRESS *</h5>
                                        <input
                                            type="text"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}

                                        />
                                        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                                    </div>
                                </div>
                                <div className="contus-Subject">
                                    <h5>SUBJECT *</h5>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                    {errors.subject && <p style={{ color: "red" }}>{errors.subject}</p>}
                                </div>
                                <div className="contus-questions">
                                    <h5>COMMENTS/QUESTIONS *</h5>
                                    <textarea
                                        name="comments"
                                        value={formData.comments}
                                        onChange={handleChange}
                                        rows="5"
                                    ></textarea>
                                    {errors.comments && (
                                        <p style={{ color: "red" }}>{errors.comments}</p>
                                    )}
                                </div>
                                <div className="contus-btn">
                                    <button className="btn-send__contact" type="submit">SEND</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ContactUs;