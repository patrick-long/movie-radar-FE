import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [state, setState] = useState({
    data: []
  });

  const getAppData = async () => {
    try {
      const BASE_URL = 'http://localhost:3001/api/movies/popular';
      const movies = await fetch(BASE_URL).then(res => res.json());
      setState(prevState => ({
        ...prevState, 
        movies
      }))
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppData();
  }, []); 

  console.log(state);

  return (
    <div className="App">
      <header className="App-header">
        Header
      </header>
    </div>
  );
}

export default App;
