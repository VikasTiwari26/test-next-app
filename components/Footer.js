import React from 'react';
import dynamic from "next/dynamic"
import QuickLinks from './QuickLinks';
import AboutUsFooter from './AboutUsFooter';
import BottomFooter from './BottomFooter';

const NextImage = dynamic(() => import("next/image"))

const Footer = (props) => {
    return (
        <>
            <div className="footer-area">
                <div className=" footer">
                    <div className="container">
                        <div className="row">
                            <AboutUsFooter />
                            <QuickLinks />
                            {/*ADD LATEST NEWS COMPONENT HERE*/}
                        </div>
                    </div>
                </div>
                <BottomFooter />
            </div>
        </>
    );
}

export default Footer;