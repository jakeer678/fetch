import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
 
  
  const [movies, setMovies] = useState([])
 
// const getMovies = () => {
//   fetch('https://swapi.dev/api/films/').then((response)=>{
//     return response.json();
//   }).then((data)=>{
//     const trasformedmovies = data.results.map((item)=>{
//       return {
//         id:item.episode_id,
//         title:item.title,
//         text:item.opening_text
//       }
//     })
//     setMovies(trasformedmovies)
//   })
// }


  async function getMovies() {
  const respose = await fetch('https://swapi.dev/api/films/')
    const data = respose.json();
  
    const trasformedmovies = data.results.map((item)=>{
      return {
        id:item.episode_id,
        title:item.title,
        text:item.opening_text
      }
    })
    setMovies(trasformedmovies)
  
}


  return (
    <React.Fragment>
      <section>
        <button onClick={getMovies}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
