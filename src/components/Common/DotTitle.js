import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display : flex;
    align-items: center;
    background: linear-gradient(0.07383128568086761deg, var(--token-64bf095d-9ad7-4fc0-9f3c-f96ec87f9b9b, rgba(0, 85, 255, 0.08)) 0%, var(--token-b6113dae-1252-48c9-8fac-f8a781d683c0, rgba(153, 153, 153, 0.1)) 100%);
    column-gap: 10px;
    border-radius: 10px;
    opacity: 1;
    height: 38px;
    width: fit-content; 
    padding: 6px 14px;
`

const Dot = styled.div`
    border-radius: 30px;
    width: 5px;
    height: 5.38px;
    background-color: white;
`;


export default function DotTitle({ dotTitle }) {
    return (
        <Container>
            <Dot />
            {dotTitle}
        </Container>
    );
}
