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
    data: []
  });

  const getAppData = async () => {
    try {
      const movies1 =  await fetch(`http://localhost:3001/api/movies/popular1`).then(res => res.json());
      const movies2 =  await fetch(`http://localhost:3001/api/movies/popular2`).then(res => res.json());
      const movies3 =  await fetch(`http://localhost:3001/api/movies/popular3`).then(res => res.json());
      const movies4 =  await fetch(`http://localhost:3001/api/movies/popular4`).then(res => res.json());
      const movies5 =  await fetch(`http://localhost:3001/api/movies/popular5`).then(res => res.json());

      setMovies({
        data: [
          ...movies1.results, 
          ...movies2.results, 
          ...movies3.results, 
          ...movies4.results, 
          ...movies5.results
        ]
      })
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppData();
  }, []); 
  
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route>
            <Link to='/'>
              <h1 id='header-name'>M<span><small>OVIE RADAR</small></span></h1>
            </Link>
          </Route>
        </Switch>
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
