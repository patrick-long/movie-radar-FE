import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import './App.css';
import MovieCollection from './Pages/MovieCollection/MovieCollection';
import MovieShow from './Pages/MovieShow/MovieShow';
import facebook from '../src/imgs/fb-favicon.png';
import instagram from '../src/imgs/insta-favicon.png';
import twitter from '../src/imgs/twitter-favicon.png';
import youtube from '../src/imgs/youtube-favicon.png';

function App() {

  const [getMovies, setMovies] = useState({
    data: [],
    searchNewMovie: {
      title: ''
    }
  });

  const getAppData = async () => {
    try {
      const allMovies =  await fetch(`http://localhost:3001/api/movies/`).then(res => res.json());
      const genreMovies = await fetch(`http://localhost:3001/api/movies/genres`).then(res => res.json());

      setMovies({
        data: [
          ...allMovies,
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

  const handleChange = e => {
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
      }).then(res => res.json());
  
      setMovies(prevState => ({
        data: [...prevState.data, prevState.searchNewMovie]
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
        <form onSubmit={searchMovie}>
          <input className='form-control' type='text' name='title' placeholder='Search for a new movie' value={getMovies.searchNewMovie?.title} onChange={handleChange}/>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
        <Link to='/logout'>
          <h5>Log out</h5>
        </Link>
      </header>
      <Switch>
        <Route exact path='/' render={props => 
          <MovieCollection data={getMovies?.data} />
        }/>
        <Route exact path='/movies/:id' render={props => (
          <MovieShow data={getMovies?.data} 
            {...props}
          />
        )}/>
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
