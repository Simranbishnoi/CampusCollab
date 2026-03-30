import React, { createContext, useState, useContext } from 'react';

const ActivityContext = createContext();

export const useActivity = () => useContext(ActivityContext);

export const ActivityProvider = ({ children }) => {
  // Start with a few dummy activities so the dashboard isn't completely empty
  const [activities, setActivities] = useState([
    {
      id: 1,
      title: "Joined 'Winter Hackathon 2026' Team",
      description: "Team 'Code Brewers' has successfully added you.",
      status: "approved",
      date: "1 day ago",
      githubLink: "https://github.com/vit-student/winter-hackathon"
    }
  ]);

  const addActivity = (title, description, status, githubLink = null) => {
    const newActivity = {
      id: Date.now(),
      title,
      description,
      status,
      date: "Just now",
      githubLink
    };
    // Add new activity to the start of the list
    setActivities(prev => [newActivity, ...prev]);
  };

  return (
    <ActivityContext.Provider value={{ activities, addActivity }}>
      {children}
    </ActivityContext.Provider>
  );
};
