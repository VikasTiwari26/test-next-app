import React from 'react';

const SmartSearch = (props) => {
    return (
        <div className="panel panel-default sidebar-menu wow fadeInRight animated" >
            <div className="panel-heading">
                <h3 className="panel-title">Smart search</h3>
            </div>
            <div className="panel-body search-widget">
                <form action="" className=" form-inline">
                    <fieldset>
                        <div className="row">
                            <div className="col-xs-12">
                                <input type="text" className="form-control" placeholder="Key word" />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div className="row">
                            <div className="col-xs-6">

                                <select id="lunchBegins" className="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select Your City">

                                    <option>New york, CA</option>
                                    <option>Paris</option>
                                    <option>Casablanca</option>
                                    <option>Tokyo</option>
                                    <option>Marraekch</option>
                                    <option>kyoto , shibua</option>
                                </select>
                            </div>
                            <div className="col-xs-6">

                                <select id="basic" className="selectpicker show-tick form-control">
                                    <option> -Status- </option>
                                    <option>Rent </option>
                                    <option>Boy</option>
                                    <option>used</option>

                                </select>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="padding-5">
                        <div className="row">
                            <div className="col-xs-6">
                                <label htmlFor="price-range">Price range ($):</label>
                                <input type="text" className="span2" value="" data-slider-min="0"
                                    data-slider-max="600" data-slider-step="5"
                                    data-slider-value="[0,450]" id="price-range" /><br />
                                <b className="pull-left color">2000$</b>
                                <b className="pull-right color">100000$</b>
                            </div>
                            <div className="col-xs-6">
                                <label htmlFor="property-geo">Property geo (m2) :</label>
                                <input type="text" className="span2" value="" data-slider-min="0"
                                    data-slider-max="600" data-slider-step="5"
                                    data-slider-value="[50,450]" id="property-geo" /><br />
                                <b className="pull-left color">40m</b>
                                <b className="pull-right color">12000m</b>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="padding-5">
                        <div className="row">
                            <div className="col-xs-6">
                                <label htmlFor="price-range">Min baths :</label>
                                <input type="text" className="span2" value="" data-slider-min="0"
                                    data-slider-max="600" data-slider-step="5"
                                    data-slider-value="[250,450]" id="min-baths" /><br />
                                <b className="pull-left color">1</b>
                                <b className="pull-right color">120</b>
                            </div>

                            <div className="col-xs-6">
                                <label htmlFor="property-geo">Min bed :</label>
                                <input type="text" className="span2" value="" data-slider-min="0"
                                    data-slider-max="600" data-slider-step="5"
                                    data-slider-value="[250,450]" id="min-bed" /><br />
                                <b className="pull-left color">1</b>
                                <b className="pull-right color">120</b>

                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="padding-5">
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="checkbox">
                                    <label> <input type="checkbox" checked /> Fire Place</label>
                                </div>
                            </div>

                            <div className="col-xs-6">
                                <div className="checkbox">
                                    <label> <input type="checkbox" /> Dual Sinks</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="padding-5">
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="checkbox">
                                    <label> <input type="checkbox" checked /> Swimming Pool</label>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="checkbox">
                                    <label> <input type="checkbox" checked /> 2 Stories </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="padding-5">
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="checkbox">
                                    <label><input type="checkbox" /> Laundry Room </label>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="checkbox">
                                    <label> <input type="checkbox" /> Emergency Exit</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="padding-5">
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="checkbox">
                                    <label>  <input type="checkbox" checked /> Jog Path </label>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="checkbox">
                                    <label>  <input type="checkbox" />{`26' Ceilings`} </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="padding-5">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="checkbox">
                                    <label>  <input type="checkbox" /> Hurricane Shutters </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset >
                        <div className="row">
                            <div className="col-xs-12">
                                <input className="button btn largesearch-btn" value="Search" type="submit" />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default SmartSearch;