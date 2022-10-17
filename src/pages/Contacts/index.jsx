import React, {useState} from "react";
import * as C from './style';
import Container from "../../components/Container";
import Title from "../../components/Title";

import {AiOutlineMail, AiOutlineWhatsApp} from 'react-icons/ai';

import emailjs from '@emailjs/browser';

export default function Contacts(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function sendEmail(e) {
        e.preventDefault();

        if(name === '' || email === '' || message === '') {
            alert('Preencha todos os campos');
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send('service_mv8gkc6', 'template_3wl8loh', templateParams, 'QEcZ6GvEOi9LdyMfN')
        .then((response) => {
            console.log('email enviado', response.status, response.text)
            setName('');
            setEmail('');
            setMessage('');
        })
        .catch((err) => {
            console.log('ERRO: ', err)
        })
    }

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
                <form onSubmit={sendEmail}>
                    <input 
                        type="text" 
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea 
                        placeholder="Digite sua mensagem..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <button>Enviar</button>
                </form>
            </C.Area>
        </Container>
    )
}