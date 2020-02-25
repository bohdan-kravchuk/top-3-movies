import React from 'react'
import HeroLane from './HeroLane'
import './App.css'
import logo from '../images/logo.svg'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header>
          <table>
            <tbody>
              <tr>
                <td>
                  <img alt="imdb logo" src={logo} width="60" height="60" />
                </td>
                <td>
                  <h1>3 most popular movies from the MovieDB</h1>
                </td>
              </tr>
            </tbody>
          </table>
        </header>
        <main>
          <HeroLane />
        </main>
      </div>
    )
  }
}

export default App