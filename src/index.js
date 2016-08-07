import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

import secret_keys from '../secrets'

const API_KEY = secret_keys.youtube_api;

// Create a new component.  This component should produce
// some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );

}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
