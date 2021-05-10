const server = require('http').createServer();
const io = require("socket.io")(server, {
    cors: {
        origin: "https://example.com",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});

const PORT = process.env.PORT || 3000;

const rooms = {};

const joinRoom = (socket, room) => {
    room.sockets.push(socket);
    socket.join(room.id, () => {
        socket.roomId = room.id;
        console.log(socket.id, "Joined", room.id);
    });
};

const leaveRooms = (socket) => {
    const roomsToDelete = [];
    for (const id in rooms) {
        const room = rooms[id];
        if (room.sockets.includes(socket)) {
            socket.leave(id);
            room.sockets = room.sockets.filter((item) => item !== socket);
        }
        if (room.sockets.length == 0) {
            roomsToDelete.push(room);
        }
    }

    for (const room of roomsToDelete) {
        delete rooms[room.id];
    }
};

const generateUID = () => {
    let firstPart = (Math.random() * 46656) | 'A';
    //let secondPart = (Math.random() * 46656) | 0;
    firstPart = ("0000" + firstPart.toString(36)).slice(-3);
    //secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + 'FQF';
}

io.on('connection', socket => {
    console.log('new connection');

    socket.on('createRoom', (roomName, callback) => {
        const room = {
            id: generateUID().toUpperCase(),
            name: roomName,
            sockets: []
        };
        rooms[room.id] = room;
        console.log(room.id)
        joinRoom(socket, room);
        callback();
    });

    socket.on('joinRoom', (name, roomId, callback) => {
        const room = rooms[roomId];
        joinRoom(socket, room);
        callback();
    });

    socket.on('leaveRoom', () => {
        leaveRooms(socket);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
        leaveRooms(socket);
    });
});

server.listen(PORT);