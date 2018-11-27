import React, { Component } from 'react'
import './myaccount.css';
import $ from "jquery";
export default class MyAccount extends Component {
    componentDidMount(){
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });
    }
    render() {
        return (
            <div>
                {/* dashboard navbar section */}

                <div className="row advisory_dash">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 dashboard_logo">
                        <img src="image/nav_logo.png" alt="BrandImage"/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 dash_nav_right">
                        <div className="dashnav">
                            <div className="dashnav-right">
                                
                                <a href="#bell" className="hidden-xs">
                                    <i className="fas fa-bell ad_bell"></i>
                                    <span className="badge nav_notification">8</span> 
                                </a>
                                <a href="#email" className="hidden-xs">
                                    <i className="fas fa-envelope ad_email"></i>
                                    <span className="badge nav_notification">8</span>
                                </a>
                                <a href="#logout">Logout &nbsp;<i className="fas fa-sign-out-alt ad_logout"></i></a>
                            </div>
                        </div>
                    </div>
                </div> 
                {/* end of dashboard navbar section */}


                <div className=" wrapper">  
                    {/* sidebar section  */}
                    <nav id="sidebar">

                        <div className="row tog_icon">
                            <i className="fas fa-align-left fa_toggle" id="sidebarCollapse"></i>
                        </div>
                        <div className="sidebar-header">
                            <ul className="list-unstyled components">
                                <li>
                                    <span>
                                    <img src="image\advisory_avtar.png" className="adv_avtar" alt="AvtarImage"/>
                                    <h3 className="welcome_txt">Welcome Mr. Advisory</h3>
                                    <strong>AD</strong>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <ul className="list-unstyled components">
                            <li>
                                <a href="http://localhost:3000/">
                                    <i className="fas fa-home fa_home"></i>
                                    <span className="txt_menu_hide">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="http://localhost:3000/pending-question">
                                    <i className="far fa-question-circle fa_pending"></i>
                                    <span className="txt_menu_hide"> Pending Questions</span>
                                    <span className="badge side_notification">4</span>
                                </a>
                            </li>
                            <li>
                                <a href="http://localhost:3000/answered-question">
                                    <i className="far fa-comment fa_answered"></i>
                                    <span className="txt_menu_hide">Answered Questions</span>
                                    <span className="badge side_notification">4</span>
                                </a>
                            </li>
                            <li className="dash_active">
                                <a href="http://localhost:3000/my-account">
                                    <i className="fas fa-cog fa_setting"></i>
                                    <span className="txt_menu_hide">My Account</span>
                                </a>
                            </li>
                            {/* <li>
                                <a href="sd">
                                    <i class="fas fa-paper-plane"></i>
                                    FAQ
                                </a>
                            </li> */}
                        </ul>
                    </nav>
                    {/* end of sider bar section */}
                    {/* dashboard content section */}
                    <div id="content">
                       <div className="row account_setting_wrap">
                            {/* profile setting section */}
                            <div className="row pro_set_heading">
                                <i className="fas fa-user"></i>&nbsp;&nbsp;
                                <span>Profile Setting</span>
                            </div>
                            <div className="row profile_form">
                                <form name="profileForm">
                                    <div className="row">
                                        <div className="col-sm-3 col-md-3 col-lg-3">
                                            <label htmlFor="user_name">Name</label>
                                            <input type="text" className="form-control txt_pf_input" placeholder="Wishvanath Anand" />      
                                        </div>
                                        <div className="col-sm-3 col-md-3 col-lg-3">
                                            <label htmlFor="user_email">Email Address</label>
                                            <input type="text" className="form-control txt_pf_input" placeholder="anandwishvanath@gmail.com"/>
                                        </div>
                                        <div className="col-sm-3 col-md-3 col-lg-3">
                                            <label htmlFor="user_contact">Contact Number</label>
                                            <input type="text" className="form-control txt_pf_input" placeholder="890xxxxx57"/>  
                                        </div>
                                        <div className="col-sm-3 col-md-3 col-lg-3">
                                            <label htmlFor="user_company">Company Name</label>
                                            <input type="text" className="form-control txt_pf_input" placeholder="Sky Map Global India Pvt.Ltd."/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-3 col-md-3 col-lg-3">
                                            <label htmlFor="user_state">State</label>
                                            <input type="text" className="form-control txt_pf_input" placeholder="Wishvanath Anand" />      
                                        </div>
                                        <div className="col-sm-3 col-md-3 col-lg-3">
                                            <label htmlFor="user_district">District</label>
                                            <input type="text" className="form-control txt_pf_input" placeholder="anandwishvanath@gmail.com"/>
                                        </div>
                                        <div className="col-sm-3 col-md-3 col-lg-3">
                                            <label htmlFor="user_contact">Contact Number</label>
                                            <input type="text" className="form-control txt_pf_input" placeholder="890xxxxx57"/>  
                                        </div>
                                        <div className="col-sm-3 col-md-3 col-lg-3">
                                            <label htmlFor="user_company">Company Name</label>
                                            <input type="text" className="form-control txt_pf_input" placeholder="Sky Map Global India Pvt.Ltd."/>
                                        </div>
                                    </div>
                                    <div className="row btn_pf_section">
                                        <button className="btn btn-warning btn_pf_save">
                                            <i className="fas fa-check"></i>&nbsp;
                                            Save
                                        </button>
                                    </div>

                                </form>
                            </div>
                            {/* end of profile setting section */}

                            {/* change password section */}
                            <div className="row password_change_heading">
                                <i className="fas fa-lock"></i>&nbsp;&nbsp;
                                <span>Change Password</span>
                            </div>
                            <div className="row change_pass_form">
                                <form name="changePasswordForm">
                                    <div className="col-sm-3">
                                        <label htmlFor="user_old_password">Old Password</label>
                                        <input type="text" className="form-control txt_pf_input" placeholder="########"/>
                                    </div>
                                    <div className="col-sm-3">
                                        <label htmlFor="user_new_password">New Password</label>
                                        <input type="text" className="form-control txt_pf_input" placeholder="New Password"/>
                                    </div>
                                    <div className="col-sm-3">
                                        <label htmlFor="user_confirm_password">Confirm Password</label>
                                        <input type="text" className="form-control txt_pf_input" placeholder="Confirm Password"/>
                                    </div>
                                    <div className="col-sm-3">
                                        <button className="btn btn-warning btn_pas_change">
                                            <i className="fas fa-sync"></i>&nbsp;
                                            Reset
                                        </button>
                                    </div>
                                </form>
                            </div>
                            {/* end of change password section */}
                       </div>
                    </div>
                    {/* end of dashboard content section */}
            </div>
            {/* end of dashboard wrapper class */}

              

            </div>
        )
    }
}
