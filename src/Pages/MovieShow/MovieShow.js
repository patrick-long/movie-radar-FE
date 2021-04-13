import YouTube from 'react-youtube';

const MovieShow = props => {
    const specificMovie = props.data.find(movie => movie.id === parseInt(props.match.params.id));

    const opts = {
        playerVars: {
            autoplay: 1
        }
    }

    const onReady = e => {
        e.target.pauseVideo();
    }
    
    const rawDate = specificMovie?.release_date;
    const formattedDate = (dateString) => {
        const [year, month, day] = dateString.split('-');
        return new Date(year, month - 1, day).toLocaleDateString();
    }

    const genres = specificMovie?.genres.map(result => result.name);
    const formattedGenres = genres.join(', ');


        return(
        <div>
            <div className='movie-show'>
                <img src={`https://image.tmdb.org/t/p/w500${specificMovie?.backdrop_path}`} alt={`${specificMovie?.title} backdrop poster`} />
                <div className='movie-show-details'>
                    <h2 className='show-title'>{specificMovie?.title}</h2>
                    <p className='show-overview'>{specificMovie?.overview}</p>
                    <p className='show-released'>Released: {formattedDate(rawDate)}</p>
                    <p className='show-runtime'>Runtime:&nbsp; 
                    {parseInt(Math.floor(specificMovie?.runtime)/60)} hr {parseInt(specificMovie?.runtime)%60} min</p>
                    <div className='show-genres'>Genres:
                        <p>&nbsp;{formattedGenres}</p>
                    </div>
                </div>
            </div>
            <div className='media-plus-link'>
                <YouTube videoId={specificMovie?.videos.results[0].key} opts={opts} onReady={onReady} className='trailer' />
                <p className='show-amazon'>Search for <a href={`https://www.amazon.com/s?k=${specificMovie?.title}&i=instant-video&ref=nb_sb_noss`} target='_blank' rel='noreferrer'>{specificMovie?.title}</a> on Amazon</p> 
                <p className='show-homepage'><a href={specificMovie?.homepage} target='_blank' rel='noreferrer'>{specificMovie?.title}</a>&nbsp; homepage</p>
            </div>
        </div>
    )
}

export default MovieShow;