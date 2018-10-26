import React, {Component} from 'react';

// Non ES6 version
// class SearchBar extends Component {
//   render() {
//     return <input onChange={this.onInputChange} />
//   }
//
//   onInputChange(event) {
//       console.log(event.target.value);
//   };
// };

//ES6 version
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
