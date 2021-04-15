import './MovieCard.css';
import { Link } from 'react-router-dom';
// import Slider from 'react-slick';

const MovieCard = (props) => {

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 5,
    //     slidesToScroll: 5
    // }
    
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