import React from "react";
import * as C from './style';
import Container from "../../components/Container";
import Title from "../../components/Title";

import {AiOutlineMail, AiOutlineWhatsApp} from 'react-icons/ai';

export default function Contacts(){
    return(
        <Container>
            <Title>Contatos</Title>
            <C.Area>
                <div className="contacts">
                    <div className="email">
                        <AiOutlineMail size={25} color="#000"/>
                        <span>rafaelsilvaarruda72@gmail.com</span>
                    </div>
                    <div className="wpp">
                        <AiOutlineWhatsApp size={25} color="#000"/>
                        <span>(85)987162902</span>
                    </div>
                </div>
                <form>
                    <input type="text" placeholder="Nome"/>
                    <input type="email" placeholder="Email"/>
                    <textarea cols="30" rows="10" placeholder="Digite sua mensagem..."/>
                    <button>Enviar</button>
                </form>
            </C.Area>
        </Container>
    )
}