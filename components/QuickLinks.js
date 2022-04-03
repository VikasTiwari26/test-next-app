import React from 'react';
import { useRouter } from 'next/router';

const QuickLinks = (props) => {
    const router = useRouter()
    const gotoPage = (path) => {
        router.push(`/${path}`)
        // setCurrentPage(path)
    }
    return (
        <div className="col-md-3 col-sm-6 wow fadeInRight animated">
            <div className="single-footer">
                <h4>Quick links </h4>
                <div className="footer-title-line"></div>
                <ul className="footer-menu">
                    <li onClick={() => gotoPage('properties')} ><a >Properties</a>  </li>
                    {/* <li><a >Services</a>  </li>
                                        <li><a >Submit property </a></li> */}
                    <li onClick={() => gotoPage('contact')} ><a >Contact us</a></li>
                    <li onClick={() => gotoPage('faq')} ><a >faq</a>  </li>
                    <li onClick={() => gotoPage('faq')} ><a >Terms </a>  </li>
                </ul>
            </div>
        </div>
    );
}

export default QuickLinks;