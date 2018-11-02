import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { formElement } from '../../styles/mixins';

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
        const { options } = this.props;
        return (
            <StyledSelect onChange={this.handleChange}>
                {options.map(option => <option key={`${option}-opt`} value={option}>{option}</option>)}
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
    options: PropTypes.arrayOf(PropTypes.string),
};

Select.defaultProps = {
    handleChange: null,
    filter: {},
    options: [],
};


export default Select;
