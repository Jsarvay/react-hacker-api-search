import { combineReducers } from "redux";
import { SAVE_SEARCH, SEARCH_ARTICLE } from "./actions";

//set up initialization of state
const initialState = {
    article: {},
    search: [],
  };

//Reducer for saving searches to the state, will return with default value of state if nothing is passed
const addSearch = ( state = initialState.search, action ) => {
    switch (action.type) {
        case "SAVE_SEARCH":
            return [...state, {id: action.id, query: action.query }];

        default:
            return state;
    };
};

//Reducer for searching for articles
const searchArticle = ( state = initialState.article, action ) => {
    switch (action.type) {
        case "SEARCH_ARTICLE":
            return action.results;

        default:
            return state;
    };
};

  
  export default combineReducers({
    addSearch, searchArticle
  });
  