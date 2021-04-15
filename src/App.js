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
import { login, logout, auth } from './Services/Firebase';

function App() {

  const [getMovies, setMovies] = useState({
    user: null,
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
      const allMovies =  await fetch(`https://movie-radar-backend.herokuapp.com/api/movies/`).then(res => res.json());
      const genreMovies = await fetch(`https://movie-radar-backend.herokuapp.com/api/movies/genres`).then(res => res.json());

      setMovies({
        user: getMovies?.user,
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
    auth.onAuthStateChanged(user => {
      setMovies(prevState => ({
        ...prevState,
        user
      }))
    })
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
    if (!getMovies.user) return; 

    e.preventDefault();
    try {
      const BASE_URL = 'https://movie-radar-backend.herokuapp.com/api/movies';
      await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json'
        },
        body: JSON.stringify(getMovies.searchNewMovie)
      }).then(res => res.json()).then(() => getAppData());
  
      setMovies(prevState => ({
        ...prevState,
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
    if (!getMovies.user) return; 

    e.preventDefault();
    try {
      const BASE_URL = 'https://movie-radar-backend.herokuapp.com/api/movies/genres';
      await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json'
        },
        body: JSON.stringify(getMovies.searchNewGenre)
      }).then(res => res.json()).then(() => getAppData());
  
      setMovies(prevState => ({
        ...prevState,
        searchNewGenre: {
          genre: ''
        }
      }))
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Link to='/'>
          <h2 id='header-name'>M<span><small>OVIE RADAR</small></span></h2>
        </Link>
        <Switch>
          <Route exact path='/' render={props => 
            <>
              <form onSubmit={searchMovie}>
                <Link to='/genres' className='header-link'>
                  <p>Genres</p>
                </Link>
                <input className='form-control' type='text' name='title' placeholder='Search for a new movie' value={getMovies.searchNewMovie?.title} onChange={handleChangeMovie}/>
                <button type='submit' className='btn btn-primary'>Submit</button>
              </form>
            </>
          } />
          <Route exact path='/genres' render={props => 
            <>
              <form onSubmit={searchGenre}>
                <Link to='/' className='header-link'>
                  <p>Home</p>
                </Link>
                <input className='form-control' type='text' name='genre' placeholder='Search for a genre' value={getMovies.searchNewGenre?.genre} onChange={handleChangeGenre}/>
                <button type='submit' className='btn btn-primary'>Submit</button>
              </form>
            </>
          } /> 
        </Switch>
        {
          getMovies.user ? 
            <>
              <Switch>
                <Route exact path='/' render={props => 
                  <p className='user-name'>Welcome, {getMovies?.user.displayName}</p>
                }/>
              </Switch>
              <h5 className='logout-login' onClick={logout}>Log out</h5>
            </>
          :
            <h5 className='logout-login' onClick={login}>Log in</h5>
        }
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
