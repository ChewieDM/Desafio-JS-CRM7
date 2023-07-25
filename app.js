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

// Add new user
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(201).json(newUser);
});

// update user
app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedUser = req.body;

    let index = users.findIndex(user => user.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'User not Found' });
    }

    users[index] = { ...users[index], ...updatedUser };
    res.json(users[index]);
});

// fetch user by ID
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({ error: 'User not Found' });
    }

    res.json(user);
});

// remove user by ID
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(user => user.id !== id);
    res.json({ message: 'User removed Successfully' });
});

// Start server
app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
});