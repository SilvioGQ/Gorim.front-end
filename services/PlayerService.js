import { db } from '../firebase/index';
import { v4 } from 'uuid';

const PlayerService = {
    getPlayers(idJogo) {
        const players = db
            .collection('players').where('idJogo', "==", idJogo)
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
    getPlayer(idUser) {
        const player = db.collection('players').where('id', "==", idUser)
            .get()
            .then(snapshot => snapshot.docs[0].data());
        return player;
    },
    addPlayer(name, idJogo, host = false) {
        let id = v4();
        db.collection('players').add({
            name: name,
            idJogo: idJogo,
            id: id,
            host: host,
            inGame: false
        });
        
        return id;
    },
    deletePlayer(idUser) {
        db.collection('players').where('id', '==', idUser)
            .get()
            .then(function (snapshot) {
            snapshot.forEach(function (doc) {
                doc.ref.delete();
            });
        });
    },
    startGame(idJogo) {
        db.collection('players').where('idJogo', '==', idJogo)
            .get()
            .then(function (snapshot) {
            snapshot.forEach(function (doc) {
                doc.ref.update({
                    inGame: true
                });
            });
        });
    },
    typesRaffle(idJogo, lenPlayer) {
        let agr = Math.round(lenPlayer * 0.6);
        let emp = Math.round(lenPlayer * 0.4);

        db.collection('players').where('idJogo', '==', idJogo)
            .get()
            .then(function (snapshot) {
                snapshot.forEach(function (doc) {
                    let random = Math.round(Math.random() * 1);
                    while(true) {
                        if (random == 1 && agr < 1) { 
                            random = Math.round(Math.random() * 1);
                        } else if (random == 0 && emp < 1) {
                            random = Math.round(Math.random() * 1);
                        } else { break; }
                    }
                    if (random == 1 && agr >= 1) {
                        doc.ref.update({
                            type: 'Agricultor',
                            coin: 300,
                            stamp: 0,
                            image:'../../assets/perfils/agricultor/Agricultor2.png'
                        });
                        agr--;
                    } else if (emp >= 1){
                        doc.ref.update({
                            type: 'Empresário',
                            coin: 300,
                            stamp: 0,
                            image:'../../assets/perfils/empresariox1/Empresario.png'
                        });
                        emp--;
                    }
                });
            });
    }
}

export default PlayerService;