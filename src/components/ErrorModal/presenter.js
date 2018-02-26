import React, { Component } from 'react';
import { Modal, Header, Button, Icon } from 'semantic-ui-react'

class ErrorModal extends React.Component {

  render() {
    const {errors, onCloseErrorModal} = this.props
    return (
      <Modal open={true} basic size='small'>
        <Header icon='meh' content="Oh something's wrong"/>
        <Modal.Content>
          {
            errors.map((error, key) => {
              return (
                <p key={key}>{error.message}</p>
              )
            })
          }
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' inverted onClick={onCloseErrorModal}>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default ErrorModal;