import React from 'react';
import '../style/form.css';

class FormPage extends React.Component {

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
    }, (state) => {
      console.log(state)
      console.log(this.state.description)
    });
  }

  handleSubmit(event){
    event.preventDefault();
    console.log("target", event.target);
    console.log("description", event.target.description.value);
  }

  handleClick(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log('123', target, name, value)
    console.log(event.target)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <div className="form-group">
            <label>
              Nom:
              <input
                className="form-control"
                name="nom"
                type="text"
                value={this.state.nom}
                onChange={this.handleInputChange}/>
            </label>
          </div>

            <br />
          <div className="form-group">
            <label>
              description:
              <input
                className="form-control"
                name="description"
                type="text"
                value={this.state.description}
                onChange={this.handleInputChange}/>
            </label>
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">CLICK</button>
        </div>
      </form>
    );
  }
}

export default FormPage;