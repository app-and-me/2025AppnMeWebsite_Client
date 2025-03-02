import TitleCard from "../components/Common/TitleCard";
import Header from "../components/Common/Header";
import Button from "../components/Common/Button";
import JoinForm from "../components/JoinUs/JoinForm";
import Bottom from "../components/Common/Bottom";
import Footer from "../components/Common/Footer";
import styles from "../styles/JoinUs/JoinUsPage.module.css"
import { useRef } from "react";
import { motion } from "framer-motion";
export default function JoinUSPage() {
    const formRef = useRef(null);

    const scrollToForm = () => {
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div>
            <Header />
            <div className={styles.allContainer}>
                <TitleCard
                    btnText={"14기"}
                    fontSize={"12px"}
                    infoTitle="Let's Work Together"
                    btnWeight={"43px"}
                    btnHeight={"28px"}
                    borderRadius={"6px"}
                    mainTitle={"새로운 부원을 모집합니다!"}
                    subTitle1={"App & Me 14기에 도전하세요!"}
                />
                <div style={{ display: "flex", justifyContent: "center", margin: "3vw 0 15vw" }}>
                    <Button
                        text={"Fill The Form Out!"}
                        width={"156px"}
                        height={"46px"}
                        borderRadius={"10px"}
                        onClick={scrollToForm}
                    />
                </div>
                <motion.div ref={formRef} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }}>
                    <JoinForm />
                </motion.div>
            </div>
            <Bottom margin={"100px 0 0 0"} />
            <Footer />
        </div >
    )
}