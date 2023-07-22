import { Component} from "react";
import MovieList from "./MovieList";
import "./index.css";
import Navbar from "./Navbar";
import { movies } from "./moviesData";

class App extends Component {
      // Constructor
      constructor() {
        super();
        this.state = {
          movies : movies,
          cartCount: 0
  
        }
      }
      handleIncStar = (movie) => {
        const {movies} = this.state;
        const movieId = movies.indexOf(movie);
  
        if(movies[movieId].star >= 5){
          return;
        }
        movies[movieId].star += 0.5;
        this.setState({
          movies
  
        })
  
      }
      handleDecStar = (movie) => {
        const{movies} = this.state;
        const movieId = movies.indexOf(movie);
  
        if(movies[movieId.star <=0]) {
          return;
      }
      movies[movieId].star -= 0.5;
      this.setState({
        movies
      })
    }
  
    handleToggleFav = (movie) => {
      const {movies} = this.state;
      const movieId = movies.indexOf(movie);
  
      movies[movieId].fav = !movies[movieId].fav;
      this.setState({
        movies
      })
    }
  
    handleCart = (movie) =>{
      let {movies,cartCount} = this.state;
      const movieId = movies.indexOf(movie);
  
      movies[movieId].cart = !movies[movieId].cart;
      if(movies[movieId].cart){
        cartCount = cartCount + 1;
      }else{
        cartCount -= 1;
      }


      this.setState({
        movies,
        cartCount
      })
    }


render () {
 const {movies,cartCount} =this.state;

  return (
    <>
    <Navbar cartCount={cartCount}/>
    <MovieList movies ={movies}
    addStars={this.handleIncStar} 
    decStars={this.handleDecStar}
    toggleFav ={this.handleToggleFav} 
    toggleCart={this.handleCart}/>
    </>

  );
}
}


export default App;
