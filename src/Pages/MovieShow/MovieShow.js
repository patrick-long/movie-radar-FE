const MovieShow = props => {
    const specificMovie = props.data.find(movie => movie.id === parseInt(props.match.params.id));
    return(
        <div className='movie-show'>
            <img src={`https://image.tmdb.org/t/p/w500${specificMovie?.backdrop_path}`} alt={`${specificMovie?.title} backdrop poster`} />
            <div className='movie-show-details'>
                <h2 className='show-title'>{specificMovie?.title}</h2>
                <p className='show-overview'>{specificMovie?.overview}</p>
                <p className='show-released'>Released: {specificMovie?.release_date}</p>
                <p className='show-runtime'>Runtime: {specificMovie?.runtime} minutes</p>
                <p className='show-genres'>Genres:</p>
                {specificMovie?.genres?.map(result => (
                    <p>{result.name}</p>
                ))}
            </div>
            <p className='show-trailer'>Click <a href={`https://www.youtube.com/watch?v=${specificMovie?.videos?.results[0].key}`} target='_blank' rel='noreferrer'>here</a> to see the official trailer</p>
            <p className='show-homepage'>Click <a href={specificMovie?.homepage} target='_blank' rel='noreferrer'>here</a> to go to this movie's homepage</p>
        </div>
    )
}

export default MovieShow;