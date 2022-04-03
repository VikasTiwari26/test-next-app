import React from 'react';
const GenericBanner = (props) => {
    const { title } = props
    return (
        <div className="page-head">
            <div className="container">
                <div className="row">
                    <div className="page-head-content">
                        <h1 className="page-title">{title}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GenericBanner;