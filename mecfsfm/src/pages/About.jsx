import React from "react";
import { Card } from "react-bootstrap";
import { FaHistory, FaUsers, FaBullseye, FaEnvelope } from "react-icons/fa";

const About = () => {
    return (
        <div className="container mt-5">
            {/* Page Header */}
            <header className="text-center mb-5">
                <h1 className="display-4 fw-bold" style={{ color: "#004d40" }}>
                    <FaUsers className="me-2 text-teal" />
                    About Us
                </h1>
                <p className="fs-5" style={{ color: "#00695c" }}>
                    Learn more about the history and people behind the
                    Wollongong ME/CFS/FM Support Group.
                </p>
            </header>

            {/* History Section */}
            <Card className="shadow-sm mb-5 border-0">
                <Card.Body
                    style={{ backgroundColor: "#e0f2f1", borderRadius: "8px" }}
                >
                    <h2 className="mb-4" style={{ color: "#004d40" }}>
                        <FaHistory className="me-2 text-success" />
                        Our History
                    </h2>
                    <p>
                        The Wollongong ME/CFS/FM Support Group was established
                        in <strong>1989</strong>. Over the years, we have grown
                        to become one of the largest ME/CFS, FM, and MCS support
                        groups in NSW, thanks to our dedicated Members and
                        Coordinators.
                    </p>
                    <p>
                        We strive to maintain strong connections with all our
                        Members, whether through email, Facebook messages, or
                        post. This ensures that every Member feels involved,
                        whether they are online or offline.
                    </p>
                </Card.Body>
            </Card>

            {/* Coordinators Section */}
            <Card className="shadow-sm mb-5 border-0">
                <Card.Body
                    style={{ backgroundColor: "#e3f2fd", borderRadius: "8px" }}
                >
                    <h2 className="mb-4" style={{ color: "#004d40" }}>
                        <FaUsers className="me-2 text-info" />
                        Meet Our Coordinators
                    </h2>
                    <p>
                        Our group has been led by many caring Coordinators since
                        its establishment. For over 20 years, John and Winsome
                        were our Coordinators, alongside Kerri as our Email
                        Coordinator.
                    </p>
                    <p>
                        Today, we are proud to have <strong>Deirdre</strong>,{" "}
                        <strong>Val</strong>, and <strong>Ian</strong> as our
                        Coordinators, with <strong>Kerri</strong> continuing her
                        invaluable role as Email Coordinator.
                    </p>
                </Card.Body>
            </Card>

            {/* Mission Section */}
            <Card className="shadow-sm mb-5 border-0">
                <Card.Body
                    style={{ backgroundColor: "#f1f8e9", borderRadius: "8px" }}
                >
                    <h2 className="mb-4" style={{ color: "#004d40" }}>
                        <FaBullseye className="me-2 text-warning" />
                        Our Mission
                    </h2>
                    <p>
                        Our mission is to provide support, connection, and
                        resources for individuals living with ME/CFS, FM, and
                        MCS in the Illawarra and beyond. Through our efforts, we
                        aim to foster a community of understanding, empathy, and
                        care.
                    </p>
                </Card.Body>
            </Card>

            {/* Call-to-Action */}
            <div className="text-center mt-5">
                <h2 style={{ color: "#004d40" }}>
                    <FaEnvelope className="me-2 text-teal" />
                    Join Us
                </h2>
                <p className="fs-5" style={{ color: "#00695c" }}>
                    Ready to join or learn more? Visit our{" "}
                    <a
                        href="/contact"
                        style={{
                            color: "#004d40",
                            textDecoration: "underline",
                            fontWeight: "bold",
                        }}
                    >
                        Contact Page
                    </a>{" "}
                    to connect with us.
                </p>
            </div>
        </div>
    );
};

export default About;
