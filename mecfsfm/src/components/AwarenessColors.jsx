import React from "react";
import { Card, Badge } from "react-bootstrap";
import { FaRibbon } from "react-icons/fa";
import { GiButterfly } from "react-icons/gi";

const AwarenessColors = () => {
    return (
        <Card className="shadow-sm mb-4">
            <Card.Body>
                <h2 className="text-center mb-4">Colors and Symbols</h2>
                <p>
                    Each condition is represented by unique colors and symbols:
                </p>
                <ul className="list-unstyled">
                    <li className="mb-3 d-flex align-items-center">
                        <FaRibbon
                            style={{ color: "#ADD8E6" }}
                            className="me-2"
                        />
                        <GiButterfly
                            style={{ color: "#ADD8E6" }}
                            className="me-2"
                        />
                        <Badge bg="primary" className="me-2">
                            ME/CFS
                        </Badge>
                        Blue ribbon and butterfly
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                        <FaRibbon
                            style={{ color: "#D8BFD8" }}
                            className="me-2"
                        />
                        <GiButterfly
                            style={{ color: "#D8BFD8" }}
                            className="me-2"
                        />
                        <Badge bg="secondary" className="me-2">
                            FM
                        </Badge>
                        Purple ribbon and butterfly
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                        <FaRibbon
                            style={{ color: "#90EE90" }}
                            className="me-2"
                        />
                        <GiButterfly
                            style={{ color: "#90EE90" }}
                            className="me-2"
                        />
                        <Badge bg="success" className="me-2">
                            MCS
                        </Badge>
                        Green ribbon and butterfly
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                        <FaRibbon
                            style={{ color: "#32CD32" }}
                            className="me-2"
                        />
                        <GiButterfly
                            style={{ color: "#32CD32" }}
                            className="me-2"
                        />
                        <Badge bg="success" className="me-2">
                            Lyme
                        </Badge>
                        Lime green ribbon and butterfly
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                        <FaRibbon
                            style={{ color: "#008080" }}
                            className="me-2"
                        />
                        <FaRibbon
                            style={{ color: "#808080" }}
                            className="me-2"
                        />
                        <FaRibbon
                            style={{ color: "#000000" }}
                            className="me-2"
                        />
                        <Badge bg="info" className="me-2">
                            Long COVID
                        </Badge>
                        Teal, grey, and black ribbon
                    </li>
                </ul>
            </Card.Body>
        </Card>
    );
};

export default AwarenessColors;
