import { useReducer, useEffect, useState } from "react";
// ** valores iniciales del estado

const initialState = { color: "red", text: "initial text", movies: [], showMovies: [] };

// ** aqui se hace la lógica de cambio de estado
function reducer(state, action) {
  switch (action.type) {
    case "changeColor":
      console.log("change color");
      if (state.color === "red") {
        return { ...state, color: "aquamarine" };
      }
      return { ...state, color: "red" };
    case "changeText":
      if (state.text === "initial text") {
        return { ...state, text: "changed text" };
      }
      return { ...state, text: "initial text" };
    case "movies":
      // console.log(action.payload, 'case');
      return { ...state, movies: action.payload };
    case "showMovies":
      // console.log(action.payload, 'case');
      return { ...state, showMovies: action.payload };  
    default:
      throw new Error();
  }
}

function Home2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [prueba, setPrueba] = useState("hola");
  useEffect(() => {
    async function fetchData() {
      console.log("peticion api");
      const url = process.env.REACT_APP_API_URL;
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data, 'oooo');
      dispatch({ type: "movies", payload: data });
      dispatch({ type: "showMovies", payload: data });
    }

    fetchData();
  }, []);
  // console.log(state.movies, 'state');

  function handleInput(e) {
    // dispatch({ type: "search", payload: e.target.value });
    if (e.keyCode === 13) {
      console.log('se presionó enter');
    }
    // console.log(e.target.value);
    const showMovies = state.movies.filter(movie => movie.title.toLowerCase().substring(0, e.target.value.length) === e.target.value.toLowerCase());
    dispatch({ type: "showMovies", payload: showMovies });
  }

  return (
    <div>
      <button
        style={{ background: state.color }}
        onClick={() => dispatch({ type: "changeColor" })}
      >
        change Color
      </button>
      <button onClick={() => dispatch({ type: "changeText" })}>
        {state.text}
      </button>
      <button
        onClick={() =>
          prueba === "hola" ? setPrueba("cambio") : setPrueba("hola")
        }
      >
        {prueba}
      </button>

      <input type="text" onKeyUp={handleInput} />

      {state.showMovies.map((movie) => {
        // console.log(movie.id, 'map');
        return <li key={movie.id}>{movie.title}</li>;
      })}
    </div>
  );
}

export default Home2;
