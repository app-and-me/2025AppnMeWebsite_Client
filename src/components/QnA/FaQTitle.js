import DotTitle from "../Common/DotTitle";
import Button from "../Common/Button";
import styles from "../../styles/QnA/FaQTitle.module.css"
import { useNavigate } from "react-router-dom";
export default function FaQTitle() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/QuestionForm")
    }
    return (
        <div className={styles.allContainer}>
            <DotTitle dotTitle={"FaQ"} />
            <div className={styles.mainTitle}>
                <p>APP & ME에게</p>
                <p>자주 묻는 질문</p>
            </div>

            <div className={styles.subTitle}>
                <p>여러분이 자주 묻는 질문입니다! 아직 앱앤미에 대해 궁금한 점이 있다면 Q&A에서 자유롭게 질문해주세요!</p>
            </div>

            <div><Button borderRadius={"10px"} width={"122px"} height={"46px"} onClick={handleClick} text={"질문 하러 가기"} /></div>
        </div>
    )
}