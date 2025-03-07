import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/QnA/FaQList.module.css";
import axios from "axios";

export default function FaQList({ addClass }) {
    const [openFaq, setOpenFaq] = useState([]);
    const contentRefs = useRef({});
    const [faqs, setFaqs] = useState([]); //질문, 답변 

    const toggleItem = (id) => {
        setOpenFaq((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    useEffect(() => {
        axios
            .get("http://localhost:3000/qna")
            .then((response) => {
                console.log("가져온 데이터 확인 : ", response.data);
                setFaqs(response.data.data);
            })
            .catch((error) => {
                console.error("faq 데이터를 가져오는 중 오류 발생함: ", error);
            });
    }, []);

    return (
        <div className={styles.answerAllContainer}>

            {faqs.map((faq) => (
                <div key={faq.id}>
                    <div className={styles["qnaList-container"]}>
                        <div className={styles["title-container"]}>
                            <span
                                className={styles.questionTitle}
                                onClick={() => toggleItem(faq.id)}
                            >
                                {faq.content}
                            </span>
                            <span
                                className={styles["toggle-icon"]}
                                onClick={() => toggleItem(faq.id)}
                            >
                                {openFaq.includes(faq.id) ? "×" : "+"}
                            </span>
                        </div>

                        {/* 답변  */}
                        <div
                            ref={(el) => (contentRefs.current[faq.id] = el)}
                            className={styles["faq-content"]}
                            style={{
                                height: openFaq.includes(faq.id)
                                    ? `${contentRefs.current[faq.id]?.scrollHeight}px`
                                    : "0px",
                                opacity: openFaq.includes(faq.id) ? "1" : "0",
                                transition: "height 0.4s ease-out, opacity 0.4s ease-out",
                                overflow: "hidden",
                            }}
                        >
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
}
