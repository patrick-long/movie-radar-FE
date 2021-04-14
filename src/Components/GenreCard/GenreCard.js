import { Link } from 'react-router-dom';

const GenreCard = props => {
    return(
        <>
            <div className='genre-container'>
                {props.data?.map(movie => (
                    <div className='movie-card'>
                        <Link to={`/movies/${movie?.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w300${movie?.poster_path}`} alt={`{props.data.title} movie poster`}/>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default GenreCard;