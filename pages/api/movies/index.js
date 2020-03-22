import MoviesServices from '../../../services/MoviesService'

const Index = (req, res) => {

  /* const results = await MoviesServices.getPopularMovies()
  return { movies: results.data.results } */

  const getMoviesJSON = async () => {
    const results = await MoviesServices.getPopularMovies()
    return JSON.stringify(results.data.results)
  }

  const moviesJSON = getMoviesJSON()
  moviesJSON.then((movies) => {
    res.status(200)
    res.setHeader('Content-Type', 'application/json')
    res.end(movies)
  })
}

export default Index