import express from 'express';
import app from '../server.js';

app.use(express.json());

app.use((req, res, next) => {
    const requiredFields = ['firstName', 'lastName', 'hobby', 'age', 'city'];

    if (req.method === 'POST') {
        const missingFields = requiredFields.filter(field => !req.body[field]);

        if (missingFields.length > 0) {
            return res.status(400).json({
                error: 'Validation Error',
                message: `Missing required fields: ${missingFields.join(', ')}`,
            });
        }
    }

    if (req.method === 'PUT') {
        const hasAnyRequiredField = requiredFields.some(field => field in req.body);

        if (!hasAnyRequiredField) {
            return res.status(400).json({
                error: 'Validation Error',
                message: 'Atleast one required field must be present.',
            });
        }
    }

    next();
});
