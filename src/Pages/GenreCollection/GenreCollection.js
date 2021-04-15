import GenreCard from '../../Components/GenreCard/GenreCard';

const GenreCollection = props => {
    const genres = ['action', 'adventure', 'comedy', 'crime', 'drama', 'family', 'fantasy', 'history', 'horror', 'music', 'mystery', 'romance', 'science fiction', 'thriller', 'war', 'western'];

    const searchTitle = () => {
        if (props.data.length > 320) {
            return 'Your search results'
        } else {
            return ''
        }
    }

    return(
        <>
            <div className="genre-container">
                <h4>{searchTitle()}</h4>
                <GenreCard data={props.data.slice(320, 1000)} />
            </div>
            <div className="genre-container">
                <h4>Top results for {genres[0]} genre</h4>
                <GenreCard data={props.data.slice(0, 20)} />
            </div>
            <div className="genre-container">
                <h4>Top results for {genres[1]} genre</h4>
                <GenreCard data={props.data.slice(20, 40)} />
            </div>
            <div className="genre-container">
                <h4>Top results for {genres[2]} genre</h4>
                <GenreCard data={props.data.slice(40, 60)} />
            </div>
            <div className="genre-container">
                <h4>Top results for {genres[3]} genre</h4>
                <GenreCard data={props.data.slice(60, 80)} />
            </div>
            <div className="genre-container">
                <h4>Top results for {genres[4]} genre</h4>
                <GenreCard data={props.data.slice(80, 100)} />
            </div>
            <div className="genre-container">
                <h4>Top results for {genres[5]} genre</h4>
                <GenreCard data={props.data.slice(100, 120)} />
            </div>
            <div className="genre-container">
                <h4>Top results for {genres[6]} genre</h4>
                <GenreCard data={props.data.slice(120, 140)} />
            </div>
            <div className="genre-container">
                <h4>Top results for {genres[7]} genre</h4>
                <GenreCard data={props.data.slice(140, 160)} />
            </div>
            <div className="genre-container">
                <h4>Top results for {genres[8]} genre</h4>
                <GenreCard data={props.data.slice(160, 180)} />
            </div>
            <div className="genre-container">
                <h4>Top results for {genres[9]} genre</h4>
                <GenreCard data={props.data.slice(180, 200)} />
            </div>
            <div className="genre-container">
                <h4>Top results for {genres[10]} genre</h4>
                <GenreCard data={props.data.slice(200, 220)} />
            </div>
            <div className="genre-container">
                <h4>Top results for {genres[11]} genre</h4>
                <GenreCard data={props.data.slice(220, 240)} />
            </div>
            <div className="genre-container">
                <h4>Top results for {genres[12]} genre</h4>
                <GenreCard data={props.data.slice(240, 260)} />
            </div>
            <div className="genre-container">
                <h4>Top results for {genres[13]} genre</h4>
                <GenreCard data={props.data.slice(260, 280)} />
            </div>
            <div className="genre-container">
                <h4>Top results for {genres[14]} genre</h4>
                <GenreCard data={props.data.slice(280, 300)} />
            </div>
            <div className="genre-container">
                <h4>Top results for {genres[15]} genre</h4>
                <GenreCard data={props.data.slice(300, 320)} />
            </div>
        </>
    )
}

export default GenreCollection;