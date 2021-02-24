import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Article = () => {
    //Grab our articles from our Redux state
    const stories = useSelector((state) => state.searchArticle)

    return (
        <div>
            {stories.length > 0 ? (
                stories.map((story) => (
                    <Card>
                        <Card.Body>
                            <a href={story.url}>
                                <h5>{story.title}</h5>
                            </a>
                            <p>{story.story_text}</p>
                        </Card.Body>
                    </Card>
                ))
            ) : (
                <p>No Matching Articles</p>
            )}
        </div>
    );
};

export default Article;