import axios from 'axios'

const GET_ALBUM = 'GET_ALBUM'

const getAlbum = album => ({type: GET_ALBUM, album})

export const fetchAlbum = albumId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/Albums/${albumId}`)
    dispatch(getAlbum(data))
  } catch (error) {
    console.error(error)
  }
}
const album = {}

export default function(state = album, action) {
  switch (action.type) {
    case GET_ALBUM:
      return action.album
    default:
      return state
  }
}
