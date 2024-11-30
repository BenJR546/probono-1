import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt, FaUser, FaPenFancy } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you for reaching out! We'll get back to you soon.");
        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
        });
    };

    return (
        <div className="container mt-5">
            {/* Page Header */}
            <header className="text-center mb-5">
                <h1 className="display-4 fw-bold" style={{ color: "#004d40" }}>
                    <FaEnvelope className="me-2 text-teal" />
                    Contact Us
                </h1>
                <p className="fs-5" style={{ color: "#00695c" }}>
                    We welcome new members! Use the form below to contact us or
                    email us directly at{" "}
                    <a
                        href="mailto:mecfsfmwollongong@gmail.com"
                        className="text-decoration-none fw-bold"
                        style={{ color: "#004d40" }}
                    >
                        mecfsfmwollongong@gmail.com
                    </a>
                    .
                </p>
            </header>

            {/* Contact Form */}
            <Card className="shadow-sm border-0">
                <Card.Body
                    style={{
                        backgroundColor: "#e0f2f1",
                        borderRadius: "8px",
                    }}
                >
                    <Form onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <Form.Group controlId="formName" className="mb-4">
                            <Form.Label>
                                <FaUser className="me-2 text-primary" />
                                Name
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                                style={{ borderRadius: "8px" }}
                            />
                        </Form.Group>

                        {/* Email Field */}
                        <Form.Group controlId="formEmail" className="mb-4">
                            <Form.Label>
                                <FaEnvelope className="me-2 text-primary" />
                                Email
                            </Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email address"
                                required
                                style={{ borderRadius: "8px" }}
                            />
                        </Form.Group>

                        {/* Phone Field (Optional) */}
                        <Form.Group controlId="formPhone" className="mb-4">
                            <Form.Label>
                                <FaPhoneAlt className="me-2 text-primary" />
                                Phone (Optional)
                            </Form.Label>
                            <Form.Control
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                style={{ borderRadius: "8px" }}
                            />
                        </Form.Group>

                        {/* Message Field */}
                        <Form.Group controlId="formMessage" className="mb-4">
                            <Form.Label>
                                <FaPenFancy className="me-2 text-primary" />
                                Message
                            </Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Enter your message"
                                required
                                style={{ borderRadius: "8px" }}
                            />
                            <Form.Text style={{ color: "#004d40" }}>
                                Let us know if you are a sufferer, carer, family
                                member, or health professional. If you are a
                                sufferer, please include your condition (e.g.,
                                ME/CFS, FM, MCS, or other neuroimmune
                                condition).
                            </Form.Text>
                        </Form.Group>

                        {/* Submit Button */}
                        <div className="text-center">
                            <Button
                                type="submit"
                                size="lg"
                                style={{
                                    backgroundColor: "#004d40",
                                    borderColor: "#004d40",
                                    borderRadius: "8px",
                                }}
                            >
                                Send Message
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Contact;
