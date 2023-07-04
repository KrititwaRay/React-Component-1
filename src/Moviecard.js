import React from "react";
export default class Moviecard extends React.Component{

   constructor(){
    super();
   this.state={
        title:"The Avengers",
        plot:"Lorem  uaerat dolorum, sit fugiat culpa sapiente doloribus magnam deleniti nulla.",
        price:199,
        rating:8.9,
        stars:0
    }
   }
//Inc Stars
   addStars=()=>{
    if(this.state.stars>=5) return;
    this.setState({
        stars:this.state.stars+0.5
    })
   }

// Dec Stsrs
decStars(){
    if(this.state.stars<=0) return;
    this.setState((previousState)=>{
       return{
        stars:previousState.stars-0.5
       }
    })
}
    render(){
        return(
            <>
            <div className="main">
                  <div className="movie-card">
                    <div className="left" >
                        <img src="https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg" alt="Poster" />
                    </div>
                    
                    <div className="right">
                        <div className="title">{this.state.title}</div>
                        <div className="plot" >{this.state.plot}</div>
                        <div className="price">{this.state.price}</div>

                        <div className="footer">
                            <div className="rating" >{this.state.rating}</div>
                            <div className="star-dis">
                                
                                <img src="https://cdn-icons-png.flaticon.com/128/43/43625.png" alt="str-btn" className="str-btn" onClick={this.decStars.bind(this)} />  
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="" className="stars" />
                                <img src="https://cdn-icons-png.flaticon.com/128/748/748113.png" alt="str-btn" className="str-btn"  onClick={this.addStars} />
                                <span className="starCount" >{this.state.stars}</span>
                            </div>
                            <button className="favourite-btn">Favourite</button>
                            <button className="cart-btn">Add to cart</button>
                        </div>
                    </div>
                  </div>
            </div>
            </>
        )
    }
}