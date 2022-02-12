import React from "react";
import MainPage from "./main-page";
import Movie from "./movie";
import Ratings from "./ratings";
import Reviews from "./reviews";

export default class ReviewForm extends React.Component {
    constructor (props) {
        super(props);
        this.state= {
            comment: "",
            rating: 1,
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleStarClick=this.handleStarClick.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange (e) {
        this.setState ({
            comment: e.target.value,
        })
    }
    handleStarClick(e) {
        this.setState({
            rating: e.target.id,
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.addReview (this.state, this.props.title)
    }

    render () {
        return (
            <div>
            <h3>Leave a Review</h3>
            <form>
                <div className= "stars">
                <a onClick={this.handleStarClick} id="1" className={this.state.rating >= 1 ? "active" : "disabled"}>⭐</a>
                <a onClick={this.handleStarClick} id="2" className={this.state.rating >= 2 ? "active" : "disabled"}>⭐</a>
                <a onClick={this.handleStarClick} id="3" className={this.state.rating >= 3 ? "active" : "disabled"}>⭐</a>
                <a onClick={this.handleStarClick} id="4" className={this.state.rating >= 4 ? "active" : "disabled"}>⭐</a>
                <a onClick={this.handleStarClick} id="5" className={this.state.rating >= 5 ? "active" : "disabled"}>⭐</a>
                </div>
                <div>
                    <label>Comment: </label>
                    <input type="text" onChange={this.handleChange} value={this.state.comment} />
                </div>
                <button onClick={this.handleSubmit}>Submit Comment</button>
            </form>
            </div>
        );
    }
}