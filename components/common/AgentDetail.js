import React from 'react';


import dynamic from "next/dynamic"
import { clientFace1 } from '../../utils/images';
const NextImage = dynamic(() => import("next/image"))
const AgentDetail = (props) => {
    const { agentAddress, agentEmail, agentMobile, agentDescription, agentName } = props

    const callToNumber =(phoneNumber)=>{
        window.open(`tel:${phoneNumber}`)
    }

    return (
        <div className="dealer-widget">
            <div className="dealer-content">
                <div className="inner-wrapper">

                    <div className="clear">
                        <div className="col-xs-4 col-sm-4 dealer-face">
                            <a>
                                <NextImage src={clientFace1} />
                                {/* <img src="assets/img/client-face1.png" className="img-circle" /> */}
                            </a>
                        </div>
                        <div className="col-xs-8 col-sm-8 ">
                            <h3 className="dealer-name">
                                <a>{agentName}</a>
                                <br/>
                                <span>Real Estate Agent</span>
                            </h3>
                            <div className="dealer-social-media">
                                <a className="twitter" target="_blank">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a className="facebook" target="_blank">
                                    <i className="fa fa-facebook"></i>
                                </a>
                                <a className="gplus" target="_blank">
                                    <i className="fa fa-google-plus"></i>
                                </a>
                                <a className="linkedin" target="_blank">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                                <a className="instagram" target="_blank">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className="clear">
                        <ul className="dealer-contacts">
                            <li><i className="pe-7s-map-marker strong"> </i> {agentAddress}</li>
                            <li><i className="pe-7s-mail strong"> </i> {agentEmail}</li>
                            <li onClick={()=>callToNumber(agentMobile)} ><i className="pe-7s-call strong"> </i> {agentMobile}</li>
                        </ul>
                        <p>{agentDescription}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AgentDetail;