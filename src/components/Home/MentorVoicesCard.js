import React, { useState, useEffect } from "react";
import styles from "../../styles/Home/MentorVoices.module.css";

export default function MentorVoicesCard() {
    const [mentorData, setMentorData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/mentorData.json");
                const data = await response.json();  
                setMentorData(data); // 상태에 데이터 저장
            } catch (error) {
                console.error("에러 발생", error);
            }
        }; 
        fetchData();
    }, []);  

    return (
        <div className={styles.card}>
        <div className={styles.gridContainer}>
            {mentorData.map((mentor) => (
                <div key={mentor.id} className={styles["all-container"]}>
                    <img src={`images/Member/member${mentor.id}.png`}/>
                    <div className={styles["message"]}>{mentor.message}</div>

                    <div className={styles["memberInfo-container"]}>
                        <div className={styles.dotContainer}>
                            <span>{mentor.name}</span>
                            <div className={styles.dot}></div>
                            <span>{mentor.role}</span>
                        </div>
                        <span className={styles.major}>앱앤미 12기 - {mentor.major}</span>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}
