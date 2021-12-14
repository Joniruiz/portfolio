import React from 'react'
import './footer.css'


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-info'>
                <h1>Ruiz Jonathan</h1>
                <p>Vicente Lopéz, Buenos Aires</p>           
            </div>
            <div className='footer-contact'>
                <h3>Contactame</h3>
                <p></p>
                
            </div>
            <div className='footer-sns'>
                <div className='design-by'>
                    Hecho y Creado por Ruiz Jonathan.    
                </div>
                <div className='sns-links'>
                    <a href="google.com" target="_blank" rel='noreferrer'>
                        <i className='fab fa-linkedin linkedin'></i>
                    </a>
                    <a href="google.com" target="_blank" rel='noreferrer'>
                        <i className='fab fa-twitter twitter'></i>
                    </a>
                    <a href="mailto:ruiz.jonathan2018@gmail.com" target="_blank" rel='noreferrer'>
                        <i className='far fa-envelope envelope'></i>
                    </a>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer