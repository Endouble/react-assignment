import React from 'react';

import { Grid } from 'semantic-ui-react';

import Filters from './../Filters';
import CharactersCard from './../CharacterCard';

const CharactersGrid = (props) => {
   return <Grid>
      <Grid.Row>
        <Grid.Column>
          <Filters />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid columns={4} stackable>

          <Grid.Row>
              {
                props.characters.map(character => 
                  <Grid.Column stretched>
                    <CharactersCard character={character} >/</CharactersCard>
                  </Grid.Column>
                )
              }
          </Grid.Row>
        </Grid>
      </Grid.Row>
    </Grid>

};

export default CharactersGrid;