import DotTitle from "../Common/DotTitle"
import Title from "../Home/AboutAppNMe/Title"
import Content from "../Home/AboutAppNMe/Content"
import Button from "../Common/Button"
import CardPrize from "../Home/OurPrize/CardPrize"
import { useNavigate } from "react-router-dom"
import styles from "../../styles/Prize/OurPrize.module.css"
export default function OurPrize() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/Prize')
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return (
        <div className={styles["all-container"]}>
            <img src="/images/Logo/subLogo.png" className={styles.logoImg}></img>

            <div className={styles["history-container"]}>
                <DotTitle dotTitle={"Our Prize"} />
                <div className={styles.title}>
                    <p>앱앤미 부원들의</p>
                    <p>자랑스러운 수상 내역</p>
                </div>
                <Content marginTop={"10px"}
                    title1={"멋진 상들을 받고 싶다면, 지금 지원하세요!"}
                    title2={"멋진 선배들이 여러분을 간절히 기다리고 있습니다."} />

                <div className={styles["btn-container"]}>
                    <Button width={"165px"} height={"46px"} borderRadius={"10px"}
                        text={"더 많은 수상내역 보기"}
                        onClick={handleClick} />
                </div>

                <CardPrize />
            </div>
        </div>
    )
}