import React from 'react';

import './Brewery.css';

const brewery = (props) => (
    <div className="Card" onClick={props.clicked}>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.city}</h6>
            <p className="card-text">{props.country}</p>
        </div>
    </div>
);

export default brewery;