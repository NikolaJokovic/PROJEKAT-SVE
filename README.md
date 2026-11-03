Projekat web aplikacija parfmerija

Tech stack:

Frontend:

React 17
Redux + Redux Thunk (stanje korpe, korisnika i porudžbina)
React Router
Axios za pozive ka backendu
React Toastify za obaveštenja
PayPal payment gateway (react-paypal-button-v2)

Backend:

Node.js + Express
MongoDB + Mongoose
JWT za login (jsonwebtoken) i bcryptjs za šifre
express-async-handler, Morgan, dotenv

API Pregled:

GET	/api/products	
GET /api/products/:id	
POST /api/users/login	Log in and receive a JWT
POST /api/users	
GET /api/users/profile	
PUT /api/users/profile	
POST /api/orders	(requires login)
