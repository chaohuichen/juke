import React from 'react'
import AlbumRow from './AlbumRow'

function AllAlbums(props) {
  return (
    <div id="album" className="row wrap">
      {props.allAlbum.map(album => {
        return (
          <AlbumRow
            key={album.id}
            album={album} //data
          />
        )
      })}
    </div>
  )
}

export default AllAlbums
