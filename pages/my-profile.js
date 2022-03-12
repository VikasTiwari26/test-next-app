import React, { Component } from 'react';
import { getApiData } from '../api/api';
import MyProfileBanner from '../components/Banners/MyProfileBanner';
import Layout from '../components/Layout';
import AxiosRequest from '../providers/axios';
// import avatar from '../public/assets/img/avatar.png'
import dynamic from "next/dynamic"
const NextImage = dynamic(() => import("next/image"))

const axios = new AxiosRequest().getClient()

class MyProfile extends Component {
    state = {
        bannerName: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        facebook: '',
        twitter: '',
        website: '',
        publicEmail: '',
        phone: '',
        fax: '',
        loading: false,
        image:''
    }

    componentDidMount() {
        this.getUserData()
    }

    validateEmail = (e) => {
        let pattern = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/
        const { name, value } = e.target
        if (pattern.test(value)) {
            this.setState({ [`${name}Err`]: false })
        } else {
            this.setState({ [`${name}Err`]: true })
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    getUserData = async () => {
        this.setState({ loading: true })
        let userId = localStorage.getItem('customerId')
        let { url } = getApiData('getUser')
        try {
            //  const response = await axios.get(`${url}${userId}`)
            const response = await axios.get(`${url}1`)
            console.log(response)
        } catch (err) {
            console.log(err)
        } finally {
            this.setState({ loading: false })
        }
    }

    validateSubmit = () => {
        const { firstName, lastName, password, confirmPassword, email, emailErr, loading } = this.state
        if (loading) return false
        if (emailErr) return false
        if (password !== confirmPassword) return false
        return firstName.length > 2 && lastName.length > 2 && email.length > 3
    }

    handleImageChange = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onloadend =()=> {
        //   console.log('RESULT', reader.result)
          this.setState({image:reader.result})
        }
        reader.readAsDataURL(file);
    }

    onSubmit = async (e) => {
        e.preventDefault()
        this.setState({ loading: true })
        const { firstName, lastName, password, confirmPassword, email, facebook, twitter, website, phone, fax, publicEmail,image } = this.state
        let { url, body } = getApiData('updateProfile')
        let userId = localStorage.getItem('customerId')
        body.customerId = userId
        body.fname = firstName
        body.lname = lastName
        // body.email = email
        body.mobile = phone
        body.fb = facebook
        body.twitter = twitter
        body.image = image
        try {
            //  const response = await axios.get(`${url}${userId}`)
            const response = await axios.post(url, body)
            console.log(response)
        } catch (err) {
            console.log(err)
        } finally {
            this.setState({ loading: false })
        }
    }

    render() {
        const { firstName, lastName, password, confirmPassword, email, emailErr, facebook, twitter, website, phone, fax, publicEmail, loading, bannerName, publicEmailErr,image } = this.state
        return (
            <Layout>
                <MyProfileBanner name={'Vikas Tiwari'} />
                <div className="content-area user-profiel" style={{ backgroundColor: '#FCFCFC' }}>&nbsp;
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-10 col-sm-offset-1 profiel-container">
                                <form onSubmit={this.onSubmit} >
                                    <div className="profiel-header">
                                        <h3>
                                            <b>BUILD</b> YOUR PROFILE <br />
                                            <small>This information will let us know more about you.</small>
                                        </h3>
                                        <hr />
                                    </div>

                                    <div className="clear">
                                        <div className="col-sm-3 col-sm-offset-1">
                                            <div className="picture-container">
                                                <div className="picture">
                                                    <NextImage src={image.length?image:''} />
                                                    {/* <img src={image.length?image:"assets/img/avatar.png"} className="picture-src" id="wizardPicturePreview" title="" /> */}
                                                    <input type="file" id="wizard-picture" onChange={this.handleImageChange} />
                                                </div>
                                                <h6>Choose Picture</h6>
                                            </div>
                                        </div>

                                        <div className="col-sm-3 padding-top-25">

                                            <div className="form-group">
                                                <label>First Name <small>(required)</small></label>
                                                <input name="firstName" value={firstName} onChange={this.handleInputChange} type="text" className="form-control" placeholder="Andrew..." />
                                            </div>
                                            <div className="form-group">
                                                <label>Last Name <small>(required)</small></label>
                                                <input name="lastName" value={lastName} onChange={this.handleInputChange} type="text" className="form-control" placeholder="Smith..." />
                                            </div>
                                            <div className="form-group">
                                                <label>Email <small>(required)</small></label>
                                                <input name="email" value={email} onChange={this.handleInputChange} onBlur={this.validateEmail} type="email" className="form-control" placeholder="andrew@email@email.com.com" />
                                                {emailErr && <small className='err-msg' >Please enter a valid email</small>}
                                            </div>
                                        </div>
                                        <div className="col-sm-3 padding-top-25">
                                            <div className="form-group">
                                                <label>Password <small>(required)</small></label>
                                                <input name="password" value={password} onChange={this.handleInputChange} type="password" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Confirm password : <small>(required)</small></label>
                                                <input name='confirmPassword' value={confirmPassword} onChange={this.handleInputChange} type="password" className="form-control" />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="clear">
                                        <br />
                                        <hr />
                                        <br />
                                        <div className="col-sm-5 col-sm-offset-1">
                                            <div className="form-group">
                                                <label>Facebook :</label>
                                                <input name="facebook" value={facebook} onChange={this.handleInputChange} type="text" className="form-control" placeholder="https://facebook.com/user" />
                                            </div>
                                            <div className="form-group">
                                                <label>Twitter :</label>
                                                <input name="twitter" value={twitter} onChange={this.handleInputChange} type="text" className="form-control" placeholder="https://Twitter.com/@user" />
                                            </div>
                                            <div className="form-group">
                                                <label>Website :</label>
                                                <input name="website" value={website} onChange={this.handleInputChange} type="text" className="form-control" placeholder="https://yoursite.com/" />
                                            </div>
                                        </div>

                                        <div className="col-sm-5">
                                            <div className="form-group">
                                                <label>Public email :</label>
                                                <input name="publicEmail" value={publicEmail} onBlur={this.validateEmail} onChange={this.handleInputChange} type="email" className="form-control" placeholder="p-email@rmail.com" />
                                                {publicEmailErr && <small className='err-msg' >Please enter a valid email</small>}
                                            </div>
                                            <div className="form-group">
                                                <label>Phone :</label>
                                                <input name="phone" value={phone} onChange={this.handleInputChange} type="text" className="form-control" placeholder="+1 9090909090" />
                                            </div>
                                            {/* <div className="form-group">
                                                <label>FAX :</label>
                                                <input name="fax" value={fax} onChange={this.handleInputChange} type="text" className="form-control" placeholder="+1 9090909090" />
                                            </div> */}
                                        </div>

                                    </div>

                                    <div className="col-sm-5 col-sm-offset-1">
                                        <br />
                                        <input type='submit' className='btn btn-finish btn-primary' name='finish' value='Finish' disabled={!this.validateSubmit()} />
                                    </div>
                                    <br />
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default MyProfile;