const express = require('express');
const userRoutes = require('./src/vt/routes')
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Users List");
})

app.use('/api/v1/users', userRoutes);

app.listen(PORT, () => console.log(`Listening to port: ${PORT}`))