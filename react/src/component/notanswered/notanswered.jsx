import React, { Component } from 'react'
import './notanswered.css';
import './image_fun.css';
import $ from "jquery";
export default class NotAnswered extends Component {
    // define constructor
    constructor(props) {
        super(props);
        this.state = {
         
        };
    }
    // end of constructor
     
    componentDidMount(){
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });


        // for light box image
        // Gallery image hover
            $( ".img-wrapper" ).hover(
                function() {
                $(this).find(".img-overlay").animate({opacity: 1}, 600);
                }, function() {
                $(this).find(".img-overlay").animate({opacity: 0}, 600);
                }
            );
            
            // Lightbox
            var $overlay = $('<div id="overlay"></div>');
            var $image = $("<img>");
            var $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
            var $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
            var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');
            
            // Add overlay
            $overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
            $("#gallery").append($overlay);
            
            // Hide overlay on default
            $overlay.hide();
            
            // When an image is clicked
            $(".img-overlay").click(function(event) {
                // Prevents default behavior
                event.preventDefault();
                // Adds href attribute to variable
                var imageLocation = $(this).prev().attr("href");
                // Add the image src to $image
                $image.attr("src", imageLocation);
                // Fade in the overlay
                $overlay.fadeIn("slow");
            });
            
            // When the overlay is clicked
            $overlay.click(function() {
                // Fade out the overlay
                $(this).fadeOut("slow");
            });
            
            // When next button is clicked
            $nextButton.click(function(event) {
                // Hide the current image
                $("#overlay img").hide();
                // Overlay image location
                var $currentImgSrc = $("#overlay img").attr("src");
                // Image with matching location of the overlay image
                var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
                // Finds the next image
                var $nextImg = $($currentImg.closest(".image").next().find("img"));
                // All of the images in the gallery
                var $images = $("#image-gallery img");
                // If there is a next image
                if ($nextImg.length > 0) { 
                // Fade in the next image
                $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
                } else {
                // Otherwise fade in the first image
                $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
                }
                // Prevents overlay from being hidden
                event.stopPropagation();
            });
            
            // When previous button is clicked
            $prevButton.click(function(event) {
                // Hide the current image
                $("#overlay img").hide();
                // Overlay image location
                var $currentImgSrc = $("#overlay img").attr("src");
                // Image with matching location of the overlay image
                var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
                // Finds the next image
                var $nextImg = $($currentImg.closest(".image").prev().find("img"));
                // Fade in the next image
                $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
                // Prevents overlay from being hidden
                event.stopPropagation();
            });
            
            // When the exit button is clicked
            $exitButton.click(function() {
                // Fade out the overlay
                $("#overlay").fadeOut("slow");
            });

        // end of light box image
    }

    // btn back event
    btn_back(){
       window.location.href ="http://localhost:3000/pending-question";
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
                        <div className="content_wrapper">
                            {/* back button section */}
                            <div className="row back_btn_sec">
                                <button className="btn btn-success btn_ans_back" onClick={this.btn_back.bind(this)}>
                                    <i className="fas fa-angle-left"></i>&nbsp;
                                    Back
                                </button>
                            </div>
                            {/* end of back button section */}

                            {/* farm details and crop image section */}
                            <div className="row farm_det_image_section">
                                <div className="col-sm-9 col-md-9 col-lg-9 farm_det_body">
                                <label className="farm_det_tag" htmlFor="FarmDetailsTag">Farm Details</label>
                                {/* farm details section */}
                                    <div className="row farm_details">
                                        <table className="table table-responsive">
                                            <thead>
                                                <tr>
                                                    <th>Farm Id</th>
                                                    <th>Farmer Name</th>
                                                    <th>Crop Type</th>
                                                    <th>Complaint Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>SMP01</td>
                                                    <td>Wishvanath</td>
                                                    <td>Kharif</td>
                                                    <td>13/09/2018</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                {/* End of farm details section  */}

                                {/* Complaint section */}
                                <div className="row complaint_sec">
                                <label htmlFor="complaint_tag" className="complaint_tag">Complaint</label>
                                    <form>
                                        <textarea name="complaintSection" id="complaintSection" cols="20" rows="5" className="form-control" defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione reiciendis nihil nulla ducimus commodi harum distinctio facilis neque deleniti ipsum? Dolores voluptas enim blanditiis. Corrupti illum ad non veritatis impedit?" readOnly>
                                        
                                        </textarea>
                                    </form>   
                                </div>
                                {/* end of complaint section */}

                                {/* suggestion section  */}
                                <div className="row suggestion_sec">
                                <label htmlFor="suggestion_tag" className="suggestion_tag">Suggestion</label>
                                    <form>
                                        <textarea name="suggestionSection" id="suggestionSection" cols="20" rows="5" className="form-control">
                                        
                                        </textarea>
                                    </form>   
                                </div>
                                {/* end of suggestion section */}

                                {/* send button section */}
                                <div className="row send_btn_section">
                                    <button className="btn btn-warning btn-send">
                                        <i className="fas fa-check"></i>&nbsp;
                                        Send
                                    </button>
                                </div>
                                {/* end of send button section */}
                                </div>
                                <div className="col-sm-3 col-md-3 col-lg-3">
                                <label htmlFor="image_head_tag" className="image_head_tag">Crop Image</label>
                                    <div className="row farm_det_image " id="gallery">
                                    <div id="image-gallery">
                                        {/* first image section */}
                                        <div className="first_image thumbnail image">
                                            <div className="img-wrapper">
                                                <a href="image/crop_image1.jpg"><img src="image/crop_image1.jpg" className="img-responsive" alt="something" /></a>
                                                <div className="img-overlay">
                                                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* end of first image section */}

                                        {/* second image section */}
                                        <div className="second_image thumbnail image">
                                            <div className="img-wrapper ">
                                                <a href="image/crop_image2.jpg"><img src="image/crop_image2.jpg" className="img-responsive" alt="something" /></a>
                                                <div className="img-overlay">
                                                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* end of second image section */}

                                        {/* Third Image section */}
                                        <div className="third_image thumbnail image">
                                            <div className="img-wrapper">
                                                <a href="image/crop_image3.jpg"><img src="image/crop_image3.jpg" className="img-responsive" alt="something" /></a>
                                                <div className="img-overlay">
                                                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        {/* end of third image section */}
                                    </div>
                                </div>
                            </div>    

                            {/* end of farm details and crop image section */}

                        </div>    
                    </div>
                    {/* end of dashboard content section */}
            </div>
            {/* end of dashboard wrapper class */}

            

            </div>
        )
    }
}
