import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import './App.css';
import MovieCollection from './Pages/MovieCollection/MovieCollection';
import GenreCollection from './Pages/GenreCollection/GenreCollection';
import MovieShow from './Pages/MovieShow/MovieShow';
import GenreShow from './Pages/GenreShow/GenreShow';
import facebook from '../src/imgs/fb-favicon.png';
import instagram from '../src/imgs/insta-favicon.png';
import twitter from '../src/imgs/twitter-favicon.png';
import youtube from '../src/imgs/youtube-favicon.png';

function App() {

  const [getMovies, setMovies] = useState({
    movieData: [],
    genreData: [],
    searchNewMovie: {
      title: ''
    },
    searchNewGenre: {
      genre: ''
    }
  });

  const getAppData = async () => {
    try {
      const allMovies =  await fetch(`http://localhost:3001/api/movies/`).then(res => res.json());
      const genreMovies = await fetch(`http://localhost:3001/api/movies/genres`).then(res => res.json());

      setMovies({
        movieData: [
          ...allMovies,
        ],
        genreData: [
          ...genreMovies
        ]
      })
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppData();
  }, []); 

  const handleChangeMovie = e => {
    setMovies(prevState => ({
      ...prevState,
      searchNewMovie: {
        ...prevState.searchNewMovie,
        [e.target.name]: e.target.value
      }
    }))
  }

  const searchMovie = async e => {
    e.preventDefault();
    try {
      const BASE_URL = 'http://localhost:3001/api/movies';
      await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json'
        },
        body: JSON.stringify(getMovies.searchNewMovie)
      }).then(res => res.json()).then(() => getAppData());
  
      setMovies(prevState => ({
        movieData: [...prevState?.movieData],
        genreData: [...prevState?.genreData],
        searchNewMovie: {
          title: ''
        }
      }))
    } catch (error) {
      console.log(error);
    }
  }

  const handleChangeGenre = e => {
    setMovies(prevState => ({
      ...prevState,
      searchNewGenre: {
        ...prevState.searchNewGenre,
        [e.target.name]: e.target.value
      }
    }))
  }

  const searchGenre = async e => {
    e.preventDefault();
    try {
      const BASE_URL = 'http://localhost:3001/api/movies/genres';
      await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json'
        },
        body: JSON.stringify(getMovies.searchNewGenre)
      }).then(res => res.json()).then(() => getAppData());
  
      setMovies(prevState => ({
        moviedata: [...prevState?.movieData],
        genreData: [...prevState?.genreData],
        searchNewGenre: {
          genre: ''
        }
      }))
    } catch (error) {
      console.log(error);
    }
  }

  console.log(getMovies);

  return (
    <div className="App">
      <header className="App-header">
        <Link to='/'>
          <h1 id='header-name'>M<span><small>OVIE RADAR</small></span></h1>
        </Link>
        <Switch>
          <Route exact path='/' render={props => 
            <>
              <Link to='/' className='header-link'>
                <h5>Search</h5>
              </Link>
              <Link to='/genres' className='header-link'>
                <h5>Genres</h5>
              </Link>
              <form onSubmit={searchMovie}>
                <input className='form-control' type='text' name='title' placeholder='Search for a new movie' value={getMovies.searchNewMovie?.title} onChange={handleChangeMovie}/>
                <button type='submit' className='btn btn-primary'>Submit</button>
              </form>
            </>
          } />
          <Route exact path='/genres' render={props => 
            <>
              <Link to='/' className='header-link'>
                <h5>Search</h5>
              </Link>
              <Link to='/genres' className='header-link'>
                <h5>Genres</h5>
              </Link>
              <form onSubmit={searchGenre}>
                <input className='form-control' type='text' name='genre' placeholder='Search for a genre' value={getMovies.searchNewGenre?.genre} onChange={handleChangeGenre}/>
                <button type='submit' className='btn btn-primary'>Submit</button>
              </form>
            </>
          } /> 
        </Switch>
        <Link to='/logout'>
          <h5 className='logout'>Log out</h5>
        </Link>
      </header>
      <Switch>
        <Route exact path='/' render={props => 
          <MovieCollection data={getMovies?.movieData} />
        } />
        <Route exact path='/genres' render={props => 
          <GenreCollection data={getMovies?.genreData} />
        } />
        <Route exact path='/movies/:id' render={props => (
          <>
            <MovieShow data={getMovies?.movieData} 
              {...props}
            />
          </>
        )} />
        <Route exact path='/movies/genres/:id' render={props => (
          <>
            <GenreShow data={getMovies?.genreData} 
              {...props}
            />
          </>
        )} />
      </Switch>
      <footer><p>Copyright © Movie Radar 2021</p>
        <div className='favicons' >
          <img src={facebook} alt='facebook favicon'/>
          <img src={instagram} alt='instagram favicon'/>
          <img src={twitter} alt='twitter favicon'/>
          <img src={youtube} alt='youtube favicon'/>
        </div>
      </footer>
    </div>
  );
}

export default App;
