import React from 'react';
import { Grid } from 'semantic-ui-react';

const ItemsGrid = (props) => {

  return <div>
    {props.children.length > 0?
      <Grid stackable columns={4}>
          <Grid.Column  stretched>
            {props.children}
          </Grid.Column>
      </Grid>
      :<p>No items to view yet...</p>
    }
  </div>
};

export default ItemsGrid;