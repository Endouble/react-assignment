import React from 'react';

import { Button, Form } from 'semantic-ui-react'

const Filters = (props) => {
  const nameInputRef = React.createRef();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.filterCallback({
      name: nameInputRef.current.value
    })
  };

  return <Form onSubmit={handleFormSubmit} role="search">
    <Form.Field>
      <label>Search by character's name</label>
      <input ref={nameInputRef} id="name" placeholder="Eg. R2D2" />
    </Form.Field>
    <Button type='submit' primary>Search</Button>
  </Form>
};

export default Filters;