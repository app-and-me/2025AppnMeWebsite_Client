import React, { useState, useRef } from "react";
import styles from "../../styles/QnA/FaQList.module.css";
import OptionBtn from "./OptionBtn";
export default function FaQList({ addClass }) {
    const [openFaq, setOpenFaq] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showOptions, setShowOptions] = useState(false)
    const contentRefs = useRef({});



    const toggleItem = (id) => {
        setOpenFaq((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
        setShowOptions(!showOptions)
    };

    const handleEdit = () => {
        //api
    }

    const handleDelete = () => {
        //api
    }

    return (
        <div className={styles.answerAllContainer}>
            <div className={styles["qnaList-container"]}>
                <div>
                    <div className={styles["title-container"]}>
                        <div>
                            <img
                                src="/images/Logo/modal.png"
                                className={styles.modalImg}
                                onClick={toggleModal}
                            />
                        </div>

                        <span className={styles.questionTitle} onClick={() => toggleItem(1)}>
                            질문 내용을 가져옴
                        </span>
                        <span className={styles["toggle-icon"]} onClick={() => toggleItem(1)}>
                            {openFaq.includes(1) ? "×" : "+"}
                        </span>
                    </div>
                </div>

                {/* 수정, 삭제 btn */}
                <div
                    style={{
                        opacity: isModalOpen ? "1" : "0",
                        visibility: isModalOpen ? "visible" : "hidden",
                        transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
                    }}>
                    {showOptions && <OptionBtn onEdit={handleEdit} onDelete={handleDelete} />}
                </div>

                {/* 답변 */}
                {!isModalOpen && (
                    <div
                        ref={(el) => (contentRefs.current[1] = el)}
                        className={styles["faq-content"]}
                        style={{
                            height: openFaq.includes(1) ? `${contentRefs.current[1]?.scrollHeight}px` : "0px",
                            opacity: openFaq.includes(1) ? "1" : "0",
                            transition: "height 0.4s ease-out, opacity 0.4s ease-out",
                            overflow: "hidden",
                        }}
                    >
                        {!isModalOpen && <p>답변입니다</p>}
                    </div>

                )}


            </div>
        </div>
    );
}
