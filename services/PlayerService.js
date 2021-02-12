import { db } from '../firebase/index';
import { v4 } from 'uuid';

const PlayerService = {
    getPlayers(idJogo) {
        const plaryers = db
            .collection('players').where('idJogo', "==", idJogo)
            .get()
            .then(snapshot => {
                let _plaryers = [];
                snapshot.forEach(function (doc) {
                    _plaryers.push(doc.data());
                });
                return _plaryers;
            });
        return plaryers;
    },
    addPlayer(name, idJogo) {
        let id = v4();
        db.collection('players').add({
            name: name,
            idJogo: idJogo,
            id: id
        });
    }
}

export default PlayerService;