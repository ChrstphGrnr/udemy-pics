import React from 'react'
import axios from 'axios'

import SearchBar from './SearchBar'



class App extends React.Component {

    onSearchSubmit = (term) => {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            headers: {
                Authorization: 'Client-ID 39d972e6632d1f3a8afb46962657c7427fcb09cf7b75a5635d260534ac7ca53d'
            }
        })
        .then(resp => console.log(resp.results))
        
    }
    
    render() {
    return (
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        </div>
    )}
}

export default App;