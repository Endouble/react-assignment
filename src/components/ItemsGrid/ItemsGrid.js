import React from 'react';
import { Grid } from 'semantic-ui-react';

const ItemsGrid = (props) => {

  return <div>
    {props.items.length > 1?
      <Grid stackable={true}>
        <Grid.Row>
          <Grid.Column>
            <p> Character Card </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      :<p>No items to view yet...</p>
    }
  </div>
};

export default ItemsGrid;