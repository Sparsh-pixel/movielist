import  React from 'react'
import Moviecard from './moviecard';


 function MovieList (props) {
    

    // const { title,plot,price,rating,star,fav,cart,poster} = this.state;
    const {movies,addStars,decStars,toggleFav,toggleCart} = props;

    return (
    <>
    {movies.map ((movie)=><Moviecard movies={movie}
                                addStars={addStars}
                                decStars={decStars}
                            toggleCart={toggleCart}
                              toggleFav={toggleFav}
                                key={movies.id}/>)}
    


    </>
    )
  }




export default MovieList;