import React from "react";
import {Container} from './style';

export default function Card({name, image}) {
    return(
        <Container>
            <img src={image} alt={name}/>
            <h2>{name}</h2>
        </Container>
    )
}