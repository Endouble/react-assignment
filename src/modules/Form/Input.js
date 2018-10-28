import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '../../styles/vars';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { value } = event.target;
        const { filterBy } = this.props.filter;
        this.props.updateFilter({
            value,
            filterBy,
        });
    }

    render() {
        const { filter } = this.props;
        return <StyledInput placeholder={`filter by: ${filter.filterBy}`} onChange={this.handleChange} />;
    }
}

/*
    Input Styles
*/
const StyledInput = styled.input`
    box-shadow: 0px -5px 0px ${colors.darkPurple};
    color: ${colors.darkPurple};
    margin-right: 15px;
    border-radius: 10px;
    border: none;
    padding: 10px;
`;

/*
    Input propTypes
*/

Input.propTypes = {
    updateFilter: PropTypes.func,
    filter: PropTypes.shape({
        filterBy: PropTypes.string,
    }),
};

Input.defaultProps = {
    updateFilter: null,
    filter: {},
};


export default Input;
