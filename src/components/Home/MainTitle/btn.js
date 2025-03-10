import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Btn({ onClick, width, backColor, fontColor }) {
    const InstagramClick = () => {
        window.location.href = "https://www.instagram.com/app_and_me?igsh=a25jNHFzMmF6cHJi";
    };

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
        transition: opacity 1s ease;

        &:hover {
            opacity: ${(props) => (props.isInstagram ? 0.6 : 1)};
        }

        @media (max-width: 700px) {
            margin:0;
     }
        
    `;

    const ButtonContainer = styled.div`
        display: flex;
        column-gap: 12px;
        transition : opacity 1s ease;

        &:hover {
            opacity: ${(props) => (props.isInstagram ? 0.6 : 1)};
        }
        @media (max-width: 700px) {
            align-items: center;
            gap:12px;
        
     }
    `;

    return (
        <ButtonContainer>
            <ApplyBtn onClick={onClick} isInstagram={true}>지원하기</ApplyBtn>
            <ApplyBtn
                onClick={InstagramClick}
                isInstagram={true}
                style={{ width: width, backgroundColor: backColor, color: fontColor }}
            >
                앱앤미 인스타 보기
            </ApplyBtn>
        </ButtonContainer>
    );
}