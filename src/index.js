import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import API_KEY from '../api_key'
import SearchBar from './components/search_bar'

YTSearch({key : API_KEY, term : 'surfboards'}, function(data){
    console.log(data)
})

//Create a new component
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}
//Generated a HTML and Pass to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));