import React from "react";
import * as C from './style';

import { Link } from "react-router-dom";

export default function Navigation() {
    return(
        <C.Container>
            <C.Logo>
                <h2>Ra</h2>
                <div className="vertical-line"></div>
                <h3>Portfolio</h3>
            </C.Logo>
            <C.Nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>Sobre</Link></li>
                    <li><Link to='/skills'>Habilidades</Link></li>
                    <li><Link to='/projects'>Projetos</Link></li>
                    <li><Link to='/contacts'>Contatos</Link></li>
                </ul>
            </C.Nav>
        </C.Container>
    )
}