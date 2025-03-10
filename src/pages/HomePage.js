import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Common/TopHeader";

import Project from "../components/Home/AboutAppNMe/Project";
import Footer from "../components/Common/Footer";
import LanguageCard from "../components/Home/LanguageCard";
import ScrollingImages from "../components/Home/MainTitle/FlowCard";
import MainTitle from "../components/Home/MainTitle/MainTitle";
import SectionBlock from "../components/Home/SectionBlock";
import MentorVoicesCard from "../components/Home/MentorVoicesCard";
import OurPrize from "../components/Prize/OurPrize";
import JoinUsNow from "../components/Common/JoinUsNow";
import FaQ from "../components/QnA/FaQ";
import Photo from "../components/Home/AboutAppNMe/Photo";
import MainActivity from "../components/Home/Activity/MainActivity";
import ActivityCardMain from "../components/Home/Activity/ActivityCardMain";
import MainAboutAppNMe from "../components/Home/AboutAppNMe/MainAboutAppNMe";
import Bottom from "../components/Common/Bottom";
import TransparentBottom from "../components/Common/TransparentBottom";
import styles from "../styles/Home/Pages/HomePage.module.css"
export default function HomePage() {
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
    return (

        <div className={styles.allContainer}>
            <Header />
            {isFooterVisible && <TransparentBottom />}
            <div className={styles.mainWrapper}>
                <MainTitle />
                <ScrollingImages />
            </div>

            <div className={styles.introduce}><SectionBlock dotTitle={"APP & ME"} title1={"APP & ME"}
                title2={"동아리를 소개합니다!"} marginBottom={"60px"} /></div>
            <Bottom />

            <div style={{ margin: "7vh 0 18vh 0" }}><MainAboutAppNMe /></div>
            <SectionBlock dotTitle={"Project"} title1={"App & Me"} title2={"프로젝트를 소개합니다!"}
                subTitle1={"12기, 13기 앱앤미 부원들의 프로젝트들을 소개합니다!"} marginTop={"30px"} marginBottom={"30px"} />
            <div className={styles.styleContainer}><Project /></div>

            <div style={{ marginBottom: "100px" }}><Bottom /></div>
            <SectionBlock dotTitle={"Tools"} title1={"앱앤미의 기술 스택"} subTitle1={"선배와 후배가 함께하는 스터디를 꾸준히 진행하여 부원들의"}
                subTitle2={"실력 향상에 도움이 되고자 합니다. "} marginTop={"10px"} marginBottom={"40px"} />
            <div className={styles.styleContainer}><LanguageCard /></div>

            <div className={styles.styleContainer}>
                <MainActivity />
                <ActivityCardMain />
            </div>

            <OurPrize />

            <SectionBlock dotTitle={"Photo"} title1={"앱앤미의 친목 사진"}
                subTitle1={"선후배 간의 격식없이 다같이 친한 동아리로, 다양한 활동을 통해 선배들과 이야기를 하며 친목을 다져 더욱 친밀하고 가까운 사이입니다."}

                marginTop={"10px"} marginBottom={"65px"} />
            <div className={styles.styleContainer}>
                <div className={styles.PhotoContainer}>
                    <Photo start={"0%"} end={"-100%"} images={[1, 2, 3, 4]} />
                    <Photo start={"-100%"} end={"0%"} images={[5, 6, 7, 8]} />
                </div>
            </div>



            <SectionBlock dotTitle={"Testimonial"} title1={"12기 선배들에게"} title2={"앱앤미란?"}
                marginTop={"75px"} marginBottom={"55px"} />
            <MentorVoicesCard />
            <Bottom margin={"100px 0 0 0"} />
            <div className={styles.styleContainer}>
                <FaQ />
            </div>
            <JoinUsNow />
            <Footer />
        </div>
    )
}