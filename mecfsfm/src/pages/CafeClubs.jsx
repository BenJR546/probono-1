import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../Calendar.css"; // Custom styles for calendar
import {
    FaChair,
    FaBus,
    FaWheelchair,
    FaUtensils,
    FaMapMarkerAlt,
    FaCalendarAlt,
} from "react-icons/fa";

const CafeClubs = () => {
    const [value, setValue] = useState(new Date());

    // Function to calculate specific Thursdays
    const getNthThursday = (nth, month, year) => {
        const firstDay = new Date(year, month, 1);
        const firstThursday = ((4 - firstDay.getDay() + 7) % 7) + 1; // Day 4 = Thursday
        const nthThursday = firstThursday + (nth - 1) * 7;
        return new Date(year, month, nthThursday);
    };

    // Assign a specific color class based on the nth Thursday
    const getHighlightClass = (date) => {
        const month = date.getMonth();
        const year = date.getFullYear();

        const secondThursday = getNthThursday(2, month, year);
        const thirdThursday = getNthThursday(3, month, year);
        const fourthThursday = getNthThursday(4, month, year);

        if (date.toDateString() === secondThursday.toDateString()) {
            return "second-thursday"; // Class for Wollongong
        } else if (date.toDateString() === thirdThursday.toDateString()) {
            return "third-thursday"; // Class for Kiama
        } else if (date.toDateString() === fourthThursday.toDateString()) {
            return "fourth-thursday"; // Class for Shellharbour
        }
        return null;
    };

    return (
        <div className="container mt-4">
            {/* Page Header */}
            <div className="text-center">
                <h1 className="display-4" style={{ color: "teal" }}>
                    Cafe Clubs
                </h1>
                <p className="text-muted">
                    Join us for informal, friendly chats with others who
                    understand. Carers and family members are welcome!
                </p>
            </div>

            {/* General Details Section */}
            <div className="mt-5">
                <Card className="shadow-sm border-0">
                    <Card.Body>
                        <h2
                            className="text-center mb-4"
                            style={{ color: "#2196f3" }}
                        >
                            General Information
                        </h2>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <FaCalendarAlt
                                    className="me-2"
                                    size={24}
                                    style={{ color: "#4caf50" }}
                                />
                                Each gathering is from{" "}
                                <strong>11:00am to 12:00 noon</strong>.
                            </li>
                            <li>
                                <strong>All Cafe Clubs offer:</strong>
                                <ul className="mt-3">
                                    <li className="mb-2">
                                        <FaChair
                                            className="me-2"
                                            size={20}
                                            style={{ color: "#ff5722" }}
                                        />
                                        Indoor and outdoor seating
                                    </li>
                                    <li className="mb-2">
                                        <FaBus
                                            className="me-2"
                                            size={20}
                                            style={{ color: "#ff5722" }}
                                        />
                                        Parking and public transport access
                                    </li>
                                    <li className="mb-2">
                                        <FaWheelchair
                                            className="me-2"
                                            size={20}
                                            style={{ color: "#ff5722" }}
                                        />
                                        Disability access
                                    </li>
                                    <li className="mb-2">
                                        <FaUtensils
                                            className="me-2"
                                            size={20}
                                            style={{ color: "#ff5722" }}
                                        />
                                        Gluten-free food options
                                    </li>
                                </ul>
                            </li>
                            <li className="mt-3">
                                Signs will be placed on tables to help members
                                find the group.
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
            </div>

            {/* Locations Section */}
            <div className="mt-5">
                <h2 className="text-center mb-4" style={{ color: "teal" }}>
                    Locations and Schedules
                </h2>

                <Card className="mb-4 shadow-sm border-success">
                    <Card.Body>
                        <h5 className="card-title text-teal d-flex align-items-center">
                            <span
                                className="me-2"
                                style={{
                                    display: "inline-block",
                                    width: "16px",
                                    height: "16px",
                                    backgroundColor: "#4caf50",
                                    borderRadius: "50%",
                                }}
                            ></span>
                            Wollongong Cafe Club
                        </h5>
                        <p>
                            <FaCalendarAlt className="me-2" />
                            <strong>When:</strong> 2nd Thursday of the month
                        </p>
                        <p>
                            <FaMapMarkerAlt className="me-2" />
                            <strong>Details:</strong> Contact us for specific
                            location details.
                        </p>
                    </Card.Body>
                </Card>

                <Card className="mb-4 shadow-sm border-primary">
                    <Card.Body>
                        <h5 className="card-title text-primary d-flex align-items-center">
                            <span
                                className="me-2"
                                style={{
                                    display: "inline-block",
                                    width: "16px",
                                    height: "16px",
                                    backgroundColor: "#2196f3",
                                    borderRadius: "50%",
                                }}
                            ></span>
                            Kiama Cafe Club
                        </h5>
                        <p>
                            <FaCalendarAlt className="me-2" />
                            <strong>When:</strong> 3rd Thursday of the month
                        </p>
                        <p>
                            <FaMapMarkerAlt className="me-2" />
                            <strong>Location:</strong> Kiama Leagues Club
                        </p>
                    </Card.Body>
                </Card>

                <Card className="mb-4 shadow-sm border-warning">
                    <Card.Body>
                        <h5 className="card-title text-warning d-flex align-items-center">
                            <span
                                className="me-2"
                                style={{
                                    display: "inline-block",
                                    width: "16px",
                                    height: "16px",
                                    backgroundColor: "#ff5722",
                                    borderRadius: "50%",
                                }}
                            ></span>
                            Shellharbour Cafe Club
                        </h5>
                        <p>
                            <FaCalendarAlt className="me-2" />
                            <strong>When:</strong> 4th Thursday of the month
                        </p>
                        <p>
                            <FaMapMarkerAlt className="me-2" />
                            <strong>Location:</strong> Shellharbour Civic Square
                            Cafe
                        </p>
                    </Card.Body>
                </Card>
            </div>

            {/* Calendar Section */}
            <div className="mt-5">
                <h2 className="text-center mb-4" style={{ color: "teal" }}>
                    Highlighted Calendar
                </h2>
                <Calendar
                    value={value}
                    onChange={setValue}
                    tileClassName={({ date }) => getHighlightClass(date)}
                />
            </div>

            {/* Call-to-Action */}
            <div className="text-center mt-5">
                <p className="text-muted">
                    For more information, please{" "}
                    <a
                        href="/contact"
                        style={{
                            color: "#2196f3",
                            textDecoration: "underline",
                        }}
                    >
                        contact us
                    </a>
                    .
                </p>
            </div>
        </div>
    );
};

export default CafeClubs;
