import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = Number(process.env.PORT) || 8000;
app.use(express.json());
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', service: 'octofit-tracker-backend' });
});
app.get('/', (_req, res) => {
    res.send('OctoFit Tracker backend is running');
});
async function startServer() {
    const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
    try {
        await mongoose.connect(connectionString);
        console.log('Connected to MongoDB at', connectionString);
        app.listen(port, () => {
            console.log(`OctoFit Tracker backend listening on port ${port}`);
        });
    }
    catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
}
startServer();
