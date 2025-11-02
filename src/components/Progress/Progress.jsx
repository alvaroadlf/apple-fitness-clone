import React, { useState, useEffect } from 'react';
import { 
  getProgress, 
  getWorkoutHistory, 
  getICloudSyncStatus 
} from '../../utils/storage';
import './Progress.css';

const Progress = () => {
  const [progress, setProgress] = useState(null);
  const [history, setHistory] = useState([]);
  const [syncStatus, setSyncStatus] = useState(null);
  
  useEffect(() => {
    loadData();
  }, []);
  
  const loadData = () => {
    const progressData = getProgress();
    const historyData = getWorkoutHistory();
    const sync = getICloudSyncStatus();
    
    setProgress(progressData);
    setHistory(historyData);
    setSyncStatus(sync);
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };
  
  if (!progress) {
    return <div className="progress-loading">Loading progress...</div>;
  }
  
  return (
    <div className="progress-container">
      <div className="progress-header">
        <h1>Your Progress</h1>
        <p>Track your fitness journey</p>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">💪</div>
          <div className="stat-value">{progress.totalWorkouts}</div>
          <div className="stat-label">Total Workouts</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">⏱️</div>
          <div className="stat-value">{progress.totalMinutes}</div>
          <div className="stat-label">Total Minutes</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🔥</div>
          <div className="stat-value">{progress.streak}</div>
          <div className="stat-label">Day Streak</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-value">
            {Object.keys(progress.categoriesCompleted).length}
          </div>
          <div className="stat-label">Categories</div>
        </div>
      </div>
      
      {Object.keys(progress.categoriesCompleted).length > 0 && (
        <div className="categories-breakdown">
          <h2>Workouts by Category</h2>
          <div className="categories-list">
            {Object.entries(progress.categoriesCompleted).map(([category, count]) => (
              <div key={category} className="category-stat">
                <span className="category-name">{category}</span>
                <div className="category-bar-container">
                  <div 
                    className="category-bar"
                    style={{ 
                      width: `${(count / progress.totalWorkouts) * 100}%` 
                    }}
                  ></div>
                </div>
                <span className="category-count">{count}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {syncStatus && (
        <div className="sync-status">
          <div className="sync-header">
            <h3>☁️ iCloud Sync</h3>
            <span className={`sync-badge ${syncStatus.status}`}>
              {syncStatus.status === 'synced' ? '✓ Synced' : '⟳ Syncing...'}
            </span>
          </div>
          {syncStatus.lastSyncTime && (
            <p className="sync-time">
              Last synced: {formatDate(syncStatus.lastSyncTime)}
            </p>
          )}
        </div>
      )}
      
      <div className="workout-history">
        <h2>Recent Workouts</h2>
        {history.length === 0 ? (
          <div className="no-history">
            <p>No workouts completed yet. Start your fitness journey today!</p>
          </div>
        ) : (
          <div className="history-list">
            {history.slice(0, 10).map((workout) => (
              <div key={workout.id} className="history-item">
                <div className="history-info">
                  <h3>{workout.title}</h3>
                  <div className="history-meta">
                    <span className="history-category">{workout.category}</span>
                    <span className="history-duration">{workout.duration}</span>
                  </div>
                </div>
                <div className="history-date">
                  {formatDate(workout.completedAt)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Progress;
