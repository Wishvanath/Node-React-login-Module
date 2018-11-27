    import React, { Component } from 'react'
    import './dashboard.css';
    import $ from "jquery";
    import AuthService from '../AuthService/AuthService';
    import withAuth from '../AuthService/withAuth';
    const Auth = new AuthService();
    class Dashboard extends Component {
        constructor(props){
            super(props);
             this.state = {      fieldVal: "Parent Values"  }
            }
        
        componentDidMount(){
            $(document).ready(function () {
                $('#sidebarCollapse').on('click', function () {
                    $('#sidebar').toggleClass('active');
                });
            });
        }
        handleLogout(){
            Auth.logout()
        //    this.props.history.replace('/home');
           window.location.href="http://localhost:3000/home";
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
                                    <button  onClick={this.handleLogout.bind(this)}>Logout</button>
                                    {/* <a href="#df">Logout &nbsp;<i className="fas fa-sign-out-alt ad_logout"></i></a> */}
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
                                <li className="dash_active">
                                    <a href="http://localhost:3000/">
                                        <i className="fas fa-home fa_home"></i>
                                        <span className="txt_menu_hide">Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://localhost:3000/pending-question">
                                        <i className="far fa-question-circle fa_pending"></i>
                                        <span className="txt_menu_hide">Pending Questions</span>
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
                                <li>
                                    <a href="http://localhost:3000/my-account">
                                        <i className="fas fa-cog fa_setting"></i>
                                        <span  className="txt_menu_hide"> My Account</span>
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
                                <h1>Dashboard</h1>
                        </div>
                        {/* end of dashboard content section */}
                </div>
                {/* end of dashboard wrapper class */}

                

                </div>
            )
        }
    }
    export default withAuth(Dashboard);