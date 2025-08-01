import React, { useEffect } from 'react';

const SurveyQuestionCard = ({
  question,
  options,
  selectedOption,
  onOptionSelect,
}) => {
  useEffect(() => {
    const handler = (e) => {
      if (!e.detail || !e.detail.answer) return;
      const answer = e.detail.answer;
      const allButtons = document.querySelectorAll('[data-answer]');
      for (const btn of allButtons) {
        if (btn.getAttribute('data-answer') === answer) {
          btn.click(); // ✅ simulate actual user click
          break;
        }
      }
    };

    window.addEventListener('omnidim-answer', handler);
    return () => window.removeEventListener('omnidim-answer', handler);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
        {question}
      </h2>

      <div className="flex flex-wrap gap-3 justify-center">
        {options.map((option) => (
          <button
            key={option.id}
            data-answer={option.label} // Used by voice assistant to auto-select
            onClick={() => onOptionSelect(option.id)}
            className={`
              flex items-center gap-2 px-4 py-3 rounded-full border-2 transition-all duration-300 transform hover:scale-105 active:scale-95
              ${
                selectedOption === option.id
                  ? 'bg-pink-600 text-white border-pink-600 shadow-lg shadow-pink-200'
                  : 'bg-gray-50 text-gray-800 border-gray-300 hover:border-gray-400 hover:bg-gray-100'
              }
            `}
          >
            <span className="text-lg">{option.emoji}</span>
            <span className="font-medium text-sm md:text-base whitespace-nowrap">
              {option.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SurveyQuestionCard;