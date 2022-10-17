import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 250px;
    height: 150px;
    background-color: #191919;
    border-radius: 4px;
    color: #fff;
    transition: 0.5s all;

    &:hover {
        transform: scale(1.05);
    }

`;