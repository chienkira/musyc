import React, { Component } from 'react';
import { Message, Icon, Tab, Header, List, Image} from 'semantic-ui-react'

class Library extends Component {

  componentDidMount() {
    this.props.onFetchLibrary()
  }

  render() {
    const {playlists} = this.props

    const playlistsTab = (
      <div>
        <Header as='h2'>
          <Header.Content>Your saved playlists</Header.Content>
        </Header>
        <List selection verticalAlign='middle' size="large">
        {
          playlists.map((playlist, key) => {
            return (
              <List.Item key={key}>
                <Image size='small' src={playlist.images[0].url}/>
                <List.Content>
                  <List.Header>{playlist.name}</List.Header>
                  <List.Description>{playlist.tracks.total} track{playlist.tracks.total > 1 ? 's' : ''}</List.Description>
                </List.Content>
              </List.Item>
            )
          })
        }
        </List>
      </div>
    )
    const albumsTab = (
      <Message icon negative>
        <Icon name='cogs' loading />
        <Message.Content>
          <Message.Header>Just one second</Message.Header>
          We are developing this content for you.
        </Message.Content>
      </Message>
    )

    return (
      <div>
        <Tab panes={[
          { menuItem: 'Playlists', render: () => <Tab.Pane>{playlistsTab}</Tab.Pane> },
          { menuItem: 'Albums', render: () => <Tab.Pane>{albumsTab}</Tab.Pane> }
        ]} />
      </div>
    )
  }
}

export default Library;
