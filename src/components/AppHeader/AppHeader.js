import React from 'react';

import { Header } from 'semantic-ui-react';

const headerStyle = {
  backgroundColor: '#000000',
  padding: '15px'
}

const AppHeader = () => {
  return <header style={headerStyle}>
    <Header as='h1' inverted>
      <Header.Content>
        Star Wars Characters
        <Header.Subheader>a list from a far far away galaxy</Header.Subheader>
      </Header.Content>
    </Header>
  </header>
};

export default AppHeader;