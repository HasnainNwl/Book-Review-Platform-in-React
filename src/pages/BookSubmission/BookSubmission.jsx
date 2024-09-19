import { useState } from 'react';
import './booksubmission.css';

const BookSubmission = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        genre: '',
        cover: null,
        summary: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, cover: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <section className="book-submission">
            <div className="container">
                <h2>Submit a Book</h2>
                <form className="submission-form" onSubmit={handleSubmit}>
                    <label htmlFor="title">Book Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="genre">Genre</label>
                    <select
                        id="genre"
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select a Genre</option>
                        <option value="fiction">Fiction</option>
                        <option value="non-fiction">Non-Fiction</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="mystery">Mystery</option>
                        <option value="sci-fi">Science Fiction</option>
                        <option value="romance">Romance</option>
                    </select>

                    <label htmlFor="cover">Book Cover</label>
                    <input
                        type="file"
                        id="cover"
                        name="cover"
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                    />

                    <label htmlFor="summary">Book Summary (Optional)</label>
                    <textarea
                        id="summary"
                        name="summary"
                        rows="5"
                        value={formData.summary}
                        onChange={handleChange}
                    ></textarea>

                    <button type="submit" className="submit-btn">
                        Submit Book
                    </button>
                </form>
            </div>
        </section>
    );
};

export default BookSubmission;
