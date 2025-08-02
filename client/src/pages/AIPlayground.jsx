// import React, { useState } from 'react';
// import axios from 'axios';
// import API from '../../api';

// import { useAuth } from '../../AuthContext';

// export default function AIPlayground() {
//   const [activeTab, setActiveTab] = useState('mediator');

//   // Mediator State
//   const [conflict, setConflict] = useState("");
//   const [resolution, setResolution] = useState(null);
//   const [agreement, setAgreement] = useState(null);

//   // Game: This or That
//   const [thisOrThat, setThisOrThat] = useState(null);

//   // Game: Two Truths and a Lie
//   const [truths, setTruths] = useState(['', '', '']);
//   const [lieIndex, setLieIndex] = useState(null);
//   const [guess, setGuess] = useState(null);
//   const [guessResult, setGuessResult] = useState(null);
//   const { user } = useAuth();

 
// const handleMediate = async () => {
//   try {
//     const res = await API.post('/mediate', {
//       conflictDescription: conflict,
//     });
//     setResolution(res.data.suggestion);
//     setAgreement(res.data.agreement);
//   } catch (err) {
//     console.error("❌ Mediation error:", err);
//   }
// };

//   const handleSaveAgreement = async () => {
//   if (!user) {
//     alert('You must be logged in to save the agreement.');
//     return;
//   }

//   try {
//     await API.post('/save-agreement', {
//       agreement,
//       userId: user._id,
//     });

//     alert('Agreement saved successfully!');
//   } catch (error) {
//     console.error('Save failed:', error);
//     alert('Failed to save agreement.');
//   }
// };


//   const fetchThisOrThat = async () => {
//     const res = await API.get('/this-or-that');
//     setThisOrThat(res.data);
//   };

//   const handleTruthChange = (index, value) => {
//     const updated = [...truths];
//     updated[index] = value;
//     setTruths(updated);
//   };

//   const handleGuess = (index) => {
//     setGuess(index);
//     setGuessResult(index === lieIndex);
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <div className="flex gap-4 mb-6">
//         <button onClick={() => setActiveTab('mediator')} className={`px-4 py-2 rounded ${activeTab === 'mediator' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Roommate Harmony AI</button>
//         <button onClick={() => setActiveTab('games')} className={`px-4 py-2 rounded ${activeTab === 'games' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Bonding Games</button>
//       </div>

//       {activeTab === 'mediator' && (
//   <div className="space-y-4">
//     <h2 className="text-xl font-semibold">Roommate Harmony AI</h2>

//     <textarea
//       className="w-full p-2 border rounded"
//       rows={3}
//       placeholder="Describe the issue... e.g., I want peace while eating but she wants to watch something on her phone."
//       value={conflict}
//       onChange={(e) => setConflict(e.target.value)}
//     />

//     <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleMediate}>
//       Mediate
//     </button>

//     {resolution && (
//       <div className="mt-4 p-4 bg-gray-100 rounded shadow">
//         <p><strong>Resolution Suggestion:</strong> {resolution}</p>
//         <p className="mt-2"><strong>Agreement Clause:</strong> {agreement}</p>
//         <button className="mt-2 bg-green-600 text-white px-4 py-1 rounded" onClick={handleSaveAgreement}>
//           Save Agreement
//         </button>
//       </div>
//     )}
//   </div>
// )}
       

//       {activeTab === 'games' && (
//         <div className="space-y-6">
//           <h2 className="text-xl font-semibold">Bonding Games</h2>

//           {/* Two Truths and a Lie */}
//           <div className="p-4 border rounded shadow">
//             <h3 className="font-semibold mb-2">Two Truths and a Lie</h3>
//             {[0, 1, 2].map((i) => (
//               <input key={i} type="text" placeholder={`Statement ${i + 1}`} className="block w-full p-2 mb-2 border rounded" value={truths[i]} onChange={(e) => handleTruthChange(i, e.target.value)} />
//             ))}
//             <div className="flex gap-2">
//               {[0, 1, 2].map((i) => (
//                 <button key={i} onClick={() => handleGuess(i)} className="px-3 py-1 bg-purple-600 text-white rounded">
//                   Guess {i + 1}
//                 </button>
//               ))}
//             </div>
//             {guess !== null && (
//               <p className="mt-2">{guessResult ? 'Correct! 🎉' : 'Oops! Try again. 😅'}</p>
//             )}
//             <p className="text-sm text-gray-500 mt-2">(Set the lie index manually in code or via future form update)</p>
//           </div>

//           {/* This or That */}
//           <div className="p-4 border rounded shadow">
//             <h3 className="font-semibold mb-2">Would you rather </h3>
//             <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={fetchThisOrThat}>Get a Pair</button>
//             {thisOrThat && (
//               <div className="mt-3 text-lg">
//                 <p>Would you rather {thisOrThat.option1} or {thisOrThat.option2}?</p>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useState } from 'react';
import axios from 'axios';
import API from '../../api';
import { useAuth } from '../../AuthContext';

