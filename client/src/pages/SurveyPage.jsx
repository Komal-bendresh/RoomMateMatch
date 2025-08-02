import React, { useState, useEffect } from 'react';
import SurveyQuestionCard from '../components/SurveyQuestionCard';

import RoomPreferenceForm from '../components/RoomPreferenceForm';

import API from '../../api'; // adjust path based on your project
import { useAuth } from '../../AuthContext'; 

import MatchButton from "../components/MatchButton";

const SurveyPage = () => {
  const [answers, setAnswers] = useState({
    dailyRhythm: '',
    cleanliness: '',
    stressHandling: '',
    guestsFrequency: '',
    downtimeStyle: ''
  });

  const questions = [
    {
      id: 'dailyRhythm',
      question: "What best describes your daily rhythm?",
      options: [
        { id: 'early', label: 'Early bird', emoji: '🐓' },
        { id: 'night', label: 'Night owl', emoji: '🌙' }
      ]
    },
    {
      id: 'cleanliness',
      question: "How clean do you usually keep your room?",
      options: [
        { id: 'very-clean', label: 'Very Clean', emoji: '✨' },
        { id: 'clean', label: 'Clean', emoji: '🧹' },
        { id: 'relaxed', label: 'Relaxed', emoji: '😌' }
      ]
    },
    {
      id: 'stressHandling',
      question: "What's your go-to way to relax or handle stress?",
      options: [
        { id: 'journaling', label: 'Journaling', emoji: '📓' },
        { id: 'talking', label: 'Talking', emoji: '💬' },
        { id: 'meditating', label: 'Meditating', emoji: '🧘' },
        { id: 'other', label: 'Other', emoji: '❔' }
      ]
    },
    {
      id: 'guestsFrequency',
      question: "How often do you like having guests over?",
      options: [
        { id: 'often', label: 'Often', emoji: '🥳' },
        { id: 'occasionally', label: 'Occasionally', emoji: '🎉' },
        { id: 'rarely', label: 'Rarely', emoji: '🚫' }
      ]
    },
    {
      id: 'downtimeStyle',
      question: "In your downtime, are you more...",
      options: [
        { id: 'active', label: 'Active', emoji: '🏃' },
        { id: 'quiet', label: 'Quiet', emoji: '📚' }
      ]
    }
  ];

  const handleAnswer = (questionId, optionId) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  const isFormComplete = Object.values(answers).every(answer => answer !== '');

  // Simulate assistant answers (replace this with actual integration later)
  const simulateAssistantAnswer = (questionId, assistantText) => {
    const question = questions.find(q => q.id === questionId);
    if (!question) return;

    const matched = question.options.find(opt =>
      assistantText.toLowerCase().includes(opt.label.toLowerCase())
    );
    if (matched) {
      handleAnswer(questionId, matched.id);
    }
  };

 
const handleSubmit = async () => {
  if (isFormComplete) {
    const enumMapping = {
      dailyRhythm: {
        early: 'EARLY_BIRD',
        night: 'NIGHT_OWL'
      },
      cleanliness: {
        'very-clean': 'VERY_CLEAN',
        clean: 'CLEAN',
        relaxed: 'RELAXED'
      },
      stressHandling: {
        journaling: 'JOURNALING',
        talking: 'TALKING',
        meditating: 'MEDITATING',
        other: 'OTHER'
      },
      guestsFrequency: {
        often: 'OFTEN',
        occasionally: 'OCCASIONALLY',
        rarely: 'RARELY'
      },
      downtimeStyle: {
        active: 'ACTIVE',
        quiet: 'QUIET'
      }
    };

    const mappedAnswers = {
      sleepSchedule: enumMapping.dailyRhythm[answers.dailyRhythm],
      cleanliness: enumMapping.cleanliness[answers.cleanliness],
      StressManagement: enumMapping.stressHandling[answers.stressHandling],
      guestPolicy: enumMapping.guestsFrequency[answers.guestsFrequency],
      DowntimeStyle: enumMapping.downtimeStyle[answers.downtimeStyle]
    };

    try {
      const res = await API.post('/users/preferences', mappedAnswers);
      console.log('✅ Preferences saved:', res.data);
      alert('Preferences submitted successfully! 🎉');
    } catch (err) {
      console.error('❌ Failed to save preferences:', err.response?.data || err.message);
      alert('Something went wrong while saving preferences.');
    }
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 py-12 px-4 flex justify-center items-start">
      <div className="w-full max-w-2xl px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Roommate Preferences Survey
          </h1>
          <p className="text-gray-600 text-lg">
            Help us find your perfect roommate match! 🏠
          </p>
        </div>

        {/* Survey Questions */}
        <div className="space-y-6">
          {questions.map((q) => (
            <SurveyQuestionCard
              key={q.id}
              question={q.question}
              options={q.options}
              selectedOption={answers[q.id]}
              onOptionSelect={(answer) => handleAnswer(q.id, answer)}
            />
          ))}
        </div>

        {/* Submit Button */}
        <div className="text-center mt-12">
          <button
            onClick={handleSubmit}
            disabled={!isFormComplete}
            className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${
              isFormComplete
                ? 'bg-pink-600 text-white shadow-lg shadow-pink-200 hover:bg-pink-700 hover:shadow-xl'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isFormComplete ? 'Submit Preferences 🎉' : 'Complete All Questions'}
          </button>
          <p className="text-sm text-gray-500 mt-4">
            {Object.values(answers).filter(answer => answer !== '').length}/5 questions completed
          </p>
        </div>
      </div>
      <RoomPreferenceForm/>
       <MatchButton/>
    </div>
  );
};

export default SurveyPage;
