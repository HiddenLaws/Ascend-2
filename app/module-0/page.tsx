'use client';
import { useState } from 'react';

export default function Module0() {
  const [journal, setJournal] = useState('');
  const [insight, setInsight] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await fetch('/api/insight', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ journal }),
    });
    const data = await res.json();
    setInsight(data.insight);

    await fetch('/api/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ module: 'module-0', journal, insight: data.insight }),
    });

    setLoading(false);
  };

  return (
    <main className="max-w-2xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold">Module 0: The Discipline of Meditation</h1>
      <textarea className="w-full h-40 border rounded p-3" placeholder="Write your reflection..." value={journal} onChange={(e) => setJournal(e.target.value)} />
      <button onClick={handleSubmit} disabled={loading || !journal.trim()} className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
        {loading ? 'Processing...' : 'Submit'}
      </button>
      {insight && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <strong>Insight:</strong>
          <p>{insight}</p>
        </div>
      )}
    </main>
  );
}
