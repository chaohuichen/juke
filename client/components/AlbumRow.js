import React from 'react'
import {connect} from 'react-redux'
import {fetchAlbum} from '../store'

const DisconnectAlbumRow = props => {
  return (
    <div
      className="album"
      onClick={() => {
        console.log('clicked', props.getAlbum)
        props.getAlbum(props.album.id)
      }}
    >
      <a>
        <img src={props.album.artworkUrl} />
        <p>{props.album.name}</p>
        <small>{props.album.artist.name}</small>
      </a>
    </div>
  )
}
const mapDispatchToProp = dispatch => {
  return {
    getAlbum: id => dispatch(fetchAlbum(id))
  }
}
const AlbumRow = connect(null, mapDispatchToProp)(DisconnectAlbumRow)

export default AlbumRow
