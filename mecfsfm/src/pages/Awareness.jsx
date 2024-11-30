import React from "react";
import { Card, Accordion, Button } from "react-bootstrap";
import {
    FaRibbon,
    FaCalendarAlt,
    FaBroadcastTower,
    FaYoutube,
} from "react-icons/fa";
import AwarenessColors from "../components/AwarenessColors";

const Awareness = () => {
    return (
        <div className="container mt-5">
            {/* Page Header */}
            <header className="text-center mb-5">
                <h1 className="display-4 fw-bold" style={{ color: "#004d40" }}>
                    Awareness Day & Month
                </h1>
                <p className="fs-5" style={{ color: "#00695c" }}>
                    May is Awareness Month for ME/CFS, FM, MCS, Lyme Disease,
                    and related conditions. Join us in raising awareness and
                    supporting those affected!
                </p>
            </header>

            {/* Inspirational Quote */}
            <Card className="shadow-sm mb-5 border-0">
                <Card.Body
                    style={{ backgroundColor: "#e0f2f1", borderRadius: "8px" }}
                >
                    <blockquote className="blockquote text-center mb-0">
                        <p className="fs-4 fst-italic text-dark">
                            “Individually, we are one drop. Together, we are an
                            ocean.”
                        </p>
                        <footer className="blockquote-footer mt-3 text-teal">
                            Ryunosuke Satoro
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>

            {/* Key Awareness Dates */}
            <Card className="shadow-sm mb-5 border-0">
                <Card.Body
                    style={{ backgroundColor: "#e3f2fd", borderRadius: "8px" }}
                >
                    <h2
                        className="text-center mb-4"
                        style={{ color: "#004d40" }}
                    >
                        <FaCalendarAlt className="me-2 text-teal" />
                        Key Awareness Dates
                    </h2>
                    <ul
                        className="list-unstyled fs-5"
                        style={{ color: "#004d40" }}
                    >
                        <li className="mb-4">
                            <strong>
                                International ME/CFS, FM & MCS Awareness Day:
                            </strong>{" "}
                            Sunday 12th May 2024
                            <br />
                            <span className="text-muted">
                                Commemorates Florence Nightingale’s birthday.
                            </span>
                        </li>
                        <li>
                            <strong>Long COVID Awareness Day:</strong> 15th
                            March
                        </li>
                    </ul>
                </Card.Body>
            </Card>

            {/* Colors and Symbols Section */}
            <AwarenessColors />

            {/* Awareness Activities and Events */}
            <Card className="shadow-sm mb-5 border-0">
                <Card.Body
                    style={{ backgroundColor: "#f1f8e9", borderRadius: "8px" }}
                >
                    <h2
                        className="text-center mb-4"
                        style={{ color: "#004d40" }}
                    >
                        Activities and Events
                    </h2>
                    <ul
                        className="list-unstyled fs-5"
                        style={{ color: "#004d40" }}
                    >
                        <li className="mb-4">
                            <strong>Library Displays:</strong>
                            <ul className="ms-3">
                                <li>
                                    Thirroul Library: 3rd April – 30th April
                                </li>
                                <li>Kiama Library: 7th May – 22nd May</li>
                                <li>Corrimal Library: 13th May – 8th June</li>
                                <li>
                                    Wollongong Library: 3rd June – 29th June
                                </li>
                            </ul>
                        </li>
                        <li className="mb-4">
                            <strong>Kiama Farmers’ Market:</strong> Volunteer
                            Expo on Wednesday 22nd May, 2:00pm – 4:00pm
                        </li>
                        <li>
                            <strong>Radio Interviews:</strong>
                            <ul className="ms-3">
                                <li>
                                    <FaBroadcastTower className="me-2 text-teal" />
                                    ABC Illawarra: 9:50am, Thursday 9th May
                                </li>
                                <li>
                                    <FaBroadcastTower className="me-2 text-teal" />
                                    Kiama Community Radio: 7:15am, Wednesday
                                    15th May
                                </li>
                            </ul>
                        </li>
                    </ul>
                </Card.Body>
            </Card>

            {/* Accordion for Additional Information */}
            <Accordion className="shadow-sm mb-5">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <FaRibbon className="me-2 text-teal" />
                        ME/CFS
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Myalgic Encephalomyelitis/Chronic Fatigue Syndrome
                            (ME/CFS) is a severe, complex condition affecting
                            the brain, immune system, and other organs. It
                            affects 250,000 Australians and 17 million people
                            worldwide.
                        </p>
                        <strong>More Info:</strong>
                        <ul>
                            <li>
                                <a
                                    href="https://www.emerge.org.au/me-cfs-awareness-week-2023"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#004d40" }}
                                >
                                    Emerge Australia
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/may12th.awareness/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#004d40" }}
                                >
                                    May 12th Awareness
                                </a>
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <FaRibbon className="me-2 text-purple" />
                        Fibromyalgia (FM)
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Fibromyalgia (FM) is a condition characterized by
                            chronic pain, fatigue, and cognitive difficulties.
                            Symptoms can vary from mild to severe.
                        </p>
                        <strong>More Info:</strong>
                        <ul>
                            <li>
                                <a
                                    href="https://www.fibromyalgiaaustralia.org.au/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#004d40" }}
                                >
                                    Fibromyalgia Australia
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.emerge.org.au/what-is-fibromyalgia"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#004d40" }}
                                >
                                    Emerge Australia
                                </a>
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <FaRibbon className="me-2 text-success" />
                        MCS (Multiple Chemical Sensitivity)
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Multiple Chemical Sensitivity (MCS) causes reactions
                            to low-level chemical exposures. Symptoms include
                            fatigue, nausea, and rashes.
                        </p>
                        <strong>More Info:</strong>
                        <ul>
                            <li>
                                <a
                                    href="https://www.aessra.org/faq.php"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#004d40" }}
                                >
                                    AESSRA
                                </a>
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            {/* Call-to-Action */}
            <div className="text-center mt-5">
                <p className="fs-5">
                    Join the conversation on social media! Use hashtags like{" "}
                    <strong>#may12th</strong>, <strong>#mecfs</strong>,{" "}
                    <strong>#fibro</strong>, <strong>#mcs</strong>,{" "}
                    <strong>#lymedisease</strong>, and{" "}
                    <strong>#longCOVID</strong>.
                </p>
                <Button
                    style={{
                        backgroundColor: "#004d40",
                        borderColor: "#004d40",
                    }}
                    href="https://www.youtube.com/@chronicjillness332"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-pill px-4 py-2"
                >
                    <FaYoutube className="me-2" />
                    Visit Chronic Jillness YouTube Channel
                </Button>
            </div>
        </div>
    );
};

export default Awareness;
