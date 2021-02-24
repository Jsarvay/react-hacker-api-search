import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from 'react-redux';

const Saved = () => {
    const savedSearch = useSelector((state) => state.savedSearch);

    return (
        <div>
        {savedSearch.length > 0 ? (
            savedSearch.map((search) => (
                <Button>{search.query}</Button>
            ))
            ) : (
                <p>No Recent Searches</p>
            )};
        </div>
    )
}

export default Saved;