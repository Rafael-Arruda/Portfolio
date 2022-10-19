import React, {useEffect, useState} from "react";
import * as C from './style';
import Container from "../../components/Container";
import Title from "../../components/Title";

import {MdNavigateBefore, MdNavigateNext} from 'react-icons/md';

import CardPro from '../../components/CardPro';

import cineflix from '../../assets/cineflix.png';
import recipes from '../../assets/recipes.png';
import sistemaFinanceiro from '../../assets/sistema-financeiro.png';
import taskstodo from '../../assets/taskstodo.png';
import calculadora from '../../assets/calculadora.png';
import pokelist from '../../assets/pokelist.png';
import loopstudios from '../../assets/loopstudios.png';
import starWars from '../../assets/star-wars.png';
import crespos from '../../assets/crespos.png';
import loginPage from '../../assets/login-page.png';

import { useContext } from "react";
import { NavContext } from "../../contexts/navigation";

export default function Projects() {

    const [scrollX, setScrollX] = useState(0);

    const {setStatus} = useContext(NavContext);

    useEffect(() => {
        setStatus(false);
    }, [])
    
    const projects = [
        {
            id: 1,
            name: 'Cineflix',
            image: cineflix,
            urlCode: 'https://github.com/Rafael-Arruda/cineflix',
            urlSite: 'https://cine-cineflix.netlify.app/'
        },
        {
            id: 2,
            name: 'Recipes',
            image: recipes,
            urlCode: 'https://github.com/Rafael-Arruda/Recipes',
            urlSite: 'https://rafacos-recipes.netlify.app'
        },
        {
            id: 3,
            name: 'Sistema financeiro',
            image: sistemaFinanceiro,
            urlCode: 'https://github.com/Rafael-Arruda/sistema-financeiro',
            urlSite: 'https://rafael-arruda.github.io/sistema-financeiro/'
        },
        {
            id: 4,
            name: 'Tasks to Do',
            image: taskstodo,
            urlCode: 'https://github.com/Rafael-Arruda/taskstodo',
            urlSite: 'https://rafael-arruda.github.io/taskstodo/'
        },
        {
            id: 5,
            name: 'Calculadora',
            image: calculadora,
            urlCode: 'https://github.com/Rafael-Arruda/calculadora',
            urlSite: 'https://rafael-arruda.github.io/calculadora/',
        },
        {
            id: 6,
            name: 'Pokelist',
            image: pokelist,
            urlCode: 'https://github.com/Rafael-Arruda/pokelist',
            urlSite: 'https://pokelist-poke.netlify.app'
        },
        {
            id: 7,
            name: 'Loopstudios',
            image: loopstudios,
            urlCode: 'https://github.com/Rafael-Arruda/Loopstudios',
            urlSite: 'https://rafael-arruda.github.io/Loopstudios/'
        },
        {
            id: 8,
            name: 'Star Wars',
            image: starWars,
            urlCode: 'https://github.com/Rafael-Arruda/Star-Wars',
            urlSite: 'https://rafael-arruda.github.io/Star-Wars/', 
        },
        {
            id: 9,
            name: 'Crespos',
            image: crespos,
            urlCode: 'https://github.com/Rafael-Arruda/Web-Page-Crespos',
            urlSite: 'https://rafael-arruda.github.io/Web-Page-Crespos/', 
        },
        {
            id: 10,
            name: 'Login Page',
            image: loginPage,
            urlCode: 'https://github.com/Rafael-Arruda/login-page',
            urlSite: 'https://rafael-arruda.github.io/login-page/', 
        }
    ];

    const handleLeftArrow = () => {
        let x = scrollX + Math.round((window.innerWidth - 300) / 2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round((window.innerWidth - 300) / 2);
        let listW = (projects.length+1) * 350;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 10;
        }

        setScrollX(x);
    }
    
    return(
        <Container>
            <Title>Projetos</Title>
            
            <C.Area>

                <div className="listRow--left" onClick={handleLeftArrow}>
                    <MdNavigateBefore color="#fff" size={50}/>
                </div>
                <div className="listRow--right" onClick={handleRightArrow}>
                    <MdNavigateNext color="#fff" size={50}/>
                </div>
                
                <div className="list" style={{
                    marginLeft: scrollX
                }}>
                    {projects.map((item, index) => (
                        <CardPro info={item} key={index}/>
                    ))}
                </div>
            </C.Area>
        </Container>
    )
}