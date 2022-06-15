import React, { useState, useEffect } from "react";

function Home() {
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [color, setColor] = useState("red");
  const [text, setText] = useState("initial text");
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function fetchData() {
      const url = process.env.REACT_APP_API_URL;
      let response = await fetch(url);
      
      const data = await response.json();
      // console.log("peticion api");
      setMovies(data);
      setMoviesToShow(data);
    }

    fetchData();
  }, []);

  function changeColor() {
    if (color === "red" ? setColor("aquamarine") : setColor("red"));
  }
  useEffect(() => {
    // console.log("change color");
  }, [color]); //** el segundo argumento es un array con los ESTADOS que se  van a actualizar
  
  function changeText() {
    if (
      text === "initial text"
        ? setText("changed text")
        : setText("initial text")
    );
  }
  useEffect(() => {
    // console.log("change text");
  }, [text]);

  useEffect(() => {
    const showMovies = movies.filter(movie => movie.title.toLowerCase().substring(0, search.length) === search.toLowerCase());
    setMoviesToShow(showMovies);
  }, [search,movies]);
  function searching(e){
    setSearch(e.target.value);
  }
  return (
    <div>
      <button style={{ background: color }} onClick={changeColor}>
        Change Color
      </button>
      <button onClick={changeText}>{text}</button>
      <input type="text" onKeyUp={searching} defaultValue={search} />
      {moviesToShow.map((movie) => {
        return <li key={movie.id}>{movie.title}</li>;
      })}
    </div>
  );
}

export default Home;
