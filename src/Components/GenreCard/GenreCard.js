import { Link } from 'react-router-dom';

const GenreCard = props => {
    return(
        <div className='movie-card'>
            <Link to={`/movies/${props.data?.id}`}>
                <img src={`https://image.tmdb.org/t/p/w300${props.data?.poster_path}`} alt={`{props.data.title} movie poster`}/>
            </Link>
        </div>
    )
}

export default GenreCard;