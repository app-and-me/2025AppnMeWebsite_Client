import styled from "styled-components"
export default function PrizeInfoCard({ mainType, subType }) {
    const ButtonStyle = styled.div`
  
    width:fit-content;
    height: 38px;
    backdrop-filter: blur(2.5px);
    background: linear-gradient(-7.64244e-08deg, rgba(199, 199, 199, 0.06) 0%, rgba(71, 71, 71, 0.06) 100%);
    border-radius: 10px;
    padding: 6px 14px;
   

    `
    return (
        <ButtonStyle>
            <span style={{ color: "white" }}>{mainType}</span>
            <span style={{ color: "#FFFFFF99" }}> / {subType}</span>
        </ButtonStyle>
    )
}