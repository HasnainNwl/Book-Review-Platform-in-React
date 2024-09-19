import './BookDetail.css';

const BookDetail = () => {
  return (
    <section className="book-detail">
      <div className="container">
        <div className="book-info">
          <img src="public\cover_1.jpg" alt="Book Cover" className="book-cover" />
          <div className="book-meta">
            <h1>Win Win Strategy</h1>
            <p><strong>Author:</strong> Frank Lafley</p>
            <p><strong>Genre:</strong> Fiction</p>
            <p><strong>Summary:</strong> This is a brief summary of the book. It gives an overview of the plot, characters, and themes discussed in the book.</p>
          </div>
        </div>
      </div>  

        {/* Rating and Review Section */}
        <div className="rating-review-section">
          <h2>Rate and Review</h2>
          <form className="review-form">
            <label htmlFor="rating">Rating:</label>
            <select id="rating" name="rating" required>
              <option value="" disabled selected>Select a rating</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>

            <label htmlFor="review">Your Review:</label>
            <textarea
              id="review"
              name="review"
              rows="5"
              placeholder="Write your review here..."
              required
            ></textarea>

            <button type="submit" className="submit-btn">Submit Review</button>
          </form>
        </div>

        {/* User Reviews Section */}
        <div className="reviews-section">
          <h2>User Reviews</h2>
          <div className="review-cards">
          <div className="review-item">
            <div className="review-header">
              <img src="public\avater_1.jpg" alt="User Image" className="user-image" />
              <div className="user-info">
                <strong>User1</strong>
                <p className="user-rating">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <p className="review-text">Amazing book! Highly recommend.</p>
          </div>
          <div className="review-item">
            <div className="review-header">
              <img src="public\avater_1.jpg" alt="User Image" className="user-image" />
              <div className="user-info">
                <strong>User1</strong>
                <p className="user-rating">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <p className="review-text">Amazing book! Highly recommend.</p>
          </div>
          <div className="review-item">
            <div className="review-header">
              <img src="public\avater_1.jpg" alt="User Image" className="user-image" />
              <div className="user-info">
                <strong>User1</strong>
                <p className="user-rating">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <p className="review-text">Amazing book! Highly recommend.</p>
          </div>

          </div>
          
          
      </div>
    </section>
  );
}

export default BookDetail;
