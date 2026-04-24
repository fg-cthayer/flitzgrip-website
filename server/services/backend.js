const BASE = process.env.BACKEND_URL    || 'http://localhost:3001';
const KEY  = process.env.BACKEND_API_KEY || 'dev-secret';

const headers = {
  'Content-Type': 'application/json',
  'x-api-key':    KEY,
};

async function request(method, path, body) {
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers,
    ...(body !== undefined && { body: JSON.stringify(body) }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Backend ${method} ${path} → ${res.status}: ${text}`);
  }
  return res.json();
}

module.exports = {
  upsertCustomer: (data)              => request('POST',  '/customers',          data),
  createOrder:    (data)              => request('POST',  '/orders',             data),
  updateStatus:   (id, status, extra) => request('PATCH', `/orders/${id}/status`, { status, ...extra }),
  getOrder:       (id)                => request('GET',   `/orders/${id}`),
};
