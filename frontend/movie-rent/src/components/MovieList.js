import React from 'react';

const MovieList = (props) => {
	const CartComponent = props.cartComponent;
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
					<div
						onClick={() => props.handleCartClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<CartComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;