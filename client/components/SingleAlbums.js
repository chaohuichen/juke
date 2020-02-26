import React from 'react'

// function audioPlay(url) {
//   const audio = document.createElement('audio');
//   const playElement = document.getElementById('playbutton');

//   audio.src = url;
//   audio.load();
//   audio.play();
//   if (audio.play()) {
//     playElement.classList.remove('fa-play-circle');
//     playElement.classList.add('fa-pause-circle');
//   }
//   console.log('Its Playing!');
// }

function SingleAlbums(props) {
  return (
    <div id="single-album" className="column">
      <div className="album">
        <a>
          <img src={props.album.artworkUrl} />
          <p>{props.album.name}</p>
          <small>{props.album.artist.name}</small>
        </a>
      </div>
      <table id="songs">
        <tbody>
          <tr className="gray">
            <td />
            <td>#</td>
            <td>Name</td>
            <td>Artist</td>
            <td>Genre</td>
          </tr>

          {props.album.songs.map(function(song) {
            const isCurrentlyPlaying =
              props.currentSong.id === song.id && props.isPlaying
            return (
              <tr
                key={song.id}
                className={song.id === props.currentSong.id ? 'active' : ''}
              >
                <td>
                  <i
                    onClick={() => {
                      props.toggle(song)
                    }}
                    className={
                      isCurrentlyPlaying
                        ? 'fa fa-stop-circle'
                        : 'fa fa-play-circle'
                    }
                  />
                </td>
                <td>{song.id}</td>
                <td>{song.name}</td>
                <td>{props.album.artist.name}</td>
                <td>{song.genre}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default SingleAlbums
