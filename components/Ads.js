import React from 'react';

import dynamic from "next/dynamic"
import { avatar } from '../utils/images';
const NextImage = dynamic(() => import("next/image"))

const Ads = (props) => {
    return (
        <div className="panel panel-default sidebar-menu wow fadeInRight animated">
            <div className="panel-heading">
                <h3 className="panel-title">Ads here  </h3>
            </div>
            <div className="panel-body recent-property-widget">
                {/* <img src="assets/img/ads.jpg" /> */}
                <NextImage src={avatar} />
            </div>
        </div>
    );
}

export default Ads;