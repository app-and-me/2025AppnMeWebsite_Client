import styles from "../../styles/JoinUs/JoinForm.module.css"
import styles2 from "../../styles/JoinUs/JoinUsPage.module.css"
import { useState, useEffect, useRef } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

export default function QForm() {
    const navigate = useNavigate()
    const [isPastDeadline, setIsPastDeadline] = useState(false);
    const hasAlerted = useRef(false)
    useEffect(() => {
        const today = new Date();
        const deadline = new Date(today.getFullYear(), 2, 14)
        if (today > deadline) {
            setIsPastDeadline(true)
            if (!hasAlerted.current) {
                alert('질문 기간이 끝났습니다.')
                hasAlerted.current = true
            }
        }
    }, [])
    const [formData, setFormData] = useState({
        content: ""
    })

    const handleChange = (e) => {
        if (isPastDeadline) return;
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        if (isPastDeadline) {
            alert('질문 기간이 끝났습니다.')
            return;
        }


        try {
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/qna/question`,
                formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            console.log("응답 data: ", response.data)
            alert("글이 작성되었습니다!")
            navigate('/QnA')
            setFormData({ content: "", password: "" })
        } catch (error) {
            console.error(error)
            alert("error 발생")
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles2.questionForm}>

                <label>질문 내용*</label>
                <textarea
                    type="text"
                    name="content"
                    value={formData.content}
                    placeholder="질문을 작성해주세요."
                    onChange={handleChange}
                    className={styles.questionBox}
                    disabled={isPastDeadline}
                    required
                />
                <button type="submit" className={styles.submitButton}>질문하기</button>
                {isPastDeadline && <p
                    style={{ color: "red", margin: "30px 0 10px 0" }}
                >질문 기간이 마감되었습니다.</p>}

            </form>
        </div>
    )
}