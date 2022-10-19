import React from "react";
import * as C from './style';

import { useContext } from "react"; 
import { NavContext } from "../../contexts/navigation"; 

import { Link } from "react-router-dom";

export default function Navigation() {

    const {status, setStatus} = useContext(NavContext);

    function showMenu() {
        setStatus(!status);
    }

    return(
        <C.Container status={status}>
            <C.Logo>
                <h2>Ra</h2>
                <div className="vertical-line"></div>
                <h3>Portfolio</h3>
            </C.Logo>
            <C.Nav status={status}>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>Sobre</Link></li>
                    <li><Link to='/skills'>Habilidades</Link></li>
                    <li><Link to='/projects'>Projetos</Link></li>
                    <li><Link to='/contacts'>Contatos</Link></li>
                </ul>
            </C.Nav>
            
            <div className="btn" onClick={() => showMenu()}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
        </C.Container>
    )
}