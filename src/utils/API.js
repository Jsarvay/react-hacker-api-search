import axios from "axios";

//Set up API call to get search results from hacker news API

export default {
    getSearch: function(search) {
        return axios.get(`https://hn.algolia.com/api/v1/search?query=${search}`);
    }
};