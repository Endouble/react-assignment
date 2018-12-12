import React from 'react';

import './Brewery.css';

const brewery = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <h2>{props.city}</h2>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

export default brewery;