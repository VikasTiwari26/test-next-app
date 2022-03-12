import React, { Component } from 'react';
import { getApiData } from '../api/api';
import ContactBanner from '../components/Banners/ContactBanner';
import Layout from '../components/Layout';
import AxiosRequest from '../providers/axios';

const axios = new AxiosRequest().getClient()
class Contact extends Component {
    state = {
        firstname: "",
        lastname: "",
        email: "",
        subject: "",
        message: "",
        loading: false,
        msgType: "",
        msg: ""
    }

    validateSubmit = () => {
        const { emailErr, firstname, lastname, email, subject, message, loading } = this.state
        if (loading) return false
        if (emailErr) return false
        return firstname.length > 1 && email.length > 1 && subject.length > 5 && message.length > 10
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

    onSubmit = async (e) => {
        e.preventDefault()
        this.setState({ loading: true, msgType: '', msg: '' })
        const { firstname, lastname, email, subject, message } = this.state
        let { url, body } = getApiData('contactUs')
        body.query = message
        body.email = email
        body.uname = `${firstname} ${lastname}`
        try {
            const response = await axios.post(url, body)
            if (response.status == 200) {
                this.setState({ msgType: 'success', msg: response.data.message })
            } else {
                this.setState({ msgType: 'error', msg: response.data.message })
            }
        } catch (err) {
            this.setState({ msgType: 'error', msg: 'Something went wrong!' })
        } finally {
            this.setState({ loading: false })
        }
    }


    render() {
        const { emailErr, firstname, lastname, email, subject, message, msgType, msg } = this.state
        return (
            <Layout>
                <ContactBanner />
                <div className="content-area recent-property padding-top-40" style={{ backgroundColor: '#FFF' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <div className="" id="contact1">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <h3><i className="fa fa-map-marker"></i> Address</h3>
                                            <p>13/25 shibuia
                                                <br />Tokyo
                                                <br />45Y 73J
                                                <br />
                                                <strong>Japan</strong>
                                            </p>
                                        </div>
                                        <div className="col-sm-4">
                                            <h3><i className="fa fa-phone"></i> Call center</h3>
                                            <p className="text-muted">This number is toll free if calling from
                                                Great Britain otherwise we advise you to use the electronic
                                                form of communication.</p>
                                            <p><strong>+33 555 444 333</strong></p>
                                        </div>
                                        <div className="col-sm-4">
                                            <h3><i className="fa fa-envelope"></i> Electronic support</h3>
                                            <p className="text-muted">Please feel free to write an email to us or to use our electronic ticketing system.</p>
                                            <ul>
                                                <li><strong><a href="mailto:">info@company.com</a></strong>   </li>
                                                <li><strong><a href="#">Ticketio</a></strong> - our ticketing support platform</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr />
                                    {/* <div id="map"></div> */}
                                    <hr />
                                    <h2>Contact form</h2>
                                    <form onSubmit={this.onSubmit} >
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="firstname">Firstname</label>
                                                    <input type="text" name='firstname' value={firstname} onChange={this.handleInputChange} className="form-control" id="firstname" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="lastname">Lastname</label>
                                                    <input type="text" name='lastname' value={lastname} onChange={this.handleInputChange} className="form-control" id="lastname" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="email">Email</label>
                                                    <input type="text" name='email' value={email} onChange={this.handleInputChange} onBlur={this.validateEmail} className="form-control" id="email" />
                                                    {emailErr && <small style={{ color: 'red' }} >Please enter a valid email</small>}
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="subject">Subject</label>
                                                    <input type="text" name='subject' value={subject} onChange={this.handleInputChange} className="form-control" id="subject" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="message">Message</label>
                                                    <textarea id="message" name='message' value={message} onChange={this.handleInputChange} className="form-control"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 text-center">
                                                <button disabled={!this.validateSubmit()} type="submit" className="btn btn-primary"><i className="fa fa-envelope-o"></i> Send message</button>
                                            </div>
                                        </div>
                                        {msgType.length>0 && <small className={msgType == 'success' ? 'success-msg' : 'err-msg'} >{msg}</small>}
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

export default Contact;