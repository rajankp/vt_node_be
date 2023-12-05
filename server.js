const http = require('http');
const dotenv = require('dotenv');
dotenv.config({ path: './.env'});
const app = require("./app")
process.on("uncaughtException", err => {
    console.log(`[uncaughtException] Shutting down server... `);
    console.log(err.name, err.message);
    console.log(err);
    server.close(() => {
        process.exit(1);
    })
    //process.exit(1);
})




var httpServer = http.createServer(app);

/* const server = httpServer.listen(process.env.PORT, () => {
    console.log(`server up and running : ${process.env.PORT}`);
}); */

const server = httpServer.listen(3000, () => {
    console.log(`server up and running : 3000`);
});

process.on("uncaughtRejection", err => {
    console.log(`[uncaughtRejection] Shutting doen server... `);
    console.log(err);
    server.close(() => {
        process.exit(1);
    })
    
})