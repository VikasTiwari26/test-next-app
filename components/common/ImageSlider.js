import React from 'react';
import Slider from "react-slick";

const ImageSlider = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: i => (
            <div
                style={{
                    width: "100px",
                    height: "50px",
                    display:'flex'
                }}
            >

                {props.children[i]}
            </div>
        )
    };
    return (
        <Slider {...settings}>
            {props.children}
        </Slider>
    );
}

export default ImageSlider;