import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    height: 100vh;
    background: #191919;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .btn {
        display: none;
        cursor: pointer;
    }

    @media screen and (max-width: 800px){
        width: 100vw;
        height: 12vh;
        flex-direction: row;
        justify-content: space-between;
        
        .btn {
            display: flex;
            flex-direction: column;
            gap: 5px;
            margin-right: 20px;

            .line1, .line2, .line3 {
                width: 23px;
                height: 2px;
                background-color: #fff;
                transition: .3s all;
                position: relative;
            }
            .line1 {
                transform: ${props => props.status? 'rotate(135deg)' : ''};
            }
            .line2 {
                display: ${props => props.status? 'none' : 'initial'};
            }
            .line3 {
                transform: ${props => props.status? 'rotate(-135deg)' : ''};
                top: ${props => props.status? '-7px' : '0'};
            }
        }
    }

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

    @media screen and (max-width: 800px){
        position: initial;
        padding-top: 0;
        padding-left: 25px;
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

    @media screen and (max-width: 800px){
        width: ${props => props.status? '60%' : '0%'};
        height: 88vh;
        background-color: #000;
        position: fixed;
        top: 12vh;
        right: 0;
        text-align: right;
        padding-right: 20px;
        transition: 1s all;
        justify-content: flex-end;
        visibility: ${props => props.status? 'visible' : 'hidden'};
        overflow: hidden;
        
        ul {
            overflow: hidden;
        }
    }
`;
