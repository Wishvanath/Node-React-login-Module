import React, { Component } from 'react'
import AuthService from '../AuthService/AuthService';
import './home.css';
import{
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    Modal
} from 'react-bootstrap';
export default class Home extends Component {
    // define constructor
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
        this.state = {
            show: false
        };
        
    }
    componentWillMount(){
        if(this.Auth.loggedIn())
            this.props.history.replace('/');
    }

    handleClose() {
    this.setState({ show: false });
    }

    handleShow() {
    this.setState({ show: true });
    }
    handleFormSubmit(e){
        e.preventDefault();
      
        this.Auth.login(this.state.username,this.state.password)
            .then(res =>{
               this.props.history.replace('/');
            })
            .catch(err =>{
                alert(err);
            })
    }

    handleChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    // end constructor def
    render() {
     
        return (
            <div>
                {/* navbar section */}
                <Navbar default collapseOnSelect className="home_navbar">
                    <Navbar.Header>
                        <Navbar.Brand className="home_nav_brand">
                        <a href="http://localhost:3000/home">
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

                {/* home body image section */}
                <div className="row home_body_back">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 slider_tag"> 
                        <h3>Lorem ipsum dolor sit amet consectetur</h3>
                        <p>Lorem Lorem ipsum dolor sit amet, consectetur</p>
                        <p>adipiscing elit, sed do eiusmod </p>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="row">
                        <div className="col-md-5 col-xs-6 col-md-offset-3 col-xs-offset-3 home_reg_body">
                            {/* for registraion heading */}
                            <div className="reg_heading">
                                <h3>Give the right solutions now</h3>
                            </div>
                            {/* end of registration heading */}

                            {/* for form body section */}
                            <div className="reg_form_body">
                                <form name="reg_form">
                                    <label htmlFor="userName" className="txt_reg_lable">Name</label>
                                    <input type="text" className="form-control txt_reg_input"/>

                                    <label htmlFor="emailAddress" className="txt_reg_lable">Email Address</label>
                                    <input type="text" className="form-control txt_reg_input"/>

                                    <label htmlFor="password" className="txt_reg_lable">Password</label>
                                    <input type="text" className="form-control txt_reg_input"/>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label htmlFor="phoneNumber" className="txt_reg_lable">Phone No.</label>
                                            <input type="text" className="form-control txt_reg_input"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="selectState" className="txt_reg_lable">State</label>
                                            <select className="form-control txt_reg_input" id="txt_state_select">
                                                <option>Select State</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </div>
                                        
                                    </div>
                                    <div className="radio">
                                        <label htmlFor="terms_condition" className="txt_reg_radio">
                                        <input type="radio" name="optradio"  />I accept the <u>terms & conditions.</u>
                                        </label>
                                    </div>
                                    <div className="row home_reg_btn">
                                        <button className="btn btn-success btn-block reg_btn">Sign UP</button>
                                    </div>
                                </form>
                            </div>
                            {/* end for form body section */}
                        </div>   
                    </div>
                </div>
                {/* end of home body image section */}

                {/* how it works section */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4"></div>
                        <div className="col-lg-4 col-md-4 col-sm-4 how_it_works_head">
                            <h2>How it works</h2>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3"></div>
                        <div className="col-lg-6 col-md-6 col-sm-6 how_it_works_body">
                         <span>
                            Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem Lorem ipsum dolor sit amet, consectetur.
                          </span>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3"></div>
                    </div>
                    <div className="row work_flow_section">
                        <img src="image/work_flow.png" className="img-responsive" alt="WorkflowImage"/>
                    </div>
                </div>
                {/* end of how it works section */}

                {/* cost effective solution section */}
                <div className="row cost_effect_body">
                    <div className="row cost_effect_heading">
                        <h2>Cost Effective Solutions</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-5  cost_effect_image">
                            <img src="image/mobile_app.png" alt="MobileApp"/>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-7  cost_effect_features">
                            
                            <p> 
                                <i className="fas fa-check cost_fa_icon"></i>
                                <span className="cost_features"> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                            </p>
                            <p> 
                                <i className="fas fa-check cost_fa_icon"></i>
                                <span className="cost_features"> Lorem ipsum dolor sit amet consectetur, adipisicing.</span>
                            </p>
                            <p> 
                                <i className="fas fa-check cost_fa_icon"></i>
                                <span className="cost_features"> Lorem ipsum dolor sit amet consectetur.</span>
                            </p>
                            <p> 
                                <i className="fas fa-check cost_fa_icon"></i>
                                <span className="cost_features"> Lorem ipsum dolor sit amet consectetur.</span>
                            </p>
                            <p> 
                                <i className="fas fa-check cost_fa_icon"></i>
                                <span className="cost_features"> Lorem ipsum dolor sit amet.</span>
                            </p>
                            
                        </div>
                    </div>
                </div>
                {/* end of cost effective solution section */}

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
                        <form name="adivisoryLoginForm" onSubmit={this.handleFormSubmit}>
                            <input 
                            type="text" 
                            placeholder="User Name" 
                            class="form-control txt_adv_login"
                            name="username"
                            onChange={this.handleChange}
                            />
                            <input 
                            type="password" 
                            placeholder="Password" 
                            class="form-control txt_adv_login"
                            name="password"
                            onChange={this.handleChange}
                            />
                            <button class="btn btn-success btn-block btn_adv_login">LOGIN</button>
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
            // end of main div section
        )
    }
}
