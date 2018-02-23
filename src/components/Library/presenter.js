import React, { Component } from 'react';
import { Message, Icon } from 'semantic-ui-react'

class Library extends React.Component {

  render() {
    return (
      <div>
        <Message icon negative>
          <Icon name='cogs' loading />
          <Message.Content>
            <Message.Header>Just one second</Message.Header>
            We are developing this content for you.
          </Message.Content>
        </Message>
      </div>
    )
  }
}

export default Library;