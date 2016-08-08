import React from 'react';
import { Component } from 'react';
// import _ from 'lodash';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    // const debouncedWeatherSearch = _.debounce(this.weatherSearch, 300);

    return (
      <div>
        {/*<SearchBar onSubmitSearchTerm={debouncedWeatherSearch} />*/}
        <SearchBar />
        <WeatherList />
      </div>
    );
  }

  weatherSearch() {
    return {};
  }
}
