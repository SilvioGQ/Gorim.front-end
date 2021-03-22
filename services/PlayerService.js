import { db } from '../firebase';

const PlayerService = {
    getPlayers(room) {
        const players = db
            .collection('players').where('room', "==", room)
            .get()
            .then(snapshot => {
                let _players = [];
                snapshot.forEach(function (doc) {
                    _players.push(Object.assign(doc.data(), { id: doc.id }));
                });
                return _players;
            });
        return players;
    },
    getPlayer(id) {
        const player = db.collection('players').doc(id)
            .get()
            .then(snapshot => Object.assign(snapshot.data(), { id: snapshot.id }));
        return player;
    },
    addPlayer(name, room, host = false) {
        return db.collection('players').add({
            name: name,
            room: room,
            host: host
        }).then(docRef => docRef.id);
    },
    setHost(room) {
        db.collection('players').where('room', '==', room)
            .limit(1)
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
        db.collection('players').doc(id)
            .get()
            .then(function (snapshot) {
                snapshot.ref.delete();
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