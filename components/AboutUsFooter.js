import React from 'react';
import dynamic from "next/dynamic"
import { companyInfo } from '../utils/staticData';
import { footerLogo } from '../utils/images';
const NextImage = dynamic(() => import("next/image"))

const AboutUsFooter = (props) => {
    const {about,address,email,phone} = companyInfo
    return (
        <div className="col-md-3 col-sm-6 wow fadeInRight animated">
            <div className="single-footer">
                <h4>About us </h4>
                <div className="footer-title-line"></div>
                <NextImage src={footerLogo} />
                {/* <img src="assets/img/footer-logo.png" alt="" className="wow pulse" data-wow-delay="1s"> */}
                <p>{}</p>
                <ul className="footer-adress">
                    <li><i className="pe-7s-map-marker strong"> </i>{address} </li>
                    <li><i className="pe-7s-mail strong"> </i> {email}</li>
                    <li><i className="pe-7s-call strong"> </i>{phone} </li>
                </ul>
            </div>
        </div>
    );
}

export default AboutUsFooter;