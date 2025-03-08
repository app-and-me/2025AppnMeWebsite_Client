import React from "react";
import styles from "../../styles/JoinUsNow.module.css"
import Button from "./Button";
import DotTitle from "./DotTitle";
import { useNavigate } from "react-router-dom";
export default function JoinUsNow() {
    const MoveToTop = () => { window.scrollTo({ top: 0, behavior: "smooth" }) }
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/JoinUs")
        MoveToTop()
    }
    return (
        <div className={styles.main}>
            <div className={styles["all-container"]}>
                <div className={styles["introduction"]}>
                    <div className={styles.dot}><DotTitle dotTitle={"Join Us Now"} /></div>
                    <p>App & Me</p>
                    <p>아직 지원하지 않으셨나요?</p>
                    <p style={{ fontWeight: "300" }}>정말 후회없는 선택일 거예요!</p>
                </div>
                <div style={{
                    margin: "50px 0 0 0"
                }}>
                    <Button text={"지금 바로 지원하기"} width={"150px"} height={"46px"} borderRadius={"10px"} onClick={handleClick} />
                </div>
            </div>
        </div>
    )
}