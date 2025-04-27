import React from 'react';
import "../../src/styles/main.scss"
export function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div>
            <h2>Question 3.3 Error Boundary</h2>
            <h2>Something went wrong:</h2>
            <pre>{error.message}</pre>
            <button className="btn" onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
}

export function BuggyComponent() {
  throw new Error("Redirecting, Something went wrong.");
    return (
      <>
      </>
        );
       
}