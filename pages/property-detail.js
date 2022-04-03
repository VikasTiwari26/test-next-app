import React, { Component } from 'react';
import { withRouter } from 'next/router'
import Layout from '../components/Layout';
import AxiosRequest from '../providers/axios';
import { avatar, bedOrange, carsOrange, osOrange, propertyImage1, propertyImage2, propertyImage3, propertyImage4, propertyVideo, roomOrange, saleOrange, shawerOrange } from '../utils/images';
import AgentDetail from '../components/common/AgentDetail';
import dynamic from "next/dynamic"
import PropertyDetailBanner from '../components/Banners/PropertyDetailBanner';
import { getApiData } from '../api/api';
import { propertiesList } from '../utils/sampleData';
import SimilarProperties from '../components/SimilarProperties';
import SmartSearch from '../components/SmartSearch';
import Ads from '../components/Ads';
import { calculateLimit } from '../utils/staticData';
import AlertModal from '../components/common/AlertModal';
import ImageSlider from '../components/common/ImageSlider';


const NextImage = dynamic(() => import("next/image"))

const axios = new AxiosRequest().getClient()

class PropertyDetailPage extends Component {
    state = {
        property: {},
        qty: 1,
        limit: null,
        showModal: false,
        loading: false
    }
    componentDidMount() {
        // this.getPurchasedProperty()
        this.getPropertyDetails()
    }

    isUserLoggedIn = () => {
        if (typeof window !== "undefined") {
            // Perform localStorage action
            return localStorage.getItem("customerId")
        } else {
            // setTimeout(() => {
            //   localStorage.getItem("customerId");
            // }, 300);
        }
    };

    handleBuyButton = async () => {
        this.setState({ loading: true, buyErr: false })
        const { limit, qty } = this.state
        const {
            propertyId,
            actualAmt,
            discountAmt,
        } = this.state.property

        let { url, body } = getApiData('addToCart')

        if (!this.isUserLoggedIn()) {
            this.setState({ buyErr: true, buyErrMsg: 'You need to login for buying this property.', loading: false })
            return
        }

        if (!limit) {
            this.setState({ buyErr: true, buyErrMsg: 'You have bought maximum number of units of this product.', loading: false })
            return
        }

        body.actualAmt = actualAmt
        body.courseId = propertyId
        body.customerId = localStorage.getItem("customerId")
        body.discountAmt = discountAmt
        body.propertyQuantity = qty

        try {
            const response = await axios.post(url, body);
            if (response.status == 200) {
                this.setState({ showModal: true })
            }
        } catch (err) {
            console.log(err);
            this.setState({ buyErr: true, buyErrMsg: 'Something went wrong !' })
        } finally {
            this.setState({ loading: false });
        }


    }

    handleQtyButton = (action) => {
        let { qty, limit } = this.state
        let val = qty
        if (action == 'increment') {
            if (qty == limit) return
            this.setState({ qty: val + 1 })

        }
        if (action == 'decrement') {
            if (val - 1 < 1) return
            this.setState({ qty: val - 1 })
        }
    }

    getPropertyDetails = async () => {
        this.setState({ loading: true })
        let id = window.location.search.split('=')[1]
        let propertyId = this.props.router.query.id ? this.props.router.query.id : id
        let { url } = getApiData('getPropertyDetail')
        try {
            const response = await axios.get(`${url}${propertyId}`, {
                data: null
            })
            if (response.status == 200) {
                let availbleQty = response.data.properties[0].totalPropertyAvailable
                // let soldQty = response.data.properties[0].totalPropertySold
                let soldQty =await this.getPurchasedProperty()
                let limit = calculateLimit(availbleQty, soldQty)
                this.setState({ property: response.data.properties[0], limit })
            }
        } catch (err) {
            console.log(err)
            let property = propertiesList.filter(p => p.propertyId == propertyId)
            this.setState({ property: property[0] })
        } finally {
            this.setState({ loading: false })
        }
    }

