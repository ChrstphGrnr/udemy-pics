import React from 'react'
import SearchBar from './SearchBar'


class App extends React.Component {

    searchTerm = (props) => {
        console.log(props)
    }
    
    render() {
    return (
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar searchTerm={this.searchTerm}/>
        </div>
    )}
}

export default App;