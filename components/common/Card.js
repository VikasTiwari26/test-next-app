import React from 'react';

import dynamic from "next/dynamic"
import { useRouter } from 'next/router'
import property2 from '../../public/assets/img/demo/property-2.jpg'
import bed from '../../public/assets/img/icon/bed.png'
import shawer from '../../public/assets/img/icon/shawer.png'
import cars from '../../public/assets/img/icon/cars.png'
const NextImage = dynamic(() => import("next/image"))

const Card = (props) => {
    const router = useRouter()
    const { key, title, area, price, description } = props
    return (
        <>
            <div className="col-sm-6 col-md-3 p0" key={key ? key : ''}>
                <div className="box-two proerty-item">
                    <div className="item-thumb">
                        <a href="property-1.html" >
                            <NextImage src={property2} />
                            {/* <img src="assets/img/demo/property-2.jpg" /> */}
                        </a>
                    </div>

                    <div className="item-entry overflow">
                        <h5><a> {title} </a></h5>
                        <div className="dot-hr"></div>
                        <span className="pull-left"><b> Area :</b> {area} </span>
                        <span className="proerty-price pull-right"> {price}</span>
                        <p style={{ display: 'none' }}>{description}</p>
                        <div className="property-icon">
                            {/* <img src="assets/img/icon/bed.png" />(5)| */}
                            <NextImage src={bed} />(5)|
                            {/* <img src="assets/img/icon/shawer.png" />(2)| */}
                            <NextImage src={shawer} />(2)|
                            {/* <img src="assets/img/icon/cars.png" />(1) */}
                            <NextImage src={cars} />(1)
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}

export default Card;