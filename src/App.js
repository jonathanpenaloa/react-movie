import './App.css';
import { useState, useEffect } from 'react';
import Form from './components/Form/Form';
import MoviesDisplay from './components/MoviesDisplay/MoviesDisplay';

function App() {

  const apiKey = "d9faba97";

  const [movie, setMovie] = useState(null)


  const getMovie = async (searchTerm) => {
    const responds = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
    const data = await responds.json()
    setMovie(data);
  }


  useEffect(() => {
    getMovie('Clueless');
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie}/>
      <MoviesDisplay movie={movie}/>
    </div>
  );
}

export default App;
