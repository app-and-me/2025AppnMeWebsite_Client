import styles from "../../styles/Home/SectionBlock.module.css";
import DotTitle from "../Common/DotTitle";
import Title from "./AboutAppNMe/Title";
import Content from "./AboutAppNMe/Content";
import styled from "styled-components";
import Button from "../Common/Button";
import { useNavigate } from "react-router-dom";


export default function SectionBlock({ dotTitle,title1, title2, 
    subTitle1, subTitle2, marginTop, marginBottom}) {
    const MarginStyle = styled.div`
    margin-top: 30px;
    `
    const navigate = useNavigate();
    const handleClick = () => {
    navigate("/AboutUs")
}
  return (
    <div className={styles.SectionContainer} >

     
      <img src="images/Logo/section-left.png" className={styles.sideImage} />
     
      <div className={styles.contentContainer}style={{marginBottom:marginBottom}}>
        <DotTitle dotTitle={dotTitle} />
        <MarginStyle>
            <Title title1={title1} title2={title2} />
            </MarginStyle>
        <Content title1={subTitle1} title2={subTitle2} marginTop={marginTop} />
        {dotTitle === "Testimonial" && 
        <Button width={"192px"} height={"46px"} borderRadius={"10px"}
        text={"앱앤미 부원 소개 보러가기"}
            onClick={handleClick}
        />}
      </div>
 
      <img src="images/Logo/section-right.png" className={styles.sideImage}/>
    </div>
  );
}
