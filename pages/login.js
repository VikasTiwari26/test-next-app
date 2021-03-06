import React, { Component } from "react";
import { withRouter } from "next/router";
import { getApiData } from "../api/api";
import LoginBanner from "../components/Banners/LoginBanner";
import Layout from "../components/Layout";
import AxiosRequest from "../providers/axios";
import { setDataInLocalStorage } from "../utils/localAccess";

const axios = new AxiosRequest().getClient();
class Login extends Component {
  state = {
    name: "",
    newRegEmail: "",
    newRegPassword: "",
    phone: "",
    loginEmail: "",
    loginPassword: "",
    msgType: "",
    msg: "",
    showLoginMsg: false,
    showRegisterMsg: false,
    loading: false,
    showOtpScreen: false,
    otp:'',
  };

  componentDidMount() { 
    localStorage.clear()
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  validateRegisterButton = () => {
    const {
      name,
      newRegEmail,
      newRegPassword,
      newRegEmailErr,
      loading,
      phone,
    } = this.state;
    if (loading) return false;
    if (newRegEmailErr) return false;
    return (
      name.length > 2 &&
      newRegEmail.length > 3 &&
      phone.length == 10
    );
  };
  validateLoginButton = () => {
    const { loginEmail, loginPassword, loginEmailErr, loading } = this.state;
    if (loading) return false;
    if (loginEmailErr) return false;
    return loginEmail.length > 3;
  };

  validateEmail = (e) => {
    let pattern =
      /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    const { name, value } = e.target;
    if (pattern.test(value)) {
      this.setState({ [`${name}Err`]: false });
    } else {
      this.setState({ [`${name}Err`]: true });
    }
  };

  login = async (e) => {
    e.preventDefault();
    this.setState({
      msgType: "",
      msg: "",
      showLoginMsg: false,
      loading: true,
      showRegisterMsg: false,
    });
    let { url, body } = getApiData("login");
    const { loginEmail, loginPassword, loginEmailErr } = this.state;
    body.uname = loginEmail;
    body.pswd = '12345';
    try {
      const response = await axios.post(url, body);
      if (response.status == 200) {
        this.setState({
          msgType: "success",
          msg: response.data.message,
          showLoginMsg: true,
          showOtpScreen:true
        });
      } else {
        this.setState({
          msgType: "error",
          msg: response.data.message,
          showLoginMsg: true,
        });
      }
    } catch (err) {
      console.log(err);
      this.setState({
        msgType: "error",
        msg: "Incorrect email or password !",
        showLoginMsg: true,
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  register = async (e) => {
    e.preventDefault();
    this.setState({
      msgType: "",
      msg: "",
      showRegisterMsg: false,
      loading: true,
      showLoginMsg: false,
    });
    let { url, body } = getApiData("signUp");
    const { name, newRegEmail, newRegPassword, newRegEmailErr, phone } =
      this.state;
    let firstName = "";
    let lastName = "";
    if (name.split(" ").length) {
      firstName = name.split(" ")[0];
      lastName = name.split(" ")[1];
    } else {
      firstName = name;
    }
    body.fname = firstName;
    body.lname = lastName;
    body.email = newRegEmail;
    body.pswd = '12345';
    body.pswd1 = '12345';
    body.mobile = phone;

    try {
      const response = await axios.post(url, body);
      if (response.status == 200) {
        this.setState({
          msgType: "success",
          msg: response.data.message,
          showOtpScreen: true,
        });
      } else {
        this.setState({
          msgType: "error",
          msg: response.data.message,
          showRegisterMsg: true,
        });
      }
    } catch (err) {
      console.log(err);
      this.setState({
        msgType: "error",
        msg: "Something went wrong!",
        showRegisterMsg: true,
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  submitOtp = async(e) => {
    // this.setState({loading:true})
    e.preventDefault()
    let {url,body} = getApiData('verifyOtp')
    const {loginEmail,otp} = this.state
    body.uname = loginEmail
    body.otp = otp
    // console.log("URL & BODY",body)
    // console.log("EMAIL",loginEmail)
    try{
      const response = await axios.post(url,body)
      if(response.status==200){
        setDataInLocalStorage("customerId", response.data.customerId);
        this.props.router.push("/");
      }else{
        this.setState({
          msgType: "error",
          msg: "Something went wrong!",
          otpErr: true,
        });
      }
    }catch(err){
      this.setState({
        msgType: "error",
        msg: "Something went wrong!",
        otpErr: true,
      });
    }finally{
      this.setState({loading:false})
    }
  }

  render() {
    const {
      name,
      newRegEmail,
      newRegPassword,
      loginEmail,
      loginPassword,
      newRegEmailErr,
      loginEmailErr,
      msgType,
      msg,
      showLoginMsg,
      showRegisterMsg,
      phone,
      showOtpScreen,
      otp,
      otpErr,
      loading
    } = this.state;
    return (
      <Layout>
        <LoginBanner />
        {!showOtpScreen && <div
          className="register-area"
          style={{ backgroundColor: "rgb(249, 249, 249)" }}
        >
          <div className="container">
            <div className="col-md-6">
              <div className="box-for overflow">
                <div className="col-md-12 col-xs-12 register-blocks">
                  <h2>New account : </h2>
                  <form onSubmit={this.register}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleInputChange}
                        className="form-control"
                        id="name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        name="newRegEmail"
                        value={newRegEmail}
                        onBlur={this.validateEmail}
                        onChange={this.handleInputChange}
                        className="form-control"
                        id="email"
                      />
                      {newRegEmailErr && (
                        <small style={{ color: "red" }}>
                          Please enter a valid email
                        </small>
                      )}
                    </div>
                    <div className="form-group">
                      <label>Phone </label>
                      <input
                        name="phone"
                        value={phone}
                        onChange={this.handleInputChange}
                        type="tel"
                        className="form-control"
                        placeholder="9090909090"
                      />
                    </div>
                    {/* <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="newRegPassword"
                        value={newRegPassword}
                        onChange={this.handleInputChange}
                        className="form-control"
                        id="password"
                      />
                    </div> */}
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-default"
                        disabled={!this.validateRegisterButton()}
                      >
                        Register
                      </button>
                    </div>
                    {showRegisterMsg && (
                      <small
                        className={
                          msgType == "success" ? "success-msg" : "err-msg"
                        }
                      >
                        {msg}
                      </small>
                    )}
                  </form>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="box-for overflow">
                <div className="col-md-12 col-xs-12 login-blocks">
                  <h2>Login : </h2>
                  <form onSubmit={this.login}>
                    <div className="form-group">
                      <label htmlFor="loginEmail">Email</label>
                      <input
                        type="text"
                        name="loginEmail"
                        value={loginEmail}
                        onBlur={this.validateEmail}
                        onChange={this.handleInputChange}
                        className="form-control"
                        id="loginEmail"
                      />
                      {loginEmailErr && (
                        <small style={{ color: "red" }}>
                          Please enter a valid email
                        </small>
                      )}
                    </div>
                    {/* <div className="form-group">
                      <label htmlFor="loginPassword">Password</label>
                      <input
                        type="password"
                        name="loginPassword"
                        value={loginPassword}
                        onChange={this.handleInputChange}
                        className="form-control"
                        id="loginPassword"
                      />
                    </div> */}
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-default"
                        disabled={!this.validateLoginButton()}
                      >
                        {" "}
                        Log in
                      </button>
                    </div>
                    {showLoginMsg && (
                      <small
                        className={
                          msgType == "success" ? "success-msg" : "err-msg"
                        }
                      >
                        {msg}
                      </small>
                    )}
                  </form>
                  <br />
                  {/* 
                                    <h2>Social login :  </h2>

                                    <p>
                                        <a className="login-social" href="#"><i className="fa fa-facebook"></i>&nbsp;Facebook</a>
                                        <a className="login-social" href="#"><i className="fa fa-google-plus"></i>&nbsp;Gmail</a>
                                        <a className="login-social" href="#"><i className="fa fa-twitter"></i>&nbsp;Twitter</a>
                                    </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>}
        {
          showOtpScreen && <div
            className="register-area"
            style={{ backgroundColor: "rgb(249, 249, 249)" }}
          >
            <div className="container">
              <div className="col-md-6">
                <div className="box-for overflow">
                  <div className="col-md-12 col-xs-12 register-blocks">
                    <h2>Submit Otp</h2>
                    <form onSubmit={this.submitOtp}>
                      <div className="form-group">
                        <label htmlFor="otp">OTP</label>
                        <input
                          type="text"
                          name="otp"
                          value={otp}
                          onChange={this.handleInputChange}
                          className="form-control"
                          id="otp"
                        />
                        {otpErr && <small style={{ color: "red" }}>
                          {otpErr}
                        </small>}
                      </div>
                      <div className="text-center" >
                        <button disabled={otp.length!==4 || loading} className="btn btn-default" >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </Layout>
    );
  }
}

export async function getServerSideProps(ctx) {
  const { query, req, res } = ctx;
  return {
    props: {
      currentUrl: req.url,
    },
  };
}

export default withRouter(Login);
