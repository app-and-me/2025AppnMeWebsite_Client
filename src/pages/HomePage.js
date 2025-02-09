import React from "react";
import MainTitle from "../components/Home/MainTitle/MainTitle";
import MentorVoicesCard from "../components/Home/MentorVoicesCard";
import JoinUsNow from "../components/Common/JoinUsNow";
// import FaQList from "../components/QnA/FaQList";
import FaQTitle from "../components/QnA/FaQTitle";
import MainActivity from "../components/Home/Activity/MainActivity";
import Footer from "../components/Home/footer";  // Footer 컴포넌트 import

export default function HomePage() {
    return (
        <div>
            <MainTitle />
            <MainActivity />
            <MentorVoicesCard
                profileImg={"/images/Member/member1.png"}
                message={"미림에 입학하고 앱앤미를 통해 정말 많은 경험을 통해 성장할 수 있었습니다. 특히 전공에서 앱앤미가 아니었다면 할 수 없는 성장을 한 것 같습니다. 다양한 외부활동과 협업 프로젝트는 큰 도움이 됐습니다. 또한 선배님들과도 다양한 소통과 스터디를 통해 많은 것들을 배울 수 있었습니다. 저에게 앱앤미는 후회 없는 선택이었습니다.로젝트는 큰 도움이 됐습니다. 또한 선배님들과도 다양한 소통과 스터디를 통해 많은 것들을 배울 수 있었습니다. 저에게 앱앤미는 후회 없는 선택이었습니다.로젝트는 큰 도움이 됐습니다. 또한 선배님들과도 다양한 소통과 스터디를 통해 많은 것들을 배울 수 있었습니다. 저에게 앱앤미는 후회 없는 선택이었습니다."}
                role={"동아리짱"}
                major={"소프트웨어과"}
                name={"추다율"}
            />
            <FaQTitle />
            {/* <FaQList /> */}
            <JoinUsNow />
            <Footer 
            logoImg={"/images/logo.png"}/> 
        </div>
    );
}
