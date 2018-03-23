import React from 'react';
import ReactDOM from 'react-dom';
// import FormPage from './form/form.page.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {deepPurpleA200} from 'material-ui/styles/colors';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import axios from 'axios';

axios.defaults.withCredentials = true;

class Label extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value_label: ''};

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      value_label: event.target.value
    });
    this.props.callbackParent(event.target.value);
  }
  render() {
    return (
      <div>
        <label>
          {this.props.name}:
          <input type='text' value={this.state.value_label} onChange={this.handleChange}/>
        </label>
      </div>
    );
  }
}


class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value_select: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value_select: event.target.value
    });
    this.props.callbackParent(event.target.value);
  }


  render() {
    return (
      <div>
        <label>
          {this.props.name}:
          <select value={this.state.value_select} onChange={this.handleChange} >
            <option value="theme1">Theme1</option>
            <option value="theme2">Theme2</option>
            <option value="theme3">Theme3</option>
            <option value="theme4">Theme4</option>
          </select>
        </label>
      </div>
    );
  }
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title : '',
      price : '',
      min_value : '',
      max_value : '',
      desc : '',
      theme : '',
      test123:''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChildChanged = this.onChildChanged.bind(this);
  }

  componentDidMount() {

    axios.get("/test")
      .then(res => {
        console.log('azertyu', res);
        console.log('heeeyyy', res.data);
        // const posts = res.data.data.children.map(obj => obj.data);
        console.log(this.state)
        this.setState({ test123: res.data }, function(){
          console.log(this.state)
        });
      })
      .catch(error => console.log(error));
  }

  onChildChanged(newState, inputName) { 
      this.setState({
        [inputName]: newState
      });
    }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submit');
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
         <Label callbackParent={(newState) => this.onChildChanged(newState, "title") } name="Title" /> 
         <Label callbackParent={(newState) => this.onChildChanged(newState, "price") } name="Price" />
         <Label callbackParent={(newState) => this.onChildChanged(newState, "min_value") } name="Min number of people" />
         <Label callbackParent={(newState) => this.onChildChanged(newState, "max_value") } name="Max number of people" />
         <Label callbackParent={(newState) => this.onChildChanged(newState, "desc") } name="Description" />
         <Select callbackParent={(newState) => this.onChildChanged(newState, "theme") } name="Theme"/>
         <input type="text" value={this.state.test123}/>
         <input type="submit" value="Submit" />
      </form>
    );
  }
}

const muiTheme = getMuiTheme({
  palette: {
    textColor: deepPurpleA200,
  },
  appBar: {
    height: 50,
  },
});


ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <NameForm />
    <AppBar title="My AppBar" />
  </MuiThemeProvider>,
  document.getElementById('root')
);
