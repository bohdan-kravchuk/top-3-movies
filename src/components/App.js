import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import HeroLane from './HeroLane'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center', marginBottom: '16px'}}>
          3 most popular movies from the MovieDB
        </h1>
        <HeroLane />
      </div>
    )
  } 
}

export default App