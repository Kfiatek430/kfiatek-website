import React from "react";
import styles from "./Asides.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const MailLink = () => {
    return (
        <div className={`fixed left-10 bottom-0 hidden md:block`}>
        <div
            className={`flex flex-col justify-center items-center gap-5 ${styles.after}`}
        >
            <ul className="flex flex-col justify-center items-center gap-3">
            <li className="relative min-h-6 min-w-6">
                <a href="#" className={`relative ${styles.link}`}>
                <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>
            <li className="relative min-h-6 min-w-6">
                <a href="#" className={`relative ${styles.link}`}>
                <FontAwesomeIcon icon={faInstagram} />
                </a>
            </li>
            </ul>
        </div>
        </div>
    );
};

export default MailLink;
