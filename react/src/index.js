import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './component/home/home';
import Reset from './component/resetpassword/reset';
import FAQ from './component/faq/faq';
import PendingQuestion from './component/pendingQuestion/pendingQuestion';
import AnsweredQuestion from './component/answerQuestion/answerQuestion';
import MyAccount from './component/myaccount/myaccount';
import NotAnswered from './component/notanswered/notanswered';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path= "/" component={App} />
            <Route exact path= "/home" component={Home} />
            <Route exact path = "/password/reset" component={Reset} />
            <Route exact path = "/frequently-asked-question" component={FAQ} />
            <Route exact path ="/pending-question" component ={PendingQuestion} />  
            <Route exact path ="/answered-question" component = {AnsweredQuestion} />
            <Route exact path = "/my-account" component= {MyAccount} />
            <Route exact path = "/not-answered" component={NotAnswered} />

        </div>
        
    </Router>
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
