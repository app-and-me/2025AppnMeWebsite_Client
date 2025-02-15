import styles from "../../styles/JoinUs/JoinForm.module.css"
import { useState } from "react"

export default function JoinForm() {
    const [formData, setFormData] = useState({
        name: "",
        studentId: "",
        phone: "",
        gender: "",
        department: "소프트웨어과",
        dormitory: "통학생",
        fiveWords: "",
        motivation: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value, })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("제출된 데이터", formData)
        alert("백엔드 api 연결 후 실제 제출!!!")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={styles.firstLine}>
                    <div className={styles.width}>
                        <label>이름*</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="김미림"
                            required
                        />
                    </div>

                    <div className={styles.width}>
                        <label>학번*</label>
                        <input
                            type="text"
                            name="studentId"
                            value={formData.studentId}
                            onChange={handleChange}
                            placeholder="1101"
                            required
                        />
                    </div>
                </div>

                <label>전화번호*</label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="010-0000-0000"
                    required
                />

                <div className={styles.firstLine}>
                    <div className={styles.width}>
                        <label>성별*</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        >
                            <option value="남성">남성</option>
                            <option value="여성">여성</option>
                        </select>
                    </div>
                    <div className={styles.width}>
                        <label>학과*</label>
                        <select
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            required
                        >
                            <option value="소프트웨어과">소프트웨어과</option>
                            <option value="디자인과">디자인과</option>
                        </select>
                    </div>
                </div>
                <label>기숙사 여부*</label>
                <select
                    name="dormitory"
                    value={formData.dormitory}
                    onChange={handleChange}
                    required
                >
                    <option value="통학생">통학생</option>
                    <option value="기숙사생">기숙사생</option>
                </select>

                <label>나를 다섯 글자로 표현한다면*</label>
                <input
                    type="text"
                    name="fiveWords"
                    value={formData.fiveWords}
                    onChange={handleChange}
                    maxLength={5}
                    placeholder="ex) 완전열정적"
                    required
                />

                <label>지원동기*</label>
                <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    maxLength={300}
                    placeholder="지원동기를 작성해주세요(최대 300자)"
                    required
                />
                <div style={{ margin: "10px 0", fontSize: "14px" }}>{formData.motivation.length}/300</div>

                <button type="submit" className={styles.submitButton}>제출하기</button>
            </form>
        </div>
    )
}