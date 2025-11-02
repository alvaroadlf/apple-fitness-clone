// Storage utility for managing user data in localStorage and iCloud sync

// Constants
const MILLISECONDS_PER_DAY = 86400000;

const STORAGE_KEYS = {
  USER_PREFERENCES: 'fitness_user_preferences',
  WORKOUT_HISTORY: 'fitness_workout_history',
  COMPLETED_WORKOUTS: 'fitness_completed_workouts',
  PROGRESS: 'fitness_progress',
  ICLOUD_SYNC_STATUS: 'fitness_icloud_sync',
};

// Get data from localStorage
export const getFromStorage = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
};

// Save data to localStorage
export const saveToStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return false;
  }
};

// User Preferences
export const getUserPreferences = () => {
  return getFromStorage(STORAGE_KEYS.USER_PREFERENCES) || {
    name: 'Fitness User',
    favoriteCategories: [],
    preferredDifficulty: 'Intermediate',
    theme: 'dark',
  };
};

export const saveUserPreferences = (preferences) => {
  return saveToStorage(STORAGE_KEYS.USER_PREFERENCES, preferences);
};

// Workout History
export const getWorkoutHistory = () => {
  return getFromStorage(STORAGE_KEYS.WORKOUT_HISTORY) || [];
};

export const addToWorkoutHistory = (workout) => {
  const history = getWorkoutHistory();
  const newEntry = {
    ...workout,
    completedAt: new Date().toISOString(),
    id: Date.now(),
  };
  history.unshift(newEntry);
  
  // Keep only last 50 workouts
  const updatedHistory = history.slice(0, 50);
  saveToStorage(STORAGE_KEYS.WORKOUT_HISTORY, updatedHistory);
  
  // Trigger iCloud sync
  syncToICloud();
  
  return newEntry;
};

// Completed Workouts (for tracking unique completions)
export const getCompletedWorkouts = () => {
  return getFromStorage(STORAGE_KEYS.COMPLETED_WORKOUTS) || [];
};

export const markWorkoutAsCompleted = (workoutId) => {
  const completed = getCompletedWorkouts();
  
  if (!completed.includes(workoutId)) {
    completed.push(workoutId);
    saveToStorage(STORAGE_KEYS.COMPLETED_WORKOUTS, completed);
    syncToICloud();
  }
  
  return completed;
};

export const isWorkoutCompleted = (workoutId) => {
  const completed = getCompletedWorkouts();
  return completed.includes(workoutId);
};

// Progress Tracking
export const getProgress = () => {
  return getFromStorage(STORAGE_KEYS.PROGRESS) || {
    totalWorkouts: 0,
    totalMinutes: 0,
    streak: 0,
    lastWorkoutDate: null,
    categoriesCompleted: {},
  };
};

export const updateProgress = (workout) => {
  const progress = getProgress();
  const today = new Date().toDateString();
  const lastWorkout = progress.lastWorkoutDate 
    ? new Date(progress.lastWorkoutDate).toDateString()
    : null;
  
  // Update streak
  if (lastWorkout === today) {
    // Already worked out today, no streak change
  } else if (lastWorkout === new Date(Date.now() - MILLISECONDS_PER_DAY).toDateString()) {
    // Worked out yesterday, increase streak
    progress.streak += 1;
  } else if (!lastWorkout) {
    // First workout
    progress.streak = 1;
  } else {
    // Streak broken
    progress.streak = 1;
  }
  
  // Update totals
  progress.totalWorkouts += 1;
  const duration = parseInt(workout.duration, 10) || 0;
  progress.totalMinutes += duration;
  progress.lastWorkoutDate = new Date().toISOString();
  
  // Update categories
  const category = workout.category || 'Other';
  progress.categoriesCompleted[category] = 
    (progress.categoriesCompleted[category] || 0) + 1;
  
  saveToStorage(STORAGE_KEYS.PROGRESS, progress);
  syncToICloud();
  
  return progress;
};

// iCloud Sync Mock Implementation
export const syncToICloud = () => {
  // This is a mock implementation
  // In a real app, you would use CloudKit or a backend service
  
  const syncStatus = {
    lastSyncTime: new Date().toISOString(),
    status: 'synced',
    itemsSynced: [
      'preferences',
      'history',
      'completed',
      'progress',
    ],
  };
  
  saveToStorage(STORAGE_KEYS.ICLOUD_SYNC_STATUS, syncStatus);
  
  // Simulate sync delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(syncStatus);
    }, 500);
  });
};

export const getICloudSyncStatus = () => {
  return getFromStorage(STORAGE_KEYS.ICLOUD_SYNC_STATUS) || {
    lastSyncTime: null,
    status: 'not_synced',
    itemsSynced: [],
  };
};

// Search through workouts
export const searchWorkouts = (workouts, query) => {
  if (!query || query.trim() === '') {
    return workouts;
  }
  
  const lowerQuery = query.toLowerCase();
  
  return workouts.filter(workout => {
    return (
      workout.title.toLowerCase().includes(lowerQuery) ||
      workout.category.toLowerCase().includes(lowerQuery) ||
      workout.instructor.toLowerCase().includes(lowerQuery) ||
      workout.difficulty.toLowerCase().includes(lowerQuery)
    );
  });
};

// Clear all data (for testing/reset)
export const clearAllData = () => {
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key);
  });
};

export default {
  getUserPreferences,
  saveUserPreferences,
  getWorkoutHistory,
  addToWorkoutHistory,
  getCompletedWorkouts,
  markWorkoutAsCompleted,
  isWorkoutCompleted,
  getProgress,
  updateProgress,
  syncToICloud,
  getICloudSyncStatus,
  searchWorkouts,
  clearAllData,
};
