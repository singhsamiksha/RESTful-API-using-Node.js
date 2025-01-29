export function logMiddleware(app) {

    app.use((req, res, next) => {
        console.log(
            `Method: ${req.method} | URL: ${req.url} | Status Code: ${res.statusCode}`
        );
        next();
    });
}
