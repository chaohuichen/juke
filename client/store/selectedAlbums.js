import axios from 'axios'

const GET_ALBUM = 'GET_ALBUM'
const REMOVE_ALBUM = 'REMOVE_ALBUM'
const getAlbum = album => ({type: GET_ALBUM, album})
const removedAlbum = () => ({type: REMOVE_ALBUM})

export const fetchAlbum = albumId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/Albums/${albumId}`)
    dispatch(getAlbum(data))
  } catch (error) {
    console.error(error)
  }
}
export const removeAlbum = () => dispatch => {
  dispatch(removedAlbum())
}
const album = {}

export default function(state = album, action) {
  switch (action.type) {
    case GET_ALBUM:
      return action.album
    case REMOVE_ALBUM:
      return album
    default:
      return state
  }
}
