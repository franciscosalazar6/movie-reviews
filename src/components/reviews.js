import React from "react";

export default class Reviews extends React.Component {
    render () {
        return (
            <div>
                
            <div className= "card w-25">
                <div className= "header">
                    <h4>Leave A Review</h4>
                </div>
                <div className= "card-body">
                    <input type="text" placeholder="leave a review"></input>
                </div>            
            </div>
            </div>
        );
    }
}