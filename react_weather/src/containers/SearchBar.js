import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''}; // initial value is empty
        this.onInputChange = this.onInputChange.bind(this); // in this(searchBar component) find the onInputChange method and bind it with this
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();

        // need to add the weather data
    } 

    render () {
        return (
            <div>
                <form onSubmit= {this.onFormSubmit} className="input-group">
                    <input 
                        placeholder ="Get a five day forcast in your favourite cities"
                        className="form-control"
                        value = {this.state.term}
                        onChange={this.onInputChange}
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </span>
                </form>
            </div>
        );
    }
}

export default SearchBar;