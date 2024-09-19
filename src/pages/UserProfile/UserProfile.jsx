import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
  const [username, setUsername] = useState('Hasnainnwl');
  const [email, setEmail] = useState('hasnainnwl@gmail.com');
  const [password, setPassword] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    // Handle save logic here (API call to update user info)
    console.log('Saved changes:', { username, email, password });
  };

  return (
    <section className="profile-section">
      <div className="container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-picture">
            <img src="./images/pro.jpg" alt="User Profile" />
          </div>
          <div className="profile-info">
            <h1>{username}</h1>
            <p>Email: {email}</p>
            <p>Member Since: January 2023</p>
          </div>
        </div>

        {/* User Contributions */}
        <div className="contributions-section">
          <h2>User's Contributions</h2>
          <div className="contribution-item">
            <h3>Book Review: The Great Gatsby</h3>
            <p>Rating: ★★★★☆</p>
            <p>A captivating tale of love, wealth, and betrayal. Fitzgerald’s writing is mesmerizing, and the characters are unforgettable.</p>
          </div>
          <div className="contribution-item">
            <h3>Book Review: 1984</h3>
            <p>Rating: ★★★★★</p>
            <p>A thought-provoking novel that remains relevant today. Orwell’s vision of the future is both terrifying and enlightening.</p>
          </div>
        </div>

        {/* Account Settings */}
        <div className="settings-section">
          <h2>Account Settings</h2>
          <form onSubmit={handleSave} className="settings-form">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="save-btn">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
