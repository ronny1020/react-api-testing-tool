import { FETCH_DATA } from './actionTypes'

export const fetchData = (url) => {
  return async (dispatch) => {
    const response = await fetch(url)
    const data = await response.json()
    dispatch({
      type: FETCH_DATA,
      payload: data,
    })
  }
}
