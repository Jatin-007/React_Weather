import React, { Component } from 'react'

export default class componentName extends Component {
    constructor(props){
        super(props);

        this.state= {term: ''}

        this.onInputChange= this.onInputChange.bind(this); //bind this with this.onInputChange
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({term: event.target.value});
    }

    render() {
        return (
        <div>
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input placeholder="Search a 5-day forcast" className="form-control" value={this.state.term} onChange={this.onInputChange}/>
                <button type="submit" className="btn btn-secondary">Search</button>
            </form>
        </div>
        );
    }
}
