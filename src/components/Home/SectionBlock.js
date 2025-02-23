import styles from "../../styles/Home/SectionBlock.module.css";
import DotTitle from "../Common/DotTitle";
import Title from "./AboutAppNMe/Title";
import Content from "./AboutAppNMe/Content";
import styled from "styled-components";
import Button from "../Common/Button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function SectionBlock({ dotTitle, title1, title2, subTitle1, subTitle2, marginTop, marginBottom }) {
  const MarginStyle = styled.div`
    margin-top: 30px;
  `;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/AboutUs");
    window.scrollTo({ top: 0, behavior: "smooth" })
  };

  // 스크롤
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      console.log("타이틀 보임! inView:", inView);
    }
  }, [inView]);

  return (
    <div className={styles.SectionContainer} ref={ref}>
      <img src="images/Logo/section-left.png" className={styles.sideImage} />

      <div className={styles.contentContainer} style={{ marginBottom }}>
        <DotTitle dotTitle={dotTitle} />
        <MarginStyle>
          <div style={{ overflow: "hidden" }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <Title title1={title1} title2={title2} />
            </motion.div>
          </div>
        </MarginStyle>
        <Content title1={subTitle1} title2={subTitle2} marginTop={marginTop} />
        {dotTitle === "Testimonial" && (
          <Button width={"192px"} height={"46px"} borderRadius={"10px"} text={"앱앤미 부원 소개 보러가기"} onClick={handleClick} />
        )}
      </div>

      <img src="images/Logo/section-right.png" className={styles.sideImage} />
    </div>
  );
}
