import React, { Component } from 'react';
import FaqBanner from '../components/Banners/FaqBanner';
import Layout from '../components/Layout';


class Faq extends Component {
    state = {  } 
    render() { 
        return (
            <Layout>
                <FaqBanner />
                <div className="content-area recent-property" style={{backgroundColor: '#FCFCFC', paddingBottom: '55px'}}>
            <div className="container">    

                <div className="row">
                    <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
                        <h2>Our terms </h2>
                        <br/>
                    </div>
                </div>

                <div className="row row-feat"> 
                    <div className="col-md-12">
 
                        <div className="col-sm-6 feat-list">
                            <div className="panel-group">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                         <h4 className="panel-title fqa-title" data-toggle="collapse" data-target="#fqa11" >
                                            Nostrud exercitation ullamco laboris 1 1
                                         </h4> 
                                    </div>
                                    <div id="fqa11" className="panel-collapse collapse fqa-body">
                                        <div className="panel-body">
                                            <ol>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>                                           
                                            </ol> 
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            
                            <div className="panel-group">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                         <h4 className="panel-title fqa-title" data-toggle="collapse" data-target="#fqa22" >
                                            Nostrud exercitation ullamco laboris 2 2
                                         </h4> 
                                    </div>
                                    <div id="fqa22" className="panel-collapse collapse fqa-body">
                                        <div className="panel-body">
                                            <ol>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>                                           
                                            </ol> 
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            
                            <div className="panel-group">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                         <h4 className="panel-title fqa-title" data-toggle="collapse" data-target="#fqa33" >
                                            Nostrud exercitation ullamco laboris 3 3
                                         </h4> 
                                    </div>
                                    <div id="fqa33" className="panel-collapse collapse fqa-body">
                                        <div className="panel-body">
                                            <ol>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>                                           
                                            </ol> 
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 feat-list">
                            <div className="panel-group">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                         <h4 className="panel-title fqa-title" data-toggle="collapse" data-target="#fqa1" >
                                            Nostrud exercitation ullamco laboris 1 
                                         </h4> 
                                    </div>
                                    <div id="fqa1" className="panel-collapse collapse fqa-body">
                                        <div className="panel-body">
                                            <ol>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>                                           
                                            </ol> 
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            
                            <div className="panel-group">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                         <h4 className="panel-title fqa-title" data-toggle="collapse" data-target="#fqa2" >
                                            Nostrud exercitation ullamco laboris 2 
                                         </h4> 
                                    </div>
                                    <div id="fqa2" className="panel-collapse collapse fqa-body">
                                        <div className="panel-body">
                                            <ol>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>                                           
                                            </ol> 
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            
                            <div className="panel-group">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                         <h4 className="panel-title fqa-title" data-toggle="collapse" data-target="#fqa3" >
                                            Nostrud exercitation ullamco laboris 3
                                         </h4> 
                                    </div>
                                    <div id="fqa3" className="panel-collapse collapse fqa-body">
                                        <div className="panel-body">
                                            <ol>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing</li>                                           
                                            </ol> 
                                        </div> 
                                    </div>
                                </div>
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
 
export default Faq;