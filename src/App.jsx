import { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import WorkoutCategories from './components/WorkoutCategories/WorkoutCategories';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Search from './components/Search/Search';
import Progress from './components/Progress/Progress';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentView('category');
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedCategory(null);
  };

  return (
    <div className="app">
      <nav className="app-nav">
        <div className="nav-brand">
          <span className="brand-icon">💪</span>
          <span className="brand-name">Apple Fitness+</span>
        </div>
        <div className="nav-links">
          <button
            className={`nav-link ${currentView === 'dashboard' ? 'active' : ''}`}
            onClick={() => setCurrentView('dashboard')}
          >
            🏠 Home
          </button>
          <button
            className={`nav-link ${currentView === 'search' ? 'active' : ''}`}
            onClick={() => setCurrentView('search')}
          >
            🔍 Search
          </button>
          <button
            className={`nav-link ${currentView === 'progress' ? 'active' : ''}`}
            onClick={() => setCurrentView('progress')}
          >
            📊 Progress
          </button>
        </div>
      </nav>

      <main className="app-content">
        {currentView === 'dashboard' && (
          <Dashboard
            onCategoryClick={handleCategoryClick}
            onVideoClick={handleVideoClick}
          />
        )}

        {currentView === 'category' && selectedCategory && (
          <WorkoutCategories
            category={selectedCategory}
            onVideoClick={handleVideoClick}
            onBack={handleBackToDashboard}
          />
        )}

        {currentView === 'search' && (
          <Search onVideoClick={handleVideoClick} />
        )}

        {currentView === 'progress' && <Progress />}
      </main>

      {selectedVideo && (
        <VideoPlayer video={selectedVideo} onClose={handleCloseVideo} />
      )}
    </div>
  );
}

export default App;
