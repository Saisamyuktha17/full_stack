import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [responseMessage, setResponseMessage] = useState("");
    const navigate = useNavigate();

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
            const response = await fetch('http://localhost:9001/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            let result;
            const contentType = response.headers.get('Content-Type');
            if (contentType && contentType.includes('application/json')) {
                result = await response.json();
            } else {
                result = { message: await response.text() };
            }

            if (result.isLoggedIn) {
                navigate('/contact'); 
            } else {
                setResponseMessage(result.message || 'Submission failed');
            }
        } catch (err) {
            console.error('Error submitting form:', err);
            setResponseMessage('Error submitting form');
        }
    };

    return (
        <footer style={{ padding: "20px", backgroundColor: "#f8f9fa", textAlign: "center"}}>
            <div>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <label style={{ display: "flex", flexDirection: "column", fontSize: "14px", color: "#333" }}>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc", fontSize: "14px" }}
                        />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", fontSize: "14px", color: "#333" }}>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your Password"
                            style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc", fontSize: "14px" }}
                        />
                    </label>
                    <button type="submit" style={{ padding: "10px 15px", backgroundColor: "blue", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "14px" }}>
                        SIGNUP
                    </button>
                </form>
                {responseMessage && <p style={{ marginTop: "15px", color: responseMessage.includes('Error') ? "#d9534f" : "#5cb85c", fontSize: "14px" }}>{responseMessage}</p>}
            </div>
        </footer>
    );
};

export default SignUp;