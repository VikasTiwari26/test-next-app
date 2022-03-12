import React from 'react';
import Card from './common/Card';

const PropertyListing = () => {
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12]
    return (
        <>
           <div className="content-area recent-property" style={{paddingBottom: '60px', backgroundColor: 'rgb(252, 252, 252)'}}>
            <div className="container">   
                <div className="row">
                    <div className="col-md-12  padding-top-40 properties-page">
                        <div className="col-md-12 "> 
                            <div className="col-xs-10 page-subheader sorting pl0">

                                <ul className="sort-by-list">
                                    <li className="active">
                                        <a  className="order_by_date" data-orderby="property_date" data-order="ASC">
                                            Property Date <i className="fa fa-sort-amount-asc"></i>					
                                        </a>
                                    </li>
                                    <li className="">
                                        <a  className="order_by_price" data-orderby="property_price" data-order="DESC">
                                            Property Price <i className="fa fa-sort-numeric-desc"></i>						
                                        </a>
                                    </li>
                                </ul>

                                {/* <div className="items-per-page">
                                    <label for="items_per_page"><b>Property per page :</b></label>
                                    <div className="sel">
                                        <select id="items_per_page" name="per_page">
                                            <option value="3">3</option>
                                            <option value="6">6</option>
                                            <option value="9">9</option>
                                            <option selected="selected" value="12">12</option>
                                            <option value="15">15</option>
                                            <option value="30">30</option>
                                            <option value="45">45</option>
                                            <option value="60">60</option>
                                        </select>
                                    </div>
                                </div> */}
                            </div>

                            <div className="col-xs-2 layout-switcher">
                                <a className="layout-list" > <i className="fa fa-th-list"></i>  </a>
                                <a className="layout-grid active" > <i className="fa fa-th"></i> </a>                          
                            </div>
                        </div>

                        <div className="col-md-12 "> 
                            <div id="list-type" className="proerty-th">
                           {
                               arr.map((item)=>( 
                               <Card 
                                    key={item} 
                                    title='Super nice villa'
                                    area='120m'
                                    price='$ 300,000'
                                    description='Suspendisse ultricies Suspendisse ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium ...'
                                 /> 
                               ))
                           }

                            </div>
                        </div>
                        {/* <div className="col-md-12"> 
                            <div className="pull-right">
                                <div className="pagination">
                                    <ul>
                                        <li><a href="#">Prev</a></li>
                                        <li><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">Next</a></li>
                                    </ul>
                                </div>
                            </div>                
                        </div> */}
                    </div>  
                </div>
            </div>
        </div>
        </>
    );
}

export default PropertyListing;