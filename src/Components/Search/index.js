import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import API from "../../utils/API";

import Article from "../Article/index";
import Saved from "../Saved/index";

import store from "../../store";

const Search = () => {
    //Set up state for this page to register key logs and so we can send it to Redux on submit
    const [search, setSearch] = useState();

    //Save keyboard inputs into search bar to state to use later for API calls and Redux
    const onChange = (e) => {
        setSearch(e.target.value);
    };

    const submitForm = (e) => {
        e.preventDefault();
        //Save current search to state through Redux
        store.dispatch({
            type: "SAVE_SEARCH",
            query: search 
        });

        //Perform API call and then save results to state through Redux
        API.getSearch(search).then((res) => {
            store.dispatch({
                type: "SEARCH_ARTICLE",
                results: res.data.hits
            });
        });

    };


    return (
        <div>
            <Jumbotron className="jumbo-shadow">
                <h1>Hacker News API Search</h1>
                <h4>Enter a search to get started!</h4>
                <form>
                    <input
                    name="search"
                    type="text"
                    placeholder="search through the news"
                    onChange={onChange}
                    />
                    <button
                    type="submit"
                    onClick={submitForm}>Search!</button>
                </form>

                <h4>Recent Searches</h4>
                <Saved />
            </Jumbotron>

            <Jumbotron>
                <h4>Results</h4>
                <Article />
            </Jumbotron>
        </div>
    );
};

export default Search;