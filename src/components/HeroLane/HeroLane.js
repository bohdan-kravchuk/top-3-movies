import React from 'react';
import MovieRow from '../MovieRow/MovieRow';
import Error from '../Error';
import Loader from "../../UI/Loader/Loader";

const urlPopular = 'https://api.themoviedb.org/3/movie/popular?api_key=bce2bca3c8a838c2a1176df5c0246f51&page=1';

class HeroLane extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: [],
      error: null
    };
  }

  getMovieUrls() {  
    return fetch(urlPopular)
      .then(response => response.json())
      .then(json => {
        const results = json.results.slice(0, 3);
        return results.map(movie => ({
          urlDetails: `https://api.themoviedb.org/3/movie/${movie.id}?api_key=bce2bca3c8a838c2a1176df5c0246f51`
        }))
      })
      .catch(err => err)
  }

  fetchMovieDetails(urls) {
    return Promise.all(urls.map(url => fetch(url.urlDetails)))
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(moviesData => {
        const modifiedData = moviesData.map(details => ({
          ...details,
          poster_src: "https://image.tmdb.org/t/p/w185" + details.poster_path,
          truncDesc: this.truncate(details.overview, 300)
        }))
        return modifiedData
      })
      .catch(err => err)
  }

  componentDidMount() {
    this.getMovieUrls()
      .then(detailedResult => this.fetchMovieDetails(detailedResult))
      .then(modifiedData => this.setState({rows: modifiedData}))
      .catch(err => this.setState({error: err}))
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
    return (
      <main>
        {
          !this.state.rows.length && !this.state.error
            ? <Loader />
            : this.state.rows.length
              ? this.state.rows.map(row => (<MovieRow key={row.id} details={row} />))
              : <Error errorData={this.state.error} />
        }
      </main>
    )
  }
}

export default HeroLane