import styles from "../../styles/JoinUs/JoinForm.module.css"
import styles2 from "../../styles/JoinUs/JoinUsPage.module.css"
import { useState, useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

export default function QForm() {
    const navigate = useNavigate()
    const [isPastDeadline, setIsPastDeadline] = useState(false);
    useEffect(() => {
        const today = new Date();
        const deadline = new Date(today.getFullYear, 2, 30) //임시
        if (today > deadline) {
            setIsPastDeadline(true)
        }
    }, [])
    const [formData, setFormData] = useState({
        content: ""
    })

    const handleChange = (e) => {
        if (isPastDeadline) return;
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value, })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)

        if (isPastDeadline) {
            alert("질문 기간이 끝났습니다.")
            return;
        }
        try {
            const response = await axios.post("http://localhost:3000/qna/question", formData, {
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
        <div>
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

            </form>
        </div>
    )
}