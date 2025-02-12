import { useNavigate } from "react-router-dom";
import Footer from "../components/Common/Footer";
import MainTitle from "../components/Home/MainTitle/MainTitle";
import SectionBlock from "../components/Home/SectionBlock";
import MentorVoicesCard from "../components/Home/MentorVoicesCard";
import OurPrize from "../components/Prize/OurPrize";
import JoinUsNow from "../components/Common/JoinUsNow";
import FaQ from "../components/QnA/FaQ";
import MainActivity from "../components/Home/Activity/MainActivity";
import ActivityInfoCard from "../components/Home/Activity/ActivityInfoCard";
import ActivityCardMain from "../components/Home/Activity/ActivityCardMain";
import MainAboutAppNMe from "../components/Home/AboutAppNMe/MainAboutAppNMe"; 
import styles from "../styles/Home/Pages/HomePage.module.css" 
export default function HomePage() {
    return (
        <div className={styles.allContainer}>
            <MainTitle />
            <MainAboutAppNMe />

            <SectionBlock dotTitle={"APP & ME"} title1={"지금부터"} title2={"APP & ME를 소개합니다!"} marginBottom={"60px"}/>
            <SectionBlock dotTitle={"Project"} title1={"App & Me"} title2={"프로젝트를 소개합니다!"}
             subTitle1={"12기, 13기 앱앤미 부원들의 프로젝트들을 소개합니다!"} marginTop={"30px"} marginBottom={"30px"}/>

            <SectionBlock dotTitle={"Tools"} title1={"우리가 사용 / 배우는 툴"}  subTitle1={"선배와 후배가 함께하는 스터디를 꾸준히 진행하여 부원들의"}
             subTitle2={"실력 향상에 도움이 되고자 합니다. "} marginTop={"10px"} marginBottom={"40px"}/>
              
            <MainActivity />
            <ActivityCardMain/>
            {/* <ActivityInfoCard/> */}
        
            <SectionBlock dotTitle={"Photo"} title1={"앱앤미의 친목 사진"} 
             subTitle1={"선후배 간의 격식없이 다같이 친한 동아리로, 다양한 활동과 친목을 쌓을 수 있는 자리를 통해"} 
             subTitle2={"선배들과 이야기를 하며 친목을 다져 더욱 친밀하고 가까운 사이입니다."}
             marginTop={"10px"} marginBottom={"65px"}/>  

            <OurPrize/> 

            <SectionBlock dotTitle={"Testimonial"} title1={"12기 선배들에게"} title2={"앱앤미란?"} 
             marginTop={"75px"} marginBottom={"55px"}/>  
            <MentorVoicesCard />

            <FaQ/>
            <JoinUsNow />
            <Footer/>
        </div>
    )
}