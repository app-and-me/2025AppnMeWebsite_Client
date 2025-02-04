import React from "react";
import TitleCard from "../components/Common/TitleCard";
import FaQTitle from "../components/QnA/FaQTitle";
import JoinUsNow from "../components/Common/JoinUsNow";
// import ProfileCard from "../components/AboutUs/ProfileCard";
export default function AboutUsPage() {
    return (
        <div>
            <TitleCard
                borderRadius={"6px"}
                fontSize={"12px"}
                btnWeight={"46px"}
                btnHeight={"28px"}
                btnText={"2025"}
                mainTitle={"12기, 13기 부원을 소개합니다!"}
                subTitle1={"12기, 13기의 앱앤미 부원들을 소개합니다!"}
                subTitle2={"다음의 앱앤미가 될 14기 부원들을 기다리고 있답니다."}
            />
            {/* <ProfileCard /> */}
            <FaQTitle />
            <JoinUsNow />
        </div>
    )
}