import GenreCard from '../../Components/GenreCard/GenreCard';

const GenreCollection = props => {
    return(
        <div className='movie-container' >
            {props?.data.map(result => 
                <MovieCard data={result} />
            )}
        </div>
    )
}

export default GenreCard;