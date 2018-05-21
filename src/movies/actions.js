export const GET_MOVIES = 'GET_MOVIES'

export const getMovies = () => {
  return async function (dispatch) {
    const BaseUrl = 'https://api.themoviedb.org/3'
    const APIKey = 'api_key=bd0a7e9edaf44bb38b9df7f746364dac'
    const APIUrl = `${BaseUrl}/discover/movie?sort_by=popularity.desc&${APIKey}`
    const res = await fetch(APIUrl)
    const movies = await res.json()
    
    return dispatch({
      type: GET_MOVIES,
      payload: movies.results
    })
  } 
}
