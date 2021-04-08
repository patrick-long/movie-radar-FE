import './MovieCard.css';

const MovieCard = (props) => (
    <>
        {props.data.map(result => 
            <div className='movie-card'>
                <p>{result.title}</p>
                <img src={`https://image.tmdb.org/t/p/w300${result.poster_path}`} alt={`{result.title} movie poster`}/>
            </div>
        )}
    </>
)

export default MovieCard;