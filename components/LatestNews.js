import React from 'react';
import dynamic from "next/dynamic"
import { smallProperty2 } from '../utils/images';

const NextImage = dynamic(() => import("next/image"))

const LatestNews = (props) => {
    return ( 
        <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                                <div className="single-footer">
                                    <h4>Last News</h4>
                                    <div className="footer-title-line"></div>
                                    <ul className="footer-blog">
                                        <li>
                                            <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                                                <a>
                                                    <NextImage src={smallProperty2} />
                                                </a>
                                                <span className="blg-date">12-12-2016</span>

                                            </div>
                                            <div className="col-md-8  col-sm-8 col-xs-8  blg-entry">
                                                <h6> <a >Add news functions </a></h6>
                                                <p style={{ lineHeight: "17px", padding: "8px 2px" }}>Lorem ipsum dolor sit amet, nulla ...</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                                                <a >
                                                    <NextImage src={smallProperty2} />
                                                </a>
                                                <span className="blg-date">12-12-2016</span>

                                            </div>
                                            <div className="col-md-8  col-sm-8 col-xs-8  blg-entry">
                                                <h6> <a>Add news functions </a></h6>
                                                <p style={{ lineHeight: "17px", padding: "8px 2px" }}>Lorem ipsum dolor sit amet, nulla ...</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                                                <a>
                                                    <NextImage src={smallProperty2} />
                                                </a>
                                                <span className="blg-date">12-12-2016</span>

                                            </div>
                                            <div className="col-md-8  col-sm-8 col-xs-8  blg-entry">
                                                <h6> <a>Add news functions </a></h6>
                                                <p style={{ lineHeight: "17px", padding: "8px 2px" }}>Lorem ipsum dolor sit amet, nulla ...</p>
                                            </div>
                                        </li>


                                    </ul>
                                </div>
                            </div>
     );
}
 
export default LatestNews;