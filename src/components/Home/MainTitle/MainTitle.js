import { useNavigate } from "react-router-dom";
import Btn from "./btn";
import Button from "../../Common/Button";
import Banner from "./Banner";
import styled from "styled-components";
import styles from "../../../styles/Home/MainBanner.module.css"

export default function MainTitle() {
    const ImgStyle = styled.div`
        width: 100%;
        max-width: 409px;
        margin: 34px 0 26px 0;
        @media (max-width: 700px) {
             
                width: 100%;
                max-width: 257px;
           
        }
    `
    const navigate = useNavigate();
    const onClick = () => {
        navigate("/JoinUs")
    }
    return (
        <div className={styles.allContainer}>
            <div className={styles.MainTitleContainer}>
                <div className={styles.infoTitle}>
                    <Button text={"NEW"} borderRadius={"6px"} width={"45px"} height={"28px"} fontSize={"12px"} />
                    <span>2025 App & Me Website</span>
                </div>

                <ImgStyle><img src="/images/Logo/logo.png"></img></ImgStyle>

                <div>
                    <p style={{ color: "#FFFFFF99", marginBottom: "5px" }}>앱앤미는 차세대 개발 흐름에 따른 기술들을 익히고 연구하며</p>
                    <p style={{ color: "#FFFFFF99" }}>실제로 서비스를 구현해서 학교 및 사회에 기여하는 전공 동아리입니다.</p>
                </div>
                <Btn width={"149px"} backColor={"#FFFFFF26"} fontColor={"#FFF"} onClick={onClick} />

            </div>


            <Banner />
        </div>
    )
}