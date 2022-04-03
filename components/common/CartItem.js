import React from 'react';
import dynamic from "next/dynamic"
import { useRouter } from 'next/router'
import { bed, cars, property2, shawer } from '../../utils/images';

const NextImage = dynamic(() => import("next/image"))

const CartItem = (props) => {
    const { keyValue, title, area, price, description, id, bedrooms, bathrooms, garages,qty,property } = props
    return (
        <div className="col-sm-6 col-md-3 p0" key={keyValue ? keyValue : ''}>
            <div className="box-two proerty-item cart-item">
                <div className="item-thumb">
                    <a >
                        <NextImage src={property2} />
                        {/* <img src="assets/img/demo/property-2.jpg" /> */}
                    </a>
                </div>

                <div className="item-entry overflow">
                    <h5><a> {title} </a></h5>
                    <button onClick={props.removeItem} className="attached qty-btn cart-remove-btn">
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                    <div className="dot-hr"></div>
                    <span className="pull-left"><b> Area :</b> {area} </span>
                    <span className="proerty-price pull-right"> {price}</span>
                    <p style={{ display: 'none' }}>{description}</p>
                    <div className="property-icon">
                        <NextImage src={bed} />({bedrooms})|
                        <NextImage src={shawer} />({bathrooms})|
                        <NextImage src={cars} />({garages})
                    </div>
                    <div className="buy-btn cart-item-qty">
                        <span>Quantity</span>
                        <div className="quant-input">
                            <button onClick={() => props.handleQtyButton('decrement',property)} className="attached qty-btn">-</button>
                            <input type="number" value={qty} min="1" readOnly className="qty-inp number-inp" max="999" />
                            <button onClick={() => props.handleQtyButton('increment',property)} className="attached qty-btn">+</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default CartItem;