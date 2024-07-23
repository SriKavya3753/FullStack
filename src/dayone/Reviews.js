import './styles.css'; // Import the stylesheet

function GetReview() {
    const reviews = [
        { pic: "profile_logo.jpeg", name: "Reviewer Name", comment: "This product is good." },
        { pic: "profile_logo.jpeg", name: "Reviewer Name", comment: "This product is not good." }
    ];

    var lst = reviews.map((review, index) => (
        <ul key={index} className="flex-container">
            <div className="review-img">
                <li>
                    <img src={review.pic} alt="profile" />
                </li>
            </div>
            <div className="review-content">
                <li>{review.name}</li>
                <li>{review.comment}</li>
            </div>
        </ul>
    ));

    return (
        <div>
            <h1>Reviews</h1>
            {lst}
        </div>
    );
}

export default GetReview;
