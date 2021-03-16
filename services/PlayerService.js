import { db } from '../firebase/index';
import { v4 } from 'uuid';

const PlayerService = {
    getPlayers(room) {
        const players = db
            .collection('players').where('room', "==", room)
            .get()
            .then(snapshot => {
                let _players = [];
                snapshot.forEach(function (doc) {
                    _players.push(doc.data());
                });
                return _players;
            });
        return players;
    },
    getPlayer(id) {
        const player = db.collection('players').where('id', "==", id)
            .get()
            .then(snapshot => snapshot.docs[0].data());
        return player;
    },
    addPlayer(name, room, host = false) {
        let id = v4();
        db.collection('players').add({
            name: name,
            room: room,
            id: id,
            host: host,
            inGame: false
        });

        return id;
    },
    setHost(room) {
        db.collection('players').where('room', '==', room)
            .limit(2)
            .get()
            .then(function (snapshot) {
                snapshot.forEach(function (doc) {
                    doc.ref.update({
                        host: true
                    });
                });
            });
    },

    deletePlayer(id) {
        db.collection('players').where('id', '==', id)
            .get()
            .then(function (snapshot) {
                snapshot.forEach(function (doc) {
                    doc.ref.delete();
                });
            });
    },
    startGame(room) {
        db.collection('players').where('room', '==', room)
            .get()
            .then(function (snapshot) {
                snapshot.forEach(function (doc) {
                    doc.ref.update({
                        inGame: true
                    });
                });
            });
    },
    typesRaffle(room) {
        let emp = 4;
        let speciality = ['Fertilizante', 'Agrotoxico', 'Maquina', 'Semente'];

        db.collection('players').where('room', '==', room)
            .get()
            .then(function (snapshot) {
                snapshot.forEach(function (doc) {
                    if (emp >= 1) {
                        doc.ref.update({
                            type: 'Empresário',
                            speciality: speciality[0],
                            coin: 300,
                            stamp: false
                        });
                        emp--;
                        speciality.splice(0, 1);
                    } else {
                        doc.ref.update({
                            type: 'Agricultor',
                            coin: 300,
                            stamp: false
                        });
                    }
                });
            });
    }
}

export default PlayerService;