import React, {Component} from 'react';
import {Card, Image} from 'semantic-ui-react'

class Browse extends React.Component {

  componentDidMount() {
    this.props.onFetchFeaturedPlaylists()
  }

  render() {
    const {featuredPlaylists} = this.props
    return (
      <div>
        <Card.Group centered >
          {
            featuredPlaylists.map((playlist, key) => {
              return (
                <Card key={key} color='teal'>
                  <Image src={playlist.images[0].url}/>
                  <Card.Content>
                    <Card.Header>
                      {playlist.name}
                    </Card.Header>
                    <Card.Meta>
                      <span className='date'>created by {playlist.owner.display_name}</span><span>{playlist.tracks.total} track{playlist.tracks.total > 1 ? 's': ''}</span>
                    </Card.Meta>
                  </Card.Content>
                </Card>
              )
            })
          }
        </Card.Group>
      </div>
    )
  }
}

export default Browse;