import React from 'react';
import { workoutVideos } from '../../data/workouts';
import { isWorkoutCompleted } from '../../utils/storage';
import './WorkoutCategories.css';

const WorkoutCategories = ({ category, onVideoClick, onBack }) => {
  const categoryVideos = workoutVideos.filter(
    video => video.categoryId === category.id
  );
  
  return (
    <div className="workout-categories">
      <div className="category-header">
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>
        <div 
          className="category-banner"
          style={{ 
            background: `linear-gradient(135deg, ${category.color}dd, ${category.color}66)` 
          }}
        >
          <div className="category-banner-content">
            <span className="category-icon-large">{category.icon}</span>
            <h1>{category.name}</h1>
            <p>{category.description}</p>
          </div>
        </div>
      </div>
      
      <div className="videos-section">
        <h2>Available Workouts</h2>
        <div className="videos-grid">
          {categoryVideos.map(video => {
            const completed = isWorkoutCompleted(video.id);
            
            return (
              <div 
                key={video.id} 
                className={`video-card ${completed ? 'completed' : ''}`}
                onClick={() => onVideoClick(video)}
              >
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="video-duration">{video.duration}</div>
                  {completed && (
                    <div className="completed-badge">✓ Completed</div>
                  )}
                </div>
                <div className="video-info">
                  <h3>{video.title}</h3>
                  <p className="video-instructor">{video.instructor}</p>
                  <div className="video-meta">
                    <span className="video-difficulty">{video.difficulty}</span>
                    <span className="video-duration-text">{video.duration}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkoutCategories;
