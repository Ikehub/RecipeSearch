import React from 'react'

function App() {
    function submitReview(e){
        e.preventDefault();

        let comment = e.target.comment.value;
        let rating = e.target.rating.value;

        console.log(comment);
        console.log(rating);
    }
    return (
        <div>
            <h1>Review a Recipe</h1>
            <form onSubmit={submitReview}>
                <textarea placeholder="Write a review" rows="10" cols="25" name="comment"></textarea>        
                <div class="">
                    <input type="radio" id="1star" name="rating" value="1"/>
                    <label for="1star">1 star</label>
                    <input type="radio" id="2star" name="rating" value="2"/>
                    <label for="2star">2 stars</label>
                    <input type="radio" id="3star" name="rating" value="3"/>
                    <label for="3star">3 stars</label>
                    <input type="radio" id="4star" name="rating" value="4"/>
                    <label for="4star">4 stars</label>
                    <input type="radio" id="5star" name="rating" value="5"/>
                    <label for="5star">5 stars</label>
                </div>
                <button type="submit">Submit Review</button>
            </form>
        </div>

    );
}