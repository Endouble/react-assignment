import React from 'react';

const Grid = (props) => {
  return <div>
    {props.items.length === 0?
      <p>No items to view yet...</p>
    :<p> Hola </p>}
</div>
};

export default Grid;