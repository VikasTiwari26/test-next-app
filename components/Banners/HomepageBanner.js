import React from 'react';
import dynamic from "next/dynamic"
import { sliderImage1, sliderImage2, sliderImage4 } from '../../utils/images';

const NextImage = dynamic(() => import("next/image"))
// import sliderImage1 from '../../public/assets/img/slide1/slider-image-1.jpg'
// import sliderImage2 from '../../public/assets/img/slide1/slider-image-2.jpg'
// import sliderImage4 from '../../public/assets/img/slide1/slider-image-4.jpg'


const HomePageBanner = (props) => {
    return (
        <>
            <div className="slider-area">
                <div className="slider">
                    <div id="bg-slider" className="owl-carousel owl-theme">

                        <div className="item">
                            <NextImage src={sliderImage1} />
                            {/* <img src="assets/img/slide1/slider-image-1.jpg" alt="Mirror Edge"> */}
                        </div>
                        <div className="item">
                            <NextImage src={sliderImage2} />
                            {/* <img src="assets/img/slide1/slider-image-2.jpg" alt="The Last of us"> */}
                        </div>
                        <div className="item">
                            <NextImage src={sliderImage4} />
                            {/* <img src="assets/img/slide1/slider-image-4.jpg" alt="GTA V"> */}
                        </div>

                    </div>
                </div>
                <div className="container slider-content">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12">
                            <h2>property Searching Just Got So Easy</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi deserunt deleniti, ullam commodi sit ipsam laboriosam velit adipisci quibusdam aliquam teneturo!</p>
                        {/*SEARCH BAR COMPONENT ADD HERE*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePageBanner;