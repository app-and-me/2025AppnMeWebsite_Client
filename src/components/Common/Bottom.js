import styled from "styled-components";

export default function Bottom({ margin }) {
    const ImgStyle = styled.div`
        padding: 0 120px;

        @media (max-width: 1200px) {
            padding: 0; 
        }
        @media (max-width: 600px) {
            padding: 0;
            margin-top: -50px;
        }
    `;

    return (
        <ImgStyle>
            <img src="/images/Logo/bottom.png" alt="bottom logo" style={{ margin }} />
        </ImgStyle>
    );
}
