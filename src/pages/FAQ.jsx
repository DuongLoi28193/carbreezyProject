import React, { useState } from "react";
import Footer from "./Footer";

const FAQComponent = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    // FAQ LIST
    const faqs = [
        {
            question: "How can I buy a car from CarBreezy?",
            answer: "You can visit our website, select the car you want and contact us by phone or email to complete the transaction.",
        },
        {
            question: "Does CarBreezy provide maintenance and repair services?",
            answer: "No, but we can refer you to reputable maintenance and repair service providers.",
        },
        {
            question: "Does CarBreezy provide home delivery service?",
            answer: "Yes, we offer home delivery service within the city and surrounding areas with reasonable shipping charges.",
        },
        {
            question: "How can I contact CarBreezy?",
            answer: "You can contact us by phone, email, or in person. Details are available on our website.",
        },
        {
            question: "Does CarBreezy provide financial support when purchasing a car?",
            answer: "No, we do not currently offer vehicle financing.",
        },
        {
            question: "What payment methods does CarBreezy have?",
            answer: "We accept cash and bank transfer payments.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            {/* space white  */}
            <div className="space-white"></div>

            {/* Frequently Asked Questions */}
            <main>
                <p className="title-FAQ">Frequently Asked Questions</p>
                <p className="desc-FAQ">Do you need help with something or have a question about our service?</p>

                <div className='container-question'>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            style={{
                                marginBottom: "10px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                overflow: "hidden",
                            }}>

                            <div
                                onClick={() => toggleFAQ(index)}
                                style={{
                                    padding: "15px",
                                    backgroundColor: "#fff",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    cursor: "pointer",
                                }}
                            >
                                <span className='question-faq'>{faq.question}</span>
                                <span>{activeIndex === index ? "-" : "+"}</span>
                            </div>

                            {activeIndex === index && (
                                <div
                                    style={{
                                        padding: "15px", paddingLeft: "25px",
                                        paddingTop: "10px",
                                        backgroundColor: "#fff", color: "#555", boxShadow: "none", marginTop: "-10px", fontSize: "16px"
                                    }}>
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </main>

            <div className="box_more-question">
                <p className='title-have-other'>Have other question?</p>
                <p className='not-hesitate'>Don't hesitate to email us with your questions or comments:</p>
                <a href="mailto:support@carbreezy.com?subject=More%20Question%20For%20CarBreezy">
                    <button className='btn-support'>support@carbreezy.com</button>
                </a>

            </div>

            <Footer />
        </div >
    );
};

export default FAQComponent;
