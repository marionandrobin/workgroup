import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from '../home/home.page.jsx';
import FormPage from '../form/form.page.jsx';
import DisplayPage from '../display/display.page.jsx';

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
            <MenuLink activeOnlyWhenExact={true} to="/" label="HomePage" />
          </li>
          <li className="nav-item">
            <MenuLink activeOnlyWhenExact={true} to="/create" label="FormPage" />
          </li>
          <li className="nav-item">
            <MenuLink to="/displayAll" label="DisplayPage" />
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/create" component={FormPage} />
        <Route path="/displayAll" component={DisplayPage} />
      </div>
    );
  }
}

export default TabLink;
