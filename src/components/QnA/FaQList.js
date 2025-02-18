import React, { useState, useRef } from "react";
import styles from "../../styles/QnA/FaQList.module.css";

const FaQData = [
    {
        id: 1,
        title: "앱앤미는 무슨 활동을 하나요?",
        content: "각종 세미나/헤커톤/공모전/전시 등에 참가하고 선배들과 전공과 관련된 스터디를 진행하며 다양한 경험을 쌓을 수 있는 활동을 합니다!",
    },
    {
        id: 2,
        title: "앱앤미 지원 자격이나 방법, 그리고 연락은 어떻게 하면 되나요?",
        content: "지원 자격: 모든 과가 지원 가능합니다!\n지원 방법: 앱앤미 웹사이트를 이용하여 온라인 지원\n연락: 질문은 웹사이트를 이용해 주시고 연락은 앱앤미 인스타(@app_and_me)로 디엠을 이용해 주세요!",
    },
    {
        id: 3,
        title: "앱앤미는 어떤 역량을 가장 많이 보나요?",
        content: "앱앤미는 다양한 프로젝트를 경험하는 만큼 협업능력, 소통능력 등을 많이 봅니다!",
    },
    {
        id: 4,
        title: "앱앤미 면접 많이 어렵나요?",
        content: "아니요! 전혀 어렵지 않습니다.",
    },
    {
        id: 5,
        title: "앱앤미 면접 볼 때 꿀팁이 있나요?",
        content: "자신감 있게, 그리고 솔직하게 대답하는 것이 중요합니다!",
    }
];

export default function FaQList({ addClass }) {
    const [openFaq, setOpenFaq] = useState([]);
    const contentRefs = useRef({});

    const toggleItem = (id) => {
        setOpenFaq((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };
    return (
        <div className={`$styles["all-container"]} ${addClass}`} >
            {
                FaQData.map((item) => (
                    <div
                        key={item.id}
                        className={`${styles["qnaList-container"]} ${openFaq.includes(item.id) ? styles["open"] : ""}`}
                    >
                        <div onClick={() => toggleItem(item.id)}>
                            <div className={styles["title-container"]}>
                                <span>{item.title}</span>
                                <span className={styles["toggle-icon"]}>{openFaq.includes(item.id) ? '×' : '+'}</span>
                            </div>
                        </div>

                        <div
                            ref={(el) => (contentRefs.current[item.id] = el)}
                            className={styles["faq-content"]}
                            style={{
                                height: openFaq.includes(item.id) ? `${contentRefs.current[item.id]?.scrollHeight}px` : "0px",
                                opacity: openFaq.includes(item.id) ? "1" : "0",
                                transition: "height 0.4s ease-out, opacity 0.4s ease-out",
                            }}
                        >
                            {item.content.split("\n").map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                        </div>
                    </div>
                ))
            }
        </ div >
    );
}
