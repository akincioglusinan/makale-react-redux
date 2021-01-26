import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Container} from 'react-bootstrap'
import moduleName from '../../assets/img/1.jpeg'
import moduleName2 from '../../assets/img/2.jpg'
import moduleName3 from '../../assets/img/3.jpg'

const UICarousel = () => {
    return (
        <Container>
        <Carousel fluid className="mt-2">
        <div>
            <img src={moduleName} alt="1. resim"/>
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={moduleName2} alt="1. resim"/>
            <p className="legend" >Legend 2</p>
        </div>
        <div>
            <img src={moduleName3} alt="1. resim"/>
            <p className="legend">Legend 3</p>
        </div>
        
    </Carousel>
    </Container>
    )
}

export default UICarousel