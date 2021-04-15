import { Link } from 'react-router-dom';

const GenreCard = props => {

    return(
        <>
            {props.data?.map((movie, idx) => (
                <div className='movie-card' key={idx}>
                    <Link to={`/movies/genres/${movie?.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w300${movie?.poster_path}`} alt={`{props.data.title} movie poster`} className='poster-image' />
                    </Link>
                </div>
            ))}
        </>
    )
}

export default GenreCard;