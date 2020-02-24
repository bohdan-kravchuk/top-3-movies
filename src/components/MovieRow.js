import React from 'react'

export default function MovieRow(props) {
  return (
    <table key={props.details.id}>
      <tbody>
        <tr>
          <td>
            <img alt="poster" src={props.details.poster_src}></img>
          </td>
          <td>
            <h2>{props.details.title}</h2>
            <p>{props.details.allGenres}</p>
            <p>{props.details.truncDesc}</p>
            <p>{`${props.details.runtime} minutes`}</p>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
