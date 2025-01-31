import React from "react";
import Button from "./Button";
import styles from "../../styles/TitleCard.module.css"
export default function TitleCard({ infoTitle = "2025 App & Me Website", mainTitle, subTitle1, subTitle2 }) {
    return (
        <div className={styles["all-container"]}>
            <div className={styles["infoTitle"]}>
                <Button width={"45px"} height={"28px"} text={"2025"} />
                <span>{infoTitle}</span>
            </div>
            <img src="/images/logo.png"></img>
            <div style={{ fontSize: "54px" }}>{mainTitle}</div>
            <div className={styles["subTitle"]}>
                <p>{subTitle1}</p>
                <p>{subTitle2}</p>
            </div>
        </div>
    )
}