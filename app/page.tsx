'use client';
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  async function addFruit() {
    const res = await fetch('/api/add-fruit', {
      method: 'POST',
      body: JSON.stringify({ name, price }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      alert('Fruit added!');
      setName('');
      setPrice('');
    } else {
      alert('Failed to add fruit');
    }
  }

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold">Add Fruit</h1>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Fruit name"
        className="border p-2 mr-2"
      />
      <input
        type="number"
        value={price}
        onChange={e => setPrice(e.target.value)}
        placeholder="Price"
        className="border p-2 mr-2"
      />
      <button onClick={addFruit} className="bg-blue-500 text-white px-4 py-2">Add</button>
    </main>
  );
}
