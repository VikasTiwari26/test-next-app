import React, { Component } from 'react';
import { withRouter } from "next/router";
import Layout from '../components/Layout';
import GenericBanner from '../components/common/GenericBanner';
import { getApiData } from '../api/api';
import AxiosRequest from '../providers/axios';
import CartItem from '../components/common/CartItem';
import Loader from '../components/common/Loader'
import { calculateLimit } from '../utils/staticData';
import { purchasedProperties } from '../utils/sampleData';

const axios = new AxiosRequest().getClient()

class Cart extends Component {
    state = {
        loading: false,
        coursesInCart: []
    }

    componentDidMount() {
        let customerId = localStorage.getItem("customerId")
        this.getCartDetails(customerId)
    }

    getCartDetails = async (customerId) => {
        this.setState({ loading: true })
        let { url } = getApiData('getCartDetail')
        try {
            const response = await axios.get(`${url}${customerId}`, {
                data: null
            })
            if (response.status == 200) {
                // this.setState({ coursesInCart: response.data.coursesInCart })
                this.updatePropertyBoughtByUser(response.data.coursesInCart)
            }
        } catch (err) {
            console.log(err)
            // this.setState({})
        } finally {
            this.setState({ loading: false })
        }
    }

    deleteItemFromCart = async (id) => {
        this.setState({ loading: true })
        let { url, body } = getApiData('removeFromCart')
        let customerId = localStorage.getItem("customerId")
        body.courseId = id
        body.customerId = customerId
        try {
            const response = await axios.post(url, body)
            if (response.status == 200) {
                if(response.data.cartCount==0){
                    console.log("response",response)
                    this.setState({coursesInCart:[]})
                }else{

                    this.getCartDetails(customerId)
                }
            }

        } catch (err) {
            console.log(err)
        } finally {
            this.setState({ loading: false })
        }

    }

    handleQtyButton = (action, property) => {
        let itemsInCart = JSON.parse(JSON.stringify(this.state.coursesInCart))
        let currentItem = itemsInCart.filter(item => item.courseId == property.courseId)
        if (currentItem.length) {
            // let limit = calculateLimit(currentItem[0].property.totalPropertyAvailable,currentItem[0].property.totalPropertySold)
            let val = property.propertyQuantity
            if (action == 'increment') {
                if (property.propertyQuantity == property.limit) return
                currentItem[0].propertyQuantity = val + 1
            }
            if (action == 'decrement') {
                if (val - 1 < 1) return
                currentItem[0].propertyQuantity = val - 1
            }
        }
        this.setState({ coursesInCart: itemsInCart })
    }

    calculateTotalAmount = () => {
        let itemsInCart = JSON.parse(JSON.stringify(this.state.coursesInCart))
        let finalAmount = 0
        itemsInCart.forEach((item) => {
            let totalAmountPerItem = item.propertyQuantity * item.actualAmt
            finalAmount += totalAmountPerItem
        })
        return finalAmount.toFixed(1)
    }

    updatePropertyBoughtByUser = async (coursesInCart) => {
        let { url } = getApiData('purchasedPropertiesByCustomerId')
        let customerId = localStorage.getItem("customerId")
        try {
            const response = await axios.get(`${url}${customerId}`, {
                data: null
            })
            coursesInCart.forEach(c=>{
                c.limit = 20
            })
            // purchasedProperties.forEach(item => {
            //     coursesInCart.forEach(courseInCart => {
            //         if (courseInCart.courseId == item.courseId) {
            //             // courseInCart.alreadyBoughtQty = item.propertyQuantity
            //             courseInCart.limit = calculateLimit(courseInCart.property.totalPropertyAvailable, item.propertyQuantity)
            //         } else {
            //             courseInCart.limit = 20
            //         }
            //     })
            // })
            if (response.data.length) {
                response.data.forEach(item => {
                    coursesInCart.forEach(courseInCart => {
                        if (courseInCart.courseId == item.courseId) {
                            courseInCart.limit = item.propertyQuantity
                        } else {
                            courseInCart.limit = 20
                        }
                    })
                })
            }
            this.setState({ coursesInCart })
        } catch (err) {

        } finally {

        }
    }



    render() {
        const { loading, coursesInCart } = this.state
        return (
            <Layout>
                {loading && <Loader />}
                <GenericBanner title="Cart" />
                <div
                    className="content-area recent-property"
                    style={{ paddingBottom: "60px", backgroundColor: "rgb(252, 252, 252)" }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12  padding-top-40 properties-page">
                          {  coursesInCart && coursesInCart.length>0 &&   <div className="total-amount-cart-cntnr ">
                                    <div className="amount-title" >
                                        <span>Total Amount to be paid : </span>
                                    </div>
                                    <div className="col-xs-10 page-subheader sorting pl0">
                                        <span className="proerty-price pull-right total-cart-price">$ {this.calculateTotalAmount()}</span>
                                    </div>
                                </div>}

                                <div className="col-md-12 ">
                                    {!coursesInCart.length && <div>There is no item(s) in cart.</div>}
                                    <div id="list-type" className="proerty-th-list">
                                        {
                                            coursesInCart && coursesInCart.map((item, index) => {
                                                const { propertyId, actualAmt, area, description, propertyName, bedrooms, bathrooms, garages } = item.property
                                                return <CartItem
                                                    key={index}
                                                    keyValue={propertyId}
                                                    title={`${propertyId}. ${propertyName}`}
                                                    id={propertyId}
                                                    area={area}
                                                    price={`$ ${actualAmt}`}
                                                    description={description}
                                                    bedrooms={bedrooms}
                                                    bathrooms={bathrooms}
                                                    garages={garages}
                                                    qty={item.propertyQuantity}
                                                    removeItem={() => this.deleteItemFromCart(propertyId)}
                                                    handleQtyButton={this.handleQtyButton}
                                                    property={item}
                                                    limit={item.limit}
                                                />
                                            })
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default withRouter(Cart);