    getPurchasedProperty = async () => {
        this.setState({loading:true})
        let id = window.location.search.split('=')[1]
        let propertyId = this.props.router.query.id ? this.props.router.query.id : id
        let { url } = getApiData('purchasedPropertiesByPropertyId')
        try {
            const response = await axios.get(`${url}`, {
                params:{
                    customerId:localStorage.getItem("customerId"),
                    courseId:propertyId
                },
                data: null
            })
            if(response.status==200){
                if(response.data.propertyQuantity) {
                    return response.data.propertyQuantity
                }else {
                    return 0
                }
            }
        } catch (err) {
            console.log(err)
            return 0
        }finally{
            this.setState({loading:false})
        }
    }

    handleModalBtns = (action) => {
        this.setState({ showModal: false })
        if (action == 'keepBrowsing') {
            this.props.router.push("/");
        } else {
            this.props.router.push("/cart");
        }
    }


    render() {
        const {
            propertyId,
            title,
            actualAmt,
            area,
            description,
            propertyName,
            bedrooms,
            bathrooms,
            garages,
            size,
            features,
            waterfront,
            builtIn,
            parking,
            view,
            waterfrontDescription,
            propertyAgentName,
            agentAddress,
            agentEmail,
            agentMobile,
            agentDescription,
            status,
        } = this.state.property
        const { showModal, qty, buyErr, buyErrMsg } = this.state
        let allFeatures = features ? features.split('/') : []
        return (
            <Layout>
                <PropertyDetailBanner title={propertyName} />
                <div className="content-area single-property" style={{ backgroundColor: '#FCFCFC' }}>&nbsp;
                    <div className="container">

                        <div className="clearfix padding-top-40" >

                            <div className="col-md-8 single-property-content prp-style-1 ">
                                <div className="row img-sldr-cntnr">
                                    {/* <div className="light-slide-item">
                                        <div className="clearfix"> */}
                                    {/* <ul id="image-gallery" className="gallery list-unstyled cS-hidden"> */}
                                    <ImageSlider>
                                        <div>
                                            <NextImage src={propertyImage1} />
                                        </div>
                                        <div>
                                            <NextImage src={propertyImage2} />
                                        </div>
                                        <div>
                                            <NextImage src={propertyImage3} />
                                        </div>
                                        <div>
                                            <NextImage src={propertyImage4} />
                                        </div>
                                        {/* <li data-thumb="assets/img/property-1/property1.jpg">
                                                    <NextImage src={propertyImage1} />
                                                </li>
                                                <li data-thumb="assets/img/property-1/property2.jpg">
                                                    <NextImage src={propertyImage2} />
                                                </li>
                                                <li data-thumb="assets/img/property-1/property3.jpg">
                                                    <NextImage src={propertyImage3} />
                                                </li>
                                                <li data-thumb="assets/img/property-1/property4.jpg">
                                                    <NextImage src={propertyImage4} />
                                                </li> */}
                                    </ImageSlider>
                                    {/* </ul> */}
                                    {/* </div>
                                    </div> */}
                                </div>

                                <div className="single-property-wrapper">
                                    <div className="single-property-header">
                                        <h1 className="property-title pull-left">{title}</h1>
                                        <span className="property-price pull-right">${actualAmt}</span>
                                    </div>
                                    <div className="property-meta entry-meta clearfix ">
                                        <div className="col-xs-6 col-sm-3 col-md-3 p-b-15">
                                            <span className="property-info-icon icon-tag">
                                                <NextImage src={saleOrange} />
                                            </span>
                                            <span className="property-info-entry">
                                                <span className="property-info-label">Status</span>
                                                <span className="property-info-value">{status}</span>
                                            </span>
                                        </div>
                                        <div className="col-xs-6 col-sm-3 col-md-3 p-b-15">
                                            <span className="property-info icon-area">
                                                <NextImage src={roomOrange} />
                                            </span>
                                            <span className="property-info-entry">
                                                <span className="property-info-label">Area</span>
                                                <span className="property-info-value">{area}<b className="property-info-unit"></b></span>
                                            </span>
                                        </div>
                                        <div className="col-xs-6 col-sm-3 col-md-3 p-b-15">
                                            <span className="property-info-icon icon-bed">
                                                <NextImage src={bedOrange} />
                                            </span>
                                            <span className="property-info-entry">
                                                <span className="property-info-label">Bedrooms</span>
                                                <span className="property-info-value">{bedrooms}</span>
                                            </span>
                                        </div>
                                        <div className="col-xs-6 col-sm-3 col-md-3 p-b-15">
                                            <span className="property-info-icon icon-bath">
                                                <NextImage src={osOrange} />
                                            </span>
                                            <span className="property-info-entry">
                                                <span className="property-info-label">Bathrooms</span>
                                                <span className="property-info-value">{bathrooms}</span>
                                            </span>
                                        </div>
                                        <div className="col-xs-6 col-sm-3 col-md-3 p-b-15">
                                            <span className="property-info-icon icon-garage">
                                                <NextImage src={roomOrange} />
                                            </span>
                                            <span className="property-info-entry">
                                                <span className="property-info-label">Garages</span>
                                                <span className="property-info-value">{garages}</span>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="buy-btn">
                                        <span>Quantity</span>
                                        <div className="quant-input">
                                            <button onClick={() => this.handleQtyButton('decrement')} className="attached qty-btn">-</button>
                                            <input type="number" value={qty} min="1" readOnly className="qty-inp number-inp" max="999" />
                                            <button onClick={() => this.handleQtyButton('increment')} className="attached qty-btn">+</button>
                                        </div>
                                        <button className="btn qty-buy-btn" onClick={this.handleBuyButton} >Buy</button>
                                    </div>
                                    {
                                        buyErr && <small className="err-msg">{buyErrMsg}</small>
                                    }
                                    <div className="section">
                                        <h4 className="s-property-title">Description</h4>
                                        <div className="s-property-content">
                                            <p>{description}</p>
                                        </div>
                                    </div>

                                    <div className="section additional-details">

                                        <h4 className="s-property-title">Additional Details</h4>

                                        <ul className="additional-details-list clearfix">
                                            <li>
                                                <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">Waterfront</span>
                                                <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">{waterfront}</span>
                                            </li>

                                            <li>
                                                <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">Built In</span>
                                                <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">{builtIn}</span>
                                            </li>
                                            <li>
                                                <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">Parking</span>
                                                <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">{parking}</span>
                                            </li>

                                            <li>
                                                <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">View</span>
                                                <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">{view}</span>
                                            </li>

                                            <li>
                                                <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">Waterfront Description:</span>
                                                <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">{waterfrontDescription}</span>
                                            </li>

                                        </ul>
                                    </div>

                                    <div className="section property-features">

                                        <h4 className="s-property-title">Features</h4>
                                        <ul>
                                            {
                                                allFeatures.map((feat, index) => (
                                                    <li key={index} ><a>{feat}</a></li>
                                                ))
                                            }
                                        </ul>

                                    </div>

                                    <div className="section property-video">
                                        <h4 className="s-property-title">Property Video</h4>
                                        <div className="video-thumb">
                                            <a className="video-popup" title="Virtual Tour">
                                                <NextImage src={propertyVideo} className="img-responsive wp-post-image" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4 p0">
                                <aside className="sidebar sidebar-property blog-asside-right">
                                    <AgentDetail
                                        agentAddress={agentAddress}
                                        agentDescription={agentDescription}
                                        agentEmail={agentEmail}
                                        agentMobile={agentMobile}
                                        agentName={propertyAgentName}
                                    />
                                    {/* <SimilarProperties /> */}
                                    <Ads />
                                    {/* <SmartSearch />  */}
                                </aside>
                            </div>
                        </div>

                    </div>
                </div>
                <AlertModal
                    showModal={showModal}
                    onClose={() => this.setState({ showModal: false })}
                    title={'Alert'}
                    msg={"Item(s) added to cart."}
                    buttons={
                        [{ name: "Keep Browsing", action: 'keepBrowsing' }, { name: "Go To Cart", action: 'cart' }]
                    }
                    handleModalBtns={this.handleModalBtns}
                />
            </Layout>
        );
    }
}

export default withRouter(PropertyDetailPage);