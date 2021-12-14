import React from 'react';
import './slider.css'

const slidesInfo = [
    {
        src:"https://i.ibb.co/yYSWJNr/admin-pacientes.png",
        alt:"Administrador de pacientes",
        desc: "Administracion de pacientes",
        enlace:"https://gallant-thompson-43c72d.netlify.app/"
    },
    {
        src:"https://i.ibb.co/vqk6pMr/Cotizador.png",
        alt:"Cotizador de Seguro",
        desc: "Cotizador de Seguro"   ,
        enlace:"https://confident-edison-272561.netlify.app/"
    },
    {
        src:"https://i.ibb.co/jMHNKxc/clima.png",
        alt:"App Clima",
        desc: "Clima React "  ,
        enlace:"https://github.com/Joniruiz/React-Clima/" 
    },
    {
        src:"https://i.ibb.co/mN4fHRk/extreme-tech.png",
        alt:"ExtremeTech",
        desc: "ExtremeTech ",
        enlace:"https://github.com/MatiiAutalan/grupo_4_Extremetech"   
    },
    {
        src:"https://i.ibb.co/SQbQcWq/servitronic.png",
        alt:"Servitronic",
        desc: "Servitronic",
        enlace:"https://servitronic.com.ar"   
    }
]


const slides = slidesInfo.map(slide => (
    <div className='slide-container'>
        <a href={slide.enlace} target='_blank' rel='noreferrer'>
        <img src={slide.src} alt= {slide.alt} />
        <div className ="slide-desc">
            <span>{slide.desc}</span>
        </div>
            </a>
    </div>
))

export default slides;