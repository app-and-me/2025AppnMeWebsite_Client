import React from "react";
import styles from "../../styles/JoinUsNow.module.css"
import Button from "./Button";

export default function JoinUsNow() {
    return (
        <div className={styles["all-container"]}>
            <div className={styles["introduction"]}>
                <img src="" style={{ margin: "50px 0 30px 0" }}></img>
                <p>App & Me</p>
                <p>아직 지원하지 않으셨나요?</p>
                <p>정말 후회없는 선택일 것입니다!</p>
            </div>
            <div style={{
                margin: "30px 0 0 0"
            }}>
                <Button text={"지금 바로 지원하기"} width={"150px"} height={"46px"} boxshadow="none" />
            </div>
        </div>
    )
}