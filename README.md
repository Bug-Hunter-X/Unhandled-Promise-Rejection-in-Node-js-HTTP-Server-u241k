# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js: unhandled promise rejections within an HTTP server.  The server simulates an asynchronous operation that may fail.  If it fails, it throws an error directly without proper error handling, leading to an unhandled promise rejection.

## Problem
The `bug.js` file contains a simple HTTP server.  The asynchronous operation within the request handler sometimes throws an error. This error is not caught, resulting in a crash or silent failure of the server.

## Solution
The `bugSolution.js` file provides a solution by using a `try...catch` block to handle potential errors within the asynchronous operation. This prevents unhandled promise rejections and allows for graceful error handling.