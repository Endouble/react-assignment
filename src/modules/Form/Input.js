import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { formElement } from '../../styles/mixins';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { value } = event.target;
        const { filterBy } = this.props.filter;
        this.props.handleChange({
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
    max-width: 60%;
    ${formElement()};
`;

/*
    Input propTypes
*/
Input.propTypes = {
    handleChange: PropTypes.func,
    filter: PropTypes.shape({
        filterBy: PropTypes.string,
    }),
};

Input.defaultProps = {
    handleChange: null,
    filter: {},
};


export default Input;
