import React from 'react';
import dynamic from "next/dynamic"
import { smallProperty3 } from '../../utils/images';
const NextImage = dynamic(() => import("next/image"))

const PropertyCard = (props) => {
    return ( 
        <li>
        <div className="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
            {/* <a><img src="assets/img/demo/small-property-3.jpg" /></a> */}
            <a><NextImage src={smallProperty3} /></a>
            <span className="property-seeker">
                <b className="b-1">A</b>
                <b className="b-2">S</b>
            </span>
        </div>
        <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
            <h6> <a>Super nice villa </a></h6>
            <span className="property-price">3000000$</span>
        </div>
    </li>
     );
}
 
export default PropertyCard;