import styled from "styled-components"

export default function () {
    const StyleContainer = styled.div`
        width: 100%;
        height:75px;
        position: fixed;
        bottom: 0;
        padding: 20px;
        width: 100%;
        display: flex; 
        z-index: 314159;
        backdrop-filter: blur(3.5px);

        @media (max-width: 700px) { 
            backdrop-filter: blur(1.5px);
        }
        

    `
    return (
        <StyleContainer></StyleContainer>
    )
}