import styled from "styled-components";

export default function Bottom() {
    const ImgStyle = styled.div`
        padding: 0 120px;

        @media (max-width: 1200px) {
            padding: 0;
        }
    `;

    return (
        <ImgStyle>
            <img src="/images/Logo/bottom.png" alt="bottom logo" />
        </ImgStyle>
    );
}
