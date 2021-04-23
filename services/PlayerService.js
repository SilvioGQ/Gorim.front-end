import { db } from './config';

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
        let emp = 1;
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
                            inventory: [
                                { type: 'seed', name: 'Arroz', amount: 3 },
                                { type: 'seed', name: 'Soja', amount: 2 },
                                { type: 'fertilizer', name: 'Fertilizante Comum', amount: 2 },
                                { type: 'pesticide', name: 'Agrotóxico Comum', amount: 1 },
                                { type: 'pesticide', name: 'Agrotóxico Premium', amount: 1 },
                                { type: 'pesticide', name: 'Agrotóxico Super Premium', amount: 1 },
                                { type: 'machine', name: 'Pacote 1', amount: 3 },
                                { type: 'machine', name: 'Pacote 3', amount: 1 },
                            ],
                            parcelLand: [
                                { id: 0, planted: false, seed: null, fertilizer: null, pesticide: null, machine: null },
                                { id: 1, planted: false, seed: null, fertilizer: null, pesticide: null, machine: null },
                                { id: 2, planted: false, seed: null, fertilizer: null, pesticide: null, machine: null },
                                { id: 3, planted: false, seed: null, fertilizer: null, pesticide: null, machine: null },
                                { id: 4, planted: false, seed: null, fertilizer: null, pesticide: null, machine: null },
                                { id: 5, planted: false, seed: null, fertilizer: null, pesticide: null, machine: null }
                            ],
                            stamp: false
                        });
                    }
                });
            });
    }
}

export default PlayerService;