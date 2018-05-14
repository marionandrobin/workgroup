import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TabLink from './tabs/tabs.component.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/appStyles.scss';
import axios from 'axios';

axios.defaults.withCredentials = true;

ReactDOM.render(
  <Router>
    <div>
      <TabLink />
    </div>
  </Router>,
  document.getElementById('root')
);


