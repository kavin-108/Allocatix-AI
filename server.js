const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const apiRoutes = require('./src/routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// REST API routes
app.use('/api', apiRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date(), theme: 'Warm Cream & Champagne Edition' });
});

// Serve frontend static production build
const frontendDist = path.join(__dirname, '../frontend/dist');
app.use(express.static(frontendDist));

// Single Page Application (SPA) client-side routing fallback (Express 5 compatible)
app.use((req, res, next) => {
    if (req.method !== 'GET' || req.path.startsWith('/api') || req.path.startsWith('/health')) {
        return next();
    }
    const indexPath = path.join(frontendDist, 'index.html');
    res.sendFile(indexPath, (err) => {
        if (err) {
            next();
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Production App & API accessible at http://localhost:${PORT}`);
});
