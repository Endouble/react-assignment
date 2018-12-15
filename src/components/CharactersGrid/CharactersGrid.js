import React from 'react';

import { Grid } from 'semantic-ui-react';

import ItemsGrid from './../ItemsGrid';
import Filters from './../Filters';

const CharactersGrid = (props) => {
   return <Grid>
      <Grid.Row>
      <Grid.Column>
        <Filters />
      </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <ItemsGrid items={[1, 2]} />
        </Grid.Column>
      </Grid.Row>
    </Grid>

};

export default CharactersGrid;