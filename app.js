const express = require('express');
const userRoutes = require('./src/vt/routes')
const app = express();
const cors = require('cors');
const PORT = 3000;

//app.use(express.json());
app.use(cors());

app.use((req,res,error, next) => {
    res.header("Access-control-Allow-Origin", "*");
    res.header(
        "Access-control-Allow_Headers",
        "Origin, X-Requested-with, Content-Type, Accept, Authorization"
    );
    if(req.method === 'OPTIONS') {
        res.header("Access-control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
})

app.use(express.urlencoded({extendedn: false, limit: "50mb"}));
app.use(express.json({limit: "50mb"}));

app.get('/', (req, res) => {
    res.send("Users List");
})

app.use('/api/v1/users', userRoutes);

/* app.listen(PORT, () => console.log(`Listening to port: ${PORT}`)) */

module.exports = app;