import React from "react";
import styles from "../../styles/Home/MentorVoices.module.css"

export default function MentorVoicesCard({ profileImg, message, name, role, major }) {
    return (
        <div className={styles["all-container"]}>
            <img src={profileImg}></img>
            <div className={styles["message"]}>{message}</div>

            <div className={styles["memberInfo-container"]}>
                <div className={styles.dotContainer}>
                    <span>{name}</span>
                    <div className={styles.dot}></div>
                    <span>{role}</span>
                </div>
                <span className={styles.major}>앱앤미 12기 - {major}</span>
            </div>
        </div>
    )
}