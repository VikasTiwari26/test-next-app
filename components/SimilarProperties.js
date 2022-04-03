import React from 'react';
import PropertyCard from './common/PropertyCard';

const SimilarProperties = (props) => {
    return (
        <div className="panel panel-default sidebar-menu similar-property-wdg wow fadeInRight animated">
            <div className="panel-heading">
                <h3 className="panel-title">Similar Properties</h3>
            </div>
            <div className="panel-body recent-property-widget">
                <ul>
                    <PropertyCard />
                    <PropertyCard />
                    <PropertyCard />
                    <PropertyCard />
                    <PropertyCard />
                    <PropertyCard />
                </ul>
            </div>
        </div>
    );
}

export default SimilarProperties;