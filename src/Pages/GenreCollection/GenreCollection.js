import GenreCard from '../../Components/GenreCard/GenreCard';

const GenreCollection = props => {
    const genres = ['action', 'adventure', 'comedy', 'crime', 'drama', 'family', 'fantasy', 'history', 'horror', 'music', 'mystery', 'romance', 'science fiction', 'thriller', 'war', 'western'];

    const searchTitle = () => {
        if (props.data.length > 320) {
            return 'Your genre search results'
        } else {
            return ''
        }
    }

    return(
        <>
            <h4>{searchTitle()}</h4>
            <div className="genre-container">
                <GenreCard data={props.data.slice(320, 1000)} />
            </div>
            <h4>Top results for {genres[0]} genre</h4>
            <div className="genre-container">
                <GenreCard data={props.data.slice(0, 20)} />
            </div>
            <h4>Top results for {genres[1]} genre</h4>
            <div className="genre-container">
                <GenreCard data={props.data.slice(20, 40)} />
            </div>
            <h4>Top results for {genres[2]} genre</h4>
            <div className="genre-container">
                <GenreCard data={props.data.slice(40, 60)} />
            </div>
            <h4>Top results for {genres[3]} genre</h4>
            <div className="genre-container">
                <GenreCard data={props.data.slice(60, 80)} />
            </div>
            <h4>Top results for {genres[4]} genre</h4>
            <div className="genre-container">
                <GenreCard data={props.data.slice(80, 100)} />
            </div>
            <h4>Top results for {genres[5]} genre</h4>
            <div className="genre-container">
                <GenreCard data={props.data.slice(100, 120)} />
            </div>
            <h4>Top results for {genres[6]} genre</h4>
            <div className="genre-container">
                <GenreCard data={props.data.slice(120, 140)} />
            </div>
            <h4>Top results for {genres[7]} genre</h4>
            <div className="genre-container">
                <GenreCard data={props.data.slice(140, 160)} />
            </div>
            <h4>Top results for {genres[8]} genre</h4>
            <div className="genre-container">
                <GenreCard data={props.data.slice(160, 180)} />
            </div>
            <h4>Top results for {genres[9]} genre</h4>
            <div className="genre-container">
                <GenreCard data={props.data.slice(180, 200)} />
            </div>
            <h4>Top results for {genres[10]} genre</h4>
            <div className="genre-container">
                <GenreCard data={props.data.slice(200, 220)} />
            </div>
            <h4>Top results for {genres[11]} genre</h4>
            <div className="genre-container">
                <GenreCard data={props.data.slice(220, 240)} />
            </div>
            <h4>Top results for {genres[12]} genre</h4>
            <div className="genre-container">
                <GenreCard data={props.data.slice(240, 260)} />
            </div>
            <h4>Top results for {genres[13]} genre</h4>
            <div className="genre-container">
                <GenreCard data={props.data.slice(260, 280)} />
            </div>
            <h4>Top results for {genres[14]} genre</h4>
            <div className="genre-container">
                <GenreCard data={props.data.slice(280, 300)} />
            </div>
            <h4>Top results for {genres[15]} genre</h4>
            <div className="genre-container">
                <GenreCard data={props.data.slice(300, 320)} />
            </div>
        </>
    )
}

export default GenreCollection;