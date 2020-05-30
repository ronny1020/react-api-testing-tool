import { FETCH_DATA } from '../actions/actionTypes'

const initialState = {
  data: undefined,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: action.payload,
      }

    default:
      return state
  }
}
