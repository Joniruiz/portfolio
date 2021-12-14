import React from 'react';
import './about.css'
import aboutImg from '../../assets/developer-web.jpg'

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-desc'>
                <h3>Acerca de mi:</h3>
                <p>Hola! Mi nombre es Jonathan. Soy un desarrollador Web Jr , A fines del 2021 me egrese de la institucion Digital House , obteniendo el certificado de Desarrollador Web Full Stack, me encuentro en constante aprendizaje y desarrollo de proyectos para mantenerme activo en el rubro IT.</p>
                <p>Las tecnologias que manejo son: JavaScript , NodeJs con el framework de express, ReactJS, MySql.</p>
            </div>
            <div className='about-img'>
                <img className='image-about' src={aboutImg} alt="about"/>
            </div>
        </div>
    )
}

export default About
