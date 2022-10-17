import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    height: 100vh;
    background: #191919;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const Logo = styled.div`
    padding-top: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    position: absolute;
    top: 0;

    h2 {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.6rem;
        font-weight: 500;
        background-color: #fff;
        border-radius: 50%;
        text-transform: uppercase;
    }

    .vertical-line {
        width: 2px;
        height: 5vh;
        background-color: #fff;
        border-radius: 2px;
    }

    h3 {
        color: #f9004d;
        font-size: 1.5rem;
    }
`;

export const Nav = styled.nav`
    width: 100%;
    padding-left: 30px;
    display: flex;
    align-items: center;

    li {
        margin-top: 50px;
        font-size: 1.2rem;
    }

    a {
        color: #fff;
        transition: 0.4s all;
    }
    a::after {
        content: "";
        display: block;
        width: 0%;
        height: 2px;
        background-color: transparent;
        transition: 1s all;
    }
    a:hover::after {
        width: 100%;
        background-color: #f9004d;
    }
`;