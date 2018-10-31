import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { formElement } from '../../styles/mixins';

import { availableFilters } from '../../context';

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { value } = this.props.filter;
        const filterBy = event.target.value;
        this.props.handleChange({
            value,
            filterBy,
        });
    }

    render() {
        return (
            <StyledSelect onChange={this.handleChange}>
                {availableFilters.map(filter => <option value={filter}>{filter}</option>)}
            </StyledSelect>
        );
    }
}

/*
    Select Styles
*/
const StyledSelect = styled.select`
    ${formElement()};
`;

/*
    Select propTypes
*/
Select.propTypes = {
    handleChange: PropTypes.func,
    filter: PropTypes.shape({
        value: PropTypes.string,
    }),
};

Select.defaultProps = {
    handleChange: null,
    filter: {},
};


export default Select;
