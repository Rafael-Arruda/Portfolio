import React from "react";
import {Container} from './style';

import {FaGithub} from 'react-icons/fa';
import {FiExternalLink} from 'react-icons/fi';


export default function Card({info}) {
    return(
        <Container>
            <img src={info.image} alt={info.name}/>
            <h3>{info.name}</h3>
            <div className="box-links">
                <a href={info.urlSite} target='_black'>
                    <FiExternalLink size={20} color='#fff'/>
                    Site
                </a>
                <a href={info.urlCode} target='_blank'>
                    <FaGithub size={20} color='#fff'/>
                    Code
                </a>
            </div>
        </Container>
    )
}