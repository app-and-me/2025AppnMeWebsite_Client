import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Common/TopHeader";
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

    const Member12 = [
        { name: "추다율", github: "https://github.com/dayul" },
        { name: "윤주영", github: "https://github.com/juyoung07" },
        { name: "배주연", github: "https://github.com/juyeon-Bae" },
        { name: "황유진", github: "https://github.com/hofkj" },
        { name: "하지민", github: "https://www.instagram.com/hovynq/" },
        { name: "송유빈", github: "https://www.instagram.com/sonououorn.xo/" }
    ];
    const Member13 = [
        { name: "지수민", github: "https://github.com/cuzurmyhabit" },
        { name: "이효은", github: "https://github.com/Hyotaccato" },
        { name: "유성윤", github: "https://github.com/3x-haust" },
        { name: "강재호", github: "https://github.com/jaehokang1007" },
        { name: "이서현", github: "https://www.instagram.com/zush.ol/" },
        { name: "송지아", github: "https://www.instagram.com/soo_g81/" }
    ];
    return (
        <div>
            <Header />
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
                        {Member12.map((member) => (
                            <a href={member.github} target="_blank" key={member.name}>
                                <img className={styles["profile-img"]} src={`images/Member/12-${member.name}.png`} />
                            </a>
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
                            <a href={item.github} target="_blank" >
                                <img className={styles["profile-img"]} src={`images/Member/13-${item.name}.png`}></img>
                            </a>
                        ))}
                    </div>
                </div>
                <div className={styles.bottom}>
                    <Bottom />
                </div>
                <div className={styles.faqContainer}>
                    <FaQ />
                </div>
            </div>
            <JoinUsNow />
            <Footer />
        </div>
    )
}