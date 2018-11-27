import React, { Component } from 'react'
import './faq.css';
import{
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    Modal,

} from 'react-bootstrap';
export default class FAQ extends Component {
    // define constructor
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }
    handleClose() {
    this.setState({ show: false });
    }

    handleShow() {
    this.setState({ show: true });
    }
    answer_show1(){
        document.getElementById("answer_section1").style.display = "block";
    }
    anser_hide1(){
        document.getElementById("answer_section1").style.display = "none";
    }
    answer_show2(){
        document.getElementById("answer_section2").style.display = "block";
    }
    anser_hide2(){
        document.getElementById("answer_section2").style.display = "none";
    }
    answer_show3(){
        document.getElementById("answer_section3").style.display = "block";
    }
    anser_hide3(){
        document.getElementById("answer_section3").style.display = "none";
    }
    answer_show4(){
        document.getElementById("answer_section4").style.display = "block";
    }
    anser_hide4(){
        document.getElementById("answer_section4").style.display = "none";
    }
    answer_show5(){
        document.getElementById("answer_section5").style.display = "block";
    }
    anser_hide5(){
        document.getElementById("answer_section5").style.display = "none";
    }
    answer_show6(){
        document.getElementById("answer_section6").style.display = "block";
    }
    anser_hide6(){
        document.getElementById("answer_section6").style.display = "none";
    }
    answer_show7(){
        document.getElementById("answer_section7").style.display = "block";
    }
    anser_hide7(){
        document.getElementById("answer_section7").style.display = "none";
    }
    answer_show8(){
        document.getElementById("answer_section8").style.display = "block";
    }
    anser_hide8(){
        document.getElementById("answer_section8").style.display = "none";
    }
    // end constructor def

    render() {
        return (
            <div>
                {/* navbar section */}
                <Navbar default collapseOnSelect className="home_navbar">
                    <Navbar.Header>
                        <Navbar.Brand className="home_nav_brand">
                        <a href="#brand">
                            <img src="image/logo.png" alt="LogoImage" />
                        </a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight className="home_navbar_right">
                            <NavItem eventKey={1} href="https://skymapglobal.com/">
                                ABOUT US
                            </NavItem>
                            <NavItem eventKey={2} href="http://localhost:3000/frequently-asked-question">
                                FAQ
                            </NavItem>
                            <NavDropdown eventKey={3} href="#" title="lOGIN" id="basic-nav-dropdown" className="home_navbar_dropdown">
                                <MenuItem eventKey={3.1} onClick={this.handleShow} >Advisory</MenuItem>
                                <MenuItem eventKey={3.2} >Admin</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {/* end of navbar section */}  

                {/* start of FAQ body section */}
                <div className="row faq_body">
                    <div className="container faq_question_section">
                        <div className="row col-sm-1"></div>
                        <div className="row col-sm-11">
                            <div className="help_tag">
                                <i className="fas fa-question-circle help-fa"></i>
                                <span className="help_heading">Need some help.</span>
                            </div>


                            <div className="row faq_section">
                               <div className="question_sec1" id="question_sec1" onClick={this.answer_show1.bind(this)}>
                                 <i className="far fa-hand-point-right right_icon"></i>
                                 <span className="question_txt">
                                 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                 </span>
                               </div>
                               <div className="answer_section1" id="answer_section1" onClick={this.anser_hide1.bind(this)}>
                                 <i className="fas fa-chevron-up up_icon"></i>
                                 <span className="answer_txt">
                                 On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized
                                by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that
                                are bound to ensue.and equal blame belongs to those who fail in their duty through weakness of will, which is the 
                                same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.
                                In a free hour, when our power of choice is untrammelled and when nothing prevents
                                 </span>
                               </div> 
                            </div>
                            
                            <div className="row faq_section">
                               <div className="question_sec2" id="question_sec2" onClick={this.answer_show2.bind(this)}>
                                 <i className="far fa-hand-point-right right_icon"></i>
                                 <span className="question_txt">
                                 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                 </span>
                               </div>
                               <div className="answer_section2" id="answer_section2" onClick={this.anser_hide2.bind(this)}>
                                 <i className="fas fa-chevron-up up_icon"></i>
                                 <span className="answer_txt">
                                 On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized
                                by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that
                                are bound to ensue.and equal blame belongs to those who fail in their duty through weakness of will, which is the 
                                same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.
                                In a free hour, when our power of choice is untrammelled and when nothing prevents
                                 </span>
                               </div> 
                            </div>

                            <div className="row faq_section">
                               <div className="question_sec3" id="question_sec3" onClick={this.answer_show3.bind(this)}>
                                 <i className="far fa-hand-point-right right_icon"></i>
                                 <span className="question_txt">
                                 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                 </span>
                               </div>
                               <div className="answer_section3" id="answer_section3" onClick={this.anser_hide3.bind(this)}>
                                 <i className="fas fa-chevron-up up_icon"></i>
                                 <span className="answer_txt">
                                 On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized
                                by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that
                                are bound to ensue.and equal blame belongs to those who fail in their duty through weakness of will, which is the 
                                same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.
                                In a free hour, when our power of choice is untrammelled and when nothing prevents
                                 </span>
                               </div> 
                            </div>

                            <div className="row faq_section">
                               <div className="question_sec4" id="question_sec4" onClick={this.answer_show4.bind(this)}>
                                 <i className="far fa-hand-point-right right_icon"></i>
                                 <span className="question_txt">
                                 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                 </span>
                               </div>
                               <div className="answer_section4" id="answer_section4" onClick={this.anser_hide4.bind(this)}>
                                 <i className="fas fa-chevron-up up_icon"></i>
                                 <span className="answer_txt">
                                 On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized
                                by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that
                                are bound to ensue.and equal blame belongs to those who fail in their duty through weakness of will, which is the 
                                same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.
                                In a free hour, when our power of choice is untrammelled and when nothing prevents
                                 </span>
                               </div> 
                            </div>

                            <div className="row faq_section">
                               <div className="question_sec5" id="question_sec5" onClick={this.answer_show5.bind(this)}>
                                 <i className="far fa-hand-point-right right_icon"></i>
                                 <span className="question_txt">
                                 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                 </span>
                               </div>
                               <div className="answer_section5" id="answer_section5" onClick={this.anser_hide5.bind(this)}>
                                 <i className="fas fa-chevron-up up_icon"></i>
                                 <span className="answer_txt">
                                 On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized
                                by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that
                                are bound to ensue.and equal blame belongs to those who fail in their duty through weakness of will, which is the 
                                same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.
                                In a free hour, when our power of choice is untrammelled and when nothing prevents
                                 </span>
                               </div> 
                            </div>

                            <div className="row faq_section">
                               <div className="question_sec6" id="question_sec6" onClick={this.answer_show6.bind(this)}>
                                 <i className="far fa-hand-point-right right_icon"></i>
                                 <span className="question_txt">
                                 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                 </span>
                               </div>
                               <div className="answer_section6" id="answer_section6" onClick={this.anser_hide6.bind(this)}>
                                 <i className="fas fa-chevron-up up_icon"></i>
                                 <span className="answer_txt">
                                 On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized
                                by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that
                                are bound to ensue.and equal blame belongs to those who fail in their duty through weakness of will, which is the 
                                same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.
                                In a free hour, when our power of choice is untrammelled and when nothing prevents
                                 </span>
                               </div> 
                            </div>


                             <div className="row faq_section">
                               <div className="question_sec7" id="question_sec7" onClick={this.answer_show7.bind(this)}>
                                 <i className="far fa-hand-point-right right_icon"></i>
                                 <span className="question_txt">
                                 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                 </span>
                               </div>
                               <div className="answer_section7" id="answer_section7" onClick={this.anser_hide7.bind(this)}>
                                 <i className="fas fa-chevron-up up_icon"></i>
                                 <span className="answer_txt">
                                 On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized
                                by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that
                                are bound to ensue.and equal blame belongs to those who fail in their duty through weakness of will, which is the 
                                same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.
                                In a free hour, when our power of choice is untrammelled and when nothing prevents
                                 </span>
                               </div> 
                            </div>


                            <div className="row faq_section">
                               <div className="question_sec8" id="question_sec8" onClick={this.answer_show8.bind(this)}>
                                 <i className="far fa-hand-point-right right_icon"></i>
                                 <span className="question_txt">
                                 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                 </span>
                               </div>
                               <div className="answer_section8" id="answer_section8" onClick={this.anser_hide8.bind(this)}>
                                 <i className="fas fa-chevron-up up_icon"></i>
                                 <span className="answer_txt">
                                 On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized
                                by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that
                                are bound to ensue.and equal blame belongs to those who fail in their duty through weakness of will, which is the 
                                same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.
                                In a free hour, when our power of choice is untrammelled and when nothing prevents
                                 </span>
                               </div> 
                            </div>

                        </div>
                    </div>

                    {/* start of footer section */}
                    <div className="row aritrekk_footer">
                        <div className="col-lg-8 col-md-8 col-sm-8">
                            <span>
                            All Rights Reserved. © 2018. Skymap Global India Pvt. Ltd.
                            </span>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 agri_symbol">
                            <span>
                            @ agriTREKK 
                            </span>
                        </div>
                    </div>
                    {/* end of footer section */}

                </div>

                {/* end of FAQ body section */}
































                {/* Login Model Window section */}
                <Modal show={this.state.show} onHide={this.handleClose} >
                <Modal.Body>
                    <div className="row login_close">
                         <button className="advisory_login_close" onClick={this.handleClose}>x</button>
                    </div>
                    <div className="row advisory_login_icon">
                        <img src="image/user_icon.png" alt="UserIcon"/>
                    </div>
                    <div className="row advisory_login_form">
                        <form name="adivisoryLoginForm">
                            <input type="text" placeholder="User Name" className="form-control txt_adv_login"/>
                            <input type="text" placeholder="Password" className="form-control txt_adv_login"/>
                            <button className="btn btn-success btn-block btn_adv_login">LOGIN</button>
                        </form>
                        <div className="adv_forget_pass"> 
                            <a href="http://localhost:3000/password/reset">
                                <h4>Forget Password ?</h4>
                            </a>
                        </div>
                    </div>

                </Modal.Body>
                </Modal>

                {/* end of Login Model window */}  
            </div>
        )
    }
}
