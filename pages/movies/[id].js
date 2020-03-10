import { useRouter } from 'next/router'
import MoviesServices from '../../services/MoviesService'
import Link from 'next/link'

const Index = async () => {
    const router = useRouter()
    const movieID = router.query.id
    const result = await MoviesServices.getByMovieId(movieID)
    const movie = result.data
    console.log(movie.title)

    return (
        <div className="teste">
            {movie.title}
        </div> 
    )
}

Index.getInitialProps = async () => {
    return {}
}


export default Index
