import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
    return(
        <>
            <div className='movie-container'>
                {props.data?.map((movie, idx) => (
                    <div className='movie-card' key={idx}>
                        <Link to={`/movies/${movie?.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w300${movie?.poster_path}`} alt={`{props.data.title} movie poster`} className='poster-image' />
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MovieCard;