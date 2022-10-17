import styled from "styled-components";

export const Area = styled.div`
    position: relative;
    overflow: hidden;
    padding: 0 30px;
    
    .list {
        width: 100%;
        display: flex;
        /* gap: 20px; */
        transition: all ease 0.5s;
    }

    .listRow--left,
    .listRow--right {
        position: absolute;
        width: 40px;
        height: 300px;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        transition: all ease 0.5s;
    }

    .listRow--left {
        left: 0;
    }
    .listRow--right {
        right: 0;
    }
    :hover .listRow--left,
    :hover .listRow--right {
        opacity: 1;
    }


`;