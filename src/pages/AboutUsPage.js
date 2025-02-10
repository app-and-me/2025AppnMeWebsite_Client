import React from "react";
import TitleCard from "../components/Common/TitleCard";
import Banner from "../components/Home/MainTitle/Banner";
import SectionBlock from "../components/Home/SectionBlock"
import FaQ from "../components/QnA/FaQ";
import JoinUsNow from "../components/Common/JoinUsNow";
import ProfileCard from "../components/AboutUs/ProfileCard";
import Footer from "../components/Common/Footer";
import styles from "../styles/Home/Pages/AboutUsPage.module.css"

export default function AboutUsPage() {
    return (
        <div>
            <div style={{position:"relative", display:"flex", height:"506px", overflow:"hidden"}}>
            <Banner/>

            <div style={{ position: "absolute", zIndex: "1", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
            <TitleCard
                borderRadius={"6px"}fontSize={"12px"}
                btnWeight={"46px"} btnHeight={"28px"} btnText={"2025"}
                mainTitle={"12기, 13기 부원을 소개합니다!"}
                subTitle1={"12기, 13기의 앱앤미 부원들을 소개합니다!"}
                subTitle2={"다음의 앱앤미가 될 14기 부원들을 기다리고 있답니다."}
            />
            </div>
            </div>
            
            <div className={styles.sectionBlock}>
            <SectionBlock  marginBottom={"100px"}
            dotTitle={"Team Members"}  title1={"App & Me 12기"}/>
            </div>

            <ProfileCard />

            <div className={styles.sectionBlock13}>
            <SectionBlock  marginBottom={"100px"}
            dotTitle={"Team Members"} title1={"App & Me 13기"}  />
            </div>

            <FaQ />
            <JoinUsNow />
            <Footer/>
        </div>
    )
}