import React, { Component } from 'react'
import './reset.css';
export default class Reset extends Component {
    render() {
        return (
            <div>
                <div className="reset">
                <img src="/image/forget_back.jpg" className="bg" alt="ResetBackground"/>

                    <div className="col-lg-7 col-md-7 col-sm-7"></div>
                    <div className="col-lg-4 col-md-4 col-sm-4 reset_body">
                        <div className="reset_logo">
                            <a href="http://localhost:3000/home">
                            <img src="/image/reset_logo.png" alt="reset_logo"/>
                            </a>
                        </div>
                        <div className="reset_form">
                        <p className="reset_inst">You just need to provide registered email Id, to reset your password</p>
                            <form name="resetForm">
                                <div className="form-group">
                                    <input type="text"
                                     className="form-control txt_reset_input"
                                     placeholder="Registered Email ID"/>
                                </div>
                                <div className="form-group">
                                    <input type="text"
                                    className="form-control txt_reset_input"
                                    placeholder="New Password"
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="text"
                                    className="form-control txt_reset_input"
                                    placeholder="Confirm Password"
                                    />
                                </div>
                                <div className="rest_btn">
                                    <input 
                                    type="button" 
                                    value="Reset Password" 
                                    className="btn btn-success"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
