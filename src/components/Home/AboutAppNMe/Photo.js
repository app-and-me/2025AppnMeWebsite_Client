import { motion } from "framer-motion"
import styles from "../../../styles/AboutUs/Photo.module.css"
import { useEffect, useState } from "react"
export default function Photo({ start, end, images }) {

    const [duration, setDuration] = useState(30);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 701) {
                setDuration(10); // mobile
            } else {
                setDuration(30); // PC 
            }
        };

        handleResize(); // 초기 설정
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <div className={styles.allContainer}>
                <motion.div
                    className={styles.slideContainer}
                    animate={{ x: [start, end] }}
                    transition={{ repeat: Infinity, duration: duration, ease: "linear" }}
                >
                    {[...images, ...images].map((src, index) => (
                        <img key={index} src={`/images/Activity/Photo${src}.jpg`} className={styles.slideImg} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}