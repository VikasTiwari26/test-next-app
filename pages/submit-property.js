import React, { Component } from 'react';
import SubmitPropertyBanner from '../components/Banners/SubmitPropertyBanner';
import Layout from '../components/Layout'
import dynamic from "next/dynamic"
import { defaulProperty } from '../utils/images';

const NextImage = dynamic(() => import("next/image"))

class SubmitProperty extends Component {
    state = {
        currentStep: 1,
        image: '',
        propertyImages: [],
        propertyName: '',
        propertyPrice: '',
        phone: '',
        propertyDescription: '',
        propertyState: '',
        propertyCity: '',
        propertyStatus: '',
        propertyVideoLink1: '',
        propertyVideoLink2: '',
        propertyVideoLink3: '',
        acceptTerms: false,
        features: []

    }

    componentDidMount() {
    }

    handleNextAndPrevBtn = (direction) => {
        const { currentStep } = this.state
        if (direction == 'next') {
            let nextStep = currentStep + 1
            if (nextStep > 4) return
            this.setState({ currentStep: nextStep })
        }
        if (direction == 'prev') {
            let prevStep = currentStep - 1
            if (prevStep < 1) return
            this.setState({ currentStep: prevStep })
        }
    }

    handleFileUpload = async (e) => {
        const { files } = e.target
        let uploadedFiles = []
        for (let i = 0; i < files.length; i++) {
            let result = await this.getBase64(files[i])
            uploadedFiles.push(result)
        }
        this.setState({ propertyImages: uploadedFiles })
    }

