import React from "react";
import MainPage from "./main-page";
import Reviews from "./reviews";
import Ratings from "./ratings";
import ReviewForm from "./review-form";

export default class Movie extends React.Component {
    render () {
        return (
            <div className= "card w-25">
                <div className="body">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                    <ReviewForm addReview={this.props.addReview} 
                        title={this.props.title}/>
                </div>
            </div>
        );
    }
}