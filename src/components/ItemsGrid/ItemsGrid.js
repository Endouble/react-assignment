import React from 'react';
import { Grid } from 'semantic-ui-react';

const ItemsGrid = (props) => {

  return <div>
    {props.children.length > 0?
      <Grid stackable={true}>
        <Grid.Row>
          <Grid.Column>
            {props.children}
          </Grid.Column>
        </Grid.Row>
      </Grid>
      :<p>No items to view yet...</p>
    }
  </div>
};

export default ItemsGrid;