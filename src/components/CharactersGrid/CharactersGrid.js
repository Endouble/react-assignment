import React from 'react';

import { Grid } from 'semantic-ui-react';

import ItemsGrid from './../ItemsGrid';
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
        <Grid.Column>
          <ItemsGrid>
            {
              props.characters.map(character => 
                <CharactersCard name={character.name} >/</CharactersCard>
              )
            }
          </ItemsGrid>
        </Grid.Column>
      </Grid.Row>
    </Grid>

};

export default CharactersGrid;