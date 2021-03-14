import { db } from '../firebase/index';

const FunctionalityService = {
    makeTransfer(idSender, idDestiny) {
        return db.runTransaction(transaction => {
            // This code may get re-run multiple times if there are conflicts.
            return transaction.get('players').then(snapshot => {
                console.log(snapshot.data());
            });
        }).then(() => {
            console.log("Transaction successfully committed!");
        }).catch((error) => {
            console.log("Transaction failed: ", error);
        });
    }
}

export default FunctionalityService;