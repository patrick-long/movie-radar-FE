import MovieCard from '../../Components/MovieCard/MovieCard';

const MovieCollection = props => (
    <div className='movie-container' >
        {props?.data.map(result => 
            <MovieCard data={result.results} />
        )}
    </div>
)

export default MovieCollection; 