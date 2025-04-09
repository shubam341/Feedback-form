// src/App.tsx

import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { supabase } from './lib/supabase';
import { FeedbackForm } from './components/FeedbackForm';
import { FeedbackList } from './components/FeedbackList';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  const [showFeedbacks, setShowFeedbacks] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const fetchFeedbacks = async () => {
    const { data, error } = await supabase
      .from('feedbacks')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setFeedbacks(data);
    }
  };

  useEffect(() => {
    if (showFeedbacks) {
      fetchFeedbacks();
    }
  }, [showFeedbacks]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Toaster position="top-right" />
      
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Feedback Collector
          </h1>
          <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <FeedbackForm onSubmitSuccess={fetchFeedbacks} />
        </div>

        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowFeedbacks(!showFeedbacks)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {showFeedbacks ? 'Hide' : 'View'} Submitted Feedback
          </button>
        </div>

        {showFeedbacks && <FeedbackList feedbacks={feedbacks} />}

        <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Developed by Shubam</p>
          <p>© {new Date().getFullYear()} Feedback Collector. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
