import React from "react";

class Player {
    host = false;
    
    setId(id) { this.id = id; }
    setName(name) { this.name = name; }
    setHost(host = false) { this.host = host; }
    setRoom(room) { this.room = room; }
    setAvatar(avatar) { this.avatar = avatar; }
    setType(type) { this.type = type; }
    setCoin(coin) { this.coin = coin; }
    setCity(city) { this.city = city; }
    setSpeciality(speciality) { this.speciality = speciality; }
    setInventory(inventory) { this.inventory = inventory; }
    setParcelLand(parcelLand) { this.parcelLand = parcelLand; }

    getId() { return this.id; }
    getName() { return this.name; }
    getHost() { return this.host; }
    getRoom() { return this.room; }
    getAvatar() { return this.avatar; }
    getType() { return this.type; }
    getCoin() { return this.coin; }
    getCity() { return this.city; }
    getSpeciality() { return this.speciality; }
    getInventory() { return this.inventory; }
    getParcelLand() { return this.parcelLand; }
}
export const playerContext = React.createContext(new Player);