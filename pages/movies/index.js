import React, { useState, useEffect } from "react";
import MoviesServices from '../../services/MoviesService'
import Link from 'next/link'


const Index = (props) => {

    const moviesLocate = 'https://image.tmdb.org/t/p/w500/'

    return (
        <div class="container">
            <div class="lista-filmes">
                {props.movies.map((movie) => {
                    return (
                        <article class="filme" key={movie.id}>
                            <img src={`${moviesLocate}/${movie.poster_path}`} alt="capa" />
                            <div class="link">
                            <Link href="movies/[id]" as={`/movies/${movie.id}`}>{movie.title}</Link>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}


Index.getInitialProps = async () => {
    const results = await MoviesServices.getPopularMovies()
    return { movies: results.data.results }
}

export default Index