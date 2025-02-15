import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TitleCard from "../components/Common/TitleCard";
import Banner from "../components/Home/MainTitle/Banner";
import SectionBlock from "../components/Home/SectionBlock"
import FaQ from "../components/QnA/FaQ";
import Bottom from "../components/Common/Bottom";
import JoinUsNow from "../components/Common/JoinUsNow";
import Footer from "../components/Common/Footer";
import TransparentBottom from "../components/Common/TransparentBottom";
import styles from "../styles/Home/Pages/AboutUsPage.module.css"

export default function AboutUsPage() {
    const [isFooterVisible, setIsFooterVisible] = useState(true);
    const navigate = useNavigate();


    const checkScrollPosition = () => {
        const scrollY = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;


        if (scrollY + windowHeight >= documentHeight - 10) {
            setIsFooterVisible(false);  // 숨기기
        } else {
            setIsFooterVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScrollPosition);
        return () => {
            window.removeEventListener("scroll", checkScrollPosition);
        };
    }, []);

    const Member12 = ["추다율", "윤주영", "배주연", "황유진", "하지민", "송유빈"]
    const Member13 = ["지수민", "이효은", "유성윤", "강재호", "이서현", "송지아"]
    return (
        <div>
            {isFooterVisible && <TransparentBottom />}
            <div style={{ position: "relative", display: "flex", height: "506px", overflow: "hidden" }}>
                <Banner />

                <div style={{ position: "absolute", zIndex: "1", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
                    <TitleCard
                        borderRadius={"6px"} fontSize={"12px"}
                        btnWeight={"46px"} btnHeight={"28px"} btnText={"2025"}
                        mainTitle={"12기, 13기 부원을 소개합니다!"}
                        subTitle1={"12기, 13기의 앱앤미 부원들을 소개합니다!"}
                        subTitle2={"다음의 앱앤미가 될 14기 부원들을 기다리고 있답니다."}
                    />
                </div>
            </div>

            <div className={styles.sectionBlock}>
                <SectionBlock marginBottom={"100px"}
                    dotTitle={"Team Members"} title1={"App & Me 12기"} />
            </div>

            <div className={styles["responsive"]}>

                <div>
                    <div className={styles.profileContainer}>
                        {Member12.map((item) => (
                            <img className={styles["profile-img"]} src={`images/Member/12-${item}.png`}></img>
                        ))}
                    </div>
                </div>

                <div className={styles.sectionBlock13}>
                    <SectionBlock marginBottom={"100px"}
                        dotTitle={"Team Members"} title1={"App & Me 13기"} />
                </div>
                <div>
                    <div className={styles.profileContainer}>
                        {Member13.map((item) => (
                            <img className={styles["profile-img"]} src={`images/Member/13-${item}.png`}></img>
                        ))}
                    </div>
                </div>

                <Bottom />

                <FaQ />
            </div>
            <JoinUsNow />
            <Footer />
        </div>
    )
}