import React from 'react';
import { useRouter } from 'next/router'

const BottomFooter = (props) => {
    const router = useRouter()
    const gotoPage = (path) => {
        router.push(`/${path}`)
        // setCurrentPage(path)
    }
    return (<div className="footer-copy text-center">
        <div className="container">
            <div className="row">
                <div className="pull-left">
                    <span> (C) <a>Metayards</a> , All rights reserved 2022  </span>
                </div>
                <div className="bottom-menu pull-right">
                    <ul>
                        <li onClick={() => gotoPage('/')} ><a className="wow fadeInUp animated" data-wow-delay="0.2s">Home</a></li>
                        {/* <li><a className="wow fadeInUp animated" data-wow-delay="0.3s">Property</a></li> */}
                        <li onClick={() => gotoPage('faq')} ><a className="wow fadeInUp animated" data-wow-delay="0.4s">Faq</a></li>
                        <li onClick={() => gotoPage('contact')} ><a className="wow fadeInUp animated" data-wow-delay="0.6s">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>);
}

export default BottomFooter;