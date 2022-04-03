import React, { Component } from 'react';
import { getApiData } from '../api/api';
import MyProfileBanner from '../components/Banners/MyProfileBanner';
import Layout from '../components/Layout';
import AxiosRequest from '../providers/axios';
import dynamic from "next/dynamic"
import { avatar } from '../utils/images';
const NextImage = dynamic(() => import("next/image"))

const axios = new AxiosRequest().getClient();
class MyProfile extends Component {
  state = {
    bannerName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    facebook: "",
    twitter: "",
    website: "",
    publicEmail: "",
    phone: "",
    fax: "",
    loading: false,
    image: "",
    pan: ""
  };

  componentDidMount() {
    this.getUserData();
  }

  validateInput = (e) => {
    let pattern = name == "email"?/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/:/^[a-z]{5}[0-9]{4}[a-z]{1,2}$/gi
    const { name, value } = e.target;
    if (pattern.test(value)) {
      this.setState({ [`${name}Err`]: false });
    } else {
      this.setState({ [`${name}Err`]: true });
    }
  };


  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, [`${name}Err`]: false });
  };

  getUserData = async () => {
    this.setState({ loading: true });
    let customerId = localStorage.getItem("customerId");
    let { url } = getApiData("getUser");
    try {
      //  const response = await axios.get(`${url}${userId}`)
      const response = await axios.get(`${url}${customerId}`, {
        data: null,
      });
      if (response.status == 200) {
        const { fname, lname, fb, twitter, email, image, mobile } =
          response.data;
        this.setState({
          firstName: fname,
          lastName: lname,
          phone: mobile,
          facebook: fb,
          email,
          image,
          twitter,
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ loading: false });
    }
  };

  validateSubmit = () => {
    const {
      firstName,
      lastName,
      password,
      confirmPassword,
      email,
      emailErr,
      loading,
    } = this.state;
    if (loading) return false;
    if (emailErr) return false;
    if (password !== confirmPassword) return false;
    return firstName.length > 2 && lastName.length > 2 && email.length > 3;
  };

  handleImageChange = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      //   console.log('RESULT', reader.result)
      this.setState({ image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  onSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const {
      firstName,
      lastName,
      password,
      confirmPassword,
      email,
      facebook,
      twitter,
      website,
      phone,
      image,
    } = this.state;
    let { url, body } = getApiData("updateProfile");
    let userId = localStorage.getItem("customerId");
    body.customerId = userId;
    body.fname = firstName;
    body.lname = lastName;
    // body.email = email
    body.mobile = phone;
    body.fb = facebook;
    body.twitter = twitter;
    body.image = image;
    try {
      //  const response = await axios.get(`${url}${userId}`)
      const response = await axios.post(url, body);
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const {
      firstName,
      lastName,
      password,
      confirmPassword,
      email,
      emailErr,
      facebook,
      twitter,
      website,
      phone,
      fax,
      loading,
      bannerName,
      image,
      pan,
      panErr
    } = this.state;
    return (
      <Layout>
        <MyProfileBanner name={`${firstName} ${lastName ? lastName : ""}`} />
        <div
          className="content-area user-profiel"
          style={{ backgroundColor: "#FCFCFC" }}
        >
          &nbsp;
          <div className="container">
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1 profiel-container">
                <form onSubmit={this.onSubmit}>
                  <div className="profiel-header">
                    <h3>
                      <b>BUILD</b> YOUR PROFILE <br />
                      <small>
                        This information will let us know more about you.
                      </small>
                    </h3>
                    <hr />
                  </div>

                  <div className="clear">
                    <div className="col-sm-3 col-sm-offset-1">
                      <div className="picture-container">
                        <div className="picture">
                          <NextImage
                            width="220px"
                            height="230px"
                            src={image.length ? image : avatar}
                          />
                          {/* <img src={image.length?image:"assets/img/avatar.png"} className="picture-src" id="wizardPicturePreview" title="" /> */}
                          <input
                            type="file"
                            id="wizard-picture"
                            onChange={this.handleImageChange}
                          />
                        </div>
                        <h6>Choose Picture</h6>
                      </div>
                    </div>

                    <div className="col-sm-3 padding-top-25">
                      <div className="form-group">
                        <label>
                          First Name <small>(required)</small>
                        </label>
                        <input
                          name="firstName"
                          value={firstName}
                          onChange={this.handleInputChange}
                          type="text"
                          className="form-control"
                          placeholder="Andrew..."
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          Last Name <small>(required)</small>
                        </label>
                        <input
                          name="lastName"
                          value={lastName}
                          onChange={this.handleInputChange}
                          type="text"
                          className="form-control"
                          placeholder="Smith..."
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          Email <small>(required)</small>
                        </label>
                        <input
                          name="email"
                          value={email}
                          onChange={this.handleInputChange}
                          onBlur={this.validateInput}
                          type="email"
                          className="form-control"
                          placeholder="andrew@email@email.com.com"
                          disabled
                        />
                        {emailErr && (
                          <small className="err-msg">
                            Please enter a valid email
                          </small>
                        )}
                      </div>
                    </div>
                    <div className="col-sm-3 padding-top-25">
                      <div className="form-group">
                        <label>
                          Phone
                        </label>
                        <input
                          name="phone"
                          value={phone}
                          onChange={this.handleInputChange}
                          type="tel"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          PAN
                        </label>
                        <input
                          name="pan"
                          value={pan}
                          onChange={this.handleInputChange}
                          onBlur={this.validateInput}
                          type="text"
                          className="form-control"
                          placeholder="ABCDE1234F"
                        />
                        {panErr && (
                          <small className="err-msg">
                            Please enter a valid PAN ( eg: ABCDE1234F )
                          </small>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-5 col-sm-offset-1">
                    <br />
                    <input
                      type="submit"
                      className="btn btn-finish btn-primary"
                      name="finish"
                      value="Finish"
                      disabled={!this.validateSubmit()}
                    />
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
