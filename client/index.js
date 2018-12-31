import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import Routes from './routes';
import App from './component/App';


ReactDOM.render(<HashRouter>
                    <Routes/>
                </HashRouter>, document.getElementById('root'));
