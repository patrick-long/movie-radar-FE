import { useState, useEffect } from 'react';
import './App.css';
import MovieCard from './Components/MovieCard/MovieCard';

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
          movies1, 
          movies2, 
          movies3, 
          movies4, 
          movies5
        ]
      })
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppData();
  }, []); 

  console.log(getMovies);

  return (
    <div className="App">
      <header className="App-header">
        Movie Radar
      </header>
      <div className='movie-container' >
        <MovieCard data={getMovies.data[0].results} />
        <MovieCard data={getMovies.data[1].results} />
        <MovieCard data={getMovies.data[2].results} />
        <MovieCard data={getMovies.data[3].results} />
        <MovieCard data={getMovies.data[4].results} />
      </div>
    </div>
  );
}

export default App;
