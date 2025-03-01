import styles from "../../styles/JoinUs/JoinForm.module.css"
import styles2 from "../../styles/JoinUs/JoinUsPage.module.css"
import { useState } from "react"
export default function QForm() {
    const [formData, setFormData] = useState({
        content: "",
        password: "",
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
                <label>질문 내용*</label>
                <textarea
                    type="text"
                    name="content"
                    value={formData.content}
                    placeholder="질문을 작성해주세요."
                    onChange={handleChange}
                    className={styles.questionBox}
                    required
                />
                <div className={styles.width}>
                    <label className={styles.pwLabel}>비밀번호 (질문 수정을 위한 용도입니다)*</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        placeholder="비밀번호를 작성해주세요."
                        onChange={handleChange}
                        className={styles.passwordBox}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>질문하기</button>
            </form>
        </div>
    )
}