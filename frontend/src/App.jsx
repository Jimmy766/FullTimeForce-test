import { useEffect, useState } from 'react'
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Commits from './components/Commits'

function App() {
  const [commits, setCommits] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/api/commits/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
        }
        })
        .then(res =>  res.json() )
        .then(data => {
          console.log(data);
          setCommits(data)
          });
      },[]);
  return (
    <div className="App">
      <Container>

        <Commits commits={commits}/>
      </Container>
     
        
    </div>
  )
}


export default App;
