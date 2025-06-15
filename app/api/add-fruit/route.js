import { NextResponse } from 'next/server';
import { getDBConnection } from '@/lib/db';

export async function POST(req) {
  const { name, price } = await req.json();
  try {
    const db = await getDBConnection();
    await db.execute('INSERT INTO fruits (name, price) VALUES (?, ?)', [name, price]);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to insert' }, { status: 500 });
  }
}
