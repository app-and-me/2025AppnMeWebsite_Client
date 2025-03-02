import { useNavigate } from "react-router-dom"
import TitleCard from "../components/Common/TitleCard"
import Button from "../components/Common/Button"
import DotTitle from "../components/Common/DotTitle"
import Bottom from "../components/Common/Bottom"
import Footer from "../components/Common/Footer"
import FaQList from "../components/QnA/FaQList"
import Header from "../components/Common/Header"
import AnswerFaQList from "../components/QnA/AnswerFaQList"
import styles from "../styles/QnA/QnAPage.module.css"
export default function QnAPage() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/QuestionForm')
    }
    return (
        <div>
            <Header />
            <div className={styles["all-container"]}>
                <TitleCard
                    btnText={"14기"} btnWeight={"41px"} btnHeight={"28px"} borderRadius={"6px"} fontSize={"12px"}
                    infoTitle="Let's Work Together"
                    mainTitle={"QnA 게시판 입니다!"}
                    subTitle1={"자유롭게 질문해주세요!"}
                />

                <div style={{ display: "flex", justifyContent: "center", margin: "38px 0 161px 0" }}>
                    <Button
                        width={"122px"} height={"46px"} borderRadius={"10px"}
                        text={"질문 하러 가기"}
                        onClick={handleClick}
                    />
                </div>

                <div className={styles["qna-container"]}>
                    <DotTitle dotTitle={"Q&A"} />
                    <p className={styles["qna-title"]}>Q&A 게시판</p>
                    <p style={{ color: "#FFFFFF99" }}>여기서 동아리 관련 질문들을 확인하실 수 있습니다!</p>
                </div>
            </div>

            <div className={styles["qnaList-container"]}>
                <AnswerFaQList />
                <FaQList addClass={styles["faq-all-container"]} />
            </div>
            <Bottom />
            <Footer />
        </div>
    )
}