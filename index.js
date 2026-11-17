
const express = require("express");

const createRateLimitMiddleware =
    require("harshil_rate_limiter/middleware");

const app = express();

// Allow only 5 requests in 10 seconds
app.use(
    createRateLimitMiddleware({
        algorithm: "fixed-window",
        limit: 5,
        windowTime: 10000
    })
);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Request successful! Rate limiter is working."
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
