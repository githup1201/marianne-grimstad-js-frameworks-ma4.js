import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

function RecipeItem({ title, thumbnail }) {
    return (
            <Card>
                    <Card.Img variant="top" src={thumbnail} />
                    <Card.Body>
                        <Card.Title><b>{title}</b></Card.Title>
                    </Card.Body>
            </Card>
    );
}

RecipeItem.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
};

export default RecipeItem;