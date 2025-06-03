// web/components/LoadingSpinner.tsx

import React from 'react';

interface LoadingSpinnerProps {
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className = 'w-6 h-6' }) => {
  return (
    <div
      className={`animate-spin rounded-full border-2 border-t-2 border-gray-900 border-t-transparent ${className}`}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;