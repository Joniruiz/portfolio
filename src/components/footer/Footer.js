import React from 'react'
import './footer.css'


const Footer = () => {

    const mail = 'ruiz.jonathan2018@gmail.com'

    return (
        <footer className='footer'>
            <div className='footer-info'>
                <h1>Ruiz Jonathan</h1>
                <p>Vicente Lopéz, Buenos Aires</p>           
            </div>
            <div className='footer-contact'>
                <h3>Contactame</h3>
                <p className='p-4 col-6 row'>
                    <form>
                        <label for='nombre'>Nombre</label>
                        <input type='text' className='form-control' name='nombre' id='nombre' />
                        <label for='email' className='form-label'>Email</label>
                        <input type='email' className='form-control' name='email' id='email' />
                        <label>Motivo de contacto</label>
                        <textarea className='p-12 form-control'/>
                        <button type='submit' className='mt-3 btn btn-light' rows="3">Enviar </button>
                    </form>
                </p>
                
            </div>
            <div className='footer-sns'>
                <div className='design-by'>
                      
                </div>
                <div className='sns-links'>
                    <a href="https://www.linkedin.com/in/jonathan-ruizz/" target="_blank" rel='noreferrer'>
                        <i className='fab fa-linkedin linkedin'></i>
                    </a>
                    <a href="google.com" target="_blank" rel='noreferrer'>
                        <i className='fab fa-twitter twitter'></i>
                    </a>
                    <a href={`mailto:${mail}`} rel='noreferrer'>
                        <i className='far fa-envelope envelope'></i>
                    </a>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer
