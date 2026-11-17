# Rate Limiter Demo

A demonstration project showing how to use the [`harshil_rate_limiter`](https://www.npmjs.com/package/harshil_rate_limiter) npm package with Express.js.

## Features

- Express.js API server
- Fixed Window rate-limiting algorithm
- Maximum 5 requests per 10 seconds
- HTTP 429 response when the limit is exceeded
- Rate-limit response headers

## Tech Stack

- Node.js
- Express.js
- harshil_rate_limiter

## Installation

Clone this repository:

```bash
git clone YOUR_REPOSITORY_URL
cd rate_limiter_demo_test
npm install
```

Install dependencies if needed:

```bash
npm install express harshil_rate_limiter
```

## Run the server

```bash
node index.js
```

Server runs at `http://localhost:3000`.

## Test the rate limiter

In another terminal, run:

```bash
for i in {1..6}; do
  curl -i http://localhost:3000/
done
```

### Expected behaviour

| Request | Result |
|---|---|
| 1–5 | HTTP 200 OK |
| 6 | HTTP 429 Too Many Requests |

## Example response when blocked

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

Install the package:

```bash
npm install harshil_rate_limiter
```

Package: https://www.npmjs