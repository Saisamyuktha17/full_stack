import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
            const response = await fetch('http://localhost:9001/login', {
                method: 'POST', // Changed to POST
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData) // Sends form data
            });
            const result = await response.json();

            if (result.isLoggedIn) {
                navigate('/contact'); // Navigate to signup or home page on success
            } else {
                setResponseMessage(result.message || 'Login failed');
            }
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
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your Password"
                        />
                    </label>
                    <button type="submit">LOGIN</button>
                </form>
                {responseMessage && <p>{responseMessage}</p>}
            </div>
        </footer>
    );
};

export default Login;