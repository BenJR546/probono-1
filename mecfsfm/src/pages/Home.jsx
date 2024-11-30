import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { FaVideo, FaCoffee, FaFacebook } from "react-icons/fa"; // React Icons
import backgroundImage from "../images/butterflies.jpg";

const Home = () => {
    return (
        <div className="container mt-4">
            {/* Hero Section */}
            <div
                className="jumbotron text-center p-5 rounded position-relative"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white",
                    textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)",
                    borderRadius: "8px",
                }}
            >
                {/* Overlay */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 128, 128, 0.5)", // Teal overlay
                        zIndex: 1,
                        borderRadius: "8px",
                    }}
                ></div>

                {/* Text Content */}
                <div style={{ position: "relative", zIndex: 2 }}>
                    <h1 className="display-4 fw-bold">
                        Welcome to the Wollongong ME/CFS/FM Support Group
                    </h1>
                    <p className="lead">
                        Support, friendship, and resources for those living with
                        ME/CFS, FM, MCS, Long COVID, and related conditions in
                        the Illawarra and beyond.
                    </p>
                    <div className="mt-3">
                        <Link
                            to="/support-meetings"
                            className="btn btn-light me-2 btn-lg"
                        >
                            Join a Meeting
                        </Link>
                        <Link
                            to="/about"
                            className="btn btn-outline-light btn-lg"
                        >
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </div>

            {/* Who We Are Section */}
            <div className="mt-5">
                <h2 className="text-center" style={{ color: "teal" }}>
                    Who We Are
                </h2>
                <p className="text-center text-muted">
                    Our group offers support to individuals living with ME/CFS,
                    FM, MCS, and Long COVID through Zoom meetings, in-person
                    gatherings, and online communities.
                </p>
                <div
                    className="alert text-center"
                    style={{
                        backgroundColor: "coral",
                        color: "white",
                        borderRadius: "5px",
                    }}
                >
                    <strong>Note:</strong> Please avoid wearing strongly scented
                    products to our events.
                </div>
            </div>

            {/* Quick Links Section */}
            <div className="row mt-5">
                <div className="col-md-4">
                    <Card
                        className="text-center shadow-sm border-0"
                        style={{ backgroundColor: "#f7f9fc" }}
                    >
                        <Card.Body>
                            <FaVideo size={50} className="text-teal mb-3" />
                            <Card.Title>Zoom Support Meetings</Card.Title>
                            <Card.Text>
                                Accessible online meetings for all, twice a
                                month.
                            </Card.Text>
                            <Link
                                to="/support-meetings"
                                className="btn btn-teal"
                                style={{
                                    backgroundColor: "teal",
                                    color: "white",
                                }}
                            >
                                Learn More
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card
                        className="text-center shadow-sm border-0"
                        style={{ backgroundColor: "#f7f9fc" }}
                    >
                        <Card.Body>
                            <FaCoffee size={50} className="text-teal mb-3" />
                            <Card.Title>Cafe Clubs</Card.Title>
                            <Card.Text>
                                Informal gatherings for friendship and
                                connection.
                            </Card.Text>
                            <Link
                                to="/cafe-clubs"
                                className="btn btn-teal"
                                style={{
                                    backgroundColor: "teal",
                                    color: "white",
                                }}
                            >
                                Learn More
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card
                        className="text-center shadow-sm border-0"
                        style={{ backgroundColor: "#f7f9fc" }}
                    >
                        <Card.Body>
                            <FaFacebook size={50} className="text-teal mb-3" />
                            <Card.Title>Facebook Group</Card.Title>
                            <Card.Text>
                                Join our private Facebook group for ongoing
                                support.
                            </Card.Text>
                            <Link
                                to="/facebook-group"
                                className="btn btn-teal"
                                style={{
                                    backgroundColor: "teal",
                                    color: "white",
                                }}
                            >
                                Join Now
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            {/* Testimonials Section */}
            <div
                className="mt-5 p-4 rounded shadow-sm"
                style={{ backgroundColor: "#f7f9fc" }}
            >
                <h2 className="text-center" style={{ color: "teal" }}>
                    What Our Members Say
                </h2>
                <p className="text-center text-muted">
                    Here’s what some of our members have shared about their
                    experience:
                </p>
                <div className="row mt-4">
                    <div className="col-md-6 text-center">
                        <blockquote className="blockquote">
                            <p>
                                "This group has been a lifeline for me. I’ve
                                found so much understanding and support here."
                            </p>
                            <footer className="blockquote-footer">
                                Jane, Member since 2020
                            </footer>
                        </blockquote>
                    </div>
                    <div className="col-md-6 text-center">
                        <blockquote className="blockquote">
                            <p>
                                "The Cafe Clubs have been an amazing way to
                                connect with others who truly understand."
                            </p>
                            <footer className="blockquote-footer">
                                John, Member since 2018
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>

            {/* Call-to-Action Section */}
            <div
                className="mt-5 text-center p-5"
                style={{
                    backgroundColor: "coral",
                    borderRadius: "8px",
                    color: "white",
                }}
            >
                <h2>Get Involved</h2>
                <p>
                    Ready to join us? Choose one of the options below to get
                    started:
                </p>
                <Button
                    className="m-2"
                    href="/contact"
                    size="lg"
                    style={{
                        backgroundColor: "teal",
                        color: "white",
                        border: "none",
                    }}
                >
                    Contact Us
                </Button>

                <Button
                    className="m-2"
                    href="/facebook-group"
                    size="lg"
                    variant="outline-light"
                >
                    Join Our Facebook Group
                </Button>
            </div>
        </div>
    );
};

export default Home;
