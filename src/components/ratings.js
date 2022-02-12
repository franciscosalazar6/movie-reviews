import React from "react";
import MainPage from "./main-page";
import Movie from "./movie";
import Reviews from "./reviews";

export default class Ratings extends React.Component {
    constructor (props)
    {
        super(props)
        this.state={
            selectedStar: 0, 
        }
        this.handleStarClick = this.handleStarClick.bind(this)
    }
     handleStarClick(e) {
        console.log('it works')
        this.setState({
            selectedStar: e.target.id,
        })
    }
    render () {
        // const starWrapper= document.querySelector(".stars"); 
        // const stars= document.querySelectorAll(".stars i");

        // stars.forEach((star, clickedIdx) => {
        //     star.addEventListener("click", () => {
        //         starWrapper.classList.add("disabled");
        //         stars.forEach((otherStar, otherIdx) => {
        //             if(otherIdx <= clickedIdx) {
        //                  otherStar.classList.add("active");
        //             }
        //         });
        //         console.log(`star of index ${clickedIdx} + 1 was clicked`);
        //     });
        // });

        
        return (
            <div className= "stars">
                <a onClick={this.handleStarClick} id="1" className={this.state.selectedStar >= 1 ? "active" : "disabled"}>⭐</a>
                <a onClick={this.handleStarClick} id="2" className={this.state.selectedStar >= 2 ? "active" : "disabled"}>⭐</a>
                <a onClick={this.handleStarClick} id="3" className={this.state.selectedStar >= 3 ? "active" : "disabled"}>⭐</a>
                <a onClick={this.handleStarClick} id="4" className={this.state.selectedStar >= 4 ? "active" : "disabled"}>⭐</a>
                <a onClick={this.handleStarClick} id="5" className={this.state.selectedStar >= 5 ? "active" : "disabled"}>⭐</a>
            </div>

        );
    }
}
