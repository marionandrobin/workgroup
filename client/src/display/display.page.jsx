import React from 'react';
import axios from 'axios';

class EntryDisplayComponent extends React.Component {

  constructor(props) {
      super(props);
      this.state = {entry: this.props.entry};
  }

  render() {
    return (
      <div className="card">
        <h5 className="card-header">{this.state.entry.subject}</h5>
        <div className="card-body">
          <h5 className="card-title">{this.state.entry.ownerName}</h5>
          <p className="card-text">{this.state.entry.activity}</p>
        </div>
      </div>
    );
  }
  
}

class ListOfEntriesPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {entries: []};
  }

  componentDidMount() {
    axios.get(`http://localhost:8888/test`)
      .then(res => {
        this.setState({ 
          "entries": res.data,
        });
      });
  }

  render() {
    const listItems = this.state.entries.map((entry, index) =>
      <EntryDisplayComponent key={index} entry={entry} />
    );
    return <ul>{listItems}</ul>;
  }
}

export default ListOfEntriesPage;
