import React from "react";
import "../Searchresults/searchresults.css"
import API from "../../utils/API";

function save (){
    API.saveFavorite();
}

function Searchresults (props) {
        if(props.results.length>0) {    
            return (
                <div>
                    <h1>Results:</h1>
                    {props.results.map((element, index) => {
                        //console.log(element.volumeInfo)
                        return  <div key={index} className="card">
                                <div className="card-body">
                                    <img className="thumbnail" alt={element.volumeInfo.title} src={element.volumeInfo.imageLinks.thumbnail}/>
                                    <h5 className="card-title">{element.volumeInfo.title}</h5>
                                    <p className="card-text">By {element.volumeInfo.authors} </p>
                                    <button onClick={save()} data-index={index} className="btn btn-primary save-btn">Save to favorites</button>
                                </div>
                            </div>
                
                    })}
                </div>
            )
        } else {
            return(
                <div></div>
            )
        }
}

export default Searchresults;