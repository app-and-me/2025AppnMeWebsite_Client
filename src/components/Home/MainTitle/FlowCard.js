import { motion } from "framer-motion";
import styles from "../../../styles/Home/ImageSlider.module.css";

export default function ScrollingImages() {
    const images = ["1", "4", "1", "4"];

    return (
        <div className={styles.allContainer}>
            <div className={styles.line}></div>
            <motion.div
                className={styles.slideContainer}
                animate={{ x: ["0%", "-100%"] }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            >
                {/* 이미지 배열을 2번 반복해서 붙이기 */}
                {[...images, ...images].map((src, index) => (
                    <img key={index} src={`/images/Logo/slide${src}.png`} className={styles.slideImg} />
                ))}
            </motion.div>
        </div>
    );
}
