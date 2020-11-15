import axios from "axios";

export default  {
    getBook : function(book){
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book);
    },
    saveFavorite : function(book){
        return axios.post("/api/favorites")
    }
}