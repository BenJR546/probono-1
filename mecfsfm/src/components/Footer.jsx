import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer
            style={{
                backgroundColor: "#004d40",
                color: "white",
                padding: "1rem 0",
                textAlign: "center",
                marginTop: "3rem",
            }}
        >
            <p className="mb-3" style={{ fontSize: "1rem" }}>
                Built by <strong>Benjamin Rice</strong>
            </p>
            <div>
                {/* GitHub Icon */}
                <a
                    href="https://github.com/benjr546" // Replace with your GitHub URL
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: "white",
                        textDecoration: "none",
                        fontSize: "1.5rem",
                        marginRight: "1rem",
                    }}
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
                {/* LinkedIn Icon */}
                <a
                    href="https://www.linkedin.com/in/benjrice546/" // Replace with your LinkedIn URL
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: "white",
                        textDecoration: "none",
                        fontSize: "1.5rem",
                    }}
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
