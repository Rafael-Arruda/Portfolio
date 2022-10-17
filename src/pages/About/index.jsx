import React from "react";
import * as C from './style';
import Container from "../../components/Container";
import Title from "../../components/Title";

import aboutImage from '../../assets/aboutImage.jpeg';

export default function About() {
    return(
        <Container>
            <Title>About</Title>
            <C.Content>
                <p>Olá, me chamo Rafael. Tenho 21 anos e 
                    sou estudante do curso Ciência da computação no 
                    Instituto Federal do Ceará, atualmente estou
                    no 7º semestre da minha graduação. Minha paixão 
                    por tecnologia começou em 2019 quando entrei 
                    na faculdade e desde então não me vejo trabalhando
                    com outra coisa que não seja tecnologia. No momento estou 
                    buscando ingressar no mercado para pôr em 
                    prática meus conhecimentos e habilidades que 
                    desenvolvi até aqui. 
                </p>
                <figure>
                    <img src={aboutImage} alt="Rafael" />
                </figure>
            </C.Content>
        </Container>
    )
}