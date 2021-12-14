import React from 'react'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css';
import Slides from './Slides'
import './slider.css'

const Slider = () => {
    return (
        <div className='carousel-container'>
            <div className='carousel-title'>
                <h2>Mis Proyectos</h2>
                
            </div>
            
            <Carousel 

            
                plugins={[
                    'arrows',
                    'infinite',
                    {
                        resolve:slidesToShowPlugin,
                        options:{
                            numberOfSlides:3
                        }
                        
                    },
                ]}
                breakpoints={{
                    960:{
                        plugins: [
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                 numberOfSlides: 2
                                 
                                },
                                
                            }
                        ],
                        itemWidth:250
                        
                        
                    }
                }}
                
                
                
                animationSpeed={200}
                centered
                offset={50}
                itemWidth={400}
                slides={Slides}
                
            />

        </div>
    )
}

export default Slider
