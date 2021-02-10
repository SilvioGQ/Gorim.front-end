import { db } from '../index';

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
            })
        return plaryers;
    }
}

export default PlayerService;