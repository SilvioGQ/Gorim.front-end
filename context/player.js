import React from "react";

class Player {
    host = false;
    
    setId(id) { this.id = id; }
    setName(name) { this.name = name; }
    setHost() { this.host = !this.host; }
    setRoom(room) { this.room = room; }

    getId() { return this.id; }
    getName() { return this.name; }
    getHost() { return this.host; }
    getRoom() { return this.room; }
}
export const playerContext = React.createContext(new Player);