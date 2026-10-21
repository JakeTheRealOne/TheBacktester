// routes.js

const { API_VERSION } = require('./config');
const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// GET /api/v1/helloworld

app.get(`/api/v${API_VERSION}/helloworld`, (req, res, next) => {
    res.status(200).json({"hello":"world"});
    next();
});

// POST /api/v1/submit

app.post(`/api/v${API_VERSION}/submit`, (req, res, next) => {
    const strategy = req.body.strategy;
    const backtestSettings = req.body.backtestSettings;
    res.status(501).json({
        "error": "not yet implemented",
        "strategy_": strategy,
        "backtestSettings_": backtestSettings
    });
});

// GET /api/v1/users/{id} 

// POST /api/v1/users

// DELETE /api/v1/users/{id}

// GET /api/v1/self

// GET /api/v1/token

module.exports = app;