import TitleCard from "../components/Common/TitleCard";
import Button from "../components/Common/Button";
import Footer from "../components/Common/Footer";
export default function JoinUSPage() {
    return (
        <div>
            <TitleCard
                btnText={"14기"}
                infoTitle="Let's Work Together"
                btnWeight={"43px"}
                btnHeight={"28px"}
                borderRadius={"6px"}
                mainTitle={"새로운 부원을 모집합니다!"}
                subTitle1={"App & Me 14기에 도전하세요!"}
            />
            <div style={{ display: "flex", justifyContent: "center", margin: "38px 0 176px 0" }}>
                <Button
                    text={"Fill The Form Out!"}
                    width={"156px"}
                    height={"46px"}
                    borderRadius={"10px"}
                />
                </div>

                <Footer/>
        </div>
    )
}