    handleProfilePicUpload = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onloadend = () => {
            //   console.log('RESULT', reader.result)
            this.setState({ image: reader.result })
        }
        reader.readAsDataURL(file);
    }

    getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    handleCheckbox = (e) => {
        const { features } = this.state
        let allSelectedFeatures = JSON.parse(JSON.stringify(features))
        const { checked, name, value } = e.target
        if (name == 'acceptTerms') {
            if (checked) {
                this.setState({ acceptTerms: true })
            } else {
                this.setState({ acceptTerms: false })
            }
            return
        }
        if (checked) {
            allSelectedFeatures.push(value)
        } else {
            let itemIndex = allSelectedFeatures.indexOf(value)
            if (itemIndex > -1) {
                allSelectedFeatures.splice(itemIndex, 1)
            }
        }
        this.setState({ features: allSelectedFeatures })
    }
    handleSlider = (e) => {
        // console.log(e.target)
    }

    render() {
        const { currentStep, propertyName, propertyPrice, phone, image, propertyCity, propertyDescription, propertyImages, propertyState, propertyStatus, propertyVideoLink1, propertyVideoLink2, propertyVideoLink3, acceptTerms } = this.state
        return (
            <Layout>
                <SubmitPropertyBanner />
                <div className="content-area submit-property" style={{ backgroundColor: '#FCFCFC' }}>&nbsp;
                    <div className="container">
                        <div className="clearfix" >
                            <div className="wizard-container">

                                <div className="wizard-card ct-wizard-orange" id="wizardProperty">
                                    <form>
                                        <div className="wizard-header">
                                            <h3>
                                                <b>Submit</b> YOUR PROPERTY <br />
                                                <small>Lorem ipsum dolor sit amet, consectetur adipisicing.</small>
                                            </h3>
                                        </div>

                                        <ul className="nav nav-pills" >
                                            <li onClick={() => this.setState({ currentStep: 1 })} className={currentStep == 1 ? 'active' : ''} style={{ width: '25%' }}><a className='step-blk' data-toggle="tab">Step 1 </a></li>
                                            <li onClick={() => this.setState({ currentStep: 2 })} className={currentStep == 2 ? 'active' : ''} style={{ width: '25%' }}><a className='step-blk' data-toggle="tab">Step 2 </a></li>
                                            <li onClick={() => this.setState({ currentStep: 3 })} className={currentStep == 3 ? 'active' : ''} style={{ width: '25%' }}><a className='step-blk' data-toggle="tab">Step 3 </a></li>
                                            <li onClick={() => this.setState({ currentStep: 4 })} className={currentStep == 4 ? 'active' : ''} style={{ width: '25%' }}><a className='step-blk' data-toggle="tab">Finished </a></li>
                                        </ul>

                                        <div className="tab-content">
                                            {currentStep == 1 && <div className="tab-pane active" id="step1">
                                                <div className="row p-b-15  ">
                                                    <h4 className="info-text">{` Let's start with the basic information (with validation)`}</h4>
                                                    <div className="col-sm-4 col-sm-offset-1">
                                                        <div className="picture-container">
                                                            <div className="picture">
                                                                <NextImage width='220px' height='230px' src={image.length ? image : defaulProperty} className="picture-src" id="wizardPicturePreview" />
                                                                {/* <img src="assets/img/default-property.jpg" className="picture-src" id="wizardPicturePreview" title="" /> */}
                                                                <input type="file" id="wizard-picture" onChange={this.handleProfilePicUpload} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <label>Property name <small>(required)</small></label>
                                                            <input name="propertyName" type="text" value={propertyName} onChange={this.handleInputChange} className="form-control" placeholder="Super villa ..." />
                                                        </div>

                                                        <div className="form-group">
                                                            <label>Property price <small>(required)</small></label>
                                                            <input name="propertyPrice" type="text" value={propertyPrice} onChange={this.handleInputChange} className="form-control" placeholder="3330000" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Phone <small>(empty if you wanna use default phone number)</small></label>
                                                            <input name="phone" type="text" value={phone} onChange={this.handleInputChange} className="form-control" placeholder="+1 473 843 7436" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>}


                                            {/* {currentStep == 2 && <div className="tab-pane active" id="step2"> */}
                                            {<div className={currentStep == 2 ? "tab-pane active" : "tab-pane"} id="step2">
                                                <h4 className="info-text"> How much your Property is Beautiful ? </h4>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="col-sm-12">
                                                            <div className="form-group">
                                                                <label>Property Description :</label>
                                                                <textarea value={propertyDescription} onChange={this.handleInputChange} name="propertyDescription" className="form-control" ></textarea>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-12">
                                                        <div className="col-sm-3">
                                                            <div className="form-group">
                                                                <label>Property State :</label>
                                                                <select onChange={this.handleInputChange} name='propertyState' value={propertyState} id="lunchBegins" className="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select your city">
                                                                    <option value='seoul' >Seoul</option>
                                                                    <option value='paris' >Paris</option>
                                                                    <option value='casablanca' >Casablanca</option>
                                                                    <option value='tokyo' >Tokyo</option>
                                                                    <option value='marraekch' >Marraekch</option>
                                                                    <option value='kyoto' >kyoto , shibua</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3">
                                                            <div className="form-group">
                                                                <label>Property City :</label>
                                                                <select id="lunchBegins" name="propertyCity" value={propertyCity} onChange={this.handleInputChange} className="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select your city">
                                                                    <option value="new-york" >New york, CA</option>
                                                                    <option value="paris" >Paris</option>
                                                                    <option value='casablanca' >Casablanca</option>
                                                                    <option value='tokyo' >Tokyo</option>
                                                                    <option value='marraekch' >Marraekch</option>
                                                                    <option value='kyoto' >kyoto , shibua</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3">
                                                            <div className="form-group">
                                                                <label>Property Status  :</label>
                                                                <select id="basic" name='propertyStatus' value={propertyStatus} onChange={this.handleInputChange} className="selectpicker show-tick form-control">
                                                                    <option> -Status- </option>
                                                                    <option value='Rent' >Rent </option>
                                                                    <option value='Buy' >Buy</option>
                                                                    <option value='used' >Used</option>

                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 padding-top-15">
                                                        <div className="col-sm-4">
                                                            <div className="form-group">
                                                                <label htmlFor="property-geo">Min bed :</label>
                                                                <input type="text" className="span2" data-slider-min="0"
                                                                    data-slider-max="600" data-slider-step="5"
                                                                    data-slider-value="[250,450]" id="min-bed" onChange={this.handleSlider} /><br />
                                                                <b className="pull-left color">1</b>
                                                                <b className="pull-right color">120</b>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-4">

                                                            <div className="form-group">
                                                                <label htmlFor="price-range">Min baths :</label>
                                                                <input type="text" className="span2" data-slider-min="0"
                                                                    data-slider-max="600" data-slider-step="5"
                                                                    data-slider-value="[250,450]" id="min-baths" /><br />
                                                                <b className="pull-left color">1</b>
                                                                <b className="pull-right color">120</b>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-4">

                                                            <div className="form-group">
                                                                <label htmlFor="property-geo">Property geo (m2) :</label>
                                                                <input type="text" className="span2" data-slider-min="0"
                                                                    data-slider-max="600" data-slider-step="5"
                                                                    data-slider-value="[50,450]" id="property-geo" /><br />
                                                                <b className="pull-left color">40m</b>
                                                                <b className="pull-right color">12000m</b>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 padding-top-15">
                                                        <div className="col-sm-3">
                                                            <div className="form-group">
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" onChange={this.handleCheckbox} value="Swimming Pool" /> Swimming Pool
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3">
                                                            <div className="form-group">
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" onChange={this.handleCheckbox} value="2 Stories" /> 2 Stories
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3">
                                                            <div className="form-group">
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" onChange={this.handleCheckbox} value="Emergency Exit" /> Emergency Exit
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3">
                                                            <div className="form-group">
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" onChange={this.handleCheckbox} value="Emergency Exit" /> Fire Place
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 padding-bottom-15">
                                                        <div className="col-sm-3">
                                                            <div className="form-group">
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" onChange={this.handleCheckbox} value="Laundry Room" /> Laundry Room
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3">
                                                            <div className="form-group">
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" onChange={this.handleCheckbox} value="Jog Path" /> Jog Path
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3">
                                                            <div className="form-group">
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" onChange={this.handleCheckbox} value="Ceilings" /> Ceilings
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3">
                                                            <div className="form-group">
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" onChange={this.handleCheckbox} value="Dual Sinks" /> Dual Sinks
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br />
                                                </div>
                                            </div>}

                                            {currentStep == 3 && <div className="tab-pane active" id="step3">
                                                <h4 className="info-text">Give us somme images and videos ? </h4>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <label htmlFor="property-images">Choose Images :</label>
                                                            <input className="form-control" type="file" id="property-images" multiple onChange={this.handleFileUpload} />
                                                            <p className="help-block">Select multipel images for your property .</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <label htmlFor="property-video">Property video :</label>
                                                            <input className="form-control" name='propertyVideoLink1' value={propertyVideoLink1} onChange={this.handleInputChange} placeholder="http://www.youtube.com, http://vimeo.com" type="text" />
                                                        </div>

                                                        <div className="form-group">
                                                            <input className="form-control" name='propertyVideoLink2' value={propertyVideoLink2} onChange={this.handleInputChange} placeholder="http://www.youtube.com, http://vimeo.com" type="text" />
                                                        </div>

                                                        <div className="form-group">
                                                            <input className="form-control" name='propertyVideoLink3' value={propertyVideoLink3} onChange={this.handleInputChange} placeholder="http://www.youtube.com, http://vimeo.com" type="text" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>}


                                            {currentStep == 4 && <div className="tab-pane active" id="step4">
                                                <h4 className="info-text"> Finished and submit </h4>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="">
                                                            <p>
                                                                <label><strong>Terms and Conditions</strong></label>
                                                                By accessing or using  GARO ESTATE services, such as
                                                                posting your property advertisement with your personal
                                                                information on our website you agree to the
                                                                collection, use and disclosure of your personal information
                                                                in the legal proper manner
                                                            </p>

                                                            <div className="checkbox">
                                                                <label>
                                                                    <input type="checkbox" name='acceptTerms' checked={acceptTerms ? true : false} onChange={this.handleCheckbox} /> <strong>Accept termes and conditions.</strong>
                                                                </label>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>}

                                        </div>

                                        <div className="wizard-footer">
                                            <div className="pull-right">
                                                {currentStep != 4 && <input onClick={() => this.handleNextAndPrevBtn('next')} type='button' className='btn btn-next btn-primary' name='next' value='Next' />}
                                                {currentStep == 4 && <input type='submit' className='btn btn-finish btn-primary' style={{display:'block'}} name='finish' value='Finish' />}
                                            </div>

                                            <div className="pull-left">
                                                {currentStep != 1 && <input onClick={() => this.handleNextAndPrevBtn('prev')} type='button' className='btn btn-previous btn-default' name='previous' value='Previous' />}
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default SubmitProperty;