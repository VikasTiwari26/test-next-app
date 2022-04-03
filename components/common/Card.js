import React from 'react';

import dynamic from "next/dynamic"
import { useRouter } from 'next/router'
import { bed, cars, property2, shawer } from '../../utils/images';
const NextImage = dynamic(() => import("next/image"))

const Card = (props) => {
    const router = useRouter()
    const { keyValue, title, area, price, description,id,bedrooms,bathrooms,garages } = props
    const gotoDetailPage =(id)=>{
        router.push(`/property-detail?id=${id}`)
    }
    return (
        <>
            <div onClick={()=>gotoDetailPage(id)} className="col-sm-6 col-md-3 p0" key={keyValue ? keyValue : ''}>
                <div className="box-two proerty-item">
                    <div className="item-thumb">
                        <a >
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
                            <NextImage src={bed} />({bedrooms})|
                            {/* <img src="assets/img/icon/shawer.png" />(2)| */}
                            <NextImage src={shawer} />({bathrooms})|
                            {/* <img src="assets/img/icon/cars.png" />(1) */}
                            <NextImage src={cars} />({garages})
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}

export default Card;