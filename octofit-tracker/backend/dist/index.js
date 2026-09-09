import express from 'express';
import db from './config/database.js';
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', database: db.readyState === 1 ? 'connected' : 'connecting' });
});
app.listen(port, () => {
    console.log(`Octofit Tracker API running on port ${port}`);
});
