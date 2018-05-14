import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormPage from './form/form.page.jsx';
import DisplayPage from './display/display.page.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/appStyles.scss';
import axios from 'axios';

axios.defaults.withCredentials = true;


class TabLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const MenuLink = ({ label, to, activeOnlyWhenExact }) => (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => (
          <div className={match ? "nav-link active" : "nav-link"}>
            <Link to={to}>{label}</Link>
          </div>
        )}
      />
    );

    return (
      <div className="formtest">
        <ul className="nav">
          <li className="nav-item">
            <MenuLink activeOnlyWhenExact={true} to="/" label="FormPage" />
          </li>
          <li className="nav-item">
            <MenuLink to="/displayAll" label="DisplayPage" />
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={FormPage} />
        <Route path="/displayAll" component={DisplayPage} />
      </div>
    );
  }
}



ReactDOM.render(
  <Router>
    <div>
      <TabLink />
    </div>
  </Router>,
  document.getElementById('root')
);
      // <FormPage />
      // <NameForm />

