import MoviesServices from '../../services/MoviesService'
import Link from 'next/link'
import { PageLayout, ContainerFilmes, Filme, FilmeTitle, FilmeInfo, FilmeBtnLink, FilmeImage } from '../../visual/components'

const Index = (props) => {

    const moviesURL = 'https://image.tmdb.org/t/p/w500/'

    return (
        <PageLayout>
            <ContainerFilmes>
                <Filme>
                    <FilmeTitle>
                        {props.movie.title}
                    </FilmeTitle>
                    <FilmeImage>
                        <img src={`${moviesURL}/${props.movie.backdrop_path}`} alt="capa" />
                    </FilmeImage>
                    <FilmeInfo>
                        <p>
                            {props.movie.overview}
                        </p>
                        <FilmeBtnLink>
                            <Link target="_blank" href={props.movie.homepage}>Acesse a pagina do filme</Link>
                        </FilmeBtnLink>
                    </FilmeInfo>
                </Filme>
            </ContainerFilmes>
        </PageLayout>
    )
}

Index.getInitialProps = async ({ query }) => {
    const movieID = query.id
    const result = await MoviesServices.getByMovieId(movieID)
    return { movie: result.data }
}

export default Index
