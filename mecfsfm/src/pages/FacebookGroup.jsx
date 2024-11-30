import React from "react";
import { Button, Card } from "react-bootstrap";
import {
    FaFacebook,
    FaUsers,
    FaRegHandshake,
    FaCalendarAlt,
    FaInfoCircle,
} from "react-icons/fa";

const FacebookGroup = () => {
    return (
        <div className="container mt-4">
            {/* Page Header */}
            <div className="text-center">
                <h1 className="display-4" style={{ color: "#004d40" }}>
                    Facebook Group
                </h1>
                <p className="text-muted">
                    Join our private Facebook Group and connect with others who
                    understand.
                </p>
            </div>

            {/* Group Benefits Section */}
            <div className="mt-5">
                <Card className="shadow-sm border-0">
                    <Card.Body>
                        <h2
                            className="text-center mb-4"
                            style={{ color: "#004d40" }}
                        >
                            Why Join?
                        </h2>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <FaUsers
                                    className="me-2"
                                    size={24}
                                    style={{ color: "#00897b" }}
                                />
                                Be part of a supportive and understanding
                                community.
                            </li>
                            <li className="mb-3">
                                <FaRegHandshake
                                    className="me-2"
                                    size={24}
                                    style={{ color: "#00897b" }}
                                />
                                Share experiences and insights with others who
                                truly understand.
                            </li>
                            <li>
                                <FaCalendarAlt
                                    className="me-2"
                                    size={24}
                                    style={{ color: "#00897b" }}
                                />
                                Stay informed about upcoming events and
                                resources.
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
            </div>

            {/* How to Join Section */}
            <div className="mt-5">
                <Card className="shadow-sm border-0">
                    <Card.Body>
                        <h2
                            className="text-center mb-4"
                            style={{ color: "#004d40" }}
                        >
                            How to Join
                        </h2>
                        <p>
                            To join our closed Facebook Group, you must first
                            complete our registration form and become a member
                            of our Support Group.
                        </p>
                        <p>
                            Once your registration is complete, we’ll add you to
                            the group. It’s that easy!
                        </p>
                        <p>
                            <FaInfoCircle
                                className="me-2"
                                size={20}
                                style={{ color: "#00897b" }}
                            />
                            For more details, please{" "}
                            <a
                                href="/contact"
                                className="text-decoration-none"
                                style={{ color: "#004d40" }}
                            >
                                contact us
                            </a>
                            .
                        </p>
                    </Card.Body>
                </Card>
            </div>

            {/* Call-to-Action Section */}
            <div className="text-center mt-5">
                <Card
                    className="shadow-sm p-4"
                    style={{
                        backgroundColor: "#f1f8e9",
                        border: "1px solid #004d40",
                    }}
                >
                    <Card.Body>
                        <h3 style={{ color: "#004d40" }}>Ready to Join?</h3>
                        <p className="text-muted">
                            Click below to get in touch with us and start the
                            registration process.
                        </p>
                        <Button
                            href="/contact"
                            size="lg"
                            className="mt-3"
                            style={{
                                backgroundColor: "#004d40",
                                borderColor: "#004d40",
                                color: "#ffffff",
                            }}
                        >
                            <FaFacebook className="me-2" />
                            Contact Us to Join
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default FacebookGroup;
