import TitleCard from "../components/Common/TitleCard";
import Banner from "../components/Home/MainTitle/Banner";
import FaQ from "../components/QnA/FaQ";
import JoinUsNow from "../components/Common/JoinUsNow";
import Bottom from "../components/Common/Bottom";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/TopHeader";
import Awards from "../components/Prize/Awards";

import styles from "../styles/QnA/FaQ.module.css"
export default function PrizePage() {
    return (
        <div>
            <Header />
            <div style={{ position: "relative", display: "flex", height: "506px", overflow: "hidden", marginTop: "70px" }}>
                <Banner />

                <div style={{ position: "absolute", zIndex: "1", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
                    <TitleCard
                        btnText={"NEW"} btnWeight={"43px"} btnHeight={"28px"}
                        borderRadius={"6px"} fontSize={"12px"}
                        mainTitle={"수상내역을 소개합니다!"}
                        subTitle1={"멋진 상들을 받고 싶다면, 지금 지원하세요!"}
                        subTitle2={"멋진 선배들이 여러분을 간절히 기다리고 있습니다."}
                    />
                </div>
            </div>
            <Awards />
            <div style={{ marginTop: "50px" }}>
                <Bottom />
            </div>
            <div className={styles.faqAllContainer}><FaQ /></div>
            <JoinUsNow />
            <Footer />
        </div>
    )
}