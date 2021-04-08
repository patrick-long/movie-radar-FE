const MovieShow = props => {
    const specificMovie = props.data.find(movie => movie.id === parseInt(props.match.params.id));
    console.log(specificMovie);
    return(
        <div className='movie-show'>
            <img src={`https://image.tmdb.org/t/p/w500${specificMovie.backdrop_path}`} alt={`${specificMovie.title} background photo`}/> 
            <h2>{specificMovie.title}</h2>
            <p>{specificMovie.overview}</p>
            <p>Released: {specificMovie.release_date}</p>
            <p>Official rating: {specificMovie.vote_average}/10</p>
        </div>
    )
}

export default MovieShow;