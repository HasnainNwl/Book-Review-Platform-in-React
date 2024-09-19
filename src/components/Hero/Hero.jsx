import './Hero.css'

const Hero = () => {
  return (
    <>
     <section className="hero">
        <div className="hero-content">
            <h1>Discover and Review Amazing Books</h1>
            <p>Join our community and share your book reviews.</p>
            <a href="#" className="cta-btn">Explore Reviews</a>
        </div>
    </section>

    {/* Featured Books  */}
    <section className="featured-books">
        <h2>Featured Books</h2>
        <div className="book-grid">
            <div className="book-item">
                <img src="public\cover_1.jpg" alt="Book Cover 1"/>
                <div className="book-info">
                    <h3>Win - Win Strategy</h3>
                    <p>Frank Lafley</p>
                    <span className="rating">★★★★☆</span>
                </div>
            </div>
            <div className="book-item">
                <img src="public\cover_2.jpg" alt="Book Cover 2"/>
                <div className="book-info">
                    <h3>The Bike Guy</h3>
                    <p>Emma Mayers</p>
                    <span className="rating">★★★★★</span>
                </div>
            </div>
            <div className="book-item">
                <img src="public\cover_3.jpg" alt="Book Cover 1"/>
                <div className="book-info">
                    <h3>Win - Win Strategy</h3>
                    <p>Frank Lafley</p>
                    <span className="rating">★★★★☆</span>
                </div>
            </div>
            <div className="book-item">
                <img src="public\cover_4.jpg" alt="Book Cover 1"/>
                <div className="book-info">
                    <h3>Dark Days</h3>
                    <p>Frank Lafley</p>
                    <span className="rating">★★★★☆</span>
                </div>
            </div>
            <div className="book-item">
                <img src="public\cover_5.jpg" alt="Book Cover 1"/>
                <div className="book-info">
                    <h3> Win Strategy</h3>
                    <p>Frank Lafley</p>
                    <span className="rating">★★★★☆</span>
                </div>
            </div>
            <div className="book-item">
                <img src="public\cover_1.jpg" alt="Book Cover 1"/>
                <div className="book-info">
                    <h3>Never give Up</h3>
                    <p>Frank Lafley</p>
                    <span className="rating">★★★★☆</span>
                </div>
            </div>
             {/* Add more book items as needed  */}
        </div>
    </section>

     {/* Recent Reviews  */}
    <section className="recent-reviews">
        <h2>Recent Reviews</h2>
        <div className="review-list">
            <div className="review-item">
                <div className="reviewer-avatar">
                    <img src="public\avater_1.jpg" alt="Reviewer Avatar 1"/>
                </div>
                <div className="review-content">
                    <h3>The Bike Guy</h3>
                    <p>"This book was absolutely captivating! Highly recommend."</p>
                    <span className="rating">★★★★☆</span>
                </div>
            </div>
            <div className="review-item">
                <div className="reviewer-avatar">
                    <img src="public\avater_1.jpg" alt="Reviewer Avatar 2"/>
                </div>
                <div className="review-content">
                    <h3>Win - Win strategy</h3>
                    <p>"A well-written story with engaging characters."</p>
                    <span className="rating">★★★☆☆</span>
                </div>
            </div>
            <div className="review-list">
                <div className="review-item">
                    <div className="reviewer-avatar">
                        <img src="public\avater_1.jpg" alt="Reviewer Avatar 1"/>
                    </div>
                    <div className="review-content">
                        <h3>Never Give Up</h3>
                        <p>"This book was absolutely captivating! Highly recommend."</p>
                        <span className="rating">★★★★☆</span>
                    </div>
                </div>
            </div>
            <div className="review-item">
                <div className="reviewer-avatar">
                    <img src="public\avater_1.jpg" alt="Reviewer Avatar 2"/>
                </div>
                <div className="review-content">
                    <h3>Win - Win strategy</h3>
                    <p>"A well-written story with engaging characters."</p>
                    <span className="rating">★★★☆☆</span>
                </div>
            </div>
            
        </div>
    </section>

     {/* Community Highlights  */}
    <section className="community-highlights">
        <h2>Community Highlights</h2>
        <div className="community-list">
            <div className="community-item">
                <h3>Favorite Mystery Books</h3>
                <p>Join the discussion on top mystery books of the year.</p>
                <a href="#" className="join-btn">Join Discussion</a>
            </div>
            <div className="community-item">
                <h3>Upcoming Fantasy Releases</h3>
                <p>Get ready for the upcoming fantasy releases in 2024.</p>
                <a href="#" className="join-btn">Join Discussion</a>
            </div>
            <div className="community-item">
                <h3>Favorite Mystery Books</h3>
                <p>Join the discussion on top mystery books of the year.</p>
                <a href="#" className="join-btn">Join Discussion</a>
            </div>
            
             {/* Add more community items as needed  */}
        </div>
    </section>
    </>
  )
}

export default Hero