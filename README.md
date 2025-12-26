# Simple Web Server using Node.js

This project demonstrates a basic web server built using **Node.js** and its built-in **http module**.  
The server handles multiple routes and serves corresponding HTML pages.

---

## Files Included
The project contains the following files:

- `home.html`
- `about.html`
- `contact.html`
- `error.html` (404 page)
- `server.js`

---

## Styling
The HTML pages are styled using **Tailwind CSS CDN**.

---

## How the Server Works
- The server listens on **port 3000**.
- Based on the requested URL, the server serves different HTML files:

  - `http://localhost:3000/home` -> serves **home.html**
  - `http://localhost:3000/about` -> serves **about.html**
  - `http://localhost:3000/contact` -> serves **contact.html**
  - Any invalid route → serves **error.html** with HTTP status code **404**

- Routing is implemented using conditional checks on `req.url`.
- HTML files are read asynchronously using the `fs` module.

---

## Testing
The server was tested by accessing different routes in the browser.  
Screenshots demonstrating successful handling of all routes have been uploaded.

---

## Conclusion
This project helped in understanding how routing and request handling work in Node.js without using external frameworks like Express.
