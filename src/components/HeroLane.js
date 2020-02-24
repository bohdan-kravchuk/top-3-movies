import React from 'react'
import MovieRow from './MovieRow'

class HeroLane extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.performLane();
  }

  performLane() {
    const urlPopular = 'https://api.themoviedb.org/3/movie/popular?api_key=bce2bca3c8a838c2a1176df5c0246f51&page=1';

    fetch(urlPopular)
      .then(response => response.json())
      .then(json => {
        let results = json.results.slice(0, 3);
        let movieRows = [];
        let urlsArr = [];

        results.forEach(movie => {
          let urlDetails = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=bce2bca3c8a838c2a1176df5c0246f51`;
          urlsArr.push(urlDetails);
        })

        Promise.all(urlsArr.map(url => fetch(url)))
          .then(responses => Promise.all(responses.map(r => r.json())))
          .then(moviesData => {
            moviesData.forEach(details => {
              details.poster_src = "https://image.tmdb.org/t/p/w185" + details.poster_path;
              details.allGenres = details.genres.map(genre => genre.name).join(', ');
              details.truncDesc = this.truncate(details.overview, 300);
              movieRows.push(<MovieRow key={details.id} details={details} />);
            })
          })
          .then(() => this.setState({rows: movieRows}))
      })
  }

  truncate(text, length) {
    if (text.length > length) {
      while (text[length - 3] !== ' ') {
        length -= 1
      }
      return text.slice(0, length - 3) + '...'
    } else {
      return text
    }
  }

  render() {
    console.log('render herolane')
    return (
      <div style={{width: '69%', marginRight: '15%', marginLeft: '15%'}}>
        {this.state.rows}
      </div>
    )
  }
}

export default HeroLane