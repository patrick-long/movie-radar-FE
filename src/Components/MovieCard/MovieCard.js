import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = (props) => (
    <>
        <div className='movie-card'>
            <Link to={`/movies/${props.data?.id}`}>
                <img className='poster-image'src={`https://image.tmdb.org/t/p/w300${props.data?.poster_path}`} alt={`{props.data.title} movie poster`}/>
            </Link>
        </div>
    </>
)

export default MovieCard;