import { useState, useEffect } from 'react'; 

const MovieShow = props => {

    const [getSpecificMovie, setSpecificMovie] = useState({
        specificData: []
    })

    const getAppData = async () => {
        try {
            const movie = await fetch(`https://api.themoviedb.org/3/movie/${props?.match.params.id}?api_key=f77abf10302324946dc6789091d8abcd&language=en-US&append_to_response=videos`).then(res => res.json());

            setSpecificMovie({
                specificData: movie
            })
        } catch (error) {
            console.log(error);
        }
    }
    console.log(getSpecificMovie.specificData);
    
    useEffect(() => {
        getAppData();
    }, [])
    
    return(
        <div className='movie-show'>
            <img src={`https://image.tmdb.org/t/p/w500${getSpecificMovie.specificData.backdrop_path}`} alt={`${getSpecificMovie.specificData.title} backdrop poster`} />
            <h2 className='show-title'>{getSpecificMovie.specificData.title}</h2>
            <p className='show-overview'>{getSpecificMovie.specificData.overview}</p>
            <p className='show-released'>Released: {getSpecificMovie.specificData.release_date}</p>
            <p className='show-runtime'>Runtime: {getSpecificMovie.specificData.runtime} minutes</p>
            <p className='show-genres'>Genres:</p>
            {getSpecificMovie.specificData.genres?.map(result => (
                <p>{result.name}</p>
            ))}
            <p className='show-trailer'>Click <a href={`https://www.youtube.com/watch?v=${getSpecificMovie.specificData.videos?.results[0].key}`} target='_blank' rel='noreferrer'>here</a> to see the official trailer</p>
            <p className='show-homepage'>Click <a href={getSpecificMovie.specificData.homepage} target='_blank' rel='noreferrer'>here</a> to go to this movie's homepage</p>
        </div>
    )
}

export default MovieShow;