import React from "react";
import TitleCard from "../components/Common/TitleCard";
import JoinUsNow from "../components/Common/JoinUsNow";

export default function AboutUsPage() {
    return (
        <div>
            <TitleCard
                mainTitle={"12기, 13기 부원을 소개합니다!"}
                subTitle1={"12기, 13기의 앱앤미 부원들을 소개합니다!"}
                subTitle2={"다음의 앱앤미가 될 14기 부원들을 기다리고 있답니다."}
            />

            <JoinUsNow />
        </div>
    )
}