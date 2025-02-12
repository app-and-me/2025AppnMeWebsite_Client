import styled from "styled-components";

export default function Content({ title1, title2, marginTop }) {
    const TitleStyle = styled.div`
    p   {
         color: #FFFFFF99;
    }
    `
    return (
        <TitleStyle>
            <p style={{marginTop:marginTop}}>{title1}</p>
            <p style={{ marginTop: "2px" }}>{title2}</p>
        </TitleStyle>
    )
}