import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../../styles/JoinUs/JoinForm.module.css";

export default function JoinForm() {
    const navigate = useNavigate();
    const [isPastDeadline, setIsPastDeadline] = useState(false);
    const hasAlerted = useRef(false)
    useEffect(() => {
        const today = new Date();
        const deadline = new Date(today.getFullYear(), 2, 21);

        if (today > deadline) {
            setIsPastDeadline(true)
            if (!hasAlerted.current) {
                alert("동아리 모집 기간이 끝났습니다.");
                hasAlerted.current = true;
            }
        }
    }, [])

    const [formData, setFormData] = useState({
        name: "",
        student_number: "",
        phone_number: "",
        gender: "여",
        major: "소프트웨어과",
        birth_date: "",
        lived_dormitory: "통학생",
        five_letters: "",
        motivate: "",
    });

    const [errors, setErrors] = useState({
        birth_date: "",
        five_letters: "",
    })

    const handleChange = (e) => {
        if (isPastDeadline) return;

        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })

        if (name === "birth_date") {
            if (!/^\d{6}$/.test(value)) {
                setErrors({ ...errors, birth_date: "생년월일은 YYMMDD 형식으로 입력해주세요. 예: 090101" })
            } else {
                setErrors({ ...errors, birth_date: "" })
            }
        }

        if (name === "five_letters") {
            if (value.length !== 5) {
                setErrors(prev => ({ ...prev, five_letters: "다섯 글자로 입력해주세요." }));
            } else {
                setErrors(prev => ({ ...prev, five_letters: "" }));
            }
        }

        if (name === "phone_number") {
            const formattedValue = value.replace(/[^\d]/g, '').slice(0, 11);
            const phoneFormatted = formattedValue.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
            setFormData(prev => ({ ...prev, [name]: phoneFormatted }));
            return;
        }

        const MAX_LENGTH = {
            student_number: 4,
            five_letters: 5,
            motivate: 300,
        };

        if (MAX_LENGTH[name] && value.length > MAX_LENGTH[name]) return;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isPastDeadline) {
            alert('동아리 신청 기간이 마감되었습니다.')
            return
        }


        if (!/^\d{6}$/.test(formData.birth_date)) {
            setErrors({ ...errors, birth_date: "생년월일은 YYMMDD 형식으로 입력해주세요. 예: 090101" });
            return;
        }


        console.log("작성된 form data보기 : ", formData)

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/apply`, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log("서버 응답", response.data);
            alert("신청이 완료 되었습니다!");
            navigate('/')
            window.scrollTo({ top: 0, behavior: "smooth" })


            setFormData({
                name: "", student_number: "", phone_number: "",
                gender: "여", major: "소프트웨어과", birth_date: "",
                lived_dormitory: "통학생", five_letters: "", motivate: "",
            })

            setErrors({ birth_date: "", five_letters: "" })
        } catch (error) {
            console.error("에러 발생", error)
            alert("서버와 연결에 문제가 발생함")
            navigate('/')
        }
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
                            disabled={isPastDeadline}
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
                            disabled={isPastDeadline}
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
                    disabled={isPastDeadline}
                    required
                />

                <div className={styles.firstLine}>
                    <div className={styles.width}>
                        <label>성별*</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            disabled={isPastDeadline}
                            required
                        >
                            <option value="여성">여</option>
                            <option value="남성">남</option>
                        </select>
                    </div>
                    <div className={styles.width}>
                        <label>학과*</label>
                        <select
                            name="major"
                            value={formData.major}
                            onChange={handleChange}
                            disabled={isPastDeadline}
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
                            disabled={isPastDeadline}
                            required
                        />
                        {errors.birth_date && <div style={{ color: "red" }}>{errors.birth_date}</div>}
                    </div>
                </div>

                <label>기숙사 여부*</label>
                <select
                    name="lived_dormitory"
                    value={formData.lived_dormitory}
                    onChange={handleChange}
                    disabled={isPastDeadline}
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
                    disabled={isPastDeadline}
                    required
                />
                {errors.five_letters && <div style={{ color: "red" }}>{errors.five_letters}</div>}

                <label>지원동기*</label>
                <textarea
                    name="motivate"
                    value={formData.motivate}
                    onChange={handleChange}
                    maxLength={300}
                    placeholder="지원동기를 작성해주세요(최대 300자)"
                    disabled={isPastDeadline}
                    required
                />
                <div style={{ margin: "10px 0", fontSize: "14px" }}>
                    {formData.motivate.length}/300
                </div>

                <button type="submit" className={styles.submitButton}>제출하기</button>
                {isPastDeadline && (
                    <div style={{ color: "red", margin: "30px 0 10px 0" }}>
                        모집 기간이 마감되었습니다.
                    </div>
                )}
            </form>
        </div>
    );
}
