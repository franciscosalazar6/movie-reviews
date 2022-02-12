import React from "react";
import Movie from "./movie";
import Reviews from "./reviews";
import Ratings from "./ratings";
import ReviewForm from "./review-form";

export default class MainPage extends React.Component {

    constructor (props) {
        super(props);
        this.state={
            movies: [
                {
                    title: "cool movie ",
                    description: `"best movie ever"`,
                    reviews: [
                        {
                            comment: " ",
                            rating: 1,
                        }
                    ],
                },
                {
                    title: "cool movie 2",
                    description: `"cool movie 2 exceeded my expectations!"`,
                    reviews: [
                        {
                            comment: " ",
                            rating: 1,
                        }
                    ],
                },

                {
                    title: "cool movie 3",
                    description: `"What an epic conclusion to this trilogy"`,
                    reviews: [
                        {
                            comment: " ",
                            rating: 1,
                        }
                    ],
                }
                
            ]
        }
        this.addReview=this.addReview.bind(this);
    }

    addReview(review, title) {
        const r = Array.from(this.state.movies)
        const index=r.findIndex(movie=> movie.title=title)
        r[index].reviews.push(review)
        this.setState({
            movies: r,
        })
    }

    render () {
        
        return (
            <div className= "container">
                {
                    this.state.movies.map(movie => (
                        <div>
                            <Movie 
                            title={movie.title} 
                            description= {movie.description} 
                            addReview={this.addReview} 
                            reviews={movie.reviews}/>
                        </div>
                    ))
                }

            </div>
        );
    }
}