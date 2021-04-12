import YouTube from 'react-youtube';

const MovieShow = props => {
    const specificMovie = props.data.find(movie => movie.id === parseInt(props.match.params.id));

    const opts = {
        // height: '100%',
        // width: '100%',
        playerVars: {
            autoplay: 1
        }
    }

    const onReady = e => {
        e.target.pauseVideo();
    }

        return(
        <div>
            <div className='movie-show'>
                <img src={`https://image.tmdb.org/t/p/w500${specificMovie?.backdrop_path}`} alt={`${specificMovie?.title} backdrop poster`} />
                <div className='movie-show-details'>
                    <h2 className='show-title'>{specificMovie?.title}</h2>
                    <p className='show-overview'>{specificMovie?.overview}</p>
                    <p className='show-released'>Released: {specificMovie?.release_date}</p>
                    <p className='show-runtime'>Runtime: {specificMovie?.runtime} minutes</p>
                    <div className='show-genres'>Genres:
                        {specificMovie?.genres?.map(result => (
                            <p>&nbsp;&nbsp;{result.name}</p>
                        ))}
                    </div>
                </div>
            </div>
            <div className='media-plus-link'>
                <YouTube videoId={specificMovie?.videos.results[0].key} opts={opts} onReady={onReady} className='trailer' />
                <p className='show-homepage'><a href={specificMovie?.homepage} target='_blank' rel='noreferrer'>{specificMovie?.title}</a>&nbsp; homepage</p>
            </div>
        </div>
    )
}

export default MovieShow;