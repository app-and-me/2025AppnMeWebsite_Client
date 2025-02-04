import styled from "styled-components"
export default function NameDot({ name, times }) {
    const DotContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;
    `
    return (
        <DotContainer>
            <span>{name}</span>
            <div style={{ borderRadius: "30px", width: "4.7px", height: "5px", backgroundColor: "white" }}></div>
            <span>앱앤미 {times}기</span>
        </DotContainer>
    )
}