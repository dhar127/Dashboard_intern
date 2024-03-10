// MainContent.js
import React from 'react';
import './MainContent.css'; // Import CSS

function MainContent() {
  return (
    <div className="main-content">
      <h2>Welcome to Learnease Dashboard!</h2>
      <p>This is your central hub for learning. Explore various courses, track your progress, and engage with other learners.</p>
      <div className="highlights">
        <div className="highlight">
          <h3>Upcoming Events</h3>
          <p>Stay updated on upcoming webinars, workshops, and events.</p>
        </div>
        <div className="highlight">
          <h3>Popular Courses</h3>
          <p>Discover the most popular courses trending on Learnease.</p>
        </div>
        <div className="highlight">
          <h3>Recent Activity</h3>
          <p>Check out your recent activity, including courses started, completed, and badges earned.</p>
        </div>
        <div className="highlight">
          <h3>Featured Instructors</h3>
          <p>Learn from industry experts and renowned instructors.</p>
        </div>
        <div className="highlight">
          <h3>Learning Paths</h3>
          <p>Explore curated learning paths tailored to your interests and career goals.</p>
        </div>
        <div className="highlight">
          <h3>Discussion Forums</h3>
          <p>Engage with fellow learners, ask questions, and share insights in our community forums.</p>
        </div>
        {/* Add more highlights */}
      </div>
    </div>
  );
}

export default MainContent;
