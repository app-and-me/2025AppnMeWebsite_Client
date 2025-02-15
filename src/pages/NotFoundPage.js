import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Common/Button";
import Footer from "../components/Common/Footer";
import styles from "../styles/NotFoundPage.module.css"

export default function NotFound() {
    const navigate = useNavigate();
    const handleclick = () => {
        navigate("/")
    }
    return (
        <div>
            <div className={styles["all-container"]}>
                <div style={{ display: "flex", alignItems: "center", columnGap: "12px", margin: "20px 0 34px 0" }}>
                    <div className={styles["btn-container"]}>OOPS</div>
                    <span style={{ fontSize: "16px" }}>Page Not Found</span>
                </div>

                <div className={styles["main-title"]}>
                    <p>404 - Oops Page</p>
                    <p>Not Found in Data.</p>
                </div>

                <div className={styles["sub-title"]}>
                    <p>Oops! The web page you’re looking for doesn’t</p>
                    <p>exist. Please click the below button to get back to the home.</p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button width={"170px"} height={"46px"} text={"Back To Homepage"} onClick={handleclick} borderRadius={"10px"} />
                </div>
            </div>
            <Footer />
        </div>
    )
}