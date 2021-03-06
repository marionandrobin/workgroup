import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class ButtonDisplaysModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modalMessage: props.modalMessage};
    this.handleClick = this.handleClick.bind(this);
    this.modifyMessage = this.modifyMessage.bind(this);
  }

  handleClick(event) {
    const target = event.target;
    console.log("event", event)
    console.log("target", target)
    console.log("this", this)
    event.preventDefault();
    window.alert(this.state.modalMessage);
  }

  modifyMessage(event) {
    console.log("event", event)
    const target = event.target;
    console.log("target", target)
    const value = target.value;
    console.log("value", value)
    this.setState({modalMessage: value},
      (state)=> console.log(this.state.modalMessage));
    console.log(this.state.modalMessage)
  }

  render() {
    return (
      <div>
        <label>
            modalMessage:
            <input
              name="modalMessage"
              type="text"
              value={this.state.modalMessage}
              onChange={this.modifyMessage}/>
          </label>
        <button onClick={this.handleClick}>{this.props.button}</button>
      </div>
    );
  }
}


class SimpleForm extends React.Component {

  constructor(props) {
      super(props);
      this.state = {nom: "", description: ""};
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    }, () => {
      console.log("Modification dans ", name);
      console.log(this.state.description);
    });
  }

  handleSubmit(event){
    event.preventDefault();
    console.log("SUBMIT");
    console.log("target", event.target);
    console.log("description", event.target.description.value, event.target.modalMessage.value);
  }

  handleClick(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log('123', target, name, value);
    console.log(event.target.name);
  }

  render() {
    const title = "hello bébé lol";
    return (
      <div><h1>{title}</h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          Nom:
          <input
            name="nom"
            type="text"
            value={this.state.nom}
            onChange={this.handleInputChange}/>
        </label>
        <br />
        <label>
          Description:
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleInputChange}/>
        </label>
        <button name="clickbutton" onClick={this.handleClick}>CLICK</button>
        <ButtonDisplaysModal modalMessage="heeyy" button="gvhb" />
      </form></div>
    );
  }
}

ReactDOM.render(
  <SimpleForm></SimpleForm>,
  document.getElementById('root')
);