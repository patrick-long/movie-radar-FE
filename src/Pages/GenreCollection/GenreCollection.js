import GenreCard from '../../Components/GenreCard/GenreCard';

const GenreCollection = props => {
    return(
        <>
            <h4>Top results for ***</h4>
            <GenreCard data={props.data} />
        </>
    )
}

export default GenreCollection;