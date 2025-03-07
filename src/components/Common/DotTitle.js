import React from "react";
import styles from "../../styles/Dot.module.css"


export default function DotTitle({ dotTitle }) {
    return (
        <div className={styles.Container}>
            <div style={{
                background: "linear-gradient(90deg, rgba(255, 0, 174, 0.05) 0%, #FF00AE 50%, rgba(255, 0, 174, 0.05) 100%)",
                width: "68px",
                height: "1px"
            }}></div>

            <div className={styles.content}>
                <div className={styles.dot}></div>
                {dotTitle}
            </div>
        </div>
    );
}
