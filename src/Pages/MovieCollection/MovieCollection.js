import MovieCard from '../../Components/MovieCard/MovieCard';

const MovieCollection = props => {
    return(
        <>
            <h4>Your search results</h4>
            <MovieCard data={props.data} />
        </>
    )
}

export default MovieCollection; 