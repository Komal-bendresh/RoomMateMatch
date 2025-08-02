import { useState, useEffect } from "react";
import SurveyQuestionCard from "./SurveyQuestionCard";

import API from "../../api";


const SurveyForm = () => {
  const [formData, setFormData] = useState({
    cleanliness: '',
    sleepSchedule: '',
    guestPolicy: '',
    StressManagement: '',
    DowntimeStyle: '',
  });

  useEffect(() => {
    const fetchPreferences = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await API.get('/users/preferences', {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (res.data?.preferences) {
          setFormData(res.data.preferences);

          // Auto-select buttons based on saved answers
          Object.entries(res.data.preferences).forEach(([key, val]) => {
            const button = document.querySelector(`[data-answer="${val}"]`);
            if (button) button.click();
          });
        }
      } catch (err) {
        console.error("Failed to fetch preferences:", err);
      }
    };

    fetchPreferences();
  }, []);

const handleSubmit = async () => {
  try {
    const res = await API.post("/users/preferences", {
      cleanliness, sleepSchedule, StressManagement, guestPolicy, DowntimeStyle
    });
    console.log("✅ Preferences saved:", res.data);
  } catch (err) {
    console.error("❌ Failed to save:", err.response?.data || err.message);
  }
};


  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">

        <SurveyQuestionCard
          question="How clean do you like your space?"
          options={[
            { id: 'High', emoji: '🧼', label: 'Very Clean', dataAnswer: 'High' },
            { id: 'Moderate', emoji: '🧹', label: 'Moderate', dataAnswer: 'Moderate' },
            { id: 'Low', emoji: '🐒', label: 'Messy', dataAnswer: 'Low' },
          ]}
          selectedOption={formData.cleanliness}
          onOptionSelect={(id) => setFormData({ ...formData, cleanliness: id })}
        />

        <SurveyQuestionCard
          question="What’s your sleep schedule like?"
          options={[
            { id: 'Early bird', emoji: '🌅', label: 'Early Bird', dataAnswer: 'Early bird' },
            { id: 'Night owl', emoji: '🌙', label: 'Night Owl', dataAnswer: 'Night owl' },
          ]}
          selectedOption={formData.sleepSchedule}
          onOptionSelect={(id) => setFormData({ ...formData, sleepSchedule: id })}
        />

        <SurveyQuestionCard
          question="How do you feel about guests?"
          options={[
            { id: 'Often', emoji: '🎉', label: 'Guests Often', dataAnswer: 'Often' },
            { id: 'Rarely', emoji: '🙅‍♀️', label: 'Rarely', dataAnswer: 'Rarely' },
            { id: 'Occasionally', emoji: '🤷‍♀️', label: 'Occasionally', dataAnswer: 'Occasionally' },
          ]}
          selectedOption={formData.guestPolicy}
          onOptionSelect={(id) => setFormData({ ...formData, guestPolicy: id })}
        />

        <SurveyQuestionCard
          question="How do you manage stress?"
          options={[
            { id: 'Journaling', emoji: '📓', label: 'Journaling', dataAnswer: 'Journaling' },
            { id: 'Talking', emoji: '🗣️', label: 'Talking', dataAnswer: 'Talking' },
            { id: 'Meditating', emoji: '🧘‍♀️', label: 'Meditating', dataAnswer: 'Meditating' },
            { id: 'Other', emoji: '❓', label: 'Other', dataAnswer: 'Other' },
          ]}
          selectedOption={formData.StressManagement}
          onOptionSelect={(id) => setFormData({ ...formData, StressManagement: id })}
        />

        <SurveyQuestionCard
          question="What’s your downtime style?"
          options={[
            { id: 'Active', emoji: '🏃‍♂️', label: 'Active', dataAnswer: 'Active' },
            { id: 'Quiet', emoji: '😌', label: 'Quiet', dataAnswer: 'Quiet' },
          ]}
          selectedOption={formData.DowntimeStyle}
          onOptionSelect={(id) => setFormData({ ...formData, DowntimeStyle: id })}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit Preferences
        </button>
      </form>
     
      
    </>
  );
};

export default SurveyForm;
