import React, { Component } from 'react'
import './pendingQuestion.css';
import $ from "jquery";
export default class PendingQuestion extends Component {
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
                            <li className="dash_active">
                                <a href="http://localhost:3000/pending-question">
                                    <i className="far fa-question-circle fa_pending"></i>
                                    <span className="txt_menu_hide">Pending Questions</span>
                                    <span className="badge side_pen_notification">4</span>
                                </a>
                            </li>
                            <li>
                                <a href="http://localhost:3000/answered-question">
                                    <i className="far fa-comment fa_answered"></i>
                                   <span className="txt_menu_hide"> Answered Questions</span>
                                    <span className="badge side_notification">4</span>
                                </a>
                            </li>
                            <li>
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
                        {/* content wrapper section */}
                        <div className="content_wrapper">

                        {/* search bar section */}
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4"></div>
                                <div className="col-lg-4 col-md-4 col-sm-4"></div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <form name="searchForm">
                                        <input type="text" placeholder="Search..." className="txt_search"/>
                                        <span>
                                            <i className="fa fa-search fa_far_search"></i>
                                        </span>
                                    </form>
                                </div>
                            </div>
                            {/* end of search bar section */}

                            {/* filter section */}
                                <div className="row filter_sec">
                                    <div className="col-sm-2">
                                        <i className="fas fa-filter fa_filter_ico"></i>&nbsp;
                                        <label htmlFor="filter" className="filter_tag">Filter</label>
                                    </div>
                                    <div className="col-sm-10">
                                        <div className="row">
                                            <form name="filterForm">
                                                <div className="col-sm-3 col-md-3 col-lg-3">
                                                    <select className="txt_user_select" id="">
                                                        <option>Select State</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-3 col-md-3 col-lg-3">
                                                    <select className="txt_user_select" id="">
                                                        <option>Select District</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-3 col-md-3 col-lg-3">
                                                    <select className="txt_user_select" id="">
                                                        <option>Select Taluka</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-3 col-md-3 col-lg-3">
                                                    <select className="txt_user_select" id="">
                                                        <option>Select Village</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                    </select>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>    
                            {/* end of filter section */}

                            {/* executive details section */}
                            <div className="row executive_heading">
                                <label htmlFor="executive_details" className="executive_head_tag">Executive Details</label>
                            </div>
                            <div className="row executive_details" id="executive_scroll">
                                <table className="table table-bordered table-responsive ex_table">
                                    <thead className="ex_table_head">
                                        <tr>
                                            <th>Farmer Id</th>
                                            <th>Farmer Name</th>
                                            <th>Crop Type</th>
                                            <th>Contact Number</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>SMP01</td>
                                            <td>Wishvanath</td>
                                            <td>Kharif</td>
                                            <td>8903526657</td>
                                            <td>
                                                <a href="http://localhost:3000/not-answered">
                                                    <i className="fas fa-exclamation-circle fa_not_verified"></i>
                                                Not Answered
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>SMP01</td>
                                            <td>Wishvanath</td>
                                            <td>Kharif</td>
                                            <td>8903526657</td>
                                            <td>
                                                <a href="http://localhost:3000/not-answered">
                                                    <i className="fas fa-exclamation-circle fa_not_verified"></i>
                                                Not Answered
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>SMP01</td>
                                            <td>Wishvanath</td>
                                            <td>Kharif</td>
                                            <td>8903526657</td>
                                            <td>
                                                <a href="http://localhost:3000/not-answered">
                                                    <i className="fas fa-exclamation-circle fa_not_verified"></i>
                                                Not Answered
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>SMP01</td>
                                            <td>Wishvanath</td>
                                            <td>Kharif</td>
                                            <td>8903526657</td>
                                            <td>
                                                <a href="http://localhost:3000/not-answered">
                                                    <i className="fas fa-exclamation-circle fa_not_verified"></i>
                                                Not Answered
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>SMP01</td>
                                            <td>Wishvanath</td>
                                            <td>Kharif</td>
                                            <td>8903526657</td>
                                            <td>
                                                <a href="http://localhost:3000/not-answered">
                                                    <i className="fas fa-exclamation-circle fa_not_verified"></i>
                                                Not Answered
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>SMP01</td>
                                            <td>Wishvanath</td>
                                            <td>Kharif</td>
                                            <td>8903526657</td>
                                            <td>
                                                <a href="http://localhost:3000/not-answered">
                                                    <i className="fas fa-exclamation-circle fa_not_verified"></i>
                                                Not Answered
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>SMP01</td>
                                            <td>Wishvanath</td>
                                            <td>Kharif</td>
                                            <td>8903526657</td>
                                            <td>
                                                <a href="http://localhost:3000/not-answered">
                                                    <i className="fas fa-exclamation-circle fa_not_verified"></i>
                                                Not Answered
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>SMP01</td>
                                            <td>Wishvanath</td>
                                            <td>Kharif</td>
                                            <td>8903526657</td>
                                            <td>
                                                <a href="http://localhost:3000/not-answered">
                                                    <i className="fas fa-exclamation-circle fa_not_verified"></i>
                                                Not Answered
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>SMP01</td>
                                            <td>Wishvanath</td>
                                            <td>Kharif</td>
                                            <td>8903526657</td>
                                            <td>
                                                <a href="http://localhost:3000/not-answered">
                                                    <i className="fas fa-exclamation-circle fa_not_verified"></i>
                                                Not Answered
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>SMP01</td>
                                            <td>Wishvanath</td>
                                            <td>Kharif</td>
                                            <td>8903526657</td>
                                            <td>
                                                <a href="http://localhost:3000/not-answered">
                                                    <i className="fas fa-exclamation-circle fa_not_verified"></i>
                                                Not Answered
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>SMP01</td>
                                            <td>Wishvanath</td>
                                            <td>Kharif</td>
                                            <td>8903526657</td>
                                            <td>
                                                <a href="http://localhost:3000/not-answered">
                                                    <i className="fas fa-exclamation-circle fa_not_verified"></i>
                                                Not Answered
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* end of executive details section */}

                            {/* pagination section */}
                            <div className="row page_navigation">
                            <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                <a className="page-link" href="Link" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="Link">1</a></li>
                                <li className="page-item"><a className="page-link" href="Link">2</a></li>
                                <li className="page-item"><a className="page-link" href="Link">3</a></li>
                                <li className="page-item">
                                <a className="page-link" href="Link" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </a>
                                </li>
                            </ul>
                            </nav>
                            </div>
                            {/* end of pagination section */}

                        </div>     
                        {/* end of content wrapper section */}
                    </div>
                    {/* end of dashboard content section */}
               </div>
            {/* end of dashboard wrapper class */}

              

            </div>
        )
    }
}
