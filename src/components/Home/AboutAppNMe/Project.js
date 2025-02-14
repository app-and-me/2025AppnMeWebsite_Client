import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../../../styles/AboutUs/Project.module.css";

export default function Project() {
    const images = [1, 2, 3, 4, 5, 6, 7, 8];
    const [duration, setDuration] = useState(30);
    const [resetKey, setResetKey] = useState(0);
    useEffect(() => {
        const updateDuration = () => {
            const width = window.innerWidth;
            let newDuration;

            if (width < 768) {
                newDuration = 10;
            } else if (width < 1024) {
                newDuration = 25;
            } else {
                newDuration = 30;
            }
            setDuration(newDuration);
            setTimeout(() => {
                setResetKey(prev => prev + 1);
            }, 10);
        };

        updateDuration();
        window.addEventListener("resize", updateDuration);
        return () => window.removeEventListener("resize", updateDuration);
    }, []);

    return (
        <div className={styles.allContainer}>
            <div className={styles.line}></div>
            <motion.div
                key={resetKey}
                className={styles.slideContainer}
                animate={{ x: ["0%", "-100%"] }}
                transition={{ repeat: Infinity, duration: duration, ease: "linear" }}
            >
                {[...images, ...images].map((src, index) => (
                    <img key={index} src={`/images/Activity/Pro${src}.png`} className={styles.slideImg} />
                ))}
            </motion.div>
        </div>
    );
}
