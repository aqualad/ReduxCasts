import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import _ from 'lodash';

import { fetchWeather, changeSearchTerm } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }

    // Bind comopnent context "this" to event handlers
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  handleInputChange(event) {
    this.setState({term: event.target.value});
    // this.props.changeSearchTerm(term);
  }

  render() {
    // const debouncedHandleInputChange = _.debounce(this.handleInputChange, 300);

    return (
      <form className="input-group" onSubmit={this.handleFormSubmit}>
        <input
          autoFocus
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          // onChange={event => debouncedHandleInputChange(event.target.value)}
          onChange={this.handleInputChange}
        />
        <span className="input-group-btn">
          <button className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     term: state.term
//   }
// }

SearchBar.propTypes = {
  // term: PropTypes.string,
  // changeSearchTerm: PropTypes.func.isRequired,
  fetchWeather: PropTypes.func.isRequired
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchWeather: fetchWeather,
    changeSearchTerm: changeSearchTerm
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
// export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
