import MoviesServices from '../../services/MoviesService'
import Link from 'next/link'
import { Container, ListaFilmes, Article, PageLayout } from '../../visual/components'
import axios from "axios"

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

//CONSUMINDO A API CRIADA!
const getPopularMovies = async () => {
    return await axios("http://localhost:3000/api/movies");
  }

Index.getInitialProps = async () => {
    const results = await getPopularMovies()
    return { movies: results.data }
}

export default Index