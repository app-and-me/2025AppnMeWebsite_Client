import TitleCard from "../components/Common/TitleCard"
import Button from "../components/Common/Button"
import Footer from "../components/Common/Footer"
export default function QuestionForm() {
    return (
        <div>
            <TitleCard
                btnHeight={"28px"} btnWeight={"46px"} borderRadius={"6px"} fontSize={"12px"} btnText={"2025"}
                mainTitle={"질문 폼 입니다!"}
                subTitle1={"자유롭게 질문해주세요!"}
            />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "38px 0 136px 0" }}>
                <Button width={"156px"} height={"46px"} text={"Fill The Form Out!"} borderRadius={"10px"} />
            </div>
            <Footer/>
        </div>
    )
}