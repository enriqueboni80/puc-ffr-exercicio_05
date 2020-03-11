import MoviesServices from '../../services/MoviesService'
import Link from 'next/link'
import { Container, ListaFilmes, Article, PageLayout } from '../../visual/components'

const Index = (props) => {

    const moviesLocate = 'https://image.tmdb.org/t/p/w500/'

    return (
        <PageLayout>
            <Container>
                <ListaFilmes>
                    {props.movies.map((movie) => {
                        return (
                            <Article key={movie.id}>
                                <img src={`${moviesLocate}/${movie.poster_path}`} alt="capa" />
                                <footer>
                                    <Link href="movies/[id]" as={`/movies/${movie.id}`}>{movie.title}</Link>
                                </footer>
                            </Article>
                        )
                    })}
                </ListaFilmes>
            </Container>
        </PageLayout>
    )
}

Index.getInitialProps = async () => {
    const results = await MoviesServices.getPopularMovies()
    return { movies: results.data.results }
}

export default Index