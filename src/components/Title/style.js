import styled from "styled-components";

export const Container = styled.div`
    height: 12vh;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 2.5rem;
    }
    h1::after {
        content: "";
        width: 50%;
        height: 3px;
        background-color: #f9004d;
        display: block;
    }
`;