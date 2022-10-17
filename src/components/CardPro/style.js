import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    min-width: 350px;
    height: 300px;
    background-color: #191919;
    border-radius: 20px;
    color: #fff;
    transform: scale(0.95);

    img {
        width: 100%;
        border-radius: 20px;
    }

    .box-links {
        width: 100%;
        display: flex;
        justify-content: space-evenly;

        a {
            border: 2px solid #f9004d;
            border-radius: 2px;
            padding: 8px;
            background-color: #191919;
            color: white;
            display: flex;
            align-items: flex-end;
            gap: 10px;
            font-weight: bold;
            font-size: 1.2rem;
        }
    }

`;