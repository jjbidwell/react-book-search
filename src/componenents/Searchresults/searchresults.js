import React from "react";
import API from "../../utils/API"

function Searchresults (props) {
    API.getBook(props.results).then(results => {
        for (let i = 0; i < results.data.items.length; i++){
            //console.log(results.data.items[i]);
        }
    })
    return (
        <h1>Search Page</h1>
    )
}

export default Searchresults;