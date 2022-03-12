import React from 'react';
import dynamic from "next/dynamic"
import { useRouter } from 'next/router'

const NextImage = dynamic(() => import("next/image"))
import footerLogo from '../public/assets/img/footer-logo.png'
import smallProperty2 from '../public/assets/img/demo/small-proerty-2.jpg'

const Footer = (props) => {
    const router = useRouter()
    const gotoPage = (path) => {
        router.push(`/${path}`)
        // setCurrentPage(path)
    }
    return ( 
        <>
        <div className="footer-area">

<div className=" footer">
    <div className="container">
        <div className="row">

            <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                <div className="single-footer">
                    <h4>About us </h4>
                    <div className="footer-title-line"></div>
                    <NextImage src={footerLogo} />
                    {/* <img src="assets/img/footer-logo.png" alt="" className="wow pulse" data-wow-delay="1s"> */}
                    <p>Lorem ipsum dolor cum necessitatibus su quisquam molestias. Vel unde, blanditiis.</p>
                    <ul className="footer-adress">
                        <li><i className="pe-7s-map-marker strong"> </i> 9089 your adress her</li>
                        <li><i className="pe-7s-mail strong"> </i> email@yourcompany.com</li>
                        <li><i className="pe-7s-call strong"> </i> +1 908 967 5906</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                <div className="single-footer">
                    <h4>Quick links </h4>
                    <div className="footer-title-line"></div>
                    <ul className="footer-menu">
                        <li><a >Properties</a>  </li> 
                        <li><a >Services</a>  </li> 
                        <li><a >Submit property </a></li> 
                        <li  onClick={() => gotoPage('contact')} ><a >Contact us</a></li> 
                        <li  onClick={() => gotoPage('faq')} ><a >fqa</a>  </li> 
                        <li  onClick={() => gotoPage('faq')} ><a >Terms </a>  </li> 
                    </ul>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                <div className="single-footer">
                    <h4>Last News</h4>
                    <div className="footer-title-line"></div>
                    <ul className="footer-blog">
                        <li>
                            <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                                <a href="single.html">
                                    <NextImage src={smallProperty2} />
                                    {/* <img src="assets/img/demo/small-proerty-2.jpg"> */}
                                </a>
                                <span className="blg-date">12-12-2016</span>

                            </div>
                            <div className="col-md-8  col-sm-8 col-xs-8  blg-entry">
                                <h6> <a >Add news functions </a></h6> 
                                <p style={{lineHeight: "17px", padding: "8px 2px"}}>Lorem ipsum dolor sit amet, nulla ...</p>
                            </div>
                        </li> 

                        <li>
                            <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                                <a >
                                    <NextImage src={smallProperty2} />
                                    {/* <img src="assets/img/demo/small-proerty-2.jpg"> */}
                                </a>
                                <span className="blg-date">12-12-2016</span>

                            </div>
                            <div className="col-md-8  col-sm-8 col-xs-8  blg-entry">
                                <h6> <a href="single.html">Add news functions </a></h6> 
                                <p style={{lineHeight: "17px", padding: "8px 2px"}}>Lorem ipsum dolor sit amet, nulla ...</p>
                            </div>
                        </li> 

                        <li>
                            <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                                <a href="single.html">
                                    <NextImage src={smallProperty2} />
                                    {/* <img src="assets/img/demo/small-proerty-2.jpg"> */}
                                </a>
                                <span className="blg-date">12-12-2016</span>

                            </div>
                            <div className="col-md-8  col-sm-8 col-xs-8  blg-entry">
                                <h6> <a href="single.html">Add news functions </a></h6> 
                                <p style={{lineHeight: "17px", padding: "8px 2px"}}>Lorem ipsum dolor sit amet, nulla ...</p>
                            </div>
                        </li> 


                    </ul>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                <div className="single-footer news-letter">
                    <h4>Stay in touch</h4>
                    <div className="footer-title-line"></div>
                    <p>Lorem ipsum dolor sit amet, nulla  suscipit similique quisquam molestias. Vel unde, blanditiis.</p>

                    <form>
                        <div className="input-group">
                            <input className="form-control" type="text" placeholder="E-mail ... " />
                            <span className="input-group-btn">
                                <button className="btn btn-primary subscribe" type="button"><i className="pe-7s-paper-plane pe-2x"></i></button>
                            </span>
                        </div>
                    </form> 

                    <div className="social pull-right"> 
                        <ul>
                            <li><a className="wow fadeInUp animated" href="https://twitter.com/kimarotec"><i className="fa fa-twitter"></i></a></li>
                            <li><a className="wow fadeInUp animated" href="https://www.facebook.com/kimarotec" data-wow-delay="0.2s"><i className="fa fa-facebook"></i></a></li>
                            <li><a className="wow fadeInUp animated" href="https://plus.google.com/kimarotec" data-wow-delay="0.3s"><i className="fa fa-google-plus"></i></a></li>
                            <li><a className="wow fadeInUp animated" href="https://instagram.com/kimarotec" data-wow-delay="0.4s"><i className="fa fa-instagram"></i></a></li>
                            <li><a className="wow fadeInUp animated" href="https://instagram.com/kimarotec" data-wow-delay="0.6s"><i className="fa fa-dribbble"></i></a></li>
                        </ul> 
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

<div className="footer-copy text-center">
    <div className="container">
        <div className="row">
            <div className="pull-left">
                <span> (C) <a>Metayards</a> , All rights reserved 2022  </span> 
            </div> 
            <div className="bottom-menu pull-right"> 
                <ul> 
                    <li onClick={() => gotoPage('/')} ><a className="wow fadeInUp animated" data-wow-delay="0.2s">Home</a></li>
                    <li><a className="wow fadeInUp animated"  data-wow-delay="0.3s">Property</a></li>
                    <li onClick={() => gotoPage('faq')} ><a className="wow fadeInUp animated"  data-wow-delay="0.4s">Faq</a></li>
                    <li onClick={() => gotoPage('contact')} ><a className="wow fadeInUp animated"  data-wow-delay="0.6s">Contact</a></li>
                </ul> 
            </div>
        </div>
    </div>
</div>

</div>
        </>
     );
}
 
export default Footer;