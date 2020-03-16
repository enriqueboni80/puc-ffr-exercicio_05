import MoviesServices from '../../../services/MoviesService'

export default (req, res) => {

    const getMovieJSON = async (movieID) => {
        const result = await MoviesServices.getByMovieId(movieID)
        return JSON.stringify({ movie: result.data })
    }

    const movieID = req.query.id
    const movieJSON = getMovieJSON(movieID)

    movieJSON.then((movie) => {
        res.status(200)
        res.setHeader('Content-Type', 'application/json')
        res.end(movie)
    })

}