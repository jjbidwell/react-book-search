import React from "react";
import API from "../../utils/API"
import Searchresults from "../Searchresults/Searchresults"



class Search extends React.Component {
    state = {
        search: ""
    }

    // componentDidMount(){
    //     API.getBook(this.state.search).then(results => {
    //         for (let i = 0; i < results.data.items.length; i++){
    //             console.log(results.data.items[i]);
    //         }
    //     })
    // }

    handleInputChange = event => {
        this.setState({
            search: event.target.value
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
            <Searchresults results={this.state.search}/>
        </div>
    )
    }
}

export default Search;