export default function AIPlayground() {
  const [activeTab, setActiveTab] = useState('mediator');

  // Mediator State
  const [conflict, setConflict] = useState("");
  const [resolution, setResolution] = useState(null);
  const [agreement, setAgreement] = useState(null);

  // Game: This or That
  const [thisOrThat, setThisOrThat] = useState(null);

  // Game: Two Truths and a Lie
  const [truths, setTruths] = useState(['', '', '']);
  const [lieIndex, setLieIndex] = useState(null);
  const [guess, setGuess] = useState(null);
  const [guessResult, setGuessResult] = useState(null);
  const { user } = useAuth();

  const handleMediate = async () => {
    try {
      const res = await API.post('/mediate', {
        conflictDescription: conflict,
      });
      setResolution(res.data.suggestion);
      setAgreement(res.data.agreement);
    } catch (err) {
      console.error("❌ Mediation error:", err);
    }
  };

  const handleSaveAgreement = async () => {
    if (!user) {
      alert('You must be logged in to save the agreement.');
      return;
    }

    try {
      await API.post('/save-agreement', {
        agreement,
        userId: user._id,
      });

      alert('Agreement saved successfully!');
    } catch (error) {
      console.error('Save failed:', error);
      alert('Failed to save agreement.');
    }
  };

  const fetchThisOrThat = async () => {
    const res = await API.get('/this-or-that');
    setThisOrThat(res.data);
  };

  const handleTruthChange = (index, value) => {
    const updated = [...truths];
    updated[index] = value;
    setTruths(updated);
  };

  const handleGuess = (index) => {
    setGuess(index);
    setGuessResult(index === lieIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 pt-8">
          <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">AI Playground</h1>
          <p className="text-gray-600">Your smart companion for roommate harmony and bonding</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-2 border border-pink-100">
            <div className="flex gap-2">
              <button 
                onClick={() => setActiveTab('mediator')} 
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeTab === 'mediator' 
                    ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                }`}
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Roommate Harmony AI
                </div>
              </button>
              <button 
                onClick={() => setActiveTab('games')} 
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeTab === 'games' 
                    ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                }`}
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Bonding Games
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mediator Tab */}
        {activeTab === 'mediator' && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-pink-100 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Roommate Harmony AI</h2>
                <p className="text-gray-600">Let AI help resolve conflicts and create agreements</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Describe the conflict or issue
                </label>
                <textarea
                  className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white hover:border-gray-400 placeholder-gray-400 text-gray-800 resize-none"
                  rows={4}
                  placeholder="e.g., I want peace while eating but she wants to watch something on her phone..."
                  value={conflict}
                  onChange={(e) => setConflict(e.target.value)}
                />
              </div>

              <button 
                className="w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
                onClick={handleMediate}
              >
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Get AI Mediation
                </div>
              </button>

              {resolution && (
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-200">
                  <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-6 border border-pink-100">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 mb-2">AI Resolution Suggestion</h4>
                          <p className="text-gray-700 leading-relaxed">{resolution}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 border border-pink-100">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 mb-2">Proposed Agreement Clause</h4>
                          <p className="text-gray-700 leading-relaxed">{agreement}</p>
                        </div>
                      </div>
                    </div>

                    <button 
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                      onClick={handleSaveAgreement}
                    >
                      <div className="flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                        </svg>
                        Save Agreement
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Games Tab */}
        {activeTab === 'games' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Bonding Games</h2>
              <p className="text-gray-600">Fun activities to build stronger roommate relationships</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Two Truths and a Lie */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-pink-100 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Two Truths and a Lie</h3>
                    <p className="text-gray-600 text-sm">Test how well you know each other</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[0, 1, 2].map((i) => (
                    <div key={i}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Statement {i + 1}
                      </label>
                      <input 
                        type="text" 
                        placeholder={`Enter statement ${i + 1}...`}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white hover:border-gray-400 placeholder-gray-400 text-gray-800"
                        value={truths[i]} 
                        onChange={(e) => handleTruthChange(i, e.target.value)} 
                      />
                    </div>
                  ))}

                  <div className="pt-4">
                    <p className="text-sm font-medium text-gray-700 mb-3">Which one is the lie?</p>
                    <div className="flex gap-3">
                      {[0, 1, 2].map((i) => (
                        <button 
                          key={i} 
                          onClick={() => handleGuess(i)} 
                          className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                          Guess {i + 1}
                        </button>
                      ))}
                    </div>
                  </div>

                  {guess !== null && (
                    <div className={`p-4 rounded-xl ${guessResult ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                      <div className="flex items-center">
                        {guessResult ? (
                          <>
                            <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-green-700 font-medium">Correct! 🎉 You know them well!</span>
                          </>
                        ) : (
                          <>
                            <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span className="text-red-700 font-medium">Oops! Try again. 😅</span>
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                    <p className="text-purple-700 text-sm">
                      💡 <strong>Tip:</strong> Set the lie index manually in code or via future form update
                    </p>
                  </div>
                </div>
              </div>

              {/* This or That */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-pink-100 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Would You Rather</h3>
                    <p className="text-gray-600 text-sm">Discover preferences and spark conversations</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <button 
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
                    onClick={fetchThisOrThat}
                  >
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Get New Question
                    </div>
                  </button>

                  {thisOrThat && (
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-200">
                      <div className="text-center">
                        <h4 className="text-xl font-bold text-gray-800 mb-6">Would you rather...</h4>
                        <div className="space-y-4">
                          <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm">
                            <p className="text-lg text-gray-800 font-medium">{thisOrThat.option1}</p>
                          </div>
                          <div className="text-gray-400 font-bold text-lg">OR</div>
                          <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm">
                            <p className="text-lg text-gray-800 font-medium">{thisOrThat.option2}</p>
                          </div>
                        </div>
                        <div className="mt-6">
                          <p className="text-blue-600 text-sm font-medium">💬 Discuss your choice with your roommate!</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}