// import { useState, useEffect } from "react";
// import RoomPreferenceForm from "./RoomPreferenceForm";
// import axios from "axios";

// const SurveyForm = () => {
//   const [formData, setFormData] = useState({
//     cleanliness: '',
//     sleepSchedule: '',
//     guestPolicy: '',
//     foodPreference: '',
//     studyHabits: ''
//   });

//   useEffect(() => {
    
//    try {
//      window.handleOmnidimSurvey = (data) => {
//        setFormData(data);
//      };
//    } catch (error) {
//       console.error("Omnidim widget failed to initialize:", e);
//    }
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('/api/users/preferences', formData, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       alert('Preferences saved!');
//     } catch (err) {
//       console.error(err);
//       alert('Error submitting preferences.');
//     }
//   };

//   return (
//      <>
//     <form onSubmit={handleSubmit} className="space-y-4">
//       {Object.entries(formData).map(([key, value]) => (
//         <div key={key}>
//           <label className="block capitalize text-sm mb-1">
//             {key.replace(/([A-Z])/g, ' $1')}
//           </label>
//           <input
//             type="text"
//             value={value}
//             onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
//             className="w-full border px-3 py-2 rounded"
//           />
//         </div>
//       ))}

//       <button
//         type="submit"
//         className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//       >
//         Submit Preferences
//       </button>

//     </form>
//     <RoomPreferenceForm />
//    </>
//   );
// };

// export default SurveyForm;

import { useState, useEffect } from "react";
import SurveyQuestionCard from "./SurveyQuestionCard";
import RoomPreferenceForm from "./RoomPreferenceForm";
import axios from "axios";

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    cleanliness: '',
    sleepSchedule: '',
    guestPolicy: '',
    foodPreference: '',
    studyHabits: ''
  });
useEffect(() => {
  const fetchPreferences = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/users/preferences', {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (res.data) {
        const data = res.data.preferences; // or just res.data if flat
        setFormData(data);

        // Select the buttons visually
        Object.entries(data).forEach(([key, val]) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/users/preferences', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Preferences saved!');
    } catch (err) {
      console.error(err);
      alert('Error submitting preferences.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <SurveyQuestionCard
          question="How clean do you like your space?"
          options={[
            { id: 'very_clean', emoji: '🧼', label: 'Very Clean', dataAnswer: 'Very Clean' },
            { id: 'moderate', emoji: '🧹', label: 'Moderate', dataAnswer: 'Moderate' },
            { id: 'messy', emoji: '🐒', label: 'Messy', dataAnswer: 'Messy' },
          ]}
          selectedOption={formData.cleanliness}
          onOptionSelect={(id) => setFormData({ ...formData, cleanliness: id })}
        />

        <SurveyQuestionCard
          question="What’s your sleep schedule like?"
          options={[
            { id: 'early_bird', emoji: '🌅', label: 'Early Bird', dataAnswer: 'Early Bird' },
            { id: 'night_owl', emoji: '🌙', label: 'Night Owl', dataAnswer: 'Night Owl' },
            { id: 'flexible', emoji: '⏰', label: 'Flexible', dataAnswer: 'Flexible' },
          ]}
          selectedOption={formData.sleepSchedule}
          onOptionSelect={(id) => setFormData({ ...formData, sleepSchedule: id })}
        />

        <SurveyQuestionCard
          question="How do you feel about guests?"
          options={[
            { id: 'often', emoji: '🎉', label: 'Guests Often', dataAnswer: 'Guests Often' },
            { id: 'rarely', emoji: '🙅‍♀️', label: 'Rarely', dataAnswer: 'Rarely' },
            { id: 'okay', emoji: '🤷‍♀️', label: 'Occasionally', dataAnswer: 'Occasionally' },
          ]}
          selectedOption={formData.guestPolicy}
          onOptionSelect={(id) => setFormData({ ...formData, guestPolicy: id })}
        />

        <SurveyQuestionCard
          question="Preferred food style?"
          options={[
            { id: 'veg', emoji: '🥦', label: 'Vegetarian', dataAnswer: 'Vegetarian' },
            { id: 'non_veg', emoji: '🍗', label: 'Non-Vegetarian', dataAnswer: 'Non-Vegetarian' },
            { id: 'mixed', emoji: '🍽️', label: 'Mixed', dataAnswer: 'Mixed' },
          ]}
          selectedOption={formData.foodPreference}
          onOptionSelect={(id) => setFormData({ ...formData, foodPreference: id })}
        />

        <SurveyQuestionCard
          question="Your study habits?"
          options={[
            { id: 'silent', emoji: '📚', label: 'Silent Zone', dataAnswer: 'Silent Zone' },
            { id: 'music', emoji: '🎧', label: 'With Music', dataAnswer: 'With Music' },
            { id: 'group', emoji: '👥', label: 'Group Study', dataAnswer: 'Group Study' },
          ]}
          selectedOption={formData.studyHabits}
          onOptionSelect={(id) => setFormData({ ...formData, studyHabits: id })}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit Preferences
        </button>
      </form>

      <RoomPreferenceForm />
    </>
  );
};

export default SurveyForm;