import React from "react";
import { Button, Card } from "react-bootstrap";
import {
    FaHandsHelping,
    FaCalendarAlt,
    FaExternalLinkAlt,
    FaEnvelope,
} from "react-icons/fa";

const SelfHelpProgram = () => {
    return (
        <div className="container mt-5">
            {/* Page Header */}
            <header className="text-center mb-5">
                <h1 className="display-4 fw-bold" style={{ color: "#004d40" }}>
                    <FaHandsHelping className="me-2 text-teal" />
                    Self-Help Program
                </h1>
                <p className="fs-5" style={{ color: "#00695c" }}>
                    Learn practical skills to live a more stable and predictable
                    life with the CFIDS & FM Self-Help Program.
                </p>
            </header>

            {/* Program Details Section */}
            <Card className="shadow-sm mb-5 border-0">
                <Card.Body
                    style={{ backgroundColor: "#e0f2f1", borderRadius: "8px" }}
                >
                    <h2 className="mb-4" style={{ color: "#004d40" }}>
                        <FaHandsHelping className="me-2 text-success" />
                        About the Program
                    </h2>
                    <p>
                        The CFIDS & FM Self-Help Program, led by Dr. Bruce
                        Campbell, Ph.D., is an email-based course designed to
                        help those with ME/CFS and FM develop practical skills
                        for managing their conditions.
                    </p>
                    <p>
                        Since its founding in 1998, this US charity has
                        conducted hundreds of self-help groups for thousands of
                        people.
                    </p>
                    <p>
                        The introductory seven-week class focuses on learning
                        pacing techniques as an alternative to the
                        push-and-crash cycle, helping participants live more
                        stable and predictable lives.
                    </p>
                </Card.Body>
            </Card>

            {/* Course Schedule Section */}
            <Card className="shadow-sm mb-5 border-0">
                <Card.Body
                    style={{ backgroundColor: "#e3f2fd", borderRadius: "8px" }}
                >
                    <h2 className="mb-4" style={{ color: "#004d40" }}>
                        <FaCalendarAlt className="me-2 text-teal" />
                        Course Schedule
                    </h2>
                    <p>
                        Classes are offered <strong>four times a year</strong>,
                        beginning in:
                    </p>
                    <ul
                        className="list-unstyled fs-5"
                        style={{ color: "#004d40" }}
                    >
                        <li>January</li>
                        <li>April</li>
                        <li>July</li>
                        <li>October</li>
                    </ul>
                    <p>Each session runs for seven weeks.</p>
                </Card.Body>
            </Card>

            {/* Call-to-Action Section */}
            <div className="text-center my-5">
                <h2 style={{ color: "#004d40" }}>
                    <FaEnvelope className="me-2 text-teal" />
                    Interested in Joining?
                </h2>
                <p className="fs-5" style={{ color: "#00695c" }}>
                    Contact us to join a class or learn more about the program.
                    We’re here to help you take the first step toward a more
                    stable and manageable life.
                </p>
                <Button
                    style={{
                        backgroundColor: "#004d40",
                        borderColor: "#004d40",
                    }}
                    href="/contact"
                    size="lg"
                    className="rounded-pill px-4 py-2"
                >
                    Contact Us to Join
                </Button>
            </div>

            {/* Additional Resources Section */}
            <Card className="shadow-sm border-0">
                <Card.Body
                    style={{ backgroundColor: "#f1f8e9", borderRadius: "8px" }}
                >
                    <h2 className="mb-4" style={{ color: "#004d40" }}>
                        <FaExternalLinkAlt className="me-2 text-teal" />
                        Learn More
                    </h2>
                    <p>
                        For additional information about the program, visit the
                        official CFIDS & FM Self-Help Program website:
                    </p>
                    <a
                        href="https://www.cfsselfhelp.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            backgroundColor: "#004d40",
                            color: "white",
                            border: "none",
                            display: "inline-block",
                            padding: "0.5rem 1.5rem",
                            borderRadius: "8px",
                            textDecoration: "none",
                            fontSize: "1rem",
                        }}
                    >
                        Visit CFIDS & FM Self-Help Program
                    </a>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SelfHelpProgram;
