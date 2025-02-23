import styles from "../../styles/JoinUs/JoinForm.module.css"
import styles2 from "../../styles/JoinUs/JoinUsPage.module.css"
import { useState } from "react"
export default function QForm() {
    const [formData, setFormData] = useState({
        title: "",
        content: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value, })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //나중에 api로 백에 저장하기

        alert("질문이 등록되었습니다!")
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles2.questionForm}>
                {/* <div className={styles.width}>
                    <label>제목*</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        placeholder="제목을 작성해주세요."
                        onChange={handleChange}
                        required
                    />
                </div> */}

                <div className={styles.width}>
                    <label>질문 내용*</label>
                    <input
                        type="text"
                        name="content"
                        value={formData.content}
                        placeholder="질문을 작성해주세요."
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>제출하기</button>
            </form>
        </div>
    )
}