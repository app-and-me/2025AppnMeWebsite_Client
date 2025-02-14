import { motion } from "framer-motion"
import styles from "../../../styles/AboutUs/Photo.module.css"
import { useEffect, useState } from "react"
export default function Photo({ start, end, images }) {

    const [duration, setDuration] = useState(30);
    const [resetKey, setResetKey] = useState(0);
    useEffect(() => {
        const updateDuration = () => {
            const width = window.innerWidth;
            let newDuration;

            if (width < 768) {
                newDuration = 10; //mobile
            } else if (width < 1024) {
                newDuration = 25;//pc
            } else {
                newDuration = 30; //컴터
            }
            setDuration(newDuration);//초기설정
            setTimeout(() => {
                setResetKey(prev => prev + 1);
            }, 10);
        };

        updateDuration();
        window.addEventListener("resize", updateDuration);
        return () => window.removeEventListener("resize", updateDuration);
    }, []);

    return (
        <div>
            <div className={styles.allContainer}>
                <motion.div
                    key={resetKey}
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