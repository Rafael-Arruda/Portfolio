import styled from "styled-components";

export const Area = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media screen and (max-width: 800px){
        padding-top: 15vh;
        width: 100vw;
        min-height: 88vh;
        margin-left: -300px;
    }
`;