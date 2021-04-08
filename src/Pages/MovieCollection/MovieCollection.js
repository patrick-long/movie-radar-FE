import MovieCard from '../../Components/MovieCard/MovieCard';

const MovieCollection = props => (
    <div className='movie-container' >
        {props?.data.map(result => 
            <MovieCard data={result} />
        )}
    </div>
)

export default MovieCollection; 