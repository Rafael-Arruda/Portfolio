import React, {useState} from "react";
import Title from "../../components/Title";
import Container from '../../components/Container';

import Card from "../../components/Card";
import * as C from './style'

import html5 from '../../assets/html5.png';
import css3 from '../../assets/css.png';
import javascript from '../../assets/javascript.png';
import react from '../../assets/react.png';
import typescript from '../../assets/typescript.png';
import git from '../../assets/git.png';


export default function Skills() {

    const skills = [
        {
            name: 'Html',
            image: html5
        },
        {
            name: 'Css',
            image: css3
        },
        {
            name: 'Javascript',
            image: javascript
        },
        {
            name: 'React',
            image: react
        },
        {
            name: 'Typescript',
            image: typescript
        },
        {
            name: 'Git e GitHub',
            image: git
        }

    ];

    return(
        <Container>
            <Title>Habilidades</Title>
            <C.Area>
                {skills.map((item, index) => (
                    <Card key={index} name={item.name} image={item.image}/>
                ))}
            </C.Area>
        </Container>
    )
}