import React, { useState, useEffect } from 'react';
import { workoutVideos } from '../../data/workouts';
import { searchWorkouts, isWorkoutCompleted } from '../../utils/storage';
import './Search.css';

const Search = ({ onVideoClick }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      setIsSearching(false);
    } else {
      setIsSearching(true);
      const filtered = searchWorkouts(workoutVideos, query);
      setResults(filtered);
    }
  }, [query]);
  
  return (
    <div className="search-container">
      <div className="search-header">
        <h1>Search Workouts</h1>
        <p>Find your perfect workout</p>
      </div>
      
      <div className="search-input-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Search by title, category, instructor, or difficulty..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
        {query && (
          <button 
            className="clear-button" 
            onClick={() => setQuery('')}
          >
            ✕
          </button>
        )}
      </div>
      
      <div className="search-results">
        {!isSearching && (
          <div className="search-placeholder">
            <span className="search-icon">🔍</span>
            <p>Start typing to search for workouts</p>
          </div>
        )}
        
        {isSearching && results.length === 0 && (
          <div className="no-results">
            <span className="no-results-icon">😕</span>
            <p>No workouts found for "{query}"</p>
            <p className="no-results-hint">Try different keywords</p>
          </div>
        )}
        
        {isSearching && results.length > 0 && (
          <>
            <div className="results-count">
              Found {results.length} workout{results.length !== 1 ? 's' : ''}
            </div>
            <div className="results-grid">
              {results.map(video => {
                const completed = isWorkoutCompleted(video.id);
                
                return (
                  <div
                    key={video.id}
                    className={`result-card ${completed ? 'completed' : ''}`}
                    onClick={() => onVideoClick(video)}
                  >
                    <div className="result-thumbnail">
                      <img src={video.thumbnail} alt={video.title} />
                      <div className="result-duration">{video.duration}</div>
                      {completed && (
                        <div className="result-completed-badge">✓</div>
                      )}
                    </div>
                    <div className="result-info">
                      <span className="result-category">{video.category}</span>
                      <h3>{video.title}</h3>
                      <p className="result-instructor">{video.instructor}</p>
                      <span className="result-difficulty">{video.difficulty}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
