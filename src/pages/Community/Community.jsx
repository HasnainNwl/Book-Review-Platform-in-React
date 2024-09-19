import  { useState } from 'react';
import './community.css';

const Community = () => {
    const [searchText, setSearchText] = useState('');
    const [filterValue, setFilterValue] = useState('all');

    const handleSearchChange = (e) => {
        setSearchText(e.target.value.toLowerCase());
    };

    const handleFilterChange = (e) => {
        setFilterValue(e.target.value);
    };

    const handleFilterClick = () => {
        // Implement the filtering and searching logic here
        console.log('Search:', searchText);
        console.log('Filter:', filterValue);
    };

    return (
        <section className="community-section">
            <div className="container">
                <div className="search-filter">
                    <input
                        type="text"
                        placeholder="Search discussions..."
                        value={searchText}
                        onChange={handleSearchChange}
                        id="searchInput"
                    />
                    <select
                        id="filterOptions"
                        value={filterValue}
                        onChange={handleFilterChange}
                    >
                        <option value="all">All Topics</option>
                        <option value="fiction">Fiction</option>
                        <option value="non-fiction">Non-Fiction</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="science">Science</option>
                    </select>
                    <button
                        type="button"
                        className="filter-btn"
                        onClick={handleFilterClick}
                    >
                        Filter
                    </button>
                </div>

                <div className="discussion-content">
                    {/* Threads Section */}
                    <div className="threads">
                        <h2>Threads</h2>
                        <div className="thread-item">
                            <h3>The Best Fiction Books of 2024</h3>
                            <p>Started by <strong>User1</strong> - 24 replies</p>
                        </div>
                        <div className="thread-item">
                            <h3>Top Fantasy Books for Young Adults</h3>
                            <p>Started by <strong>User2</strong> - 18 replies</p>
                        </div>
                        <div className="thread-item">
                            <h3>Non-Fiction Gems You Must Read</h3>
                            <p>Started by <strong>User3</strong> - 30 replies</p>
                        </div>
                        {/* Add more threads as needed */}
                    </div>

                    {/* Popular Discussions Section */}
                    <aside className="popular-discussions">
                        <h2>Popular Discussions</h2>
                        <div className="discussion-item">
                            <h4>How to Start Reading More?</h4>
                            <p>45 replies</p>
                        </div>
                        <div className="discussion-item">
                            <h4>Best Books of the Decade</h4>
                            <p>50 replies</p>
                        </div>
                        <div className="discussion-item">
                            <h4>Your Favorite Mystery Novels</h4>
                            <p>60 replies</p>
                        </div>
                        {/* Add more popular discussions as needed */}
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default Community;
