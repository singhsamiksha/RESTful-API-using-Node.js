export function validateMiddleware(app) {

    app.use((req, res, next) => {
        const requiredFields = ['Name', 'Age', 'Gender', 'Address', 'Phone'];

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
                    message: 'At least one required field must be present.',
                });
            }
        }

        next();
    });
}
