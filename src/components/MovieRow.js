import React from 'react'
import './MovieRow.css'
import clockIcon from '../images/clock-icon.png'

export default function MovieRow(props) {
  return (
    <div className="movieRow" key={props.details.id} style={{background: `url(https://image.tmdb.org/t/p/w1400_and_h450_face/${props.details.backdrop_path})`}}>
      <div className="container">
        <table>  
          <tbody>
            <tr>
              <td className="first-column">
                <img alt="poster" src={props.details.poster_src} />
              </td>
              <td className="second-column">
                <h2>{props.details.title}</h2>
                <ul>{props.details.genres.map(genre => <li key={genre.id}>{genre.name.toLowerCase()}</li>)}</ul>
                <p>{props.details.truncDesc}</p>
                <p>
                  <img alt="time icon" src={clockIcon} className="time-icon" />
                  {` ${props.details.runtime} minutes`}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
