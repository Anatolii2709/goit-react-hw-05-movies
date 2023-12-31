import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  TrendingContainer,
  TrendingElement,
  TrendingImage,
  TrendingMovieTitle,
} from './HomeTrending.styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function HomeTrending({ movies }) {
  const imgLink = 'https://image.tmdb.org/t/p/w500';
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleMovieClick = movieId => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <div>
      <TrendingContainer>
        <Slider {...settings}>
          {movies?.map(movie => (
            <div onClick={() => handleMovieClick(movie.id)} key={movie.id}>
              <TrendingElement>
                <TrendingImage
                  src={`${imgLink}${movie.poster_path}`}
                  alt={movie.title}
                />
                <TrendingMovieTitle>{movie.title}</TrendingMovieTitle>
              </TrendingElement>
            </div>
          ))}
        </Slider>
      </TrendingContainer>
    </div>
  );
}

HomeTrending.propTypes = {
  movies: PropTypes.array,
};

export default HomeTrending;
