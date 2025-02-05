import TitleCard from "../components/Common/TitleCard";
import Banner from "../components/Home/MainTitle/Banner";
import FaQTitle from "../components/QnA/FaQTitle";
import JoinUsNow from "../components/Common/JoinUsNow";

export default function PrizePage() {
    return (
        <div>
            <div style={{position:"relative", display:"flex", height:"506px", overflow:"hidden"}}>
                <Banner/>
                
                <div style={{ position: "absolute", zIndex: "1", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
            <TitleCard
                btnText={"NEW"}
                btnWeight={"43px"}
                btnHeight={"28px"}
                borderRadius={"6px"}
                mainTitle={"수상내역을 소개합니다!"}
                subTitle1={"멋진 상들을 받고 싶다면, 지금 지원하세요!"}
                subTitle2={"멋진 선배들이 여러분을 간절히 기다리고 있습니다."}
            />
            </div>
        </div>

            <FaQTitle />
            <JoinUsNow />
        </div>
    )
}