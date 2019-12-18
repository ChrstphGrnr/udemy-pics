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
                            <input
                                 type="text" 
                                value={this.state.searchTerm} 
                                onChange={e => this.setState({searchTerm: e.target.value})} 
                            />
                        </div>
                        </form>
            </div>
        </div>)
    }
}

export default SearchBar