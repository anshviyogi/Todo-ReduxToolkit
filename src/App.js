import React from 'react'
import { Container } from 'react-bootstrap'
import Todo from './Components/Todo'
import {useSelector} from 'react-redux'

function App() {
  const data = useSelector(data => data)
  console.log(data)

  return (
    <Container>
      <h1 style={{textAlign:"center"}}>To-Do List</h1>
      <Todo/>
    </Container>
  )
}

export default App