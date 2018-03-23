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
    this.state = {value_select: '', option_list: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value_select: event.target.value
    });

    this.props.callbackParent(event.target.value);
  }

  render() {
    const toto = ['test'];
    //console.log("tetetee",this.props.option_list);
    var listOptions = toto.map(function(number, index){
      return <option value={number} key={index}>{number}</option>
    });
    return (
      <div>
        <label>
          {this.props.name}:
          <select value={this.state.value_select} onChange={this.handleChange} >
            {listOptions}
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
      options_list : ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChildChanged = this.onChildChanged.bind(this);

    axios.get('/listoptions')
      .then(res => {
        console.log('response');
        console.log(res.data.list);
        this.setState({
          options_list: res.data.list
        });
      })
      .catch(error =>{
        console.log(error);
      });
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


    axios.post('/submit', this.state)
      .then(res => {
        console.log(res)
        return res;
      });

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
         <Label callbackParent={(newState) => this.onChildChanged(newState, "title") } name="Title" /> 
         <Label callbackParent={(newState) => this.onChildChanged(newState, "price") } name="Price" />
         <Label callbackParent={(newState) => this.onChildChanged(newState, "min_value") } name="Min number of people" />
         <Label callbackParent={(newState) => this.onChildChanged(newState, "max_value") } name="Max number of people" />
         <Label callbackParent={(newState) => this.onChildChanged(newState, "desc") } name="Description" />
         <Select callbackParent={(newState) => this.onChildChanged(newState, "theme") } name="Theme" option_list={this.state.options_list}/>
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
