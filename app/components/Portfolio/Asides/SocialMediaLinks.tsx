import React from "react";
import styles from "./Asides.module.css";

const SocialMediaLinks = () => {
    return (
        <div className={`fixed right-10 bottom-0 hidden md:block`}>
        <div className={`flex flex-col justify-center items-center gap-5 ${styles.after} relative`}>
            <a
                className={`tracking-[0.3rem] relative ${styles.link}`}
                href="mailto:michal.kwiatkowski.430@gmail.com"
                style={{ writingMode: "vertical-rl", fontFamily: "Geist Mono" }}
            >
            michal.kwiatkowski.430@gmail.com
            </a>
        </div>
        </div>
    );
};

export default SocialMediaLinks;
