const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const socketio = require('socket.io');
require('./config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./routes/person.routes') (app);
require('./routes/product.routes') (app);

const server = app.listen(port, () => console.log(`Listening on port: ${port}`));

const io = socketio(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
        allowedHeaders: ['*']
    }
});

io.on("connection", (socket) => {
    console.log(`Server side socket id: ${socket.id}`);
    socket.on("added_new_person", (data) => {
        console.log("in added_new_person");
        console.log(data);
        socket.broadcast.emit("new_person_added", data);
    })
})