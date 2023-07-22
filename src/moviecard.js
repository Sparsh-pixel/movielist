
function Moviecard (props) {
    // destructuring
    const {movies,addStars,decStars,toggleFav,toggleCart} = props;
    const { title, plot, price, rating, star, fav,cart,poster} = props.movies;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              src={poster}
              alt="poster"
            />
          </div>

          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs{price}</div>

            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  className="str-btn"
                  alt="decrease"
                  onClick={()=>{decStars(movies)}}
                  src="https://cdn-icons-png.flaticon.com/128/7080/7080604.png"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  alt="stars"
                  className="stars"
                />
                <img
                  className="str-btn"
                  src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png"
                  alt="increase"
                  onClick={()=>{addStars(movies)}}
                />

                <span className="starCount">{star}</span>
              </div>

              {/* {fav?<button className="unfavourite-btn" onClick={this.handleFav}>Unfavourite</button>:
                            <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}
                            
                            {/*  OR */}

              <button
                className={fav ? "unfavourite-btn" : "favourite-btn"}
                onClick={()=>{toggleFav(movies)}}>{fav ? "unfavourite" : "favourite"}</button>

              <button className={cart ?"cart-btn": "remove-btn"}
              onClick={()=>{toggleCart(movies)}}>{cart ? "remove" : "add to cart"}</button>
            </div>
          </div>
        </div>
      </div>
    );
  
                          }
export default Moviecard;
