import React, { useState } from 'react';
import dynamic from "next/dynamic"
import { useRouter } from 'next/router'
const NextImage = dynamic(() => import("next/image"))
import logoImage from "../public/assets/img/logo.png"
import { getDataFromLocalStorage, removeDataFromLocalStorage } from '../utils/localAccess';

const Header = (props) => {
    const router = useRouter()
    const [currentPage,setCurrentPage] = useState(router.route)
    const gotoPage = (path) => {
        router.push(`/${path}`)
        setCurrentPage(path)
    }

    const getCurrentActiveClass = (path) => {
        if(path==currentPage){
            return 'active'
        }else{
            return ''
        }
    }

    const isUserLoggedIn = () => {
        if (typeof window !== 'undefined') {
            // Perform localStorage action
            return localStorage.getItem('customerId')
          }else{
              setTimeout(()=>{

                  return localStorage.getItem('customerId')
              },300)
          }
        }

       const onLogout =()=>{
            removeDataFromLocalStorage('customerId')
            router.push('/login')
        }

    return (
        <>
            <div className="header-connect">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-8  col-xs-12">
                            <div className="header-half header-call">
                                <p>
                                    <span><i className="pe-7s-call"></i> +1 234 567 7890</span>
                                    <span><i className="pe-7s-mail"></i> your@company.com</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2 col-md-offset-5  col-sm-3 col-sm-offset-1  col-xs-12">
                            <div className="header-half header-social">
                                <ul className="list-inline">
                                    <li><a ><i className="fa fa-facebook"></i></a></li>
                                    <li><a ><i className="fa fa-twitter"></i></a></li>
                                    <li><a ><i className="fa fa-vine"></i></a></li>
                                    <li><a ><i className="fa fa-linkedin"></i></a></li>
                                    <li><a ><i className="fa fa-dribbble"></i></a></li>
                                    <li><a ><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-default ">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" onClick={() => gotoPage('/')}>
                            <NextImage src={logoImage} />
                            {/* <img src="../../assets/img/logo.png" alt=""/> */}
                        </a>
                    </div>

                    <div className="collapse navbar-collapse yamm" id="navigation">
                        <div className="button navbar-right">
                           {!isUserLoggedIn()&& <button className="navbar-btn nav-button wow bounceInRight login" data-wow-delay="0.4s" onClick={() => gotoPage('login')} >
                                Login
                            </button>}
                            <button className="navbar-btn nav-button wow fadeInRight" data-wow-delay="0.5s">Submit</button>
                            {
                            isUserLoggedIn()&&<button onClick={onLogout}  className="navbar-btn nav-button wow bounceInRight login" data-wow-delay="0.5s">
                                Logout
                                </button>
                            }
                        </div>
                        <ul className="main-nav nav navbar-nav navbar-right">
                            <li onClick={() => gotoPage('/')} className="dropdown ymm-sw " data-wow-delay="0.1s">
                                <a className={`${getCurrentActiveClass('/')}`} data-toggle="dropdown" data-hover="dropdown" data-delay="200">Home {/*<b className="caret"></b>*/}</a>
                                {/* <ul className="dropdown-menu navbar-nav">
                                <li>
                                    <a >Home Style 2</a>
                                </li>
                                <li>
                                    <a >Home Style 3</a>
                                </li>
                                <li>
                                    <a >Home Style 4</a>
                                </li>
                                <li>
                                    <a >Home Style 5</a>
                                </li>

                            </ul> */}
                            </li>

                            <li className="wow fadeInDown" data-wow-delay="0.1s"><a className="" >Properties</a></li>
                            <li className="wow fadeInDown" data-wow-delay="0.1s"><a className="" >Property</a></li>
                            {isUserLoggedIn()&&<li onClick={() => gotoPage('my-profile')} className="wow fadeInDown" data-wow-delay="0.1s"><a className={`${getCurrentActiveClass('my-profile')}`} >My Profile</a></li>}
                            {/* <li className="dropdown yamm-fw" data-wow-delay="0.1s">
                            <a  className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="200">Template <b className="caret"></b></a>
                            <ul className="dropdown-menu">
                                <li>
                                    <div className="yamm-content">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h5>Home pages</h5>
                                                <ul>
                                                    <li>
                                                        <a >Home Style 1</a>
                                                    </li>
                                                    <li>
                                                        <a >Home Style 2</a>
                                                    </li>
                                                    <li>
                                                        <a >Home Style 3</a>
                                                    </li>
                                                    <li>
                                                        <a >Home Style 4</a>
                                                    </li>
                                                    <li>
                                                        <a >Home Style 5</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-3">
                                                <h5>Pages and blog</h5>
                                                <ul>
                                                    <li><a >Blog listing</a>  </li>
                                                    <li><a >Blog Post (full)</a>  </li>
                                                    <li><a >Blog Post (Right)</a>  </li>
                                                    <li><a >Blog Post (left)</a>  </li>
                                                    <li><a >Contact style (1)</a> </li>
                                                    <li><a >Contact style (2)</a> </li>
                                                    <li><a >Contact style (3)</a> </li>
                                                    <li><a >FAQ page</a> </li> 
                                                    <li><a >404 page</a>  </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-3">
                                                <h5>Property</h5>
                                                <ul>
                                                    <li><a >Property pages style (1)</a> </li>
                                                    <li><a >Property pages style (2)</a> </li>
                                                    <li><a >Property pages style (3)</a> </li>
                                                </ul>

                                                <h5>Properties list</h5>
                                                <ul>
                                                    <li><a >Properties list style (1)</a> </li> 
                                                    <li><a >Properties list style (2)</a> </li> 
                                                    <li><a >Properties list style (3)</a> </li> 
                                                </ul>                                               
                                            </div>
                                            <div className="col-sm-3">
                                                <h5>Property process</h5>
                                                <ul> 
                                                    <li><a >Submit - step 1</a> </li>
                                                    <li><a >Submit - step 2</a> </li>
                                                    <li><a >Submit - step 3</a> </li> 
                                                </ul>
                                                <h5>User account</h5>
                                                <ul>
                                                    <li><a >Register / login</a>   </li>
                                                    <li><a >Your properties</a>  </li>
                                                    <li><a >Submit property</a>  </li>
                                                    <li><a >Change password</a> </li>
                                                    <li><a >Your profile</a>  </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li> */}

                            <li onClick={() => gotoPage('contact')} className={`wow fadeInDown`} data-wow-delay="0.4s"><a className={getCurrentActiveClass('/contact')}>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;