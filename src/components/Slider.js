import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class Slider extends Component {
    render() {
        return (

            <Carousel autoPlay infiniteLoop>
                <div>
                    <img src="./assets/images/image2.jpeg" />
                </div>
                <div>
                    <img src="./assets/images/image3.jpeg" />
                </div>
                <div>
                    <img src="./assets/images/image4.jpeg" />
                </div>
            </Carousel>
        )
    }
}