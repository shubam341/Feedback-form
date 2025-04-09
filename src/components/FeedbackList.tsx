import React from 'react';
import { format } from 'date-fns';

interface Feedback {
  id: number;
  full_name: string;
  email: string;
  message: string;
  created_at: string;
}

interface FeedbackListProps {
  feedbacks: Feedback[];
}

export function FeedbackList({ feedbacks }: FeedbackListProps) {
  return (
    <div className="space-y-4">
      {feedbacks.map((feedback) => (
        <div
          key={feedback.id}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {feedback.full_name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {feedback.email}
              </p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {format(new Date(feedback.created_at), 'MMM d, yyyy')}
            </span>
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">{feedback.message}</p>
        </div>
      ))}
    </div>
  );
}
