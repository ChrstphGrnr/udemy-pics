import React from 'react'

class SearchBar extends React.Component {
    state = {
        searchTerm: ''
    }

    // onInputChange(e) {
    //     e.preventDefault();
    //     this.setState({searchTerm: e.target.value})
    // }

    render() {
        return (
        <div>
            <div className="ui segment">
                <h1>Search for Images</h1>
                    <form className="ui form">
                        <div className="field">
                            <label>Image Search</label>
                            <input onChange={this.onInputChange}type="text"/>
                        </div>
                        </form>
            </div>
        </div>)
    }
}

export default SearchBar