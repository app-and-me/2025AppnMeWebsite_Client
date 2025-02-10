import styled from "styled-components";

export default function Title({ title1, title2, margin }) {
    const TitleStyle = styled.div`
        font-size: 54px;
        @media (max-width:850px) { 
            font-size: 32px;
            }

    `
    return (
        <TitleStyle>
            <p style={{margin:margin}}>{title1}</p>
            <p style={{ marginTop: "2px" }}>{title2}</p>
        </TitleStyle>
    )
}