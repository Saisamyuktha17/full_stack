import React, { useState } from "react";
import '../../assets/css/Form.css';

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        email: ""
    });

    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:9001/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            setResponseMessage(result.message || 'Submission successful');
        } catch (err) {
            console.error('Error submitting form:', err);
            setResponseMessage('Error submitting form');
        }
    };

    return (
        <footer>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                        />
                    </label>
                    <label>
                        Phone Number:
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                        />
                    </label>
                    <label>
                        Email ID:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
                {responseMessage && <p>{responseMessage}</p>}
            </div>
        </footer>
    );
};

export default Form;