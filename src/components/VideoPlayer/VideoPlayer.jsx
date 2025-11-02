import React, { useState } from 'react';
import { 
  addToWorkoutHistory, 
  markWorkoutAsCompleted, 
  updateProgress 
} from '../../utils/storage';
import './VideoPlayer.css';

const VideoPlayer = ({ video, onClose }) => {
  const [hasMarkedComplete, setHasMarkedComplete] = useState(false);
  
  const handleMarkComplete = () => {
    if (!hasMarkedComplete) {
      // Add to history
      addToWorkoutHistory({
        videoId: video.id,
        title: video.title,
        category: video.category,
        categoryId: video.categoryId,
        duration: video.duration,
        instructor: video.instructor,
      });
      
      // Mark as completed
      markWorkoutAsCompleted(video.id);
      
      // Update progress
      updateProgress({
        category: video.category,
        duration: video.duration,
      });
      
      setHasMarkedComplete(true);
      
      // Show success message
      alert('Workout completed! Great job! 🎉');
    }
  };
  
  const youtubeUrl = `https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`;
  
  return (
    <div className="video-player-overlay">
      <div className="video-player-container">
        <div className="video-player-header">
          <button className="close-button" onClick={onClose}>
            ✕ Close
          </button>
        </div>
        
        <div className="video-wrapper">
          <iframe
            src={youtubeUrl}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="video-details">
          <h2>{video.title}</h2>
          <div className="video-meta-info">
            <span className="instructor">👤 {video.instructor}</span>
            <span className="duration">⏱️ {video.duration}</span>
            <span className="difficulty">📊 {video.difficulty}</span>
          </div>
          <div className="video-actions">
            <button 
              className={`complete-button ${hasMarkedComplete ? 'completed' : ''}`}
              onClick={handleMarkComplete}
              disabled={hasMarkedComplete}
            >
              {hasMarkedComplete ? '✓ Completed' : 'Mark as Complete'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
