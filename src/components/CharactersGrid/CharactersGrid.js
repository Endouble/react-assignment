import React from 'react';

import { Grid, Button } from 'semantic-ui-react';

import Filters from './../Filters';
import CharactersCard from './../CharacterCard';

const CharactersGrid = (props) => {
   return <Grid>
      <Grid.Row>
        <Grid.Column>
          <Filters />
        </Grid.Column>
      </Grid.Row>
      { props.data?
        <Grid.Row>
          <Grid columns={4} stackable>
            <Grid.Row>
                {
                  props.data.results.map(character => 
                    <Grid.Column stretched>
                      <CharactersCard character={character} >/</CharactersCard>
                    </Grid.Column>
                  )
                }
            </Grid.Row>
            { props.data.next?
              <Grid.Row>
                <Button primary>
                  Load more characters
                </Button>
              </Grid.Row>
              :null
            }
          </Grid>
        </Grid.Row>
        : null
      }
    </Grid>

};

export default CharactersGrid;