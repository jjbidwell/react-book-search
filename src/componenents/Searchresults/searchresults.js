import React from "react";
import API from "../../utils/API"

API.getBook("dune").then(results => {
    console.log(results.data.items);
})

function Searchresuults () {
    return (
        <h1>Search Page</h1>
    )
}

export default Searchresuults;