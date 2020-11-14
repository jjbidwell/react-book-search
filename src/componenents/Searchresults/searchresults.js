import React from "react";


function Searchresults (props) {
    return (
        <div>
            <h1>Results:</h1>
            {props.results.map((element, index) => {
                //console.log(element.volumeInfo.title)
                return <p key ={index}>{element.volumeInfo.title}</p>
            })}
        </div>
    )
}

export default Searchresults;