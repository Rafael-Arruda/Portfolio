import styled from "styled-components";

export const Area = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    figure {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        overflow: hidden;
        background: rgba(0, 0, 0, 0.7);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #191919;

        h1 {
            font-size: 2.5rem;
        }
        
        h5 {
            color: #f9004d;
            font-size: 0.9rem;
        }
    
        .social-networks {
            margin: 40px 0;
            display: flex;
            gap: 10px;

            a {
                background-color: #191919;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 6px;
                border-radius: 50%;
                transition: 0.2s all;
            }
            a:hover {
                background-color: #f9004d;
            }
        }

        .download {
            cursor: pointer;
            padding: 10px 15px;
            font-size: 1rem;
            border: none;
            background-color: #191919;
            color: #fff;
            border-radius: 5px;
            transition: 0.2s all;
        }
        .download:hover {
            background-color: #f9004d;
        }
    }
`;