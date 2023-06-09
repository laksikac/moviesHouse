import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddToCart from './components/AddToCart';
import RemoveFavourites from './components/RemoveFavourites';
// import axios from 'axios';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [rentMovie, setRentMovie] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);
  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('movie-rent-rentMovie')
    );

    if (movieFavourites) {
      setRentMovie(movieFavourites);
    }
  }, []);
  const saveToLocalStorage = (items) => {
    localStorage.setItem('movie-rent-rentMovie', JSON.stringify(items));
  };
  const addRentMovie = (movie) => {
    const newRentList = [...rentMovie, movie];
    setRentMovie(newRentList);
    saveToLocalStorage(newRentList);
  };
  const removeFavouriteMovie = (movie) => {
    const newRentList = rentMovie.filter((favourite) =>
      favourite.imdbID !== movie.imdbID);

    setRentMovie(newRentList);
    saveToLocalStorage(newRentList);
  };


  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='row'>
        <MovieList
          movies={movies}
          cartComponent={AddToCart}
          handleCartClick={addRentMovie}
        />
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='My Cart' />
      </div>
      <div className='row'>
        <MovieList
          movies={movies}
          cartComponent={RemoveFavourites}
          handleCartClick={removeFavouriteMovie}
        />
      </div>
    </div>
  );
};

export default App;