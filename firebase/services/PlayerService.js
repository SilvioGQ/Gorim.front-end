import { db } from '../index';

const PlayerService = {
    async getPlayers() {
        const plaryers = db
            .collection('players')
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