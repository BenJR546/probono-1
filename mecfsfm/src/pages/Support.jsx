import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaCalendarAlt, FaClock, FaEnvelope } from "react-icons/fa";

const SupportMeetings = () => {
    return (
        <div className="container mt-4">
            {/* Page Header */}
            <div className="text-center">
                <h1 className="display-4" style={{ color: "teal" }}>
                    Support Group Meetings
                </h1>
                <p className="text-muted">
                    Join our online Support Group Meetings held via Zoom.
                    Connect with others, share experiences, and receive valuable
                    support.
                </p>
            </div>

            {/* Meeting Details Section */}
            <div className="mt-5">
                <Card className="shadow-sm border-0">
                    <Card.Body>
                        <h2
                            className="text-center mb-4"
                            style={{ color: "#2196f3" }}
                        >
                            Meeting Details
                        </h2>
                        <ul className="list-unstyled text-center">
                            <li className="mb-3">
                                <FaCalendarAlt
                                    className="me-2"
                                    size={24}
                                    style={{ color: "#4caf50" }}
                                />
                                <strong>1st Saturday of the Month</strong>{" "}
                                (except January)
                            </li>
                            <li>
                                <FaClock
                                    className="me-2"
                                    size={24}
                                    style={{ color: "#4caf50" }}
                                />
                                <strong>Time:</strong> 10:30am to 12:00 noon
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
            </div>

            {/* Call-to-Action */}
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
                            member and receive meeting details.
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

export default SupportMeetings;
