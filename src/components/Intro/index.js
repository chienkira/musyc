import React from 'react'
import { Header, Step, Icon } from 'semantic-ui-react'

export default Intro => {
  return (
    <div>
      <Header as='h2' disabled>
        Hi friend!
      </Header>
      <Step.Group size='mini' unstackable>
        <Step disabled>
          <Icon name='spotify' />
          <Step.Content>
            <Step.Title>Login with you Spotify account</Step.Title>
          </Step.Content>
        </Step>
        <Step disabled>
          <Icon name='music' />
          <Step.Content>
            <Step.Title>Enjoy your musyc</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>
    </div>
  )
}