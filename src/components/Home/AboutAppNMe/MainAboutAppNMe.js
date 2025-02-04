import Title from "./Title";
import Content from "./Content";
import styles from "../../../styles/Home/MainAboutAppNMe.module.css"
import DotTitle from "../../Common/DotTitle";
import Button from "../../Common/Button";
import { useNavigate } from "react-router-dom";
export default function MainAboutAppNMe() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/JoinUsPage")
    }
    return (
        <div className={styles.Container}>
            <img src="images/subLogo.png"></img>

            <div className={styles["title-container"]}>
                <DotTitle dotTitle={"About App & Me"} />
                <p className={styles.mirim}>미림마이스터고등학교</p>
                <Title title1={"자율 동아리 App & Me"} title2={"새로운 부원을 모집합니다!"} />
                <div className={styles.content}><Content title1={"저희의 소개가 필요하다면 스크롤 해 주세요"} /></div>
                <Button width={"89px"} height={"46px"} borderRadius={"10px"} text={"지원하기"} onClick={handleClick} />
            </div>
        </div>
    )
}