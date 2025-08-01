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
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex gap-4 mb-6">
        <button onClick={() => setActiveTab('mediator')} className={`px-4 py-2 rounded ${activeTab === 'mediator' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Roommate Harmony AI</button>
        <button onClick={() => setActiveTab('games')} className={`px-4 py-2 rounded ${activeTab === 'games' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Bonding Games</button>
      </div>

      {activeTab === 'mediator' && (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold">Roommate Harmony AI</h2>

    <textarea
      className="w-full p-2 border rounded"
      rows={3}
      placeholder="Describe the issue... e.g., I want peace while eating but she wants to watch something on her phone."
      value={conflict}
      onChange={(e) => setConflict(e.target.value)}
    />

    <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleMediate}>
      Mediate
    </button>

    {resolution && (
      <div className="mt-4 p-4 bg-gray-100 rounded shadow">
        <p><strong>Resolution Suggestion:</strong> {resolution}</p>
        <p className="mt-2"><strong>Agreement Clause:</strong> {agreement}</p>
        <button className="mt-2 bg-green-600 text-white px-4 py-1 rounded" onClick={handleSaveAgreement}>
          Save Agreement
        </button>
      </div>
    )}
  </div>
)}
       

      {activeTab === 'games' && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Bonding Games</h2>

          {/* Two Truths and a Lie */}
          <div className="p-4 border rounded shadow">
            <h3 className="font-semibold mb-2">Two Truths and a Lie</h3>
            {[0, 1, 2].map((i) => (
              <input key={i} type="text" placeholder={`Statement ${i + 1}`} className="block w-full p-2 mb-2 border rounded" value={truths[i]} onChange={(e) => handleTruthChange(i, e.target.value)} />
            ))}
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <button key={i} onClick={() => handleGuess(i)} className="px-3 py-1 bg-purple-600 text-white rounded">
                  Guess {i + 1}
                </button>
              ))}
            </div>
            {guess !== null && (
              <p className="mt-2">{guessResult ? 'Correct! 🎉' : 'Oops! Try again. 😅'}</p>
            )}
            <p className="text-sm text-gray-500 mt-2">(Set the lie index manually in code or via future form update)</p>
          </div>

          {/* This or That */}
          <div className="p-4 border rounded shadow">
            <h3 className="font-semibold mb-2">Would you rather </h3>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={fetchThisOrThat}>Get a Pair</button>
            {thisOrThat && (
              <div className="mt-3 text-lg">
                <p>Would you rather {thisOrThat.option1} or {thisOrThat.option2}?</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}


