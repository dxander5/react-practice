import { useState, useEffect } from "react"
export default function State(){
  const [state, setState] = useState(
    {
      d1: 0,
      d2: 0
    }
  )
  useEffect(() => {
    console.log(state)
  }, [state.d2])
  function c1(){
    setState({...state, d1: state.d1 + 1})
  }
  function c2(){
    setState({...state, d2: state.d2 + 1})
  }
  return(
    <>
      <button onClick={c1}>d1</button>
      <button onClick={c2}>d2</button>
    </>
  )
}