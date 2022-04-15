import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className="card col-3">
            <img src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to={"/card/" + props.id} className="btn btn-primary">Подробнее</Link>
            </div>
        </div>
    );
}

export default Card;
