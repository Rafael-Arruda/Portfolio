import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    p {
        max-width: 500px;
        width: 80%;
        line-height: 22px;
        font-size: 1.2rem;
    }

    figure {
        width: 300px;
        height: 450px;
        border-radius: 4px;
        overflow: hidden;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;