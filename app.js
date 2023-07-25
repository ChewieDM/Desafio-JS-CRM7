const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Temp data (simulate database)
let users = [
    { id: 1, nome: 'Fulano', email: 'fulano@example.com', idade: 48 },
    { id: 2, nome: 'Ciclano', email: 'ciclano@example.com', idade: 22 },
];

// list all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Start server
app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
});