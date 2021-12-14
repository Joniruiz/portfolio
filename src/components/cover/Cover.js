import React from 'react'
import './cover.css';
import coverMedia from '../../assets/coverMedia.mp4'

const Cover = () => {
    return (
        <div className='cover-container'>
            <video className='video' src={coverMedia} autoPlay loop muted>
                
            </video>
            <h1>Jonathan Ruiz</h1>
            <p>Developer Full Stack </p>
            
        </div>
    )
}

export default Cover
