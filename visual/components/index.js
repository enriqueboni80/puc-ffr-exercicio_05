import styled from '@emotion/styled'

export const PageLayout = styled.body`
    margin:0px;
    background-color:#1C1C1C;
    &  a {
        text-decoration:none;
    }
`

export const Container = styled.div`
    padding-top: 30px;
    background:#1C1C1C;
    margin:auto;
    font-family: sans-serif;
    text-align: center;
  }
`
export const ListaFilmes = styled.div`
    display: grid;
    grid-template-columns: 200px 200px 200px 200px 200px;
    grid-gap: 20px;
    list-style: none;
    background-color:#1C1C1C;
    align-items: center;
    justify-content: center;
`
export const Article = styled.article`
    display: flex;
    flex-direction: column;
        & > img {
            width: 200px;
        }
        & > footer{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: -60px;
            opacity: 0.8;
            font-size: 15px;
            background-color: black;
            height: 60px;
        }
        &  a {
            color: white;
        }
`

export const ContainerFilmes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background:#1C1C1C;
    margin:auto;
    max-width: 1000px;
`

export const Filme = styled.div`
    background-color:#5e5555;
    border-radius: 3px;
    width: 800px;
    max-width: 800px;
    height: 1024px;
    max-height: 1024px;
    margin-top: 60px;
    padding: 20px;
    text-shadow: 0px 1px 1px #000;

    & > img {
        width: 90%;
        border-radius: 5px;
    }


`
export const FilmeTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 30px;
    color: white;
    font-size: 40px;
`

export const FilmeInfo = styled.div`
    color: white;
    margin-top: 25px;
    text-align: left;
    padding: 10px 30px;
    font-size: 20px;
`

export const FilmeBtnLink = styled.div`
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    background-color: black;

    & > a {
        color: white
    }
`