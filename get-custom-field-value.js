export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { loc_id, type } = req.body;

  if (!loc_id || type !== 'razorpay') {
    return res.status(400).json({ error: 'Invalid payload' });
  }

  // In-memory mock database
  const clients = {
    'location_001': { client_id: 'rzp_test_demo123' },
    'location_002': { client_id: 'rzp_test_demo456' }
  };

  const client = clients[loc_id];

  if (!client) {
    return res.status(404).json({ error: 'Location not found' });
  }

  return res.status(200).json(client);
}
