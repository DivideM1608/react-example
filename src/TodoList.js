//type rfc
import React, {useEffect, useState, useRef} from 'react'

export default function TodoList() {

  //ref for single
  const[countOne, setCountOne] = useState(4)
  function increateCountOne() {
    setCountOne(prevCount => {
      return {...prevCount, count: prevCount.count + 1}
    })
  }
  
  //ref for multiple 
  const [state, setState] = useState({count: 4, theme: "blue"})
  const count = state.count
  const theme = state.theme

  function increasementCount() {
    setState(prevState => {
      return {...prevState, count: prevState.count + 1}
    })
  }
  function degrementCount() {
    setState(prevState => {
      return {...prevState, count: prevState.count - 1}
    })


  } 
  //
  const prevNumber = useRef()
  useEffect(() => {
    prevNumber.current = state.count
  })


  return (
    <>
        <div>TodoList</div>
        <h1>{count}</h1>
        <button onClick={increasementCount}>+</button>
        <button onClick={degrementCount}>-</button>
        <h2>{theme}</h2>
        <h2>{prevNumber.current}</h2>
    </>
    
  )
}
