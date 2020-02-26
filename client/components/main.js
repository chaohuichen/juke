import React from 'react'

import AllAlbums from './AllAlbums'
import SideBar from './Sidebar'
import Player from './Player'
import SingleAlbum from './SingleAlbums'
import {connect} from 'react-redux'
import {fetchAlbums, fetchAlbum} from '../store'

const audio = document.createElement('audio')

class DisconnectMain extends React.Component {
  constructor() {
    super()
    this.state = {
      // selectedAlbum: {},
      currentSong: {},
      isPlaying: false
    }
    this.selectAlbum = this.selectAlbum.bind(this)
    this.homeScreen = this.homeScreen.bind(this)
    this.start = this.start.bind(this)
    this.pause = this.pause.bind(this)
    this.toggle = this.toggle.bind(this)
    this.play = this.play.bind(this)
  }

  start(song) {
    console.log('it is starting')
    audio.src = song.audioUrl
    // audio.pause();
    audio.load()
    this.play()

    this.setState({currentSong: song})
  }
  pause() {
    audio.pause()
    this.setState({isPlaying: false})
  }

  play() {
    audio.play()
    this.setState({isPlaying: true})
    console.log('it is playing')
  }

  toggle(song) {
    console.log('toggle is clicked')
    console.log(this.state.currentSong)
    try {
      if (this.state.isPlaying) {
        this.pause()
      } else {
        this.start(song)
      }
    } catch (err) {
      console.log(err)
    }
  }
  componentDidMount() {
    console.log('fetching albums')
    this.props.getAlbums()
    console.log('after fetching')
  }

  selectAlbum(albumId) {
    // const response = await axios.get(`/api/Albums/${albumId}`)
    // const selectedAlbum = response.data

    // this.setState({selectedAlbum})
    this.props.getAlbum(albumId)
  }
  homeScreen() {
    // this.setState({selectedAlbum: {}})
  }

  render() {
    const {albums, selectedAlbum} = this.props

    // const {albums} = this.props.getAlbums()
    // console.log('the albums from store', this.props)
    return (
      <div id="main" className="row container">
        <SideBar homeFunc={this.homeScreen} />
        <div className="container">
          {selectedAlbum.id ? (
            <SingleAlbum
              album={selectedAlbum}
              isPlaying={this.state.isPlaying}
              currentSong={this.state.currentSong}
              start={this.start}
              pause={this.pause}
              toggle={this.toggle}
            />
          ) : (
            <AllAlbums
              allAlbum={albums} //state
              // selectAlbum={this.selectAlbum} //function
            />
          )}
        </div>
        <div id="player-container">
          <div id="player-controls">
            <Player />
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAlbums: () => dispatch(fetchAlbums())
  }
}
const mapStateToProps = state => {
  return {
    albums: state.albums,
    selectedAlbum: state.selectedAlbum
  }
}
const Main = connect(mapStateToProps, mapDispatchToProps)(DisconnectMain)

export default Main
