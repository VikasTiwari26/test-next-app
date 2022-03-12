import React from 'react';

const MyProfileBanner = (props) => {
    const {name} = props
    return ( 
        <div className="page-head"> 
        <div className="container">
            <div className="row">
                <div className="page-head-content">
                    <h1 className="page-title">Hello : <span className="orange strong">{name}</span></h1>               
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default MyProfileBanner;