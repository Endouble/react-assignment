import React from 'react';

import { Grid } from 'semantic-ui-react';

import CharacterGrid from './../Grid';
import Filters from './../Filters';

const CharactersGrid = () => {
   return <Grid>
     <Grid.Row>
      <Filters />
     </Grid.Row>
     
     <Grid.Row>
      <CharacterGrid />
     </Grid.Row>
  </Grid>
};

export default CharactersGrid;