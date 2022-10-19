import React, { useEffect } from "react";
import * as C from './style';
import Container from "../../components/Container";

import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';

import profile from '../../assets/home.png';
import curriculum from '../../assets/curriculoRafael.pdf';

import { useContext } from "react";
import { NavContext } from "../../contexts/navigation";

export default function Home() {

    const {setStatus} = useContext(NavContext);

    useEffect(() => {
        setStatus(false);
    }, [])

    return(
        <Container>
            <C.Area>
                <figure>
                    <img src={profile} alt="Rafael Arruda" />
                </figure>
                <div className="content">
                    <h1>Rafael Arruda</h1>
                    <h5>Desenvolvedor Front end</h5>
                    <div className="social-networks">
                        <a href="https://www.linkedin.com/in/arruda-rafael/" target='_blank'><FaLinkedinIn color="#fff" size={18}/></a>
                        <a href="https://github.com/Rafael-Arruda" target='_blank'><FaGithub color="#fff" size={18}/></a>
                        <a href="https://www.instagram.com/rafaelsilv__/?next=%2F" target='_blank'><FaInstagram color="#fff" size={18}/></a>
                    </div>
                    <a className="download" href={curriculum} download="Currículo_Rafael_Arruda">Baixar currículo</a>
                </div>
            </C.Area>
        </Container>
    )
}