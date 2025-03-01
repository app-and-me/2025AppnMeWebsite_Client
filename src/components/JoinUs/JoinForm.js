import { useState } from "react";
import axios from "axios";
import styles from "../../styles/JoinUs/JoinForm.module.css";

export default function JoinForm() {
    const [formData, setFormData] = useState({
        name: "",
        student_number: "",
        phone_number: "",
        gender: "남성",
        major: "소프트웨어과",
        birth_date: "",
        lived_dormitory: "통학생",
        five_letters: "",
        motivate: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "phone_number") {
            if (!value.includes('-')) {
                const formattedValue = value.replace(/[^\d]/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
                setFormData({ ...formData, [name]: formattedValue });
            } else {
                setFormData({ ...formData, [name]: value });
            }
        } else {
            const MAX_LENGTH = {
                student_number: 4,
                five_letters: 5,
                motivate: 300,
            };

            if (
                (name === "student_number" && value.length <= MAX_LENGTH.student_number) ||
                (name === "five_letters" && value.length <= MAX_LENGTH.five_letters) ||
                (name === "motivate" && value.length <= MAX_LENGTH.motivate) ||
                (name !== "student_number" && name !== "five_letters" && name !== "motivate")
            ) {
                setFormData({ ...formData, [name]: value });
            }
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

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
                            name="student_number"
                            value={formData.student_number}
                            onChange={handleChange}
                            placeholder="1101"
                            maxLength={4}
                            required
                        />
                    </div>
                </div>

                <label>전화번호*</label>
                <input
                    type="text"
                    name="phone_number"
                    value={formData.phone_number}
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
                            name="major"
                            value={formData.major}
                            onChange={handleChange}
                            required
                        >
                            <option value="소프트웨어과">소프트웨어과</option>
                            <option value="디자인과">디자인과</option>
                        </select>
                    </div>


                    <div className={styles.width}>
                        <label>생년월일*</label>
                        <input
                            type="text"
                            name="birth_date"
                            value={formData.birth_date}
                            onChange={handleChange}
                            placeholder="090101"
                            required
                        />
                    </div>
                </div>

                <label>기숙사 여부*</label>
                <select
                    name="lived_dormitory"
                    value={formData.lived_dormitory}
                    onChange={handleChange}
                    required
                >
                    <option value="통학생">통학생</option>
                    <option value="기숙사생">기숙사생</option>
                </select>

                <label>나를 다섯 글자로 표현한다면*</label>
                <input
                    type="text"
                    name="five_letters"
                    value={formData.five_letters}
                    onChange={handleChange}
                    maxLength={5}
                    placeholder="ex) 완전열정적"
                    required
                />

                <label>지원동기*</label>
                <textarea
                    name="motivate"
                    value={formData.motivate}
                    onChange={handleChange}
                    maxLength={300}
                    placeholder="지원동기를 작성해주세요(최대 300자)"
                    required
                />
                <div style={{ margin: "10px 0", fontSize: "14px" }}>
                    {formData.motivate.length}/300
                </div>

                <button type="submit" className={styles.submitButton}>제출하기</button>
            </form>
        </div>
    );
}
