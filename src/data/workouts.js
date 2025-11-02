// Sample workout data with YouTube video links
export const workoutCategories = [
  {
    id: 1,
    name: 'Yoga',
    description: 'Find your inner peace with guided yoga sessions',
    color: '#00B4D8',
    icon: '🧘',
  },
  {
    id: 2,
    name: 'Strength',
    description: 'Build muscle and increase your strength',
    color: '#F77F00',
    icon: '💪',
  },
  {
    id: 3,
    name: 'HIIT',
    description: 'High-intensity interval training for maximum results',
    color: '#EF476F',
    icon: '🔥',
  },
  {
    id: 4,
    name: 'Core',
    description: 'Strengthen your core and improve stability',
    color: '#06FFA5',
    icon: '⚡',
  },
  {
    id: 5,
    name: 'Dance',
    description: 'Move to the rhythm and have fun while exercising',
    color: '#BB86FC',
    icon: '💃',
  },
];

export const workoutVideos = [
  // Yoga
  {
    id: 1,
    categoryId: 1,
    category: 'Yoga',
    title: '30 Min Full Body Yoga Flow',
    duration: '30 min',
    instructor: 'Yoga Expert',
    difficulty: 'Beginner',
    videoId: 'v7AYKMP6rOE', // YouTube video ID
    thumbnail: 'https://img.youtube.com/vi/v7AYKMP6rOE/maxresdefault.jpg',
  },
  {
    id: 2,
    categoryId: 1,
    category: 'Yoga',
    title: 'Morning Yoga for Flexibility',
    duration: '20 min',
    instructor: 'Yoga Master',
    difficulty: 'Beginner',
    videoId: '4pKly2JojMw',
    thumbnail: 'https://img.youtube.com/vi/4pKly2JojMw/maxresdefault.jpg',
  },
  {
    id: 3,
    categoryId: 1,
    category: 'Yoga',
    title: 'Power Yoga Workout',
    duration: '45 min',
    instructor: 'Yoga Pro',
    difficulty: 'Advanced',
    videoId: '1oObQvnR7YI',
    thumbnail: 'https://img.youtube.com/vi/1oObQvnR7YI/maxresdefault.jpg',
  },
  // Strength
  {
    id: 4,
    categoryId: 2,
    category: 'Strength',
    title: 'Full Body Strength Training',
    duration: '30 min',
    instructor: 'Strength Coach',
    difficulty: 'Intermediate',
    videoId: 'UIPnW-3a8YQ',
    thumbnail: 'https://img.youtube.com/vi/UIPnW-3a8YQ/maxresdefault.jpg',
  },
  {
    id: 5,
    categoryId: 2,
    category: 'Strength',
    title: 'Upper Body Workout',
    duration: '25 min',
    instructor: 'Fitness Expert',
    difficulty: 'Intermediate',
    videoId: 'tKRUlcbDPhU',
    thumbnail: 'https://img.youtube.com/vi/tKRUlcbDPhU/maxresdefault.jpg',
  },
  {
    id: 6,
    categoryId: 2,
    category: 'Strength',
    title: 'Lower Body Strength',
    duration: '30 min',
    instructor: 'Strength Trainer',
    difficulty: 'Advanced',
    videoId: 'mGvzVjuY8SY',
    thumbnail: 'https://img.youtube.com/vi/mGvzVjuY8SY/maxresdefault.jpg',
  },
  // HIIT
  {
    id: 7,
    categoryId: 3,
    category: 'HIIT',
    title: '20 Min HIIT Cardio Workout',
    duration: '20 min',
    instructor: 'HIIT Trainer',
    difficulty: 'Intermediate',
    videoId: 'ml6cT4AZdqI',
    thumbnail: 'https://img.youtube.com/vi/ml6cT4AZdqI/maxresdefault.jpg',
  },
  {
    id: 8,
    categoryId: 3,
    category: 'HIIT',
    title: 'Intense Fat Burning HIIT',
    duration: '15 min',
    instructor: 'Cardio Expert',
    difficulty: 'Advanced',
    videoId: 'dZgOteW12bY',
    thumbnail: 'https://img.youtube.com/vi/dZgOteW12bY/maxresdefault.jpg',
  },
  {
    id: 9,
    categoryId: 3,
    category: 'HIIT',
    title: 'HIIT Workout for Beginners',
    duration: '12 min',
    instructor: 'Fitness Coach',
    difficulty: 'Beginner',
    videoId: 'tV9lDHJPZz8',
    thumbnail: 'https://img.youtube.com/vi/tV9lDHJPZz8/maxresdefault.jpg',
  },
  // Core
  {
    id: 10,
    categoryId: 4,
    category: 'Core',
    title: '10 Min Ab Workout',
    duration: '10 min',
    instructor: 'Core Specialist',
    difficulty: 'Beginner',
    videoId: 'DHD1-2P94DI',
    thumbnail: 'https://img.youtube.com/vi/DHD1-2P94DI/maxresdefault.jpg',
  },
  {
    id: 11,
    categoryId: 4,
    category: 'Core',
    title: 'Advanced Core Strength',
    duration: '15 min',
    instructor: 'Core Expert',
    difficulty: 'Advanced',
    videoId: 'CBNh9ky0T4o',
    thumbnail: 'https://img.youtube.com/vi/CBNh9ky0T4o/maxresdefault.jpg',
  },
  {
    id: 12,
    categoryId: 4,
    category: 'Core',
    title: 'Core Stability Training',
    duration: '20 min',
    instructor: 'Fitness Pro',
    difficulty: 'Intermediate',
    videoId: 'BOnjBQEhLP4',
    thumbnail: 'https://img.youtube.com/vi/BOnjBQEhLP4/maxresdefault.jpg',
  },
  // Dance
  {
    id: 13,
    categoryId: 5,
    category: 'Dance',
    title: 'Dance Cardio Workout',
    duration: '30 min',
    instructor: 'Dance Coach',
    difficulty: 'Beginner',
    videoId: 'gNkGg9k9LJM',
    thumbnail: 'https://img.youtube.com/vi/gNkGg9k9LJM/maxresdefault.jpg',
  },
  {
    id: 14,
    categoryId: 5,
    category: 'Dance',
    title: 'Zumba Dance Party',
    duration: '25 min',
    instructor: 'Zumba Instructor',
    difficulty: 'Intermediate',
    videoId: 'BxVlVdUjzQw',
    thumbnail: 'https://img.youtube.com/vi/BxVlVdUjzQw/maxresdefault.jpg',
  },
  {
    id: 15,
    categoryId: 5,
    category: 'Dance',
    title: 'Hip Hop Dance Workout',
    duration: '20 min',
    instructor: 'Dance Pro',
    difficulty: 'Intermediate',
    videoId: 'hAQW64yHUGM',
    thumbnail: 'https://img.youtube.com/vi/hAQW64yHUGM/maxresdefault.jpg',
  },
];

// Generate personalized recommendations based on dummy user data
export const getRecommendations = (completedWorkouts = []) => {
  // Simple recommendation logic: show videos from different categories
  const recommendations = [];
  
  if (completedWorkouts.length === 0) {
    // New users: recommend beginner-friendly workouts
    return workoutVideos.filter(video => video.difficulty === 'Beginner').slice(0, 3);
  }
  
  // Get categories user has completed
  const completedCategories = [...new Set(completedWorkouts.map(w => w.categoryId))];
  
  // Recommend from categories user hasn't tried
  const untriedCategories = workoutCategories.filter(
    cat => !completedCategories.includes(cat.id)
  );
  
  if (untriedCategories.length > 0) {
    untriedCategories.forEach(cat => {
      const video = workoutVideos.find(v => v.categoryId === cat.id);
      if (video) recommendations.push(video);
    });
  }
  
  // Fill remaining slots with popular workouts
  if (recommendations.length < 3) {
    const popular = workoutVideos.slice(0, 3);
    popular.forEach(video => {
      if (!recommendations.find(r => r.id === video.id)) {
        recommendations.push(video);
      }
    });
  }
  
  return recommendations.slice(0, 3);
};
