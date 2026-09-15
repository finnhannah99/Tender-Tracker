import { getStore } from '@netlify/blobs';

// Single-user tender triage decisions, stored as one JSON blob keyed by
// notice id: { [id]: { action: 'track'|'ignore'|'irrelevant', reason, at } }.
// No auth/multi-user handling — this site has exactly one operator.
const KEY = 'decisions.json';

export default async (req) => {
  const store = getStore('tender-triage');

  if (req.method === 'GET') {
    const data = (await store.get(KEY, { type: 'json' })) || {};
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (req.method === 'POST') {
    let body;
    try {
      body = await req.json();
    } catch {
      return new Response('Invalid JSON', { status: 400 });
    }
    const { id, action, reason } = body || {};
    if (!id) return new Response('Missing id', { status: 400 });

    const current = (await store.get(KEY, { type: 'json' })) || {};
    if (action === null || action === undefined) {
      delete current[id];
    } else {
      current[id] = { action, reason: reason || '', at: new Date().toISOString() };
    }
    await store.setJSON(KEY, current);
    return new Response(JSON.stringify(current), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response('Method not allowed', { status: 405 });
};

export const config = { path: '/api/decisions' };
