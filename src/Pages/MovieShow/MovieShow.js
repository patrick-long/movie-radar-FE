const MovieShow = props => {
    const getSpecificMovieData = async () => {
        const movie = await fetch(`http://localhost:3001/api/movies/${props?.match.params.id}`).then(res => res.json());
        console.log(movie);
    }
    getSpecificMovieData();
    const specificMovie = props.data.find(movie => movie.id === parseInt(props.match.params.id));
    return(
        <div className='movie-show'>
            <img src={`https://image.tmdb.org/t/p/w500${specificMovie?.backdrop_path}`} alt={`${specificMovie?.title} background`}/> 
            <h2>{specificMovie?.title}</h2>
            <p>{specificMovie?.overview}</p>
            <p>Released: {specificMovie?.release_date}</p>
            <p>Official rating: {specificMovie?.vote_average}/10</p>
        </div>
    )
}

export default MovieShow;