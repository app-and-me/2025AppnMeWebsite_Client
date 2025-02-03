import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Btn({ onClick, width, backColor, fontColor }) {
    const InstagramClick = () => {
        window.location.href = "https://www.instagram.com/app_and_me?igsh=a25jNHFzMmF6cHJi"
    }
    const ApplyBtn = styled.div`
    width: 89px;
    height: 46px;
    color: #131313;
    background-color: #EFEEEC;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 38px 0 50px 0;
    cursor: pointer;
   `
    return (
        <div style={{
            display: "flex",
            columnGap: "12px"
        }}>
            <ApplyBtn onClick={onClick}>지원하기</ApplyBtn>
            <ApplyBtn onClick={InstagramClick} style={{ width: width, backgroundColor: backColor, color: fontColor }}>앱앤미 인스타 보기</ApplyBtn>

        </div>
    )
}