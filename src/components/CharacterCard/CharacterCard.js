import React from 'react';

const CharacterCard = (props) => {
    return <React.Fragment>
        { props.name }
        
        <p> View More </p>
    </React.Fragment>
};

export default CharacterCard;