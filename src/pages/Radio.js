import { useState, useRef } from "react";
export default function Radio() {
  // const [value, setValue] = useState(0);
  const option = useRef();
  function onSubmit(e) {
    // e.preventDefault();
    console.log(option.current.value);
    // console.log(option.current);
  }

  return (
    // <div>
    //   <select onChange={onSubmit}>
    //     <div className="form-check">
    //       <input
    //         className="form-check-input"
    //         type="radio"
    //         name="type"
    //         value="justMovies"
    //         ref={option}
    //       />
    //       <label className="form-check-label text-light" htmlFor="exampleRadios1">
    //         Find just movies
    //       </label>
    //     </div>
    //     <div className="form-check ms-5">
    //       <input
    //         className="form-check-input"
    //         type="radio"
    //         name="type"
    //         value="justSeries"
    //         ref={option}
    //       />
    //       <label className="form-check-label text-light" htmlFor="exampleRadios2">
    //         Find just series
    //       </label>
    //     </div>
    //     <div className="form-check ms-5">
    //       <input
    //         className="form-check-input"
    //         type="radio"
    //         name="type"
    //         value="moviesAndSeries"
    //         defaultChecked
    //         ref={option}
    //       />
    //       <label className="form-check-label text-light" htmlFor="exampleRadios2">
    //         Both options
    //       </label>
    //     </div>
    //   </select>
    //     <button onClick={onSubmit}> haah</button>
    // </div>
    <div>
      <select
        className="form-select"
        aria-label="Default select example"
        // defaultValue="2"
        ref={option}
      >
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Default checkbox
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Checked checkbox
          </label>
        {/* <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
  <option value="3">Three</option> */}
      </select>
      <button onClick={onSubmit}>jjjj</button>
    </div>
  );
}
