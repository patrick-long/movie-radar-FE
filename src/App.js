import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import './App.css';
import MovieCollection from './Pages/MovieCollection/MovieCollection';
import MovieShow from './Pages/MovieShow/MovieShow';

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

  console.log(getMovies.data);

  return (
    <div className="App">
      <header className="App-header">
        <p>Movie Radar</p>
        <Switch>
          <Route>
            <Link to='/'>
              Home
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
    </div>
  );
}

export default App;
