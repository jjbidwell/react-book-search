import React from "react";
import API from "../../utils/API"
import Searchresults from "../Searchresults/Searchresults"



class Search extends React.Component {
    state = {
        search: "",
        results: []
    }

    handleInputChange = event => {
        this.setState({
            search: event.target.value
        }, () => {
            API.getBook(this.state.search).then(results => {
                const array = [];
                for (let i = 0; i < results.data.items.length; i++){
                    if(results.data.items[i].volumeInfo.imageLinks){
                    array.push(results.data.items[i]);
                    }
                    this.setState({
                        search: this.search,
                        results: array
                    })
                }
            })
        });

    }

    render(){
    return (
        <div className="container">
            <h1>React Book Search</h1>
            <form className="form-group">
                <label htmlFor="search">Search for a book by title:</label>
                <input onChange={this.handleInputChange} className="form-control" type="text" id="search"/>
            </form>
            <Searchresults results={this.state.results}/>
        </div>
    )
    }
}

export default Search;