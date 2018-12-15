import React from 'react';

import { Grid } from 'semantic-ui-react';

import CharacterGrid from './../Grid';
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
        <CharacterGrid items={props.characters} />
      </Grid.Column>
     </Grid.Row>
  </Grid>
};

export default CharactersGrid;