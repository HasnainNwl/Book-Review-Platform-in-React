import  { useState } from 'react';
import './SearchFilter.css';

const SearchFilter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [genre, setGenre] = useState('all');
  const [rating, setRating] = useState('all');
  const [date, setDate] = useState('all');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search query:', searchQuery);
    console.log('Genre:', genre);
    console.log('Rating:', rating);
    console.log('Date:', date);
  };

  return (
    <section className="search-filter-section">
      <div className="container">
        <h1>Search and Filter Books</h1>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search books, authors, or genres..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-btn">Search</button>
        </form>

        <div className="filter-section">
          <h2>Filter by</h2>
          <div className="filters">
            <div className="filter-item">
              <label htmlFor="genre">Genre</label>
              <select id="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
                <option value="all">All Genres</option>
                <option value="fiction">Fiction</option>
                <option value="non-fiction">Non-Fiction</option>
                <option value="mystery">Mystery</option>
                <option value="fantasy">Fantasy</option>
                <option value="science-fiction">Science Fiction</option>
              </select>
            </div>
            <div className="filter-item">
              <label htmlFor="rating">Rating</label>
              <select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                <option value="all">All Ratings</option>
                <option value="5-stars">★★★★★</option>
                <option value="4-stars">★★★★☆</option>
                <option value="3-stars">★★★☆☆</option>
                <option value="2-stars">★★☆☆☆</option>
                <option value="1-star">★☆☆☆☆</option>
              </select>
            </div>
            <div className="filter-item">
              <label htmlFor="date">Date Added</label>
              <select id="date" value={date} onChange={(e) => setDate(e.target.value)}>
                <option value="all">Any Date</option>
                <option value="last-7-days">Last 7 Days</option>
                <option value="last-30-days">Last 30 Days</option>
                <option value="last-year">Last Year</option>
              </select>
            </div>
          </div>
        </div>

        <div className="search-results">
          <h2>Search Results</h2>
          <div className="result-item">
            <h3>The Great Gatsby</h3>
            <p>Author: F. Scott Fitzgerald</p>
            <p>Genre: Fiction</p>
            <p>Rating: ★★★★☆</p>
          </div>
          <div className="result-item">
            <h3>1984</h3>
            <p>Author: George Orwell</p>
            <p>Genre: Science Fiction</p>
            <p>Rating: ★★★★★</p>
          </div>
          <div className="result-item">
            <h3>Animal Farm</h3>
            <p>Author: George Orwell</p>
            <p>Genre: Fiction</p>
            <p>Rating: ★★★★★</p>
          </div>
          <div className="result-item">
            <h3>Brave New World</h3>
            <p>Author: Aldous Huxley</p>
            <p>Genre: Science Fiction</p>
            <p>Rating: ★★★★☆</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;
