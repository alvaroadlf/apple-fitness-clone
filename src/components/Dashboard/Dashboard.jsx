import React, { useEffect, useState } from 'react';
import { workoutCategories } from '../../data/workouts';
import { getRecommendations } from '../../data/workouts';
import { getWorkoutHistory, getUserPreferences } from '../../utils/storage';
import './Dashboard.css';

const Dashboard = ({ onCategoryClick, onVideoClick }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [userPreferences, setUserPreferences] = useState(null);
  
  useEffect(() => {
    const preferences = getUserPreferences();
    setUserPreferences(preferences);
    
    const history = getWorkoutHistory();
    const recs = getRecommendations(history);
    setRecommendations(recs);
  }, []);
  
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome back, {userPreferences?.name || 'Fitness User'}!</h1>
        <p>Ready to crush your fitness goals today?</p>
      </header>
      
      <section className="recommended-section">
        <h2>Recommended For You</h2>
        <div className="recommendations-grid">
          {recommendations.map(video => (
            <div 
              key={video.id} 
              className="recommendation-card"
              onClick={() => onVideoClick(video)}
            >
              <div className="recommendation-thumbnail">
                <img src={video.thumbnail} alt={video.title} />
                <div className="duration-badge">{video.duration}</div>
              </div>
              <div className="recommendation-info">
                <h3>{video.title}</h3>
                <p className="instructor">{video.instructor}</p>
                <span className="difficulty">{video.difficulty}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="categories-section">
        <h2>Workout Categories</h2>
        <div className="categories-grid">
          {workoutCategories.map(category => (
            <div
              key={category.id}
              className="category-card"
              style={{ 
                background: `linear-gradient(135deg, ${category.color}dd, ${category.color}88)` 
              }}
              onClick={() => onCategoryClick(category)}
            >
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
