import axios from 'axios'
import history from '../history'

//action type
const GET_ALBUMS = 'GET_ALBUMS'

//inital state
const initalState = []

//action creator
const getAlbums = albums => {
  return {
    type: GET_ALBUMS,
    albums
  }
}

//thunk creator
export const fetchAlbums = () => async dispatch => {
  try {
    console.log('in the thunk')
    const {data} = await axios.get('/api/albums')

    dispatch(getAlbums(data))
  } catch (error) {
    console.error(error)
  }
}
//reducer
export default function(state = initalState, action) {
  switch (action.type) {
    case GET_ALBUMS:
      return action.albums
    default:
      return state
  }
}
