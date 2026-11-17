# Rate Limiter Demo

An Express.js application demonstrating the integration of my custom Node.js rate-limiting library, [`harshil_rate_limiter`](https://www.npmjs.com/package/harshil_rate_limiter).

This project demonstrates how to install, configure, and use a custom rate limiter as Express middleware.

## Features

- Integration with a published npm package
- Express.js middleware
- Fixed Window rate-limiting algorithm
- Configurable request limits and time windows
- Automatic HTTP 429 responses
- Rate-limit response headers

## Tech Stack

- Node.js
- Express.js
- JavaScript
- harshil_rate_limiter

## How It Works

The application allows a maximum of **5 requests per IP address within 10 seconds**.

| Request | Response |
|---|---|
| 1 | 200 OK |
| 2 | 200 OK |
| 3 | 200 OK |
| 4 | 200 OK |
| 5 | 200 OK |
| 6 | 429 Too Many Requests |

## Installation

Clone the repository:

```bash
git clone https://github.com/Harshil-Chawla/rate-limiter-demo.git
cd rate-limiter-demo
```

Install dependencies:

```bash
npm install
```

## Run the Application

```bash
npm start
```

The server starts at:

`http://localhost:3000`

## Test the Rate Limiter

Open another terminal and execute:

```bash
for i in {1..6}; do
  echo "Request $i"
  curl -i http://localhost:3000/
done
```

The first five requests should return HTTP 200. The sixth should return HTTP 429.

## Response Headers

The middleware provides:

- `X-RateLimit-Limit`: Maximum allowed requests
- `X-RateLimit-Remaining`: Remaining requests in the current window

## Example Blocked Response

```json
{
  "success": false,
  "message": "Too many requests. Please try again later.",
  "allowed": false,
  "limit": 5,
  "remaining": 0,
  "algorithm": "fixed-window"
}
```

## npm Package

Install the rate limiter independently:

```bash
npm install harshil_rate_limiter
```

Package: https://www.npmjs.com/package/harshil_rate_limiter

## Related Project

Original rate limiter implementation: https://github.com/Harshil-Chawla/rate-limiter

## Author

Harshil Chawla
