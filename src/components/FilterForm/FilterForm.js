import React, { Component } from 'react';
import { Form, FormGroup, Input, FormFeedback } from 'reactstrap';
import PropTypes from 'prop-types';

import './FilterForm.scss';

class FilterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            showError: false,
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    // handles input change event
    onInputChange(event) {
        const { value } = event.target;
        const { handleSearch } = this.props;
        this.setState({
            inputValue: value,
            // show error if there is value and its length is less than 3 chars
            showError: !!value && value.length < 3,
        });
        // call handleSearch in App
        handleSearch(value);
    }

    render() {
        const { inputValue, showError } = this.state;
        return (
            <Form className="FilterForm">
                <h1 className="FilterForm__Title">
                    Giphy Search App
                </h1>
                <FormGroup>
                    <Input
                        onChange={this.onInputChange}
                        value={inputValue}
                        invalid={showError}
                        id="searchInput"
                        type="text"
                        className="FilterForm__Input"
                        placeholder="Search Giphs"
                    />
                    {showError && (
                        <FormFeedback>
                            Search must be atleast 3 characters long
                        </FormFeedback>
                    )}
                </FormGroup>
            </Form>
        );
    }
}

FilterForm.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};

export default FilterForm;
