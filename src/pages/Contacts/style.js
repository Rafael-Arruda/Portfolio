import styled from "styled-components";

export const Area = styled.div`
    display: flex;
    justify-content: space-evenly;

    .email, .wpp {
        display: flex;
        gap: 5px;
        align-items: center;
        margin-bottom: 10px;

        span {
            font-size: 1.4rem;
            color: gray;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    input, textarea {
        width: 400px;
        padding: 15px 10px;
        font-size: 1rem;
        outline: none;
        border-radius: 4px;
        border: 2px solid #f9004d;
        background-color: transparent;
    }

    textarea {
        height: 160px;
    }

    button {
        width: 100px;
        padding: 10px 0;
        border: 2px solid #f9004d;
        border-radius: 4px;
        font-size: 1rem;
        cursor: pointer;
    }
`;