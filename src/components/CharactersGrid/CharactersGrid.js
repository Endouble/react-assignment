import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Button, Divider } from 'semantic-ui-react';

import Filters from './../Filters';
import CharactersCard from './../CharacterCard';

const CharactersGrid = (props) => {
  const loadNextCharacters = () => props.moreCallback(props.data.next);
  const loadPrevCharacters = () => props.moreCallback(props.data.previous);

   return <Grid>
      <Grid.Row id="filters-row">
        <Grid.Column>
          <Filters filterCallback={props.filterCallback}/>
        </Grid.Column>
      </Grid.Row>
      <Divider />
      { props.data?
        <Grid.Row id="results-row">
          <Grid columns={4} stackable>
            <Grid.Row>
                {
                  props.data.results.map((character, index) => 
                    <Grid.Column key={index} stretched>
                      <CharactersCard character={character} showCharacterModal={props.showCharacterCallback} />
                    </Grid.Column>
                  )
                }
            </Grid.Row>
            <Divider />
            { props.data.next || props.data.previous?
              <Grid.Row id="actions">
                {props.data.previous?
                  <Button id="prev" secondary onClick={loadPrevCharacters}>
                    Previous
                  </Button>
                  :null
                }
                {props.data.next?
                  <Button id="next" primary onClick={loadNextCharacters}>
                    Next
                  </Button>
                  :null
                }
              </Grid.Row>
              :null
            }
          </Grid>
        </Grid.Row>
        : null
      }
    </Grid>

};

CharactersGrid.propTypes = {
  data: PropTypes.shape({
    next: PropTypes.string,
    previous: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired
    }))
  }),
  moreCallback: PropTypes.func.isRequired,
  showCharacterCallback: PropTypes.func.isRequired
};

export default CharactersGrid;