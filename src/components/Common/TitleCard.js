import React from "react";
import Button from "./Button";
import styles from "../../styles/TitleCard.module.css"
export default function TitleCard({ infoTitle = "2025 App & Me Website", mainTitle, mainTitle2, subTitle1, subTitle2, btnText, btnWeight, btnHeight, fontSize, borderRadius }) {
    return (
        <div className={styles["all-container"]}>
            <div className={styles["infoTitle"]}>
                <Button width={btnWeight} height={btnHeight} text={btnText} fontSize={fontSize} borderRadius={borderRadius} />
                <span>{infoTitle}</span>
            </div>
            <img src="/images/logo.png"></img>
            <div style={{ fontSize: "54px" }}>{mainTitle}</div>
            <div style={{ fontSize: "54px" }}>{mainTitle2}</div>
            <div className={styles["subTitle"]}>
                <p>{subTitle1}</p>
                <p>{subTitle2}</p>
            </div>
        </div>
    )
}