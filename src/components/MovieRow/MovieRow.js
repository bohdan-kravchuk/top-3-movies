import React from 'react';
import classes from './MovieRow.module.css';
import clockIcon from '../../images/clock-icon.png';

export default function MovieRow(props) {
  return (
    <div
      key={props.details.id}
      style={{
        background: `url(https://image.tmdb.org/t/p/w1400_and_h450_face/${props.details.backdrop_path})`,
        backgroundSize: 'cover'
      }}
    >
      <div className={classes.MovieRow}>
        <div className={classes.container}>
          <div className={classes.img}>
            <img alt="poster" src={props.details.poster_src} />
          </div>
          <div className={classes.content}>
            <h2>{props.details.title}</h2>
            <ul>
              {props.details.genres.map(genre => (
                <li key={genre.id}>{genre.name.toLowerCase()}</li>
              ))}
            </ul>
            <p>{props.details.truncDesc}</p>
            <p>
              <img alt="time icon" src={clockIcon} className={classes.timeIcon}/>
              {` ${props.details.runtime} minutes`}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
