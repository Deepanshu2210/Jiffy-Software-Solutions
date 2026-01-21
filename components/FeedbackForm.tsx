import React, { useState } from 'react';

const FeedbackForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setIsOpen(false), 2000);
  };

  return (
    <>
      <button
        onClick={toggleForm}
        className="fixed bottom-6 left-6 bg-accent text-white rounded-full p-3 shadow-lg hover:opacity-90 transition-transform transform hover:scale-110 z-50 no-capture no-print"
        aria-label="Give Feedback"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 left-6 w-80 bg-white rounded-lg shadow-2xl flex flex-col z-50 animate-fade-in-up no-capture no-print">
          <header className="bg-dark text-white p-4 flex justify-between items-center rounded-t-lg">
            <h3 className="font-bold">Share Your Feedback</h3>
            <button onClick={toggleForm} className="text-white">&times;</button>
          </header>

          <div className="p-4">
            {submitted ? (
              <div className="text-center py-8">
                <h4 className="font-semibold text-lg text-green-600">Thank You!</h4>
                <p>Your feedback has been received.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="feedback-type" className="block text-sm font-medium text-gray-700">Feedback Type</label>
                  <select id="feedback-type" name="feedback-type" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm rounded-md">
                    <option>Suggestion</option>
                    <option>Bug Report</option>
                    <option>General Comment</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment</label>
                  <textarea id="comment" name="comment" rows={4} className="mt-1 shadow-sm focus:ring-accent focus:border-accent block w-full sm:text-sm border border-gray-300 rounded-md p-2" required></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors">
                  Submit Feedback
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackForm;