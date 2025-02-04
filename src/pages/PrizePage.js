import TitleCard from "../components/Common/TitleCard";
import FaQTitle from "../components/QnA/FaQTitle";
import JoinUsNow from "../components/Common/JoinUsNow";

export default function PrizePage() {
    return (
        <div>
            <TitleCard
                btnText={"NEW"}
                btnWeight={"43px"}
                btnHeight={"28px"}
                borderRadius={"6px"}
                mainTitle={"수상내역을 소개합니다!"}
                subTitle1={"멋진 상들을 받고 싶다면, 지금 지원하세요!"}
                subTitle2={"멋진 선배들이 여러분을 간절히 기다리고 있습니다."}
            />
            <FaQTitle />
            <JoinUsNow />
        </div>
    )
}