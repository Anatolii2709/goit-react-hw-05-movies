import { getSearchFilm } from 'components/API/getFilm';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  MovieButton,
  MovieContainer,
  MovieElement,
  MovieElementContainer,
  MovieElementImage,
  MovieElementTitle,
  MovieErrorTitle,
  MovieForm,
  MovieFormTitle,
  MovieInput,
  MovieLabel,
} from './Movies.styled';

const Movies = () => {
  const [movieSearch, setMovieSearch] = useState({});
  const [movieInputValue, setMovieInputValue] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const imgLink = 'https://image.tmdb.org/t/p/w500';

  const updateQueryString = evt => {
    const value = evt.target.value;
    setMovieInputValue(value);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const movieQuery = queryParams.get('movie') || '';
    setMovieInputValue(movieQuery);

    if (movieQuery !== '') {
      getSearchFilm(movieQuery)
        .then(data => {
          setMovieSearch(data);
        })
        .catch(err => console.error(err));
    }
  }, [location.search]);

  const handleButtonClick = e => {
    e.preventDefault();
    navigate(`/movies?movie=${encodeURIComponent(movieInputValue)}`);
  };

  return (
    <MovieContainer>
      <MovieFormTitle>Find your favorite movie</MovieFormTitle>
      <MovieForm>
        <MovieButton onClick={handleButtonClick} type="submit">
          Go
        </MovieButton>
        <MovieLabel htmlFor="search">Search movies</MovieLabel>
        <MovieInput
          value={movieInputValue}
          onChange={updateQueryString}
          placeholder="Search..."
          autoFocus
          required
          type="search"
        />
      </MovieForm>
      {movieSearch.total_results !== 0 ? (
        <MovieElementContainer>
          {movieSearch.results &&
            movieSearch.results.map(movie => {
              return (
                <Link
                  to={`/movies/${movie.id}`}
                  state={{ from: location }}
                  key={movie.id}
                >
                  <MovieElement>
                    {movie.poster_path && (
                      <MovieElementImage
                        src={`${imgLink}${movie.poster_path}`}
                        alt={movie.title}
                      />
                    )}
                    <MovieElementTitle>{movie.title}</MovieElementTitle>
                  </MovieElement>
                </Link>
              );
            })}
        </MovieElementContainer>
      ) : (
        <MovieErrorTitle>
          We don't find any movie with this title, please try to enter a valid
          movie title
        </MovieErrorTitle>
      )}
    </MovieContainer>
  );
};

export default Movies;
