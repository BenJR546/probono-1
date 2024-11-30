import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaCalendarAlt, FaClock, FaEnvelope } from "react-icons/fa";

const ZoomChat = () => {
    return (
        <div className="container mt-4">
            {/* Page Header */}
            <div className="text-center">
                <h1 className="display-4" style={{ color: "teal" }}>
                    Zoom Chat from Home
                </h1>
                <p className="text-muted">
                    Catch up with old friends or meet new ones in the comfort of
                    your own home! Our online gatherings are open to all members
                    and their carers.
                </p>
            </div>

            {/* Chat Details Section */}
            <div className="mt-5">
                <Card className="shadow-sm border-0">
                    <Card.Body>
                        <h2
                            className="text-center mb-4"
                            style={{ color: "#2196f3" }}
                        >
                            Chat Details
                        </h2>
                        <ul className="list-unstyled text-center">
                            <li className="mb-3">
                                <FaCalendarAlt
                                    className="me-2"
                                    size={24}
                                    style={{ color: "#4caf50" }}
                                />
                                <strong>4th Saturday of the Month</strong>
                            </li>
                            <li>
                                <FaClock
                                    className="me-2"
                                    size={24}
                                    style={{ color: "#4caf50" }}
                                />
                                <strong>Time:</strong> 2:00pm – 3:00pm
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
            </div>

            {/* Call-to-Action Section */}
            <div className="mt-5 text-center">
                <Card
                    className="shadow-sm p-4"
                    style={{ backgroundColor: "#f7f9fc", borderRadius: "8px" }}
                >
                    <Card.Body>
                        <h3 style={{ color: "teal" }}>
                            Interested in Joining?
                        </h3>
                        <p className="text-muted">
                            Please <strong>contact us</strong> to become a
                            member and receive Zoom chat details.
                        </p>
                        <Button
                            size="lg"
                            className="mt-3"
                            style={{
                                backgroundColor: "teal",
                                color: "white",
                                border: "none",
                            }}
                            href="/contact"
                        >
                            <FaEnvelope className="me-2" />
                            Contact Us to Join
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default ZoomChat;
