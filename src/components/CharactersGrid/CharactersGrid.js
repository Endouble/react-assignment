import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Button, Divider } from 'semantic-ui-react';

import Filters from '../Filters';
import CharactersCard from '../CharacterCard';

const columnStyle = {
    marginBottom: '15px',
};

const CharactersGrid = (props) => {
    const loadNextCharacters = () => props.moreCallback(props.data.next);
    const loadPrevCharacters = () => props.moreCallback(props.data.previous);
    const { data } = props;
    return (
        <Grid>
            <Grid.Row id="filters-row">
                <Grid.Column>
                    <Filters {...props} />
                </Grid.Column>
            </Grid.Row>
            <Divider />
            { data
                ? (
                    <Grid.Row id="results-row">
                        <Grid columns={4} stackable>
                            <Grid.Row>
                                { data.results.map(character => (
                                    <Grid.Column key={character.name} style={columnStyle} stretched>
                                        <CharactersCard
                                            character={character}
                                            showCharacterModal={props.showCharacterCallback}
                                        />
                                    </Grid.Column>
                                ))
                                }
                            </Grid.Row>

                            <Divider />

                            { data.next || data.previous
                                ? (
                                    <Grid.Row id="actions">
                                        <Grid.Column>
                                            { data.previous
                                                ? (
                                                    <Button id="prev" secondary onClick={loadPrevCharacters}>
                                                        Previous
                                                    </Button>
                                                )
                                                : null
                                            }
                                        </Grid.Column>

                                        <Grid.Column>
                                            { data.next
                                                ? (
                                                    <Button id="next" primary onClick={loadNextCharacters}>
                                                        Next
                                                    </Button>
                                                )
                                                : null
                                            }
                                        </Grid.Column>
                                    </Grid.Row>
                                )
                                : null
                            }
                        </Grid>
                    </Grid.Row>
                )
                : null
            }
        </Grid>
    );
};

CharactersGrid.defaultProps = {
    data: null,
};

CharactersGrid.propTypes = {
    data: PropTypes.shape({
        next: PropTypes.string,
        previous: PropTypes.string,
        results: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
        })),
    }),
    moreCallback: PropTypes.func.isRequired,
    showCharacterCallback: PropTypes.func.isRequired,
};

export default CharactersGrid;
