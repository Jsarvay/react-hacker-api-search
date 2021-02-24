import React from "react";
import { useSelector } from "react-redux";

const Saved = () => {
    //Grab our recent searches from our Redux state
    const savedSearch = useSelector((state) => state.addSearch);

    return (
        <div>
        {savedSearch.length > 0 ? (
            savedSearch.map((search) => (
                <p>{search.query}</p>
            ))
            ) : (
                <p>No Recent Searches</p>
            )}
        </div>
    )
}

export default Saved;