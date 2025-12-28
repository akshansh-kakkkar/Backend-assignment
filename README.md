# Web Server made using node.js

 This project is a basic demonstration of webserver made using node.js and its built in http module

---

## Files
The project contains the following files:

home.html
about.html
contact.html
error.html
server.js

---

## Styling
The HTML pages are styled using Tailwind CSS CDN.

---

## Working
- This server listens on port 3000.
- Based on the requested URL the servers server the different Html file:

  - http://localhost:3000/home -> serves **home.html**
  - http://localhost:3000/about -> serves **about.html**
  - http://localhost:3000/contact -> serves **contact.html**
  - Any invalid request  serves **error.html** file
  - HTML files are read using the fs module

---

## Testing
Screenshots of the demonstartion have been uploaaded 

---

## Conclusion
This project helped me in understanding how routes work in Node.js
