import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { FaRibbon } from "react-icons/fa";

const Conditions = () => {
    const getBackgroundColor = (key) => {
        switch (key) {
            case "0":
                return "#E3F2FD"; // Light blue for ME/CFS
            case "1":
                return "#F3E5F5"; // Light purple for FM
            case "2":
                return "#E8F5E9"; // Light green for MCS
            case "3":
                return "#FFF3E0"; // Light orange for Long COVID
            default:
                return "transparent";
        }
    };

    return (
        <div className="container mt-4">
            {/* Page Header */}
            <div className="text-center mb-4">
                <h1 style={{ color: "#004d40" }} className="display-4">
                    ME/CFS, FM, MCS, and Long COVID
                </h1>
                <p className="text-muted">
                    Learn more about these complex conditions and the support we
                    offer.
                </p>
            </div>

            {/* Accordion for Conditions */}
            <Accordion
                defaultActiveKey={null} // Set to null to prevent any default active section
                className="mt-4 shadow-sm"
            >
                {/* ME/CFS Section */}
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <FaRibbon
                            style={{ color: "#1E88E5" }}
                            className="me-2"
                        />
                        ME/CFS (Myalgic Encephalomyelitis/Chronic Fatigue
                        Syndrome)
                    </Accordion.Header>
                    <Accordion.Body
                        style={{
                            backgroundColor: getBackgroundColor("0"),
                            borderRadius: "8px",
                            padding: "1rem",
                        }}
                    >
                        <h5 style={{ color: "#004d40" }}>Definition</h5>
                        <p>
                            <strong>My</strong> = muscle, <strong>algic</strong>{" "}
                            = pain, <strong>Encephalo</strong> = brain,{" "}
                            <strong>myel</strong> = spinal cord,{" "}
                            <strong>itis</strong> = inflammation.
                        </p>
                        <p>
                            Myalgic Encephalomyelitis/Chronic Fatigue Syndrome
                            (ME/CFS) is a severe, complex, acquired illness with
                            numerous symptoms related mainly to the dysfunction
                            of the brain, gastrointestinal, immune, endocrine,
                            and cardiac systems.
                        </p>
                        <h5 style={{ color: "#004d40" }}>Symbol</h5>
                        <p>
                            The{" "}
                            <strong style={{ color: "#1E88E5" }}>
                                blue ribbon
                            </strong>{" "}
                            and butterfly represent ME/CFS awareness.
                        </p>
                        <h5 style={{ color: "#004d40" }}>More Information</h5>
                        <ul>
                            <li>
                                <a
                                    href="https://www.emerge.org.au"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#004d40" }}
                                >
                                    Emerge Australia
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.biobank.org.au"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#004d40" }}
                                >
                                    Biobank Registry
                                </a>
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>

                {/* Other sections remain unchanged */}
                {/* FM Section */}
                {/* MCS Section */}
                {/* Long COVID Section */}
            </Accordion>
        </div>
    );
};

export default Conditions;
