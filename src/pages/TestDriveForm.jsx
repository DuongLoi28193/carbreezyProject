import React, { useState } from "react";

function TestDriveForm() {
    const [formData, setFormData] = useState({
        appointmentDate: "",
        time: "",
        fullName: "",
        phoneNumber: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.appointmentDate) {
            newErrors.appointmentDate = "Please select an appointment date.";
        }

        if (!formData.time) {
            newErrors.time = "Please select a time.";
        }

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required.";
        }

        if (!formData.phoneNumber) {
            newErrors.phoneNumber = "Phone number is required.";
        } else if (!/^\d{10,11}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Invalid phone number. Must be 10-11 digits.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Form submitted successfully!");
            setFormData({
                appointmentDate: "",
                time: "",
                fullName: "",
                phoneNumber: "",
            });
            setErrors({});
        }
    };

    return (
        <div className="container__popUp-testdrive">
            <div className="container__content__popUpTestDrive" style={{ fontFamily: 'Poppins', backgroundColor: '#f0f4fb', padding: '20px', borderRadius: '8px', margin: 'auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <h2 style={{ color: '#333', textAlign: 'left' }}>Test drive registration information</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Appointment date <span style={{ color: 'red' }}>*</span></label>
                        <input
                            type="date"
                            name="appointmentDate"
                            value={formData.appointmentDate}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                        {errors.appointmentDate && <p style={{ color: 'red', marginTop: '5px' }}>{errors.appointmentDate}</p>}
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Time <span style={{ color: 'red' }}>*</span></label>
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                        {errors.time && <p style={{ color: 'red', marginTop: '5px' }}>{errors.time}</p>}
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Full name <span style={{ color: 'red' }}>*</span></label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            onBlur={validateForm}
                            placeholder="Enter Your Name"
                            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                        {errors.fullName && <p style={{ color: 'red', marginTop: '5px' }}>{errors.fullName}</p>}
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Phone number <span style={{ color: 'red' }}>*</span></label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            onBlur={validateForm}
                            placeholder="Phone number"
                            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                        {errors.phoneNumber && <p style={{ color: 'red', marginTop: '5px' }}>{errors.phoneNumber}</p>}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                        <button type="button" className="btn-close__testDrive">
                            <label style={{ cursor: "pointer" }} htmlFor="check-testDrive">Close</label>
                        </button>
                        <button type="submit" className="btn-confirm__testDrive">Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TestDriveForm;
